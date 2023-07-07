import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
import { products } from './Products';
import { Items } from '../cartPage/Cart';


let responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
};

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1)

    const params = useParams();
    const product = products[Number(params.id)]    
    const [currentImg, setcurrentImg] = useState(product.img_url[0])
    const [total, setTotal] = useState(product.price)

    return (
        <Container className='mt-5'>
            <Grid container spacing={2} columns={{xl:16, lg:12, sm: 4}}>
                <Grid item xl={12} lg={6} sm={4}>
                    <div className="sadow bg-white rounded">
                        <img src={currentImg} className="card-img-top  object-fit-contain bg-dark" 
                        style={{ objectFit: "cover", maxHeight: "250px", }} />
                    </div>
                    <Carousel responsive={responsive} className="rounded p-3 my-4">
                        {product.img_url.map(image => (
                            <div
                                className="border d-flex align-items-center"
                                style={{ width: "65px", maxHeight: "70px" }}
                                key={Array.prototype.indexOf(image)}
                            >
                                <img src={image} height={'70px'} className="card-img-top"
                                    onClick={() => setcurrentImg(image)}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xl={4} lg={6}>
                    <Typography gutterBottom variant="h5" component="div" className='fw-bold'>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" component="div" className='mt-5'>
                        Preço < AttachMoneyIcon />  {product.price}
                        <br />
                    </Typography>
                    <TextField type='number' label='Quantidade'
                        variant='filled'
                        defaultValue={1}
                        size='small'
                        onChange={(e: any) => {
                            setTotal(e.target.value * product.price);
                            setQuantity(e.target.value);
                        }}
                        sx={{width: '90px'}}
                    />
                    <Typography gutterBottom variant="subtitle1" component="div" className='mt-3'>

                        Total < AttachMoneyIcon />  {total}
                    </Typography>
                    <Button variant="contained" color="success"
                    onClick={() => Items.push({img_url: product.img_url[0],quantidade: quantity,name: product.name, preço: product.price ,total: product.price * quantity})}
                    >
                        <AddShoppingCartIcon />Adicionar
                    </Button>

                </Grid>
            </Grid>

        </Container>
    )
}