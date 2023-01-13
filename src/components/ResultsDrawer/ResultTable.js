import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

const createData = (service, alerts, errors, volume, threshold) => {
    return {service, alerts, errors, volume, threshold};
};

const rows = [
    createData('REST', 159, 6.0, 24, 4.0),
    createData('Databridge', 237, 9.0, 37, 4.3),
    createData('Connector', 262, 16.0, 24, 6.0),
    createData('Provider', 305, 3.7, 67, 4.3),
    createData('WG Databridge', 127, 9.0, 37, 4.3),
    createData('WG Connector', 362, 16.0, 24, 6.0),
    createData('WG Provider', 305, 3.7, 67, 4.3),
];

export default function ResultTable() {
    return (
        <TableContainer component={Paper} sx={{backgroundColor: 'primary.dark'}}>
            <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Service</TableCell>
                        <TableCell align="right">Alerts</TableCell>
                        <TableCell align="right">Errors</TableCell>
                        <TableCell align="right">Volume</TableCell>
                        <TableCell align="right">Threshold</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.service}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.service}
                            </TableCell>
                            <TableCell align="right">{row.alerts}</TableCell>
                            <TableCell align="right">{row.errors}</TableCell>
                            <TableCell align="right">{row.volume}</TableCell>
                            <TableCell align="right">{row.threshold}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}