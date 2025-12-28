const container = document.getElementById("container");

const url =
  "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");

      countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="Flag of ${
        country.name.common
      }" class="country-flag">
            <h2 class="country-name">${
              country.name.common
            }</h2>                                
            <p class="country-capital"><strong>Capital:</strong> ${
              country.capital ? country.capital[0] : "N/A"
            }</p>
            <p class="country-population"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p class="country-region"><strong>Region:</strong> ${
              country.region
            }</p>
        `;
      container.appendChild(countryCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching country data:", error);
  });



