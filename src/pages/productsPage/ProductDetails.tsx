import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useParams } from 'react-router-dom';
import { products } from './Products';

type Props = {
    img_url: string[];
    name: string;
    price: number;
}

let responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
};

export const ProductDetails = () => {
    const [quantity, setQuantity] = useState(20)

    const params = useParams();
    const product = products[Number(params.id)]    
    const [currentImg, setcurrentImg] = useState(product.img_url[0])
    const [total, setTotal] = useState(product.price)

    return (
        <Container className='mt-5'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                    <div className="shadow bg-white rounded">
                        <img src={currentImg} className="card-img-top w-100" style={{ objectFit: "contain", height: "370px" }} />
                    </div>
                    <Carousel responsive={responsive} className="rounded p-3 my-4">
                        {product.img_url.map(image => (
                            <div
                                className="border d-flex align-items-center"
                                style={{ width: "65px", height: "70px" }}
                                key={Array.prototype.indexOf(image)}
                            >
                                <img src={image} className="card-img-top"
                                    onClick={(e: any) => setcurrentImg(image)}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Preço < AttachMoneyIcon />  {product.price}
                        <br />
                    </Typography>
                    <TextField type='number' label='Quantidade'
                        variant='filled'
                        defaultValue={1}
                        onChange={(e: any) => setTotal(e.target.value * product.price)}
                    />
                    <Typography gutterBottom variant="h5" component="div" className='mt-5'>

                        Total < AttachMoneyIcon />  {total}
                    </Typography>
                    <Button variant="contained" color="success">
                        <AddShoppingCartIcon />Adicionar
                    </Button>

                </Grid>
            </Grid>

        </Container>
    )
}