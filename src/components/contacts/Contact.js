import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector,useDispatch } from "react-redux";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { deleteContact } from '../../container/actions/ContactAction';
const Contact = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: "5rem",
    },
    header: {
      backgroundColor: "#3f51b5",
    },
    heading: {
      color: "white",
    },
  });
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contact);
  console.log(contactState.contacts);
  if (contactState.contacts.length === 0) {
    return <h3>No contacts to be displayed</h3>;
  } else {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead className={classes.header}>
            <TableRow>
              <TableCell className={classes.heading}>Name</TableCell>
              <TableCell className={classes.heading}>Contact Number</TableCell>
              <TableCell className={classes.heading}>Email ID</TableCell>
              <TableCell className={classes.heading}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contactState.contacts.map((value, key) => (
              <TableRow key={key}>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.phoneNumber}</TableCell>
                <TableCell>{value.email}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      history.push(`/contacts/edit/${value.id}`);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() =>{
                    dispatch(deleteContact(value.id));
                  }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
};

export default Contact;
