import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { currencies } from '../data/currencies';

interface Props {
  currency: string;
  onChange: (currency: string) => void;
  label: string;
}

const CurrencySelector: React.FC<Props> = ({ currency, onChange, label }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <Select
        value={currency}
        onChange={(e) => onChange(e.target.value as string)}
        label={label}
      >
        {currencies.map((cur) => (
          <MenuItem key={cur.code} value={cur.code}>
            {cur.symbol} - {cur.code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
