// carousel.js

$(document).ready(function () {
  let currentIndex = 0;
  const items = $(".carousel-item");
  const itemCount = items.length;

  // Show the first image
  items.hide().eq(currentIndex).show();

  // Function to show the next image
  function showNextImage() {
    items.eq(currentIndex).hide();
    currentIndex = (currentIndex + 1) % itemCount; // Loop to the first item
    items.eq(currentIndex).fadeIn();
  }

  // Next button functionality
  $("#nextBtn").on("click", function () {
    showNextImage();
  });

  // Previous button functionality
  $("#prevBtn").on("click", function () {
    items.eq(currentIndex).hide();
    currentIndex = (currentIndex - 1 + itemCount) % itemCount; // Loop to the last item
    items.eq(currentIndex).fadeIn();
  });

  // Automatic image change every 5 seconds
  setInterval(showNextImage, 5000);
});

// main.js

// Function to toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Save the current theme in localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "light-mode");
  }
}

// Function to apply the saved theme
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;

  if (savedTheme) {
    body.classList.remove("dark-mode", "light-mode");
    body.classList.add(savedTheme);
  } else {
    // Default to dark mode if no theme is saved
    body.classList.add("dark-mode");
  }
}

// Event listener for theme switch button
document
  .getElementById("themeToggleBtn")
  .addEventListener("click", toggleTheme);

// Apply the saved theme when the page loads
document.addEventListener("DOMContentLoaded", applySavedTheme);

document
  .getElementById("themeToggleBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("light-theme"); // Toggle theme class

    const icon = this.querySelector("i");
    if (document.body.classList.contains("light-theme")) {
      icon.classList.replace("fa-moon", "fa-sun"); // Switch to sun icon
    } else {
      icon.classList.replace("fa-sun", "fa-moon"); // Switch to moon icon
    }
  });

$(document).ready(function () {
  function checkVisibility() {
    $("section").each(function () {
      var sectionTop = $(this).offset().top;
      var scrollPos = $(window).scrollTop() + $(window).height();

      // Trigger animation when section is in viewport
      if (scrollPos > sectionTop + 50) {
        $(this).css({ opacity: "1", transform: "translateY(0)" });
        $(this).addClass("visible");
      }
    });
  }

  // Initial check on page load
  checkVisibility();

  // Check visibility on scroll
  $(window).on("scroll", checkVisibility);
});
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
