import React from 'react';
import { Typography } from '@mui/material';

interface Props {
  rate: number;
  fromCurrency: string;
  toCurrency: string;
  toSymbol: string;
  fromSymbol: string;
}

const ExchangeRateDisplay: React.FC<Props> = ({ rate, fromCurrency, toCurrency, toSymbol, fromSymbol }) => {
  return (
    <Typography variant="h6">
      {`1 ${fromSymbol}${fromCurrency} = ${toSymbol}${rate} ${toCurrency}`}
    </Typography>
  );
};

export default ExchangeRateDisplay;
