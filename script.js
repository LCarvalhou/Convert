//Cotacao de moedas do dia.
const USD = 4.91;
const EUR = 5.77;
const GBP = 6.67;

// obtendo os elementos do formulario.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// manipulando o input amount para receber somente números
amount.addEventListener("input",() => {        
    const hasCharectersRegex = /\D+/g;  
});

//capturando o evento de submit= (ENVIAR) do formulario.
 form.onsubmit = (event) => {
    event.preventDefault(); 
    switch (currency.value) {
        case "USD":
         convertCurrency(amount.value, USD, "US$");
          break;

         case "EUR":
          convertCurrency(amount.value, EUR, "€");
          break;

         case "GBP":            
         convertCurrency(amount.value, GBP, "£");
          break;

    }

}

// Função para conversao de moedas.
function convertCurrency(amount, price, symbol) {
  try { 
    // Exibindo a cotação da moeda selecionada.
    description.innerText = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    
    // Calcula o valor total.
    let total = amount * price;
    
    //Exibir o resultado total.
    result.textContent = `${total} Reais`;


    //Aplica a classe que exibe o footer, com o resultado da conversão.        
    footer.classList.add("show-result");


 } catch (error) {
   //Remove a classe que exibe o footer, removendo ele da tela.
   
   footer.classList.remove("show-result");
   
   console.log(error);
   alert("Ocorreu um erro ao converter a moeda. Por favor, tente novamente.");

 }
//Formata a moeda para real brasileiro.
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

}