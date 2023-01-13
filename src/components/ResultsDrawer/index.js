import {Box, Grid, IconButton, SwipeableDrawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BarChart from './BarChart';
import PieChart from './PieChart';
import ResultTable from './ResultTable';
import ColumnChart from './ColumnChart';
import SubmitButton from '../Buttons/SubmitButton';
import BackButton from '../Buttons/BackButton';
import PropTypes from 'prop-types';

const ResultsDrawer = ({reset, ...otherProps}) => (
    <SwipeableDrawer
        {...otherProps}
        variant='persistent'
        transitionDuration={600}
        sx={{
            '.MuiDrawer-paper': {
                backgroundColor: 'secondary.main',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                color: 'primary.dark',
                height: '75%',
                mx: 2,
                p: 3,
            }
        }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <IconButton onClick={otherProps.onClose} sx={{ color: 'primary.dark' }}>
                <CloseIcon />
            </IconButton>
        </Box>
        <Grid container sx={{my: 'auto', justifyContent: 'space-between'}}>
            <Grid item xs={6} md={6} sx={{ border: '1px solid #d7dff6', borderRadius: 10, p: 2, pr: 3, ml: 3, mb: 4 }}>
                <BarChart />
            </Grid>
            <Grid item xs={5} md={5} sx={{ mr: 3, mb: 4, display: 'flex', alignItems: 'center' }}>
                <ResultTable />
            </Grid>
            <Grid item xs={6} sx={{ ml: 3, my: 'auto' }}>
                <ColumnChart />
            </Grid>
            <Grid item xs={5} md={5} sx={{ border: '1px solid #d7dff6', borderRadius: 10, p: 2, mr: 3 }}>
                <PieChart />
            </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <BackButton sx={{ m: 3 }} onClick={() => {otherProps.onClose(); reset();}}>
                Clear workspace
            </BackButton>
            <SubmitButton intermediate='true' sx={{ m: 3 }}>
                Download report
            </SubmitButton>
            <SubmitButton intermediate='true' sx={{ m: 3 }}>
                Show logs
            </SubmitButton>
            <SubmitButton intermediate='true' sx={{ m: 3 }}>
                Configure parameters
            </SubmitButton>
        </Box>
    </SwipeableDrawer>
);

ResultsDrawer.propTypes = {
    onClose: PropTypes.func,
    reset: PropTypes.func,
};

export default ResultsDrawer;