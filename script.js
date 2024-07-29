const apiUrl = 'https://api.api-code.ir/api/arzapp/index.php?page=1';
const coinTable = document.getElementById('coin-table');
const coinData = document.getElementById('coin-data');

fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
    const result = data.result;
    result.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.price.nameFa}</td>
        <td>${item.price.priceUSDT}</td>
        <td>${item.price.priceIRT}</td>
      `;
      coinData.appendChild(row);
    });
  })
 .catch(error => console.error('Error:', error));
