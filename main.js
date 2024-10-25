$(document).ready(function () {
  let currentIndex = 0;
  const items = $(".carousel-item");
  const itemCount = items.length;

  items.hide().eq(currentIndex).show();

  function showNextImage() {
    items.eq(currentIndex).hide();
    currentIndex = (currentIndex + 1) % itemCount;
    items.eq(currentIndex).fadeIn();
  }

  $("#nextBtn").on("click", function () {
    showNextImage();
  });

  $("#prevBtn").on("click", function () {
    items.eq(currentIndex).hide();
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    items.eq(currentIndex).fadeIn();
  });

  setInterval(showNextImage, 5000);
});

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark-mode");
  } else {
    localStorage.setItem("theme", "light-mode");
  }
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;

  if (savedTheme) {
    body.classList.remove("dark-mode", "light-mode");
    body.classList.add(savedTheme);
  } else {
    body.classList.add("dark-mode");
  }
}

document
  .getElementById("themeToggleBtn")
  .addEventListener("click", toggleTheme);

document.addEventListener("DOMContentLoaded", applySavedTheme);

document
  .getElementById("themeToggleBtn")
  .addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const icon = this.querySelector("i");
    if (document.body.classList.contains("light-theme")) {
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

$(document).ready(function () {
  function checkVisibility() {
    $("section").each(function () {
      var sectionTop = $(this).offset().top;
      var scrollPos = $(window).scrollTop() + $(window).height();

      if (scrollPos > sectionTop + 50) {
        $(this).css({ opacity: "1", transform: "translateY(0)" });
        $(this).addClass("visible");
      }
    });
  }

  checkVisibility();

  $(window).on("scroll", checkVisibility);
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let hasError = false;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        document.getElementById("nameError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("nameError").style.display = "none";
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
          "Valid email is required";
        document.getElementById("emailError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("emailError").style.display = "none";
      }

      if (message === "") {
        document.getElementById("messageError").innerText =
          "Message cannot be empty";
        document.getElementById("messageError").style.display = "block";
        hasError = true;
      } else {
        document.getElementById("messageError").style.display = "none";
      }

      if (!hasError) {
        document.getElementById("formSuccess").style.display = "block";

        document.getElementById("contactForm").reset();
      }
    });
  }
});
