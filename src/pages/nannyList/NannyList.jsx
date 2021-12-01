import * as React from 'react';
import { SortIcon, FilterIcon } from './NannyListIcons';
import { Box, Button, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ActionButton from '../../components/actionButton/ActionButton';

function createData(data1, data2, data3, data4, status) {
  return { data1, data2, data3, data4, status };
}

const rows = [createData('Yugi Muto', '#000123', '08123912120', 0, false), createData('Yugi Muto', '#000123', '08123912120', 0, true)];

export default function NannyList() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h4">Nanny List</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'right', marginTop: '1rem', marginBottom: '1rem' }}>
        <Button variant="outlined" startIcon={<SortIcon />} sx={{ color: 'black', borderColor: '#C1C1C2', borderRadius: '12px', textTransform: 'unset', width: '6.5rem', height: '3rem' }}>
          Sort
        </Button>
        <Button variant="outlined" startIcon={<FilterIcon />} sx={{ color: 'black', borderColor: '#C1C1C2', borderRadius: '12px', textTransform: 'unset', width: '6.5rem', height: '3rem', marginLeft: '0.5rem' }}>
          Filter
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ borderRadius: '12px' }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nanny's Name</TableCell>
              <TableCell>Nanny ID</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell align="center">Number of Child</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.data1} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.data1}
                </TableCell>
                <TableCell>{row.data2}</TableCell>
                <TableCell>{row.data3}</TableCell>
                <TableCell align="center">{row.data4}</TableCell>
                <TableCell align="center">
                  <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: row.status ? '#078658' : '#F77979', color: 'white', width: 'fitContent', height: '35px', borderRadius: '50px' }}>
                    {row.status ? 'Active' : 'Inactive'}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <ActionButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', marginTop: '1rem' }}>
        <Box sx={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <ArrowBackIosIcon />
          <Typography>Previous</Typography>
        </Box>
        <Box sx={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1.5rem' }}>
          <Typography>Next</Typography>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </Box>
  );
}