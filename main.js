// EmailJS initialisieren
(function() {
    emailjs.init("E4_w057TlDZGKkLsU");
})();

// Event-Listener für das Absenden des Formulars
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const templateParams = {
      from_name: document.getElementById("name").value,
      reply_to: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    console.log("Sending message with parameters:", templateParams); // Debugging-Log

    emailjs.send("service_s2wd5jm", "template_2ft7yhn", templateParams)
      .then(function(response) {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Error sending message.");
        console.log("FAILED...", error);
      });
});

