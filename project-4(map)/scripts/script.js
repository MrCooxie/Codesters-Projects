var map = L.map('mapid').setView([58.37540151973191, 26.71966729606986], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

var marker = L.marker([58.37540151973191, 26.71966729606986]).addTo(map);
marker.bindPopup("<b>Tartu Jaan Poska Gümnaasium</b><br>Vanemuise 35").openPopup();