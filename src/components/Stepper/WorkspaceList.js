import {List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, Grow} from '@mui/material';
import PropTypes from 'prop-types';

const WorkspaceList = ({steps}) => (
    <Box sx={{display: 'flex', justifyContent: 'center', m: 5}}>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'secondary.main', borderRadius: 10}}>
            {steps.map((step, index) => (
                <Grow timeout={(index + 1) * 500} in key={index}>
                    <ListItem sx={{mx: 3}}>
                        <ListItemAvatar>
                            <Avatar sx={{ '.MuiSvgIcon-root': {color: 'primary.main'}, backgroundColor: 'primary.dark' }}>
                                {step.icon}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={step.stateName}
                            secondary={step.label}
                            sx={{
                                '.MuiListItemText-primary': {color: 'primary.main', fontWeight: 600},
                                '.MuiListItemText-secondary': {color: 'primary.dark'},
                            }}
                        />
                    </ListItem>
                </Grow>
            ))}
        </List>
    </Box>
);

WorkspaceList.propTypes = {
    steps: PropTypes.array,
};

export default WorkspaceList;