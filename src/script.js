async function getData(currency = "USD-BRL") {
  const url = `https://economia.awesomeapi.com.br/json/last/${currency}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Par de moedas inválido ou erro na requisição.");
    }

    const result = await response.json();
    const item = result[`${currency.replace("-", "")}`];

    document.getElementById("moeda").textContent = item.name;
    document.getElementById("valor").textContent = `1 → ${item.bid}`;
    document.getElementById("result").classList.remove("hidden");
  } catch (error) {
    alert("Erro: " + error.message);
  }
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("currency").value.trim();
  if (input) {
    getData(input);
  }
});

// Faz uma consulta automática ao abrir a página
getData();
