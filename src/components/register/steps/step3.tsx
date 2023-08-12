import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  Grid,
  TextField
} from '@mui/material'
import { Box } from '@mui/system'

export default function Step3() {
  return (
    <>
      <form autoComplete="off">
        <Card>
          <CardHeader
            subheader="Please provide the required information to verify the legitimacy of your business."
            title="Join and grow your business"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the password"
                  label="Password"
                  name="pwd"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPwd"
                  required
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}></Box>
        </Card>
      </form>
    </>
  )
}
