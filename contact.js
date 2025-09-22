document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Create overlay for blur effect
  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    // Close the menu when clicking a nav link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    // Close the menu when clicking outside (on overlay)
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Form validation and submission
  const feedbackForm = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const confirmationMessage = document.getElementById("confirmationMessage");

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll(".faq-item");

  // Form validation
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");

    // Validate name
    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = "block";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      messageError.style.display = "block";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    // If form is valid
    if (isValid) {
      // Create feedback object
      const feedback = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
        date: new Date().toISOString(),
      };

      // Save to localStorage
      saveFeedback(feedback);

      // Show confirmation message
      confirmationMessage.style.display = "block";

      // Reset form
      feedbackForm.reset();

      // Hide confirmation after 5 seconds
      setTimeout(() => {
        confirmationMessage.style.display = "none";
      }, 5000);
    }
  });

  // Save feedback to localStorage
  function saveFeedback(feedback) {
    let feedbacks =
      JSON.parse(localStorage.getItem("greenbiteFeedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("greenbiteFeedbacks", JSON.stringify(feedbacks));
  }

  // FAQ accordion functionality
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle current item
      item.classList.toggle("active");
    });
  });
});
