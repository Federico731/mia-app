import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

 const StyledTableCell = withStyles((theme) => ({
   head: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white, 
   },
   body: {
     fontSize: 14,
   },
 }))(TableCell);

 const StyledTableRow = withStyles((theme) => ({
   root: {
     '&:nth-of-type(odd)': {
       backgroundColor: theme.palette.action.hover,
     },
   },
 }))(TableRow);

 function createData(ottavi, quarti, semifinali, finale, campioni) {
   return { ottavi, quarti, semifinali, finale, campioni };
 }

 const rows = [
   createData('ITALIA', 'ITALIA'),
   createData('AUSTRIA', '', 'ITA-BEL'),
   createData('BELGIO', 'BELGIO'),
   createData('PORTOGALLO'),
   createData('SVIZZERA', 'SVIZZERA'),
   createData('FRANCIA', '', 'SPA-SVI'),
   createData('SPAGNA', 'SPAGNA'),
   createData('CROAZIA', '', '', 'ITA/BEL/SPA/SVI', 'SQUADRA'),
   createData('DANIMARCA', 'DANIMARCA', '', 'DAN/REP/UCR/ING', <Avatar src="./logo.png"></Avatar>),
   createData('GALLES', '', 'DAN-REP'),
   createData('REPUBBLICA CECA', 'REPUBBLICA CECA'),
   createData('OLANDA'),
   createData('INGHILTERRA', 'INGHILTERRA'),
   createData('GERMANIA', '', 'UCR-ING'),
   createData('UCRAINA', 'UCRAINA'),
   createData('SVEZIA'),
 ];

 const useStyles = makeStyles({
   table: {
     minWidth: 700,
   },
 });

 export default function CustomizedTables() {
   const classes = useStyles();

   return (
     <TableContainer component={Paper}>
       <Table className={classes.table} aria-label="customized table">
         <TableHead>
           <TableRow>
             <StyledTableCell align="left">Ottavi</StyledTableCell>
             <StyledTableCell align="left">Quarti</StyledTableCell>
             <StyledTableCell align="left">Semifinali</StyledTableCell>
             <StyledTableCell align="rleft">Finale</StyledTableCell>
             <StyledTableCell align="rleft">CAMPIONI</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {rows.map((row) => (
             <StyledTableRow key={row.name}>
               <StyledTableCell component="th" scope="row">
                 {row.ottavi}
               </StyledTableCell>
               <StyledTableCell align="left">{row.quarti}</StyledTableCell>
               <StyledTableCell align="left">{row.semifinali}</StyledTableCell>
               <StyledTableCell align="left">{row.finale}</StyledTableCell>
               <StyledTableCell align="left">{row.campioni}</StyledTableCell>
             </StyledTableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
   );
 }