import axios from 'axios';

const API_KEY = 'fc4af28b8b8eb0c554ba16d8'; // Substitua pelo seu API Key
const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

export const getExchangeRate = async (fromCurrency: string, toCurrency: string): Promise<number> => {
  const response = await axios.get(`${BASE_URL}/${fromCurrency}?apikey=${API_KEY}`);
  return response.data.rates[toCurrency];
};
