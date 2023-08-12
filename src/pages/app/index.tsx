import { Box, Paper, Typography } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'

export default function AppIndex() {
  return (
    <>
      <ShellTitle title="Home" />
      <Paper>
        <Box m={2} pt={2} pb={2}>
          <Typography variant="h6">Voucher</Typography>
        </Box>
      </Paper>
      <Paper>
        <Box p={2}>
          <Typography component="p">This is Voucher App</Typography>
        </Box>
      </Paper>
    </>
  )
}

AppIndex.layout = AppLayout
