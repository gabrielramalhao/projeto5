const currency = process.argv[2] || 'USD-BRL';
const url = `https://economia.awesomeapi.com.br/json/last/${currency}`;

async function getData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();
    const item = result[`${currency.replace('-', '')}`];
    console.log(`Moedas: ${item.name}`);
    console.log(`Valor: 1 para ${item.bid}`);

  } catch (error) {
    console.error(error.message);
  }
}

getData(url);