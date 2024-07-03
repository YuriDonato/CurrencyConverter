import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import CurrencyConverter from './components/CurrencyConverter';
import theme from './theme';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CurrencyConverter />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;
