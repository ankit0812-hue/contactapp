import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/contact-book.png";
import Button from "@material-ui/core/Button";
const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    logo: {
      width: "50px",
      height: "50px",
      padding: 10,
    },
    root: {
      flexGrow: 1,
    },
    text: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={Logo} className={classes.logo} alt=""></img>
          <Typography variant="h5" className={classes.text}>
            Contact Book
          </Typography>
          <Button color="inherit">Add Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
