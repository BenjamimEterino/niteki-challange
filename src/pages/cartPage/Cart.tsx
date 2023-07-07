import { Button, Card, TextField, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

type Item = {
    name: string,
    quantidade: number,
    preço: number,
    total: number,
    img_url: string
}

export let Items: Array<Item> = [];

const Cart = () => {
    const navigate = useNavigate();
    let subtotal = Items && Items.reduce(function (previousValue, currentValue) { return previousValue + currentValue.total; }, 0);

    return (
        Items.length > 0 ? <Container className='mt-5'>
            <Row>
                <Col lg={8} sm={12} xs={12}>
                    <Card className='d-flex mt-2 p-2'>
                        <Row>
                            <Typography variant='h5'>
                                Carrinho de compra ({Items.length})
                            </Typography>
                        </Row>
                        <Row></Row>
                    </Card>
                    {Items.map(item => (
                        <Card className='d-flex mt-2 p-2'>
                            <Col className='d-flex flex-start w-25'>
                                <img src={item.img_url} height={140} width={120} className='object-fit-contain ' />
                            </Col>
                            <Col className='d-flex flex-column align-items-start'>
                                {item.name}
                                <br />
                                <span className='mt-2'><AttachMoneyIcon /> {item.preço}</span>
                            </Col>
                            <Col className='d-flex flex-column align-items-end justify-content-between'>
                                <Button
                                    className='text-danger'
                                    onClick={() => {
                                        Items.splice(Array.prototype.indexOf(item), 1)
                                        console.log(Items);

                                    }}>
                                    <DeleteForeverIcon
                                    />
                                </Button>
                                <TextField type='number' label='Quantidade'
                                    variant='filled'
                                    value={item.quantidade}
                                    size='small'
                                    sx={{ width: 100 }}
                                    onChange={(e: any) => {
                                        item.total = (e.target.value * item.preço);
                                        item.quantidade = (e.target.value);
                                        console.log(item.total);

                                    }}
                                />
                                <TextField label='Total'
                                    variant='filled'
                                    value={item.total}
                                    aria-readonly
                                    size='small'
                                    sx={{ width: 100 }}
                                />
                            </Col>

                        </Card>
                    ))}
                </Col>
                <Col lg={4} xs={12} className='bg-light shadow mt-2' style={{ height: 200 }}>
                    <Row className='mt-2'><h5>Sumário</h5> </Row>
                    <div className='d-flex justify-content-evenly'>
                        <p>Subtotal</p> {subtotal}
                    </div>
                    <div className='d-flex justify-content-evenly'><p>IVA</p> {subtotal * 0.16}</div>
                    <div className='d-flex justify-content-evenly'><p>Total</p> {subtotal * 1.16}</div>
                    <Row className='mt-3'>
                        <Button variant="contained" color="success"
                        >
                            <ShoppingCartCheckoutIcon />Comprar
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container> :
            <Container className='mt-5'>
                <Card className='d-flex mt-2 p-2'>
                    <Row>
                        <Typography variant='h5'>
                            Carrinho de compra vazio
                        </Typography>
                    </Row>
                    <Row></Row>
                </Card>
            </Container>

    );
}

export default Cart