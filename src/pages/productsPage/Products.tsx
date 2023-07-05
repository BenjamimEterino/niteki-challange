import Grid from '@mui/material/Grid'
import { Container } from 'react-bootstrap'
import { ProductCard } from '../../components/ProductCard';
import usePagination from '../../Pagination';
import { Pagination } from '@mui/material';
import { SetStateAction, useState } from 'react';

type Props = {}



const Products = (props: Props) => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 6;
    const data = Array(23).fill({ img_url: '/public/img/imagem.jpg', price: 320, name: 'Camisola Azul-escuro' })

    const count = Math.ceil(data.length / PER_PAGE);
    const _DATA = usePagination(data, PER_PAGE);

    const handleChange = (e: any, p: number) => {
        setPage(p);
        _DATA.jump(p);
    };
    return (
        <Container className='mt-5'>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {_DATA.currentData().map((v: any, index: number) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <ProductCard img_url={v.img_url} price={v.price} name={v.name} />
                    </Grid>
                ))}
            </Grid>

            <Pagination
                count={count}
                page={page}
                shape="rounded"
                onChange={handleChange}
            />
        </Container>
    )
}

export default Products