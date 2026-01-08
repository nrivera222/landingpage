 (function () {
    // === CONFIGURACIÓN ===
    // Fecha objetivo del evento (AÑO, MES-1, DÍA, HORA, MINUTO, SEGUNDO)
    const eventDate = new Date(2026, 2, 26, 9, 0, 0); // 26 Oct 2024 09:00

    const elDays  = document.getElementById("cdDays");
    const elHours = document.getElementById("cdHours");
    const elMins  = document.getElementById("cdMins");
    const elSecs  = document.getElementById("cdSecs");

    function pad(value) {
      return String(value).padStart(2, "0");
    }

    function updateCountdown() {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        elDays.textContent  = "00";
        elHours.textContent = "00";
        elMins.textContent  = "00";
        elSecs.textContent  = "00";
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      elDays.textContent  = pad(days);
      elHours.textContent = pad(hours);
      elMins.textContent  = pad(minutes);
      elSecs.textContent  = pad(seconds);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  })();