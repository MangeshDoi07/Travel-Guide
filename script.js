const sites = [
  {
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    description: "The Taj Mahal, one of the New Seven Wonders of the World, is a white marble mausoleum in Agra, India, renowned globally for its stunning beauty and intricate design.",
    date: "Completed in 1648",
    architect: "Ustad Ahmad Lahauri",
    img1: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2: "https://c1.wallpaperflare.com/preview/12/345/179/tajmahal-photographer-frame-india.jpg",
    img3: "https://c4.wallpaperflare.com/wallpaper/769/657/193/taj-mahal-agra-india-wallpaper-preview.jpg",
    mapsLink: "https://maps.app.goo.gl/2u7xn5ubPBuJP9hg8",
    title_head1: "Historical Background",
    title1_points1: "The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in 1632 in memory of his beloved wife, Mumtaz Mahal, who died during childbirth.",
    title1_points2: "It took approximately 22 years to complete (1632–1653), involving over 20,000 artisans, including sculptors, calligraphers, and stonecutters, from across Asia and Europe.",
    title1_points3: "Persian architect Ustad Ahmad Lahauri is widely believed to be the main architect behind the Taj Mahal's design.",
    title_head2: "Architecture and Design",
    title2_points1: "The Taj Mahal is a blend of Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",
    title2_points2: "It is built with white marble from Makrana, Rajasthan, which reflects colors based on the time of day and weather, from pinkish hues at dawn to golden at sunset.",
    title2_points3: "The main structure is a massive, symmetrical building with a large central dome and four surrounding minarets, each about 40 meters tall.",
    title_head3: "Significance and Symbolism",
    title3_points1: "It represents the epitome of Mughal architecture and is often considered a symbol of eternal love due to Shah Jahan’s devotion to Mumtaz Mahal.",
    title3_points2: "The Quranic inscriptions and floral motifs convey peace, paradise, and the afterlife, aligning with Islamic iconography.",
    title3_points3: "The symmetrical layout signifies balance and harmony, while the river Yamuna in the background enhances its serene setting."
  },
  {
    name: "Red Fort",
    location: "Delhi",
    description: "A historic fort that served as the main residence of Mughal emperors for nearly 200 years. Known for its red sandstone walls, it was built to symbolize Mughal power and is a UNESCO World Heritage Site.",
    date: "Built in 1639",
    architect: "Ustad Hamid and Ustad Ahmad",
    img: "redfort.jpg",
    mapsLink: "https://maps.app.goo.gl/j5QgViapKD6LXZJW7"
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
      <img src="${site.img1}" alt="${site.name}">
      <div class="card-content">
        <h3>${site.name}</h3>
        <p><span class="location-icon">📍</span> Location: ${site.location}</p>
        <p><span class="history-icon">📜</span> ${site.description}</p>
        <p><strong>🗓️ Date:</strong> ${site.date}</p>
        <p><strong>👤 Architect/Ruler:</strong> ${site.architect}</p>
        <p><a href="${site.mapsLink}" target="_blank">🌐 View on Google Maps</a></p>
         <img src="${site.img2}" alt="${site.name}">
        <h3>${site.title_head1}</h3>
        <ul>
          <li>${site.title1_points1}</li>
          <li>${site.title1_points2}</li>
          <li>${site.title1_points3}</li>
        </ul>
        <h3>${site.title_head2}</h3>
        <ul>
          <li>${site.title2_points1}</li>
          <li>${site.title2_points2}</li>
          <li>${site.title2_points3}</li>
        </ul>
        <h3>${site.title_head3}</h3>
        <ul>
          <li>${site.title3_points1}</li>
          <li>${site.title3_points2}</li>
          <li>${site.title3_points3}</li>
        </ul>
      <img src="${site.img3}" alt="${site.name}">

      </div>
    </div>
  `;
  document.getElementById("suggestions").innerHTML = ""; // Clear suggestions
}
