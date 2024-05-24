import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AddTaskIcon from '@mui/icons-material/AddTask';

const Navbar = ({ handleTheme ,color }) => {
  return (
    <AppBar>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6" >
          <AddTaskIcon/> &nbsp; TODO APP
        </Typography>
        { color ? <Button
          variant="contained"
          color="secondary"
          endIcon={<ColorLensIcon />}
          onClick={handleTheme}
        >
          Dark mode 
        </Button> : 
        <Button
          variant="contained"
          color="secondary"
          endIcon={<ColorLensIcon />}
          onClick={handleTheme}
        >
          Light mode 
        </Button> }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
