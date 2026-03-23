document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 900,
    once: false,
    mirror: true,
    offset: 80,
  });

  const glideElement = document.querySelector(".glide");

  if (glideElement) {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      perView: 2,
      gap: 16,
      autoplay: 2500,
      hoverpause: true,
      breakpoints: {
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  const mapElement = document.getElementById("map");

  if (mapElement) {
    const map = L.map("map").setView([23.1291, 113.2644], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const locations = [
      {
        name: "Canton Tower",
        coords: [23.1085, 113.3198],
        text: "One of Guangzhou's most iconic modern landmarks.",
      },
      {
        name: "Shamian Island",
        coords: [23.1086, 113.2392],
        text: "A historic area with tree-lined streets and European-style architecture.",
      },
      {
        name: "Chen Clan Ancestral Hall",
        coords: [23.1256, 113.2442],
        text: "A famous site for traditional Cantonese architecture and craftsmanship.",
      },
    ];

    locations.forEach((location) => {
      L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<strong>${location.name}</strong><br>${location.text}`);
    });
  }

  const chartCanvas = document.getElementById("travelChart");

  if (chartCanvas) {
    new Chart(chartCanvas, {
      type: "bar",
      data: {
        labels: ["Food", "Culture", "Landmarks", "City Views"],
        datasets: [
          {
            label: "Top Experiences in Guangzhou",
            data: [95, 85, 90, 88],
            borderWidth: 1,
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
          title: {
            display: true,
            text: "Travel Overview of Guangzhou",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }
});