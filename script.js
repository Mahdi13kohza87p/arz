const apiUrl = 'https://api.api-code.ir/api/arzapp/index.php?page=1';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const result = data.result;
    result.forEach(item => {
      console.log(item.price.nameEn, item.price.priceUSDT);
    });
  })
  .catch(error => console.error('Error:', error));
