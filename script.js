const amount=document.getElementById("amount");


// MANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NÚMEROS
amount.addEventListener("input",() => {        
    const hasCharectersRegex = /\D+/g;  // Expressão regular para encontrar caracteres não numéricos
    amount.value =amount.value.replace(hasCharectersRegex,"");



})
