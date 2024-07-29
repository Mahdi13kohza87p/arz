const apiUrl = 'https://api.api-code.ir/api/arzapp/index.php?page=1';
const coinTable = document.getElementById('coin-table');
const coinData = document.getElementById('coin-data');

fetch(apiUrl)
   .then(response => response.json())
   .then(data => {
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.volume}</td>
            `;
            coinData.appendChild(row);
        });
    })
   .catch(error => console.error('Error:', error));
