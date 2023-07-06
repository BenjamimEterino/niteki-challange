import Grid from '@mui/material/Grid'
import { Container } from 'react-bootstrap'
import { ProductCard } from '../../components/ProductCard';
import usePagination from '../../Pagination';
import { Pagination } from '@mui/material';
import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

export const products = [
    {
        name: 'Pasta de Laptop',
        price: 2500,
        description: '',
        img_url: ['/img/bag/bag1.jpg', '/img/bag/bag2.jpg']
    },
    {
        name: 'iPhone',
        price: 2300,
        description: '',
        img_url: ['/img/iphone/iphone1.jpg','/img/iphone/iphone2.jpg','/img/iphone/iphone3.jpg']
    },
    {
        name: 'Iron',
        price: 1400,
        description: '',
        img_url: ['/img/iron/iron1.jpg','/img/iron/iron2.jpg']
    },
    {
        name: 'White Keyborad',
        price: 1100,
        description: '',
        img_url: ['/img/keyboard/key1.jpg','/img/keyboard/key2.jpg','/img/keyboard/key3.jpg']
    },
    {
        name: 'MAcbook Air 2019',
        price: 98000,
        description: '',
        img_url: ['/img/macbook/mac1.jpg','/img/macbook/mac2.jpg','/img/macbook/mac3.jpg']
    },
    {
        name: 'Apple Monitor',
        price: 17000,
        description: '',
        img_url: ['/img/monitor/mon1.jpg','/img/monitor/mon2.jpg']
    },
    {
        name: 'IP Phone',
        price: 5200,
        description: '',
        img_url: ['/img/phone/phone1.jpg','/img/phone/phone2.jpg']
    },
    {
        name: 'HP Printer',
        price: 33000,
        description: '',
        img_url: ['/img/printer/prin1.jpg','/img/printer/prin2.jpg','/img/printer/prin3.jpg']
    },
    {
        name: 'Huawei router',
        price: 2900,
        description: '',
        img_url: ['/img/router/rou1.jpg','/img/router/rou2.jpg','/img/router/rou3.jpg']
    },
    {
        name: 'Samsung S22',
        price: 45000,
        description: '',
        img_url: ['/img/samsung/sam1.jpg','/img/samsung/sam2.jpg']
    },
    {
        name: 'Fogão a gás',
        price: 45000,
        description: '',
        img_url: ['/img/stove/st1.jpg','/img/stove/st2.jpg']
    },
    {
        name: 'Smart TV 65"',
        price: 55000,
        description: '',
        img_url: ['/img/tv/tv1.jpg','/img/tv/tv2.jpg']
    },
]



const Products = (props: Props) => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 6;

    const count = Math.ceil(products.length / PER_PAGE);
    const _DATA = usePagination(products, PER_PAGE);

    const handleChange = (e: any, p: number) => {
        setPage(p);
        _DATA.jump(p);
    };
    return (
        <Container className='mt-5'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {_DATA.currentData().map((v: any, index: number) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                       <Link to={`/details/${products.indexOf(v)}`}> <ProductCard img_url={v.img_url[0]} price={v.price} name={v.name} /></Link> 
                    </Grid>
                ))}
            </Grid>

            <Pagination
                count={count}
                page={page}
                shape="rounded"
                onChange={handleChange}
                className='d-flex justify-content-center mt-3'
            />
        </Container>
    )
}

export default Products