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

const images = [
    {
        pos: 0,
        link: '/public/img/imagem.jpg'
    },
    {
        pos: 1,
        link: '/public/img/imagem2.jpg'
    },
    {
        pos: 2,
        link: '/public/img/imagem3.jpg'
    },
    {
        pos: 3,
        link: '/public/img/imagem4.jpg'
    },
    {
        pos: 4,
        link: '/public/img/imagem5.jpg'
    },
]
export const ProductDetails = () => {
    const [currentImg, setcurrentImg] = useState(images[0].link)
    const [quantity, setQuantity] = useState(20)
    return (
        <Container className='mt-5'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                    <div className="shadow bg-white rounded">
                        <img src={currentImg} className="card-img-top w-100" style={{ objectFit: "contain", height: "370px" }} />
                    </div>
                    <Carousel responsive={responsive} className="rounded p-3 my-4">
                        {images.map(image => (
                            <div
                                className="border d-flex align-items-center"
                                style={{ width: "65px", height: "70px" }}
                                key={image.pos}
                            >
                                <img src={image.link} className="card-img-top"
                                    onClick={(e: any) => setcurrentImg(image.link)}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h5" component="div">
                        Nome do produto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit
                        leo eu sem convallis suscipit. Etiam faucibus nunc id ultrices consequat.
                        Donec posuere, nisi in dapibus dignissim, orci orci posuere velit, at
                        scelerisque lorem felis at nisl.
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        Preço < AttachMoneyIcon />  200
                        <br />
                    </Typography>
                    <TextField type='number' label='Quantidade'
                        variant='filled'
                    />
                    <Typography gutterBottom variant="h5" component="div" className='mt-5'>

                        Total < AttachMoneyIcon />  200
                    </Typography>
                    <Button variant="contained" color="success">
                        <AddShoppingCartIcon />Adicionar
                    </Button>

                </Grid>
            </Grid>

        </Container>
    )
}