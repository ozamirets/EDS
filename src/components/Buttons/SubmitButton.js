import styled from '@emotion/styled';
import {Button} from '@mui/material';

const SubmitButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'intermediate'
})(({intermediate, theme}) => ({
    borderRadius: 20,
    fontWeight: 700,
    textTransform: 'none',
    backgroundColor: intermediate ? theme.palette.info.main : theme.palette.info.green.main,
    color: intermediate ? theme.palette.primary.main : theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: intermediate ? '#2a79d7' : '#50c288',
    },
    '&.Mui-disabled': {
        backgroundColor: intermediate ? '#81abff' : '#79f5b6',
    }
}));

export default SubmitButton;