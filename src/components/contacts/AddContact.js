import React,{ useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../container/actions/ContactAction';
import { useHistory } from 'react-router-dom';
const AddContact = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(2),
        width: "80%",
      },
    },
    container: {
      margin: theme.spacing(3),
    },
    btn: {
        backgroundColor: "#3f51b5",
        color: "white",
        "&:hover" : {
            backgroundColor: "#3f51b5",

        }
    }
  }));
  const classes = useStyles();
  const [name,setName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [email,setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newContact = {
        id: nanoid(),
        name: name,
        phoneNumber: phoneNumber,
        email: email
    };
    dispatch(addContact(newContact));
    history.push('/');
  }
  return (
    <div className={classes.container}>
      <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          fullWidth
          onChange={(e) =>{
              setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          type="text"
          fullWidth
          onChange={(e) =>{
              setPhoneNumber(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email-ID"
          variant="outlined"
          type="email"
          fullWidth
          onChange={(e) =>{
              setEmail(e.target.value);
          }}
        />
        <Button className={classes.btn} type="submit">Add Contact</Button>
      </form>
    </div>
  );
};

export default AddContact;
