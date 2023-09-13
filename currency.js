function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    // Mengganti API URL dengan URL ExchangeRate-API dan menambahkan API Key
    const apiKey = "9a20da159de970a464b877dc3347b782";
    const apiUrl = `https://api.apilayer.com/exchangerates_data/latest/${fromCurrency}?apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = amount * exchangeRate;
                document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                document.getElementById("result").textContent = "Invalid currency selection.";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("result").textContent = "Error converting currency.";
        });
}
