import * as React from 'react';
import {
    Table as MuiTable,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const columns = [
    "PID",
    "Name",
    "CPU",
    "Memory"
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function Table(props) {

    const { rows } = props;
    return (
        <TableContainer sx={{ maxHeight: "30vh" }}>
            <MuiTable stickyHeader aria-label="customized table">
                <TableHead >
                    <TableRow>
                        {columns.map(name => <StyledTableCell key={name}>{name}</StyledTableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.pid}>
                            <StyledTableCell align="left">
                                {row.pid}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.cpu}</StyledTableCell>
                            <StyledTableCell align="left">{row.memory}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}

