import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, PalletsType, PalletModel } from 'assets';
import { AppPages } from './pages';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from 'context';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [currentPallet, setCurrentTheme] = useState<PalletModel>(theme.pallet.dark);
    const queryClient = new QueryClient();

    /* const changePallet = (pallet: PalletsType) => {
        const palletSwitch = () => {
            setCurrentTheme(theme.changePallet(pallet));
        }

        return palletSwitch
    } */

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={{ ...theme, currentPallet }} />
            <ToastContainer />
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <AppPages />
                </QueryClientProvider>
            </AuthProvider>
        </ThemeProvider>
    )
};

export default App;