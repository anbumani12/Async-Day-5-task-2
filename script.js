// Define the URL for fetching country data
const url = "https://restcountries.com/v3.1/all";

// Fetch data using the Fetch API and handle the response
fetch(url)
  .then((data) => data.json()) // Convert response to JSON
  .then((countries) => {
    // Get the container where country cards will be appended
    const countriesContainer = document.getElementById("countries-container");

    // Iterate through each country in the response
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];

      // Create a div element for the country card
      const countryDiv = document.createElement("div");
      countryDiv.classList.add(
        "country-card",
        "col-sm-6",
        "col-md-4",
        "col-lg-4",
        "col-xl-4"
      );

      // Extract the native name with fallback to "N/A"
      const nativeName =
        country.name && country.name.nativeName && country.name.nativeName.eng
          ? country.name.nativeName.eng.common || "N/A"
          : "N/A";

      // Populate the country card with data
      countryDiv.innerHTML = `
        <div class="card h-100">
          <div class="card-header">
            <h5 class="card-title">${country.name.common}</h5>
          </div>
          <div class="card-body">
            <img src="${country.flags.svg}" class="card-img-top" alt="Flag">
            <div class="card-text">Region: ${country.region}</div>
            <div class="card-text">Capital: ${country.capital}</div>
            <div class="card-text">Countrycode: ${country.cca3}</div>
            <div class="card-text">Native Name: ${nativeName}</div>
            <div class="card-text">Population: ${country.population}</div>
          </div>
        </div>
      `;

      // Append the country card to the container
      countriesContainer.appendChild(countryDiv);
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    // Handle the error, e.g., display an error message on the webpage
  });
