import logo from './logo.svg';
import './App.css';

import {Box, Container, Grid, Link, Typography} from "@mui/material";
import ProTip from "./ProTip";
import Navbar from "./components/Navbar/Navbar";
import {Outlet} from "react-router";


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://cosmicguru.in/">
                CosmicGuru Pvt Ltd
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function App() {
  return (
      <>
          <Grid container>
              <Navbar />
              <Outlet />
              <Container maxWidth="sm">
                  <Box sx={{ my: 4 }}>
                      <ProTip />
                      <Copyright />
                  </Box>
              </Container>
          </Grid>

      </>

  );
}

export default App;

