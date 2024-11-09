const sites = [
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "A symbol of eternal love built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and considered one of the New Seven Wonders of the World.",
    date: "Completed in 1648",
    architect: "Ustad Ahmad Lahauri",
    img: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    mapsLink: "https://maps.app.goo.gl/2u7xn5ubPBuJP9hg8"
  },
  {
    name: "Red Fort",
    location: "Delhi",
    description: "A historic fort that served as the main residence of Mughal emperors for nearly 200 years. Known for its red sandstone walls, it was built to symbolize Mughal power and is a UNESCO World Heritage Site.",
    date: "Built in 1639",
    architect: "Ustad Hamid and Ustad Ahmad",
    img: "redfort.jpg",
    mapsLink: "https://goo.gl/maps/bV7FkU5kV6x"
  },
  // Add more sites as needed
];

function showSuggestions() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const suggestionsDiv = document.getElementById("suggestions");
  suggestionsDiv.innerHTML = "";

  if (searchInput) {
    const filteredSites = sites.filter(site => site.name.toLowerCase().includes(searchInput));
    
    filteredSites.forEach(site => {
      const suggestion = document.createElement("div");
      suggestion.className = "suggestion-item";
      suggestion.innerText = site.name;
      suggestion.onclick = () => displaySiteDetails(site);
      suggestionsDiv.appendChild(suggestion);
    });
  }
}

function displaySiteDetails(site) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = `
    <div class="card">
      <img src="${site.img}" alt="${site.name}">
      <div class="card-content">
        <h3>${site.name}</h3>
        <p><span class="location-icon">📍</span> Location: ${site.location}</p>
        <p><span class="history-icon">📜</span> ${site.description}</p>
        <p><strong>🗓️ Date:</strong> ${site.date}</p>
        <p><strong>👤 Architect/Ruler:</strong> ${site.architect}</p>
        <p><a href="${site.mapsLink}" target="_blank">🌐 View on Google Maps</a></p>
      </div>
    </div>
  `;
  document.getElementById("suggestions").innerHTML = ""; // Clear suggestions
}
