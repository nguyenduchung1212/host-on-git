import { Grid, IconButton, Typography, Link } from "@mui/material";
import { Icon } from "@iconify/react";
import { Stack } from "@mui/system";
export default function Header() {
  return (
    <>
      <div style={{ padding: "0 80px", background: '' }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <IconButton>
                <Icon
                  icon="healthicons:h-negative"
                  color="Red"
                  width="50"
                  height="50"
                />
              </IconButton>
              <Typography variant="h4">Profile</Typography>{" "}
            </Grid>
          </Grid>
          <Grid item>
            <Stack container direction="row" alignItems="center" spacing={3}>
              <Link underline="none">
                <Typography variant="h6">Infomation</Typography>
              </Link>
              <Link underline="none">
                <Typography variant="h6">Overview</Typography>
              </Link>
              <Link underline="none">
                {" "}
                <Typography variant="h6">Project</Typography>
              </Link>
              <Link underline="none">
                <Typography variant="h6">Contact</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
