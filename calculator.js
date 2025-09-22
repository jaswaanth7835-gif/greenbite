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
    document.querySelectorAll(".nav-menu a").forEach(link => {
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

function calculate() {
  // 1. Get user input values from the HTML form
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const activityFactor = document.getElementById('activity').value;

  // 2. Validate inputs to ensure they are filled
  if (!age || !height || !weight) {
    alert("Please fill in all the fields.");
    return;
  }

  // 3. Calculate BMR based on gender
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else { // female
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // 4. Calculate TDEE using BMR and the activity factor
  const tdee = bmr * activityFactor;

  // 5. Display the results on the webpage
  document.getElementById('bmr-output').textContent = Math.round(bmr).toLocaleString();
  document.getElementById('tdee-output').textContent = Math.round(tdee).toLocaleString();
}

document.getElementById('calculate-btn').addEventListener('click', () => {
  // 1. Get all the user input values from the form
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activityFactor = parseFloat(document.getElementById('activity').value);

  // 2. Input Validation
  if (isNaN(age) || isNaN(height) || isNaN(weight)) {
    alert("Please enter valid numbers for age, height, and weight.");
    return;
  }

  // 3. Calculate BMR (Basal Metabolic Rate)
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else { // female
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // 4. Calculate TDEE (Total Daily Energy Expenditure)
  const tdee = bmr * activityFactor;

  // 5. Calculate Macronutrient Breakdown
  const carbsGrams = (tdee * 0.50) / 4;
  const proteinGrams = (tdee * 0.20) / 4;
  const fatsGrams = (tdee * 0.30) / 9;

  // 6. Update the HTML with the calculated values
  // Display BMR and TDEE
  document.getElementById('bmr-output').textContent = Math.round(bmr).toLocaleString();
  document.getElementById('tdee-output').textContent = Math.round(tdee).toLocaleString();

  // Display Macronutrient grams
  document.getElementById('protein-grams').textContent = `${Math.round(proteinGrams)} g`;
  document.getElementById('carbs-grams').textContent = `${Math.round(carbsGrams)} g`;
  document.getElementById('fats-grams').textContent = `${Math.round(fatsGrams)} g`;
  
  // Calculate and display macronutrient percentages
  const totalGrams = carbsGrams + proteinGrams + fatsGrams;
  const proteinPercent = (proteinGrams / totalGrams) * 100;
  const carbsPercent = (carbsGrams / totalGrams) * 100;
  const fatsPercent = (fatsGrams / totalGrams) * 100;
  
  document.getElementById('protein-percent').textContent = `${Math.round(proteinPercent)}%`;
  document.getElementById('carbs-percent').textContent = `${Math.round(carbsPercent)}%`;
  document.getElementById('fats-percent').textContent = `${Math.round(fatsPercent)}%`;
  
  // 7. Update the progress bar widths
  document.getElementById('protein-bar').style.width = `${proteinPercent}%`;
  document.getElementById('carbs-bar').style.width = `${carbsPercent}%`;
  document.getElementById('fats-bar').style.width = `${fatsPercent}%`;
});