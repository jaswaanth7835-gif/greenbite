document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu toggle
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

    // Close menu on link click
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    // Close menu on overlay click
    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  // Form validation & submission
  const feedbackForm = document.getElementById("feedbackForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const confirmationMessage = document.getElementById("confirmationMessage");

  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    [nameError, emailError, messageError].forEach(err => err.style.display = "none");
    [nameInput, emailInput, messageInput].forEach(input => input.classList.remove("input-error"));

    // Validate name
    if (!nameInput.value.trim()) {
      nameError.style.display = "block";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.style.display = "block";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    // Validate message
    if (!messageInput.value.trim()) {
      messageError.style.display = "block";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    if (isValid) {
      const feedback = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
        date: new Date().toISOString()
      };

      saveFeedback(feedback);
      feedbackForm.reset();
      confirmationMessage.style.display = "block";

      setTimeout(() => {
        confirmationMessage.style.display = "none";
      }, 5000);
    }
  });

  // Save feedback in localStorage
  function saveFeedback(feedback) {
    const feedbacks = JSON.parse(localStorage.getItem("greenbiteFeedbacks")) || [];
    feedbacks.push(feedback);
    localStorage.setItem("greenbiteFeedbacks", JSON.stringify(feedbacks));
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });
      item.classList.toggle("active");
    });
  });
});
