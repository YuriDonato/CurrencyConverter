export interface Currency {
    code: string;
    symbol: string;
  }
  
  export const currencies: Currency[] = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'BRL', symbol: 'R$' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
    { code: 'BOB', symbol: 'Bs' },
    { code: 'CAD', symbol: '$' },
    { code: 'CHF', symbol: 'Fr' },
  ];
  