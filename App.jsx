import React from "react";
import "./App.css";
import { AppBar, Toolbar, IconButton, Box, Button } from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

function App() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LocalLibraryIcon />
        </IconButton>
        <Topography variant="h6" component="div" sx={{flexGrow:1}}>
          The King's Restaurant
        </Topography>
        <Box>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default App;
