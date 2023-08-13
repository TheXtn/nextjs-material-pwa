import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import burger from '../../../public/burger.jpg'
export default function VoucherCard() {
  return (
    <Box p={2} style={{ position: 'relative' }}>
      <Image
        style={{ opacity: 0.3 }}
        src={burger}
        width={500}
        height={300}
        alt={'burger Image'}
      />
      <h1 component="p" style={{ position: 'absolute', top: 20, left: 25 }}>
        KFC
      </h1>
      <Typography
        component="p"
        style={{ opacity: 0.6, position: 'absolute', top: 80, left: 25 }}
      >
        Get 20% discount on all orders
      </Typography>
    </Box>
  )
}
