import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getoneproduct } from '../JS/actions/productActions';

const bull = (

  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProductDetails() {
    const  {id}=useParams()
    const dispatch=useDispatch()
    React.useEffect(() => {
    dispatch(getoneproduct(id))

    
    }, [id])
    const oneProd=useSelector((state)=>state.productReducer.oneprod )
    console.log(oneProd);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {oneProd.name}
        </Typography>
        <Typography variant="h5" component="div">
        {oneProd.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {oneProd.price}
        </Typography>
        <Typography variant="body2">
        {oneProd.qte}
          <br />
        
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='/'> <Button size="small">Go Back</Button></Link>
      </CardActions>
    </Card>
  );
}


 