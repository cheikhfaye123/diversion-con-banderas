const listPays = document.getElementById("countries-list");
const detailsModal = document.getElementById("country-details");
const detailsContent = document.getElementById("details-content");
const closeButton = document.getElementById("close-button");

async function fetchData() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    renderCountries(data);
  } catch (error) {
    console.error('fetch error:', error);
  }
}

function renderCountries(countries) {
  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  
  countries.forEach(country => {
    const countryElement = document.createElement('div');
    countryElement.className = 'country';
    countryElement.innerHTML = `
      <img src="${country.flags.svg}" alt="Bandera de ${country.name.common}">
      <p>${country.name.common}</p>
    `;
    countryElement.addEventListener('click', () => showDetails(country));
    listPays.appendChild(countryElement);
  });
}


fetchData();
