import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            dark: 'rgba(215,223,246,.7)',
            light: '#d7dff6',
            gray: 'rgb(54, 59, 66)',
        },
        secondary: {
            main: '#24282d',
            dark: '#18191b',
        },
        info: {
            main: '#2d8dff',
            green: {
                main: '#68f7ae',
            }
        }
    },
});

export default theme;