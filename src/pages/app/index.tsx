import { Box, Paper, Typography } from '@mui/material'
import { ShellTitle } from 'components'
import { AppLayout } from 'components/layout'
import VoucherCard from '../../components/vouchers/card'
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
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
        <VoucherCard />
      </Paper>
    </>
  )
}

AppIndex.layout = AppLayout
