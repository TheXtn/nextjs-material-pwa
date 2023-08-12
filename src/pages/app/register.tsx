import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { ShellTitle } from '../../components'

import { AppLayout } from '../../components/layout'
import Stepper from '../../components/register/stepper'

export default function Register() {
  return (
    <>
      <ShellTitle title="Register" />
      <Paper>
        <Box p={2}>
          <Stepper />
        </Box>
      </Paper>
    </>
  )
}

Register.layout = AppLayout
