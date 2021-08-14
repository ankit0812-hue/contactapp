import React,{ useState,useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { getContact,editContact } from '../../container/actions/ContactAction';
const EditContact = () => {
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
    let { id } = useParams();
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const contactState = useSelector((state) => state.contact);
    const handleSubmit = (e) =>{
      e.preventDefault();
      const updated_contact = Object.assign(contactState.contact,{
        name: name,
        phoneNumber: phoneNumber,
        email: email,
      });
      dispatch(editContact(updated_contact));
      history.push('/');
    }
    console.log(id);
    console.log(contactState.contact);
    useEffect(() =>{
        if(contactState.contact!=null) {
            setName(contactState.contact.name);
            setPhoneNumber(contactState.contact.phoneNumber);
            setEmail(contactState.contact.email);
        }
        dispatch(getContact(id));
    },[contactState.contact]);
    return (
        <div className={classes.container}>
      <form autoComplete="off" className={classes.root} onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          fullWidth
          value={name}
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
          value={phoneNumber}
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
          value={email}
          onChange={(e) =>{
              setEmail(e.target.value);
          }}
        />
        <Button className={classes.btn} type="submit">Edit Contact</Button>
      </form>
    </div>
  );
}

export default EditContact
