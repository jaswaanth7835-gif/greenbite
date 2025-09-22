// hamburger.js

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



const recipes = [
  {
    id: 1,
    title: "Avocado Toast",
    image: "Images/avocado-toast-11-1200x1800.webp",
    category: "Breakfast",
    description: "Creamy avocado spread on crunchy toast with toppings.",
    ingredients: [
      "2 slices whole grain bread",
      "1 ripe avocado",
      "Pinch of salt",
      "Black pepper",
      "Lemon juice"
    ],
    steps: [
      "Toast the bread slices until golden brown.",
      "Mash the avocado with salt, pepper, and lemon juice.",
      "Spread avocado mixture on toast.",
      "Top with extra seasoning or toppings as desired."
    ],
    nutrition: {
      calories: 250,
      protein: "6g",
      fat: "12g",
      carbs: "28g"
    }
  },
  {
    id: 2,
    title: "Caesar Salad",
    image: "Images/14172-ceasar-salad-supreme-armag-4x3-102369087-f709f7d6e1ac402ba07335f2d18e9272.webp",
    category: "Lunch",
    description: "Crisp romaine lettuce with creamy Caesar dressing.",
    ingredients: [
      "1 head romaine lettuce",
      "1/4 cup Caesar dressing",
      "Croutons",
      "Parmesan cheese"
    ],
    steps: [
      "Chop the romaine lettuce.",
      "Toss lettuce with Caesar dressing.",
      "Add croutons and grated Parmesan.",
      "Serve chilled."
    ],
    nutrition: {
      calories: 180,
      protein: "7g",
      fat: "9g",
      carbs: "15g"
    }
  },
  {
    id: 3,
    title: "Vegan Hummus Wrap",
    image: "Images/Vegan-Hummus-Wrap-4.webp",
    category: "Lunch",
    description: "Healthy hummus wrap packed with veggies.",
    ingredients: [
      "1 whole wheat tortilla",
      "3 tbsp hummus",
      "Lettuce",
      "Carrots",
      "Cucumber slices"
    ],
    steps: [
      "Spread hummus over tortilla.",
      "Layer with lettuce, carrots, and cucumber.",
      "Roll tightly and slice in half."
    ],
    nutrition: {
      calories: 220,
      protein: "8g",
      fat: "7g",
      carbs: "30g"
    }
  },
  {
    id: 4,
    title: "Baked Sweet Potato",
    image: "Images/Baked-Sweet-Potato-Fries-6.webp",
    category: "Dinner",
    description: "Crispy baked sweet potato fries with seasoning.",
    ingredients: [
      "2 medium sweet potatoes",
      "2 tbsp olive oil",
      "Salt",
      "Paprika"
    ],
    steps: [
      "Preheat oven to 200°C (400°F).",
      "Slice sweet potatoes into fries.",
      "Toss with olive oil, salt, and paprika.",
      "Bake 25–30 minutes, flipping halfway."
    ],
    nutrition: {
      calories: 190,
      protein: "2g",
      fat: "8g",
      carbs: "28g"
    }
  },
  {
    id: 5,
    title: "Crispy Rice Salad",
    image: "Images/crispy-rice-salad-nam-khao-360x361.webp",
    category: "Lunch",
    description: "Refreshing rice salad with crispy textures.",
    ingredients: [
      "2 cups cooked rice",
      "1 cup mixed vegetables",
      "Soy sauce",
      "Sesame seeds"
    ],
    steps: [
      "Crisp cooked rice in a skillet.",
      "Mix with vegetables.",
      "Season with soy sauce and sesame seeds."
    ],
    nutrition: {
      calories: 310,
      protein: "6g",
      fat: "5g",
      carbs: "60g"
    }
  },
  {
    id: 6,
    title: "Greek Yogurt Parfait",
    image: "Images/Greek-Yogurt-Parfait-6-1024x1536.jpg",
    category: "Breakfast",
    description: "Layered Greek yogurt with fruits and granola.",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries",
      "Honey drizzle"
    ],
    steps: [
      "Spoon yogurt into a glass.",
      "Add granola and berries.",
      "Drizzle with honey.",
      "Repeat layers and serve."
    ],
    nutrition: {
      calories: 280,
      protein: "12g",
      fat: "7g",
      carbs: "38g"
    }
  },
  {
    id: 7,
    title: "Chocolate Chip Cookie",
    image: "Images/IMG_4332-819x1024.webp",
    category: "Dessert",
    description: "Classic soft and chewy chocolate chip cookies.",
    ingredients: [
      "1 cup flour",
      "1/2 cup sugar",
      "1/2 cup butter",
      "1 egg",
      "1/2 cup chocolate chips"
    ],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Mix butter and sugar.",
      "Add egg, then flour and chocolate chips.",
      "Scoop onto tray and bake 12 min."
    ],
    nutrition: {
      calories: 150,
      protein: "2g",
      fat: "8g",
      carbs: "20g"
    }
  },
  {
    id: 8,
    title: "Chickpea Salad",
    image: "Images/TMD-Chickpea-Salad-Leads-01-Angle-Vertical-1024x1536.jpg",
    category: "Dinner",
    description: "Protein-rich salad with chickpeas and veggies.",
    ingredients: [
      "1 can chickpeas",
      "1 cucumber",
      "1 tomato",
      "Olive oil",
      "Lemon juice"
    ],
    steps: [
      "Drain and rinse chickpeas.",
      "Chop cucumber and tomato.",
      "Toss with olive oil and lemon juice."
    ],
    nutrition: {
      calories: 270,
      protein: "10g",
      fat: "9g",
      carbs: "38g"
    }
  },
  // ---- ADDITIONAL RECIPES BELOW ----
  {
    id: 9,
    title: "Overnight Oats",
    image: "Images/overnight-oats-hero-1.webp",
    category: "Breakfast",
    description: "Healthy overnight oats with fruits.",
    ingredients: ["1/2 cup oats", "1/2 cup milk", "1 tbsp chia seeds", "Banana slices"],
    steps: ["Mix oats, milk, and chia seeds.", "Refrigerate overnight.", "Top with banana."],
    nutrition: { calories: 300, protein: "9g", fat: "6g", carbs: "52g" }
  },
  {
    id: 10,
    title: "Grilled Chicken Salad",
    image: "Images/grilled-chicken-salad-step-10-219-8055766-4000x4000-cec376f8e91c468abbda8b53495a0c6d.webp",
    category: "Lunch",
    description: "Grilled chicken with greens and vinaigrette.",
    ingredients: ["Chicken breast", "Mixed greens", "Olive oil", "Vinaigrette"],
    steps: ["Grill chicken.", "Slice and mix with greens.", "Drizzle vinaigrette."],
    nutrition: { calories: 350, protein: "30g", fat: "12g", carbs: "15g" }
  },
  {
    id: 11,
    title: "Quinoa Bowl",
    image: "Images/360_F_1150800953_Yqyq5Yw2SYiGE8cyGCg4bg1kKyaQs3AP.webp",
    category: "Lunch",
    description: "Nutritious quinoa bowl with veggies.",
    ingredients: ["1 cup quinoa", "Broccoli", "Carrots", "Avocado"],
    steps: ["Cook quinoa.", "Top with steamed veggies and avocado."],
    nutrition: { calories: 320, protein: "12g", fat: "10g", carbs: "46g" }
  },
  {
    id: 12,
    title: "Veggie Stir Fry",
    image: "Images/vegetable_stir_fry-600x450.webp",
    category: "Dinner",
    description: "Quick veggie stir fry with soy sauce.",
    ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce"],
    steps: ["Chop veggies.", "Stir fry with soy sauce until tender."],
    nutrition: { calories: 200, protein: "5g", fat: "8g", carbs: "28g" }
  },
  {
    id: 13,
    title: "Smoothie Bowl",
    image: "Images/The-PERFECT-5-minute-Smoothie-Bowl-Simple-ingredients-naturally-sweet-SO-healthy-vegan-glutenfree-smoothiebowl-recipe-768x1152.jpg",
    category: "Breakfast",
    description: "Refreshing fruit smoothie bowl with toppings.",
    ingredients: ["Banana", "Berries", "Almond milk", "Granola"],
    steps: ["Blend banana and berries with almond milk.", "Pour into bowl and top with granola."],
    nutrition: { calories: 280, protein: "5g", fat: "6g", carbs: "50g" }
  },
  {
    id: 14,
    title: "Pasta Primavera",
    image: "Images/Pasta-Primavera-05-600x600.webp",
    category: "Dinner",
    description: "Vegetable pasta with light olive oil sauce.",
    ingredients: ["Pasta", "Zucchini", "Bell peppers", "Olive oil"],
    steps: ["Cook pasta.", "Sauté vegetables in olive oil.", "Mix pasta with veggies."],
    nutrition: { calories: 400, protein: "14g", fat: "10g", carbs: "68g" }
  },
  {
    id: 15,
    title: "Fruit Salad",
    image: "Images/fruit-salad-crowd-7-728x1092.webp",
    category: "Breakfast",
    description: "Colorful mix of seasonal fruits.",
    ingredients: ["Apples", "Bananas", "Oranges", "Grapes"],
    steps: ["Chop all fruits.", "Mix in a bowl.", "Chill before serving."],
    nutrition: { calories: 150, protein: "2g", fat: "0g", carbs: "35g" }
  },
  {
    id: 16,
    title: "Veggie Soup",
    image: "Images/VeggieSoup-0057.jpg",
    category: "Dinner",
    description: "Warm soup with fresh vegetables.",
    ingredients: ["Carrots", "Celery", "Onion", "Vegetable broth"],
    steps: ["Chop vegetables.", "Simmer in broth until tender."],
    nutrition: { calories: 120, protein: "3g", fat: "2g", carbs: "22g" }
  },
  {
    id: 17,
    title: "Shrimp Tacos",
    image: "Images/Shrimp-Tacos-1.jpg",
    category: "Dinner",
    description: "Zesty shrimp tacos with salsa.",
    ingredients: ["Shrimp", "Corn tortillas", "Salsa", "Cabbage"],
    steps: ["Cook shrimp with spices.", "Assemble tacos with salsa and cabbage."],
    nutrition: { calories: 290, protein: "18g", fat: "10g", carbs: "32g" }
  },
  {
    id: 18,
    title: "Lentil Curry",
    image: "Images/AMAZING-Coconut-Curried-Golden-Lentils-20-minutes-healthy-SO-satisfying-vegan-lentil-curry-plantbased-coconut-dairyfree-glutenfree-1.jpg",
    category: "Dinner",
    description: "Hearty lentil curry with spices.",
    ingredients: ["Lentils", "Onion", "Garlic", "Curry powder"],
    steps: ["Cook lentils.", "Sauté onion, garlic, and curry.", "Mix together."],
    nutrition: { calories: 280, protein: "15g", fat: "5g", carbs: "42g" }
  },
  {
    id: 19,
    title: "Banana Pancakes",
    image: "Images/Banana-Pancakes-14-1024x1536.jpg",
    category: "Breakfast",
    description: "Fluffy pancakes made with banana.",
    ingredients: ["1 banana", "1 egg", "1/2 cup flour", "1/2 cup milk"],
    steps: ["Mash banana.", "Mix with egg, flour, and milk.", "Cook pancakes on skillet."],
    nutrition: { calories: 320, protein: "8g", fat: "9g", carbs: "52g" }
  },
  {
    id: 20,
    title: "Stuffed Bell Peppers",
    image: "Images/stuffed-peppers-TRR-1200-nm-12-of-25-1024x1536.jpg",
    category: "Dinner",
    description: "Bell peppers stuffed with rice and veggies.",
    ingredients: ["Bell peppers", "Cooked rice", "Tomato", "Cheese"],
    steps: ["Cut tops off peppers.", "Stuff with rice and tomato.", "Bake and top with cheese."],
    nutrition: { calories: 340, protein: "11g", fat: "9g", carbs: "55g" }
  }
];


// DOM
const recipeGallery = document.querySelector(".recipe-image-gallery .images");
const searchInput = document.querySelector(".search-container input");
const searchIcon = document.querySelector(".search-container .icon");
const filterButtons = document.querySelectorAll(".time-menu button");

// Modal
const modal = document.createElement("div");
modal.classList.add("recipe-modal");
modal.style.display = "none";
document.body.appendChild(modal);

// Suggestions box
const suggestionBox = document.createElement("div");
suggestionBox.classList.add("suggestions");
suggestionBox.style.position = "absolute";
suggestionBox.style.top = "100%";
suggestionBox.style.left = "0";
suggestionBox.style.right = "0";
suggestionBox.style.background = "#fff";
suggestionBox.style.border = "1px solid #ccc";
suggestionBox.style.zIndex = "1000";
suggestionBox.style.display = "none";
document.querySelector(".search-container").appendChild(suggestionBox);

// Display recipes (initial)
function displayRecipes(list) {
  const cards = recipeGallery.querySelectorAll("div");
  cards.forEach((card, index) => {
    const recipe = recipes[index];
    if (!recipe) return;

    if (list.includes(recipe)) {
      card.style.display = "block";
      card.querySelector("h1").innerText = recipe.title;
      card.querySelector("img").src = recipe.image;
    } else {
      card.style.display = "none";
    }
  });
}

// Show recipe modal
function showRecipe(recipe) {
  modal.innerHTML = `
    <div class="modal-overlay" style="
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.6); backdrop-filter: blur(5px);
      display: flex; align-items: center; justify-content: center;
      z-index: 2000;">
      <div class="modal-content" style="
        background:#F6F1E9; padding:20px; border-radius:15px;
        max-width:700px; max-height:90vh; overflow-y:auto;">
        <span class="close" style="float:right; cursor:pointer; font-size:24px;">&times;</span>
        <h2>${recipe.title}</h2>
        <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; max-height:300px; object-fit:cover; border-radius:10px;">
        <p>${recipe.description}</p>
        <h3>Ingredients</h3>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
        <h3>Steps</h3>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
        <h3>Nutrition Info</h3>
        <table border="1" cellpadding="8" style="width:100%; border-collapse:collapse; text-align:center;">
          <tr><th>Calories</th><th>Protein</th><th>Fat</th><th>Carbs</th></tr>
          <tr>
            <td>${recipe.nutrition.calories}</td>
            <td>${recipe.nutrition.protein}</td>
            <td>${recipe.nutrition.fat}</td>
            <td>${recipe.nutrition.carbs}</td>
          </tr>
        </table>
      </div>
    </div>
  `;
  modal.style.display = "block";

  modal.querySelector(".close").onclick = () => (modal.style.display = "none");
  modal.querySelector(".modal-overlay").onclick = e => {
    if (e.target.classList.contains("modal-overlay")) modal.style.display = "none";
  };
}

// Handle button click for recipe details
recipeGallery.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const title = e.target.previousElementSibling.innerText;
    const recipe = recipes.find(r => r.title === title);
    if (recipe) showRecipe(recipe);
  }
});

// Search suggestions while typing
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase().trim();
  if (!term) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = recipes.filter(r => r.title.toLowerCase().includes(term));
  if (matches.length === 0) {
    suggestionBox.style.display = "none";
    return;
  }

  suggestionBox.innerHTML = matches
    .map(r => `<div style="padding:8px; cursor:pointer;">${r.title} (${r.category})</div>`)
    .join("");
  suggestionBox.style.display = "block";

  // Click suggestion
  suggestionBox.querySelectorAll("div").forEach((div, i) => {
    div.onclick = () => {
      showRecipe(matches[i]);
      suggestionBox.style.display = "none";
    };
  });
});

// Search (magnifying glass click or Enter)
function searchAndOpen() {
  const term = searchInput.value.toLowerCase().trim();
  const recipe = recipes.find(r => r.title.toLowerCase().includes(term));
  if (recipe) {
    showRecipe(recipe);
  } else {
    alert("No recipe found!");
  }
}

searchIcon.addEventListener("click", searchAndOpen);
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchAndOpen();
});

// Category filter
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.innerText;
    if (category === "All") {
      displayRecipes(recipes);
    } else {
      const filtered = recipes.filter(r => r.category === category);
      displayRecipes(filtered);
    }
  });
});

// Initial
displayRecipes(recipes);
