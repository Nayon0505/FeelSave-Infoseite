document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
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
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name === "" || email === "" || message === "") {
        messageBox.innerHTML = "<span style='color: red;'>Bitte alle Felder ausfüllen!</span>";
        return;
      }
  
      setTimeout(() => {
        messageBox.innerHTML = "<span style='color: green;'>Nachricht erfolgreich gesendet!</span>";
        form.reset();
      }, 1000);
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            highlightActiveLink(); 
        })
        .catch(error => console.error("Fehler beim Laden der Navbar:", error));
  });
  
  function highlightActiveLink() {
    const links = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop(); 
  
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
  }