import {Box, CircularProgress, Container, Grid, Step, Stepper, StepButton, StepLabel, Typography} from '@mui/material';
import QontoConnector from './QontoConnector';
import QontoStepIcon from './QontoIcon';
import EdgeCard from '../EdgeCard';
import BackButton from '../Buttons/BackButton';
import SubmitButton from '../Buttons/SubmitButton';
import BRDs from '../../constants/mockData';
import {Fragment, useState} from 'react';

const steps = ['BRD Selection', 'Time and Frequency Selection', 'Data domain selectors', 'Deployment selectors', 'Data products'];

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [selectedBrd, setSelectedBrd] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDomain, setSelectedDomain] = useState();
    const [selectedDeployment, setSelectedDeployment] = useState();
    const [selectedProduct, setSelectedProduct] = useState();

    const stepMapping = [
        {stateName: selectedBrd, setter: setSelectedBrd, contentArray: BRDs},
        {
            stateName: selectedTime,
            setter: setSelectedTime,
            contentArray: BRDs.find((el) => el.name === selectedBrd)?.timeSelectors
        },
        {
            stateName: selectedDomain,
            setter: setSelectedDomain,
            contentArray: BRDs.find(
                (el) => el.name === selectedBrd
            )?.timeSelectors.find(
                (el) => el.name === selectedTime
            )?.domainSelectors
        },
        {
            stateName: selectedDeployment,
            setter: setSelectedDeployment,
            contentArray: BRDs.find(
                (el) => el.name === selectedBrd
            )?.timeSelectors.find(
                (el) => el.name === selectedTime
            )?.domainSelectors.find(
                (el) => el.name === selectedDomain
            )?.deploymentSelectors
        },
        {
            stateName: selectedProduct,
            setter: setSelectedProduct,
            contentArray: BRDs.find(
                (el) => el.name === selectedBrd
            )?.timeSelectors.find(
                (el) => el.name === selectedTime
            )?.domainSelectors.find(
                (el) => el.name === selectedDomain
            )?.deploymentSelectors.find(
                (el) => el.name === selectedDeployment
            )?.dataProducts
        },
    ];

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
        setSelectedBrd();
    };

    const isReadyForGeneration = () => {
        return (completedSteps() === totalSteps() - 1 && activeStep === totalSteps() - 1)
    };

    const selectCard = (childName) => {
        const newCompleted = completed;
        for (const index of [...Array(totalSteps() - (activeStep + 1)).keys()]) {
            const nextIndex = index + activeStep + 1;
            stepMapping[nextIndex].setter();
            delete newCompleted[nextIndex];
        }
        setCompleted(newCompleted);
        stepMapping[activeStep].setter(childName);
    };

    return (
        <Box sx={{my: 9, mx: 3, color: 'primary.dark'}}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector/>}>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepButton
                            onClick={handleStep(index)}
                            sx={{'.MuiStepLabel-alternativeLabel': {color: 'primary.dark'}}}
                        >
                            <StepLabel
                                StepIconComponent={QontoStepIcon}
                                sx={{
                                    '.MuiStepLabel-label': {
                                        '&.Mui-active': {color: 'primary.dark'},
                                        '&.Mui-completed': {color: 'info.main'}
                                    }
                                }}
                            >
                                {label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{mt: 10}}>
                {allStepsCompleted() ? (
                    <Fragment>
                        <Box sx={{display: 'flex', justifyContent: 'center', m: 5}}>
                            <CircularProgress/>
                        </Box>
                        <Box sx={{display: 'flex', justifyContent: 'center', pt: 2,}}>
                            <BackButton onClick={handleReset} variant='contained'>Clear workspace</BackButton>
                        </Box>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Container maxWidth='md'
                                   sx={{height: '500px', backgroundColor: 'secondary.main', p: 2, borderRadius: 10}}>
                            <Typography variant='h4' sx={{mb: 1, py: 1, color: 'primary.light', textAlign: 'center'}}>
                                {steps[activeStep]}
                            </Typography>
                            <Box sx={{height: '70%', my: 3, display: 'flex', justifyContent: 'start'}}>
                                <Grid container sx={{my: 'auto'}}>
                                    {stepMapping[activeStep].contentArray?.map((child, index) => (
                                        <EdgeCard
                                            {...child}
                                            index={index}
                                            key={child.name}
                                            checked={stepMapping[activeStep].stateName === child.name}
                                            onChange={() => selectCard(child.name)}
                                        />
                                    ))}
                                </Grid>
                            </Box>
                        </Container>
                        <Container maxWidth='md' sx={{my: 2}}>
                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                <BackButton
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{mr: 1}}
                                    variant='contained'
                                >
                                    Back
                                </BackButton>
                                <Box sx={{flex: '1 1 auto'}}/>
                                {activeStep !== steps.length &&
                                <SubmitButton
                                    onClick={handleComplete}
                                    variant='contained'
                                    disabled={!stepMapping[activeStep].stateName}
                                    intermediate={!isReadyForGeneration()}
                                >
                                    {isReadyForGeneration()
                                        ? 'Generate result'
                                        : 'Select'}
                                </SubmitButton>
                                }
                            </Box>
                        </Container>
                    </Fragment>
                )}
            </Box>
        </Box>
    );
}