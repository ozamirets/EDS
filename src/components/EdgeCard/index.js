import {Box, ButtonBase, Card, CardContent, Grid, Grow, Typography} from '@mui/material';
import PropTypes from 'prop-types';

const EdgeCard = ({name, description, icon, checked, onChange, index}) => (
    <Grow timeout={(index + 1) * 500} in>
        <Grid item xs={3}>
            <Card
                sx={{
                    height: description ? 115 : 60,
                    minWidth: 180,
                    maxWidth: 180,
                    m: 2,
                    color: 'rgba(215, 223, 246, 0.9)',
                    backgroundColor: 'primary.gray',
                    border: checked ? '2px solid #2d8dff' : '1px solid rgba(215, 223, 246, 0.9)',
                    '&:hover': {
                        backgroundColor: '#777b85',
                    }
                }}
            >
                <ButtonBase onClick={onChange}>
                    <CardContent sx={{justifyContent: 'start', display: 'column', width: 170}}>
                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Typography
                                variant='body1'
                                sx={{fontWeight: 600, textAlign: 'start', color: 'primary.main', mb: 3}}
                            >
                                {name}
                            </Typography>
                            {icon}
                        </Box>
                        {description &&
                        <Typography variant="body2" component="div" sx={{fontWeight: 600, textAlign: 'start'}}>
                            {description}
                        </Typography>}
                    </CardContent>
                </ButtonBase>
            </Card>
        </Grid>
    </Grow>
);

EdgeCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.element,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    index: PropTypes.number,
};

export default EdgeCard;