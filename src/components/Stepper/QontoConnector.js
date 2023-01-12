import {styled} from '@mui/material/styles';
import StepConnector, {stepConnectorClasses} from '@mui/material/StepConnector';

const QontoConnector = styled(StepConnector)(({theme}) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.info.main,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.info.main,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'primary.dark',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

export default QontoConnector;