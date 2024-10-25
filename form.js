document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Clear previous error messages
      let hasError = false;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate Name
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        document.getElementById("nameError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("nameError").style.display = "none";
      }

      // Validate Email
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
          "Valid email is required";
        document.getElementById("emailError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("emailError").style.display = "none";
      }

      // Validate Message
      if (message === "") {
        document.getElementById("messageError").innerText =
          "Message cannot be empty";
        document.getElementById("messageError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("messageError").style.display = "none";
      }

      // If no errors, show success message
      if (!hasError) {
        document.getElementById("formSuccess").style.display = "block";

        // Optionally, reset form fields
        document.getElementById("contactForm").reset();
      }
    });
  }
});
