import {Box, Container, Grid, Step, Stepper, StepButton, StepLabel, Typography} from '@mui/material';
import QontoConnector from './QontoConnector';
import QontoStepIcon from './QontoIcon';
import EdgeCard from '../EdgeCard';
import BackButton from '../Buttons/BackButton';
import SubmitButton from '../Buttons/SubmitButton';
import BRDs from '../../constants/mockData';
import {Fragment, useState} from 'react';
import WorkspaceList from './WorkspaceList';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DomainIcon from '@mui/icons-material/Domain';
import DockIcon from '@mui/icons-material/Dock';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ResultsDrawer from '../ResultsDrawer';

export default function HorizontalNonLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [selectedBrd, setSelectedBrd] = useState();
    const [selectedTime, setSelectedTime] = useState();
    const [selectedDomain, setSelectedDomain] = useState();
    const [selectedDeployment, setSelectedDeployment] = useState();
    const [selectedProduct, setSelectedProduct] = useState();
    const [openResults, setOpenResults] = useState(false);

    const steps = [
        {
            label: 'BRD Selection',
            icon: <ViewCarouselIcon />,
            stateName: selectedBrd,
            setter: setSelectedBrd,
            contentArray: BRDs
        },
        {
            label: 'Time and Frequency Selection',
            icon: <AccessTimeIcon />,
            stateName: selectedTime,
            setter: setSelectedTime,
            contentArray: BRDs.find((el) => el.name === selectedBrd)?.timeSelectors
        },
        {
            label: 'Data domain selectors',
            icon: <DomainIcon />,
            stateName: selectedDomain,
            setter: setSelectedDomain,
            contentArray: BRDs.find(
                (el) => el.name === selectedBrd
            )?.timeSelectors.find(
                (el) => el.name === selectedTime
            )?.domainSelectors
        },
        {
            label: 'Deployment selectors',
            icon: <DockIcon />,
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
            label: 'Data products',
            icon: <ProductionQuantityLimitsIcon />,
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
        return (completedSteps() === totalSteps() - 1 && activeStep === totalSteps() - 1);
    };

    const selectCard = (childName) => {
        const newCompleted = completed;
        for (const index of [...Array(totalSteps() - (activeStep + 1)).keys()]) {
            const nextIndex = index + activeStep + 1;
            steps[nextIndex].setter();
            delete newCompleted[nextIndex];
        }
        setCompleted(newCompleted);
        steps[activeStep].setter(childName);
    };

    return (
        <Box sx={{my: 9, mx: 3, color: 'primary.dark'}}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector/>}>
                {steps.map((step, index) => (
                    <Step key={step.label} completed={completed[index]}>
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
                                {step.label}
                            </StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
            <Box sx={{mt: 10}}>
                {allStepsCompleted() ? (
                    <Fragment>
                        <WorkspaceList steps={steps} />
                        <Container maxWidth='xs' sx={{my: 2}}>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', pt: 2}}>
                                <BackButton onClick={handleReset} variant='contained'>Clear workspace</BackButton>
                                <SubmitButton onClick={() => setOpenResults(true)} variant='contained'>
                                    Generate results
                                </SubmitButton>
                            </Box>
                        </Container>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Container
                            maxWidth='md'
                            sx={{height: '500px', backgroundColor: 'secondary.main', p: 2, borderRadius: 10}}
                        >
                            <Typography variant='h4' sx={{mb: 1, py: 1, color: 'primary.light', textAlign: 'center'}}>
                                {steps[activeStep].label}
                            </Typography>
                            <Box sx={{height: '70%', my: 3, display: 'flex', justifyContent: 'start'}}>
                                <Grid container sx={{my: 'auto'}}>
                                    {steps[activeStep].contentArray?.map((child, index) => (
                                        <EdgeCard
                                            {...child}
                                            index={index}
                                            key={child.name}
                                            checked={steps[activeStep].stateName === child.name}
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
                                    disabled={!steps[activeStep].stateName}
                                    intermediate={!isReadyForGeneration()}
                                >
                                    {isReadyForGeneration()
                                        ? 'Generate workspace'
                                        : 'Select'}
                                </SubmitButton>
                                }
                            </Box>
                        </Container>
                    </Fragment>
                )}
            </Box>
            <ResultsDrawer
                anchor='bottom'
                open={openResults}
                onClose={() => setOpenResults(false)}
                onOpen={() => setOpenResults(true)}
                reset={handleReset}
            />
        </Box>
    );
}