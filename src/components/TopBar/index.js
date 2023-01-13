import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SensorsIcon from '@mui/icons-material/Sensors';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {Fragment, useState} from 'react';
import UserMenu from './UserMenu';
import styled from '@emotion/styled';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const pages = [
    {name: 'Data integration', icon: <CloudSyncIcon/>},
    {name: 'Data analytics', icon: <QueryStatsIcon/>},
    {name: 'System configuration', icon: <SettingsSuggestIcon/>},
    {name: 'Dashboard', icon: <NetworkCheckIcon/>},
    {name: 'Intent search', icon: <TravelExploreIcon/>},
];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Fragment>
            <AppBar position="fixed" sx={{backgroundColor: 'secondary.dark', color: 'primary.main'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <SensorsIcon fontSize='large' sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NDM NDaaS
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <SensorsIcon fontSize='large' sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NDM NDaaS
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center', mr: '110px'}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'primary.main', display: 'block', mx: 4}}
                                >
                                    <Tooltip title={page.name}>
                                        {page.icon}
                                    </Tooltip>
                                </Button>
                            ))}
                        </Box>
                        <UserMenu
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            anchorEl={anchorElUser}
                            onOpen={handleOpenUserMenu}
                        />
                    </Toolbar>
                </Container>
            </AppBar>
            <Offset />
        </Fragment>
    );
}

export default ResponsiveAppBar;