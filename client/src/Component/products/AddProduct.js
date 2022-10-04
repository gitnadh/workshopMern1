
 
   import * as React from 'react';
   import {useNavigate} from 'react-router-dom'
   import Avatar from '@mui/material/Avatar';
   import Button from '@mui/material/Button';
   import CssBaseline from '@mui/material/CssBaseline';
   import TextField from '@mui/material/TextField';
   import FormControlLabel from '@mui/material/FormControlLabel';
   import Checkbox from '@mui/material/Checkbox';
   import Link from '@mui/material/Link';
   import Grid from '@mui/material/Grid';
   import Box from '@mui/material/Box';
   import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
   import Typography from '@mui/material/Typography';
   import Container from '@mui/material/Container';
   import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
   import {useDispatch} from 'react-redux'
import { addproduct } from '../../JS/actions/productActions';
   function Copyright(props) {
     return (
       <Typography variant="body2" color="text.secondary" align="center" {...props}>
         {'Copyright © '}
         <Link color="inherit" href="https://mui.com/">
           Your Website
         </Link>{' '}
         {new Date().getFullYear()}
         {'.'}
       </Typography>
     );
   }
   
   const theme = createTheme();
   
   export default function AddProduct() {
    const dispatch = useDispatch()
    const [newproduct, setNewproduct] = useState(
        {
            name:"",
            price:0,
            description:"",
            qte:0
        }
      )
       const HandleChange = (e)=> {
        setNewproduct(
            {...newproduct,[e.target.name]:e.target.value}
        )
       }
       const navigate = useNavigate()
     const handleSubmit = (event) => {
       event.preventDefault();
      //  const data = new FormData(event.currentTarget);
      //  console.log(data)
       dispatch(addproduct(newproduct , navigate))
      //  console.log({

      //    name:data.get('name'),
      //       price:data.get('price'),
      //       description:data.get('description'),
      //       qte:data.get('qte')
      //  });
     };
   
     return (
       <ThemeProvider theme={theme}>
         <Container component="main" maxWidth="xs">
           <CssBaseline />
           <Box
             sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
             }}
           >

             
             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
               <Grid container spacing={2}>
                 <Grid item xs={12} sm={6}>
                   <TextField onChange={HandleChange}
                     autoComplete="given-name"
                     name="name"
                     required
                     fullWidth
                     id="name"
                     label="Product title"
                     autoFocus
                   />
                 </Grid>
                 <Grid item xs={12} sm={6}>
                   <TextField onChange={HandleChange}
                     required
                     fullWidth
                     id="description"
                     label="description"
                     name="description"
                     autoComplete="description"
                   />
                 </Grid>
                 <Grid item xs={12}>
                   <TextField onChange={HandleChange}
                     required
                     fullWidth
                     id="price"
                     label="price"
                     name="price"
                     autoComplete="price"
                     type='Number'
                   />
                 </Grid>
                 <Grid item xs={12}>
                   <TextField onChange={HandleChange}
                     required
                     fullWidth
                     name="qte"
                     label="quantity"
                     type="Number"
                     id="qte"
                     autoComplete="qte"
                   />
                 </Grid>
                 
               </Grid>
               <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
               >
                 Add
               </Button>
               <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
               >
                 Cancel
               </Button>
               
             </Box>
           </Box>
           <Copyright sx={{ mt: 5 }} />
         </Container>
       </ThemeProvider>
     );
   }