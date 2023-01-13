import {Box, IconButton, Menu, MenuItem, Tooltip, Typography} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PropTypes from 'prop-types';

const settings = ['Profile', 'Account', 'Logout'];

const UserMenu = ({open, onClose, anchorEl, onOpen}) => (
    <Box sx={{flexGrow: 0}}>
        <Tooltip title="Open settings">
            <IconButton onClick={onOpen} sx={{p: 0, color: 'primary.main'}}>
                <MoreHorizIcon fontSize='large' sx={{
                    transform: open ?
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)' :
                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d',
                    transition: '800ms ease all',
                }}/>
            </IconButton>
        </Tooltip>
        <Menu
            sx={{mt: '45px', '.MuiMenu-paper': {backgroundColor: 'secondary.dark', color: 'primary.main'}}}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={onClose}
        >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={onClose}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
);

UserMenu.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    anchorEl: PropTypes.object,
    onOpen: PropTypes.func
};

export default UserMenu;

