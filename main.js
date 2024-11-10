// EmailJS initialisieren
(function() {
    emailjs.init("E4_w057TlDZGKkLsU");
})();

// Event-Listener für das Absenden des Formulars
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das automatische Neuladen der Seite
    
    // Daten aus dem Formular sammeln
    const templateParams = {
      from_name: document.getElementById("name").value, // Name aus dem Formular
      reply_to: document.getElementById("email").value, // E-Mail des Absenders
      message: document.getElementById("message").value // Nachricht aus dem Formular
    };
  
    // E-Mail senden mit EmailJS
    emailjs.send("service_s2wd5jm", "template_2ft7yhn", templateParams)
      .then(function(response) {
        alert("Message sent successfully!"); // Nachricht bei Erfolg
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Error sending message."); // Fehlernachricht
        console.log("FAILED...", error);
      });
});
