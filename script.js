const currency = process.argv[2];
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
    console.log(`Valor: ${item.bid}, Valor: 1`)

  } catch (error) {
    console.error(error.message);
  }
}

getData(url);