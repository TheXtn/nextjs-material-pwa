import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

import { Box } from '@mui/system'
import Step1 from './steps/step1'
import Step2 from './steps/step2'
import Step3 from './steps/step3'

export default function Stepper() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const steps = [<Step1 key="1" />, <Step2 key="2" />, <Step3 key="3" />]

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <Box>
      <Box>
        {steps[activeStep]}
        {activeStep === steps.length - 1 ? (
          <Button
            color="primary"
            sx={{ width: '100%', bgcolor: 'white' }}
            variant="contained"
          >
            Finish
          </Button>
        ) : (
          <Button
            color="primary"
            sx={{ width: '100%', bgcolor: 'white', color: 'black' }}
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            variant="contained"
          >
            Next
          </Button>
        )}
      </Box>

      <MobileStepper
        variant="progress"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: '100%', flexGrow: 1, bgcolor: 'transparent' }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
  )
}
