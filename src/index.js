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
import Authentication from "./pages/Authentication/Authentication";
import Products from "./pages/Products/products";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);



root.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                        <Route path="authentication" element={<Authentication />} />
                    <Route path="products" element={<Products />} />
                    {/*<Route path="functions" element={<Functions />} />*/}
                    {/*<Route path="hosting" element={<Hosting />} />*/}
                    {/*<Route path="machine-learning" element={<MachineLearning />} />*/}
                    {/*<Route path="storage" element={<Storage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>,
    </ThemeProvider>,
);