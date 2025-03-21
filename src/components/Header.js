import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header =()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height:"90px",display:"flex",justifyContent:"center"}}>
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" component="div">
            Cats Gallery
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
