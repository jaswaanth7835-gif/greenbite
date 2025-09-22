document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  const overlay = document.createElement("div");
  overlay.classList.add("menu-overlay");
  document.body.appendChild(overlay);

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active");
      });
    });

    overlay.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
});

document.getElementById('calculate-btn').addEventListener('click', () => {
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;
  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const activityFactor = parseFloat(document.getElementById('activity').value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || !gender || isNaN(activityFactor)) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  let bmr = gender === 'male'
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;

  const tdee = bmr * activityFactor;

  const carbsGrams = (tdee * 0.50) / 4;
  const proteinGrams = (tdee * 0.20) / 4;
  const fatsGrams = (tdee * 0.30) / 9;

  document.getElementById('bmr-output').textContent = Math.round(bmr).toLocaleString();
  document.getElementById('tdee-output').textContent = Math.round(tdee).toLocaleString();
  document.getElementById('protein-grams').textContent = `${Math.round(proteinGrams)} g`;
  document.getElementById('carbs-grams').textContent = `${Math.round(carbsGrams)} g`;
  document.getElementById('fats-grams').textContent = `${Math.round(fatsGrams)} g`;

  const totalGrams = carbsGrams + proteinGrams + fatsGrams;
  const proteinPercent = (proteinGrams / totalGrams) * 100;
  const carbsPercent = (carbsGrams / totalGrams) * 100;
  const fatsPercent = (fatsGrams / totalGrams) * 100;

  document.getElementById('protein-percent').textContent = `${Math.round(proteinPercent)}%`;
  document.getElementById('carbs-percent').textContent = `${Math.round(carbsPercent)}%`;
  document.getElementById('fats-percent').textContent = `${Math.round(fatsPercent)}%`;

  document.getElementById('protein-bar').style.width = `${proteinPercent}%`;
  document.getElementById('carbs-bar').style.width = `${carbsPercent}%`;
  document.getElementById('fats-bar').style.width = `${fatsPercent}%`;
});
