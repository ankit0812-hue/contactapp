import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
const Contact = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginTop: "5rem",
    },
  });
  const classes = useStyles();
  const contactState = useSelector((state) => {
    console.log(state);
  return  state.contact
  });
  console.log(contactState);
  // if(contacts.length===0) {
  //   return(
  //     <h5>No contacts to be displayed</h5>
  //   )
  // }
  // else {
  //   return (
  //     <TableContainer component={Paper}>
  //     <Table aria-label="simple table" className={classes.table}>
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Name</TableCell>
  //           <TableCell>Contact Number</TableCell>
  //           <TableCell>Email ID</TableCell>
  //           <TableCell>Actions</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         <TableRow>
  //           <TableCell>Ankit Das</TableCell>
  //           <TableCell>7384262730</TableCell>
  //           <TableCell>ankitdas0812@gmail.com</TableCell>
  //           <TableCell>Ankit Das</TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  //   )
  // }
  return <h5>Hello</h5>;
};

export default Contact;
