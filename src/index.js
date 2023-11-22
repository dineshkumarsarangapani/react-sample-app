import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {navBarItems} from "./components/Navbar/NavBar.Items";
import Authentication from "./pages/Authentication/Authentication";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const DynamicRoutes = () => {
    let allRoutes = navBarItems.map((item) => (
        <Route
            key={item.path}
            path={item.path}
            element={
                item.component
            }
        />
    ));
    return (
        <Routes>
            <Route path={'/'} element={<App/>}>
                {allRoutes}
                <Route path={'Authentication'} element={<Authentication/>}/>
            </Route>
        </Routes>
    );
};

root.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
            <DynamicRoutes/>
        </BrowserRouter>,
    </ThemeProvider>,
);