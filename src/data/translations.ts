type TranslationsType = {
    [key: string]: {
      [key: string]: {
        [key: string]: string;
      };
    };
  };
  
  export const translations: TranslationsType = {
    eng: {
      header: {
        title: "Currency Converter",
      },
      main: {
        label1: "From",
        label2: "To",
        label3: "Amount",
      },
    },
    por: {
      header: {
        title: "Conversor de Moedas",
      },
      main: {
        label1: "De",
        label2: "Para",
        label3: "Quantia",
      },
    },
    spa: {
      header: {
        title: "Convertidor de Moneda",
      },
      main: {
        label1: "Desde",
        label2: "Hasta",
        label3: "Cantidad",
      },
    },
    rus: {
      header: {
        title: "Конвертер валют",
      },
      main: {
        label1: "Из",
        label2: "В",
        label3: "Количество",
      },
    },
    chi: {
      header: {
        title: "货币转换器",
      },
      main: {
        label1: "从",
        label2: "到",
        label3: "金额",
      },
    },
    deu: {
      header: {
        title: "Währungsumrechner",
      },
      main: {
        label1: "Von",
        label2: "Zu",
        label3: "Betrag",
      },
    },
    fra: {
      header: {
        title: "Convertisseur de devises",
      },
      main: {
        label1: "De",
        label2: "À",
        label3: "Montant",
      },
    },
  };
  