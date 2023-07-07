import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

type Products = {
    img_url: string;
    price: number;
    name: string;
}
export const ProductCard = (props: Products) => {

    return (
        <Card sx={{ maxWidth: '100%' }} className='mt-5'>
            <CardMedia
                component="img"
                height="230"
                image={props.img_url}
                alt="Paella dish"
                className='card-image object-fit-contain bg-dark'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    < AttachMoneyIcon/>  {props.price}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {props.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

        </Card>
    );
}
