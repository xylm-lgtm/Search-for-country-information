let allCountries = [];

async function fetchCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  allCountries = data;
  displayCountries(data);
}

function displayCountries(countries) {
  const list = document.getElementById("country-list");
  list.innerHTML = "";

  countries.forEach(country => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${country.flags.svg}" alt="${country.name.common} Bayrağı" />
      <h3>${country.name.common}</h3>
      <p><strong>Başkent:</strong> ${country.capital ? country.capital[0] : "Yok"}</p>
      <p><strong>Nüfus:</strong> ${country.population.toLocaleString()}</p>
    `;
    list.appendChild(div);
  });
}

function searchCountry() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const filtered = allCountries.filter(c =>
    c.name.common.toLowerCase().includes(keyword)
  );
  displayCountries(filtered);
}

fetchCountries();
