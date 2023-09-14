import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {

    return( <AppBar>

        <Toolbar className='toolbar-navbar' sx={{ display: "flex", justifyContent: "space-around",}}>

            <Typography sx={{color:'white'}}>
                Camiseleccion
            </Typography>
            
            <Button sx={{color: 'white'}}>
                Home
            </Button>

            <Button sx={{color: 'white'}}>
                Camisetas
            </Button>

            <Button sx={{color: 'white'}}>
                Sobre nosotros
            </Button>

            <Button sx={{color: 'white'}}>
                Contacto
            </Button>

            <CartWidget />
       
        </Toolbar>


    </AppBar>);

}

export default Navbar;
