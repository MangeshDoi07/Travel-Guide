const sites = [
    {
      name: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      description: "A symbol of eternal love built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and considered one of the New Seven Wonders of the World.",
      date: "Completed in 1648",
      architect: "Ustad Ahmad Lahauri",
      img: "tajmahal.jpg",
      mapsLink: "https://goo.gl/maps/qjfyhQFkfP92"
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
    {
      name: "Qutub Minar",
      location: "Delhi",
      description: "This 73-meter tall minaret is the tallest brick minaret in the world, built to celebrate Muslim dominance in Delhi after the defeat of the last Hindu kingdom.",
      date: "Constructed in 1193",
      architect: "Qutb al-Din Aibak",
      img: "qutubminar.jpg",
      mapsLink: "https://goo.gl/maps/WzNJ3sdA2pP2"
    },
    {
      name: "Hampi",
      location: "Karnataka",
      description: "An ancient village, known for the ruins of Vijayanagara Empire. The area is rich in temples, statues, and markets and is a UNESCO World Heritage Site.",
      date: "14th century",
      architect: "Vijayanagara Empire rulers",
      img: "hampi.jpg",
      mapsLink: "https://goo.gl/maps/6vDvT6bN8DT2"
    },
    {
      name: "Ajanta Caves",
      location: "Maharashtra",
      description: "These caves are renowned for their rock-cut architecture, ancient Buddhist paintings, and sculptures. They offer a glimpse into India's cultural heritage.",
      date: "2nd century BCE to 6th century CE",
      architect: "Unknown",
      img: "ajanta.jpg",
      mapsLink: "https://goo.gl/maps/6xqg5Rq8J2M2"
    },
    {
      name: "Ellora Caves",
      location: "Maharashtra",
      description: "An extraordinary complex of rock-cut temples and monasteries representing Buddhist, Hindu, and Jain monuments.",
      date: "600-1000 CE",
      architect: "Rashtrakuta dynasty",
      img: "ellora.jpg",
      mapsLink: "https://goo.gl/maps/Uc2JEmNp1My"
    },
    {
      name: "Mysore Palace",
      location: "Mysore, Karnataka",
      description: "An opulent palace displaying Indo-Saracenic architecture, it was the residence of the Wadiyar dynasty and is among India’s most visited palaces.",
      date: "Completed in 1912",
      architect: "Henry Irwin",
      img: "mysorepalace.jpg",
      mapsLink: "https://goo.gl/maps/K7T3edPjsnS2"
    },
    {
      name: "City Palace",
      location: "Jaipur, Rajasthan",
      description: "A splendid palace complex blending Mughal and Rajasthani architecture, it was once the seat of the Maharaja of Jaipur.",
      date: "Completed in 1732",
      architect: "Maharaja Sawai Jai Singh II",
      img: "citypalace.jpg",
      mapsLink: "https://goo.gl/maps/R1k4eZbZPFS2"
    },
    {
      name: "Jantar Mantar",
      location: "Jaipur, Rajasthan",
      description: "An 18th-century astronomical observatory with a collection of nineteen architectural astronomical instruments.",
      date: "Constructed in 1734",
      architect: "Maharaja Jai Singh II",
      img: "jantarmantar.jpg",
      mapsLink: "https://goo.gl/maps/hxJfvXKh8us"
    },
    {
      name: "Gateway of India",
      location: "Mumbai, Maharashtra",
      description: "A 20th-century monument marking the visit of King George V and Queen Mary to India, it symbolizes Mumbai’s colonial history.",
      date: "Completed in 1924",
      architect: "George Wittet",
      img: "gatewayofindia.jpg",
      mapsLink: "https://goo.gl/maps/3MoeHGpLRKs"
    },
    {
      name: "Sanchi Stupa",
      location: "Sanchi, Madhya Pradesh",
      description: "One of the oldest stone structures in India, commissioned by Emperor Ashoka to promote Buddhism.",
      date: "3rd century BCE",
      architect: "Mauryan Empire",
      img: "sanchi.jpg",
      mapsLink: "https://goo.gl/maps/hXPbJoHZfpR2"
    },
    {
      name: "Fatehpur Sikri",
      location: "Uttar Pradesh",
      description: "An ancient city established by Emperor Akbar, known for its Mughal architecture and status as a UNESCO site.",
      date: "Built in 1571",
      architect: "Emperor Akbar",
      img: "fatehpursikri.jpg",
      mapsLink: "https://goo.gl/maps/4czfNzRsfgt"
    },
    {
      name: "Konark Sun Temple",
      location: "Konark, Odisha",
      description: "A 13th-century Sun temple known for its grand chariot structure, decorated with intricate carvings.",
      date: "Completed in 1255",
      architect: "King Narasimhadeva I",
      img: "konark.jpg",
      mapsLink: "https://goo.gl/maps/WBQeCLSv5Q82"
    },
    {
      name: "Rani ki Vav",
      location: "Patan, Gujarat",
      description: "A unique stepwell built in the 11th century, known for its intricately carved walls.",
      date: "11th century",
      architect: "Queen Udayamati",
      img: "ranikivav.jpg",
      mapsLink: "https://goo.gl/maps/hRd4Tf9hvC72"
    },
    {
      name: "Mehrangarh Fort",
      location: "Jodhpur, Rajasthan",
      description: "One of India’s largest forts, offering panoramic views of Jodhpur and decorated with beautiful carvings.",
      date: "Built in 1459",
      architect: "Rao Jodha",
      img: "mehrangarhfort.jpg",
      mapsLink: "https://goo.gl/maps/K5EUkCgeEXC2"
    },
    // Add other places similarly with additional details and Google Maps links
  ];
  
  function showSuggestions() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";
  
    if (searchInput) {
      const filteredSites = sites.filter(site => site.name.toLowerCase().includes(searchInput));
      
      filteredSites.forEach(site => {
        const suggestion = document.createElement("div");
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
        <div>
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
  