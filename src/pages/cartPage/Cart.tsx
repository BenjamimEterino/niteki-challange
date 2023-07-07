import { Button, Card, TextField, Typography } from '@mui/material';
import { Col, Container, Row } from 'react-bootstrap';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



export const Items = [{
    name: 'Laptop',
    quantidade: 5,
    preço: 27000,
    total: 30000,
    img_url: '/img/macbook/mac1.jpg'
}];

const Cart = () => {
    let subtotal = Items.reduce(function (previousValue, currentValue) { return previousValue + currentValue.total; }, 0);

    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={8} sm={12} xs={12}>
                    <Card className='d-flex mt-2 p-2'>
                        <Row>
                            <Typography variant='h5'>
                                Carrinho de compra
                            </Typography>
                        </Row>
                        <Row></Row>
                    </Card>
                    {Items.map(item => (
                        <Card className='d-flex mt-2 p-2 h-75'>
                            <Col className='d-flex flex-start w-25'>
                                <img src={item.img_url} height={140} width={120} />
                            </Col>
                            <Col className='d-flex flex-column align-items-start'>
                                {item.name}
                                <br />
                              <span className='mt-2'><AttachMoneyIcon /> {item.preço}</span>  
                            </Col>
                            <Col className='d-flex flex-column align-items-end justify-content-between'>
                                <Button

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
                        <Button variant="contained" color="error"
                        >
                            <ShoppingCartCheckoutIcon />Comprar
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Cart