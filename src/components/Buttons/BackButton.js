import styled from '@emotion/styled';
import {Button} from '@mui/material';

const BackButton = styled(Button)(({theme}) => ({
    borderRadius: 20,
    fontWeight: 700,
    textTransform: 'none',
    color: 'rgba(215, 223, 246, 0.9)',
    backgroundColor: theme.palette.primary.gray,
    '&:hover': {
        backgroundColor: theme.palette.primary.gray,
    },
    '&.Mui-disabled': {
        backgroundColor: theme.palette.primary.gray
    }
}));

export default BackButton;