const container = document.getElementById("container");
const searchInput = document.getElementById("search");

const url =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region";

let countries = []; 

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    countries = data;
    renderCountries(countries);
  })
  .catch((error) => {
    console.error("Error fetching country data:", error);
  });

function renderCountries(list) {
  container.innerHTML = "";

  list.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    countryCard.innerHTML = `
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
    `;

    container.appendChild(countryCard);
  });
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(value)
  );

  renderCountries(filtered);
});
