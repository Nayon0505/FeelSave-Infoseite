document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html") // Passe den Pfad an, wenn nötig (z.B. "../nav.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      })
      .catch(error => console.error("Fehler beim Laden der Navbar:", error));
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Verhindert, dass das Formular die Seite neu lädt
  
      // Daten aus den Eingabefeldern holen
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Einfache Validierung
      if (name === "" || email === "" || message === "") {
        messageBox.innerHTML = "<span style='color: red;'>Bitte alle Felder ausfüllen!</span>";
        return;
      }
  
      // Simulierte Erfolgsmeldung (hier würde ein echtes Backend die Daten verarbeiten)
      setTimeout(() => {
        messageBox.innerHTML = "<span style='color: green;'>Nachricht erfolgreich gesendet!</span>";
        form.reset(); // Formular leeren
      }, 1000);
    });
  });
  