import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  Grid,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import CurrencyFormat from "react-currency-format";
import CurrencySelector from "./CurrencySelector";
import { getExchangeRate } from "../services/currencyApi";
import { currencies } from "../data/currencies";
import { useLanguage } from "../contexts/LanguageContext";

const CurrencyConverter: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [rate, setRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [toSymbol, setToSymbol] = useState("€");
  const [fromSymbol, setFromSymbol] = useState("$");

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      getExchangeRate(fromCurrency, toCurrency).then((rate) => setRate(rate));
      const toCurrencyData = currencies.find((cur) => cur.code === toCurrency);
      if (toCurrencyData) {
        setToSymbol(toCurrencyData.symbol);
      }
      const fromCurrencyData = currencies.find(
        (cur) => cur.code === fromCurrency
      );
      if (fromCurrencyData) {
        setFromSymbol(fromCurrencyData.symbol);
      }
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    setConvertedAmount(amount * rate);
  }, [amount, rate]);

  const handleAmountChange = (values: { value: any }) => {
    const { value } = values;
    setAmount(Number(value));
  };

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Card sx={{ width: "90%", maxWidth: 600, p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" component="div">
            {t("header.title")}
          </Typography>
          <Select
            value={language}
            onChange={(e) => changeLanguage(e.target.value as string)}
            variant="outlined"
            sx={{ width: 120 }}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
          >
            <MenuItem value="eng">
              <Button onClick={() => changeLanguage("eng")}>EN</Button>
            </MenuItem>
            <MenuItem value="por">
              <Button onClick={() => changeLanguage("por")}>PT</Button>
            </MenuItem>
            <MenuItem value="spa">
              <Button onClick={() => changeLanguage("spa")}>ES</Button>
            </MenuItem>
            <MenuItem value="rus">
              <Button onClick={() => changeLanguage("rus")}>RU</Button>
            </MenuItem>
            <MenuItem value="chi">
              <Button onClick={() => changeLanguage("chi")}>ZH</Button>
            </MenuItem>
            <MenuItem value="deu">
              <Button onClick={() => changeLanguage("deu")}>DE</Button>
            </MenuItem>
            <MenuItem value="fra">
              <Button onClick={() => changeLanguage("fra")}>FR</Button>
            </MenuItem>
          </Select>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CurrencySelector
              currency={fromCurrency}
              onChange={setFromCurrency}
              label={t("main.label1")}
            />
          </Grid>
          <Grid item xs={6}>
            <CurrencySelector
              currency={toCurrency}
              onChange={setToCurrency}
              label={t("main.label2")}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <CurrencyFormat
            label={t("main.label3")}
            value={amount}
            thousandSeparator={true}
            prefix={fromSymbol}
            onValueChange={handleAmountChange}
            customInput={TextField}
            fullWidth
          />
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ mt: 3, textAlign: "center" }}
        >
          {`${fromSymbol}${amount} ${fromCurrency} = ${toSymbol}${convertedAmount.toFixed(
            2
          )} ${toCurrency}`}
        </Typography>
      </Card>
    </Box>
  );
};

export default CurrencyConverter;
