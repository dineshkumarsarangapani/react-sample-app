import logo from './logo.svg';
import './App.css';

import {Box, Container, Grid, Link, Typography} from "@mui/material";
import ProTip from "./ProTip";
import Navbar from "./components/Navbar/Navbar";
import {Outlet, useLocation} from "react-router";
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";


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

function Footer() {
    return <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
            <ProTip />
            <Copyright />
        </Box>
    </Container>;
}

function App() {

    const [title, setTitle] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const parsedTitle = location.pathname.replace(/\W/g, ' ');
        setTitle(parsedTitle);
    }, [location]);

    return (
        <Grid container>
            <Navbar />
            <Header title={title}/>
            <Outlet />
        </Grid>
    );
}

export default App;
