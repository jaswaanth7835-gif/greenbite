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

// Expanded Data for Workouts
const workouts = {
    'Full Body': {
        'None': [
            { name: 'Push-ups', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Squats', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Plank', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Dumbbells': [
            { name: 'Goblet Squats', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Dumbbell Rows', sets: 3, reps: '10 Reps (each side)', timer: 45 },
            { name: 'Shoulder Press', sets: 3, reps: '12 Reps', timer: 60 }
        ],
        'Barbells': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Barbell Rows', sets: 3, reps: '8 Reps', timer: 60 },
            { name: 'Overhead Press', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Medicine Ball': [
            { name: 'Med Ball Slams', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Med Ball V-ups', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Russian Twists', sets: 3, reps: '20 Reps', timer: 45 }
        ],
        'Resistance Band': [
            { name: 'Band Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Band Push-ups', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Band Pull-aparts', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Cable Machines': [
            { name: 'Cable Rows', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Cable Crunches', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Face Pulls', sets: 3, reps: '15 Reps', timer: 45 }
        ],
        'Pull Up Bars': [
            { name: 'Pull-ups', sets: 3, reps: 'AMRAP*', timer: 60 },
            { name: 'Leg Raises', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Hanging Scapular Retraction', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Suspension trainers (TRX)': [
            { name: 'TRX Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'TRX Rows', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'TRX Push-ups', sets: 3, reps: '10 Reps', timer: 45 }
        ],
        'Treadmill': [
            { name: 'Treadmill Sprint Intervals', sets: 3, reps: '10 min', timer: 600 },
            { name: 'Incline Walk', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Stationary bike': [
            { name: 'Bike Sprints', sets: 5, reps: '1 min On, 1 min Off', timer: 120 },
            { name: 'Steady-State Cardio', sets: 1, reps: '20 min', timer: 1200 }
        ],
        'Rowing machine': [
            { name: 'Rowing Intervals', sets: 5, reps: '500m row', timer: 120 },
            { name: 'Steady-State Row', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Jump Rope': [
            { name: 'Jump Rope', sets: 3, reps: '3 min', timer: 180 },
            { name: 'High Knees', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Weight Plates': [
            { name: 'Plate Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Plate Curls', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Russian Twists', sets: 3, reps: '20 Reps', timer: 45 }
        ],
        'Squat-Rack': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Deadlifts', sets: 3, reps: '6 Reps', timer: 120 },
            { name: 'Rack Pulls', sets: 3, reps: '8 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Bench Press', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Dumbbell Flys', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Box Jumps', sets: 3, reps: '10 Reps', timer: 45 }
        ],
        'SandBags': [
            { name: 'Sandbag Squats', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Sandbag Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Sandbag Rows', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    },
    'Upper Body': {
        'None': [
            { name: 'Push-ups', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Tricep Dips', sets: 3, reps: '10 Reps', timer: 30 },
            { name: 'Plank', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Dumbbells': [
            { name: 'Dumbbell Bench Press', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Overhead Press', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Barbells': [
            { name: 'Barbell Bench Press', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Barbell Rows', sets: 3, reps: '8 Reps', timer: 60 },
            { name: 'Barbell Overhead Press', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Medicine Ball': [
            { name: 'Med Ball Push-ups', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Overhead Throws', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Med Ball Chest Passes', sets: 3, reps: '15 Reps', timer: 45 }
        ],
        'Resistance Band': [
            { name: 'Band Chest Press', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Band Rows', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Band Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Cable Machines': [
            { name: 'Cable Flys', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Cable Tricep Pushdowns', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Face Pulls', sets: 3, reps: '15 Reps', timer: 45 }
        ],
        'Pull Up Bars': [
            { name: 'Pull-ups', sets: 3, reps: 'AMRAP*', timer: 60 },
            { name: 'Chin-ups', sets: 3, reps: 'AMRAP*', timer: 60 },
            { name: 'Hanging Leg Raises', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Suspension trainers (TRX)': [
            { name: 'TRX Rows', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'TRX Push-ups', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'TRX Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Treadmill': [{ name: 'Warm-up Run', sets: 1, reps: '10 min', timer: 600 }],
        'Stationary bike': [{ name: 'Cardio Warm-up', sets: 1, reps: '10 min', timer: 600 }],
        'Rowing machine': [{ name: 'Cardio Warm-up', sets: 1, reps: '10 min', timer: 600 }],
        'Jump Rope': [{ name: 'Jump Rope Warm-up', sets: 1, reps: '5 min', timer: 300 }],
        'Weight Plates': [
            { name: 'Plate Raises', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Plate Curls', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Overhead Press', sets: 3, reps: '12 Reps', timer: 60 }
        ],
        'Squat-Rack': [
            { name: 'Barbell Bench Press', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Barbell Rows', sets: 3, reps: '8 Reps', timer: 60 },
            { name: 'Overhead Press', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Bench Press', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Dumbbell Flys', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Tricep Dips', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'SandBags': [
            { name: 'Sandbag Rows', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Sandbag Cleans', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Sandbag Bear Hug Squats', sets: 3, reps: '12 Reps', timer: 60 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    },
    'Lower Body': {
        'None': [
            { name: 'Squats', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 45 },
            { name: 'Calf Raises', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Dumbbells': [
            { name: 'Dumbbell Lunges', sets: 3, reps: '12 Reps (each leg)', timer: 60 },
            { name: 'Goblet Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Romanian Deadlifts', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Barbells': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Romanian Deadlifts', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Calf Raises', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Medicine Ball': [
            { name: 'Med Ball Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Med Ball Lunges', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Med Ball Wall Sits', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Resistance Band': [
            { name: 'Band Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Band Leg Press', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Band Kickbacks', sets: 3, reps: '15 Reps (each leg)', timer: 30 }
        ],
        'Cable Machines': [
            { name: 'Cable Pull-throughs', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Cable Leg Curls', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Cable Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 }
        ],
        'Pull Up Bars': [{ name: 'Hanging Leg Raises', sets: 3, reps: '12 Reps', timer: 45 }],
        'Suspension trainers (TRX)': [
            { name: 'TRX Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'TRX Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'TRX Hamstring Curls', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Treadmill': [
            { name: 'Treadmill Hill Sprints', sets: 5, reps: '30s on, 30s off', timer: 60 },
            { name: 'Incline Walk', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Stationary bike': [
            { name: 'Bike Sprints', sets: 5, reps: '1 min on, 1 min off', timer: 120 },
            { name: 'Steady-State Bike', sets: 1, reps: '20 min', timer: 1200 }
        ],
        'Rowing machine': [
            { name: 'Rowing Intervals', sets: 5, reps: '500m row', timer: 120 },
            { name: 'Steady-State Row', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Jump Rope': [
            { name: 'Jump Rope', sets: 3, reps: '3 min', timer: 180 },
            { name: 'High Knees', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Weight Plates': [
            { name: 'Plate Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Plate Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Calf Raises', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Squat-Rack': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Deadlifts', sets: 3, reps: '6 Reps', timer: 120 },
            { name: 'Box Squats', sets: 3, reps: '8 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Bench Step-ups', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Box Jumps', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Bulgarian Split Squats', sets: 3, reps: '12 Reps (each leg)', timer: 60 }
        ],
        'SandBags': [
            { name: 'Sandbag Squats', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Sandbag Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Sandbag Deadlifts', sets: 3, reps: '8 Reps', timer: 90 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    },
    'Arms': {
        'None': [
            { name: 'Push-ups', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Tricep Dips', sets: 3, reps: '10 Reps', timer: 30 },
            { name: 'Diamond Push-ups', sets: 3, reps: '8 Reps', timer: 45 }
        ],
        'Dumbbells': [
            { name: 'Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Hammer Curls', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Tricep Kickbacks', sets: 3, reps: '10 Reps (each arm)', timer: 45 }
        ],
        'Barbells': [
            { name: 'Barbell Curls', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Skull Crushers', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Medicine Ball': [
            { name: 'Med Ball Tricep Extensions', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Med Ball Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Resistance Band': [
            { name: 'Band Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Band Tricep Extensions', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Band Hammer Curls', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Cable Machines': [
            { name: 'Cable Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Cable Tricep Pushdowns', sets: 3, reps: '12 Reps', timer: 30 }
        ],
        'Pull Up Bars': [
            { name: 'Chin-ups', sets: 3, reps: 'AMRAP*', timer: 60 },
            { name: 'Hanging Leg Raises', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Suspension trainers (TRX)': [
            { name: 'TRX Bicep Curls', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'TRX Tricep Extensions', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Treadmill': [{ name: 'Warm-up Run', sets: 1, reps: '5 min', timer: 300 }],
        'Stationary bike': [{ name: 'Cardio Warm-up', sets: 1, reps: '5 min', timer: 300 }],
        'Rowing machine': [{ name: 'Cardio Warm-up', sets: 1, reps: '5 min', timer: 300 }],
        'Jump Rope': [{ name: 'Jump Rope Warm-up', sets: 1, reps: '3 min', timer: 180 }],
        'Weight Plates': [
            { name: 'Plate Curls', sets: 3, reps: '12 Reps', timer: 30 },
            { name: 'Overhead Tricep Extensions', sets: 3, reps: '10 Reps', timer: 45 }
        ],
        'Squat-Rack': [
            { name: 'Barbell Curls', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Skull Crushers', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Tricep Dips', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Dumbbell Hammer Curls', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'SandBags': [
            { name: 'Sandbag Curls', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Sandbag Tricep Extensions', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    },
    'Back': {
        'None': [
            { name: 'Supermans', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Plank', sets: 3, reps: '60 Seconds', timer: 60 },
            { name: 'Bird-Dog', sets: 3, reps: '10 Reps (each side)', timer: 45 }
        ],
        'Dumbbells': [
            { name: 'Dumbbell Rows', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Reverse Fly', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Farmer\'s Walk', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Barbells': [
            { name: 'Barbell Rows', sets: 3, reps: '8 Reps', timer: 60 },
            { name: 'Deadlifts', sets: 3, reps: '6 Reps', timer: 120 },
            { name: 'Shrugs', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Medicine Ball': [
            { name: 'Russian Twists', sets: 3, reps: '20 Reps', timer: 45 },
            { name: 'Med Ball Slams', sets: 3, reps: '15 Reps', timer: 45 }
        ],
        'Resistance Band': [
            { name: 'Band Rows', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Band Pull-aparts', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Band Face Pulls', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Cable Machines': [
            { name: 'Cable Rows', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Lat Pulldowns', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Face Pulls', sets: 3, reps: '15 Reps', timer: 45 }
        ],
        'Pull Up Bars': [
            { name: 'Pull-ups', sets: 3, reps: 'AMRAP*', timer: 60 },
            { name: 'Chin-ups', sets: 3, reps: 'AMRAP*', timer: 60 }
        ],
        'Suspension trainers (TRX)': [
            { name: 'TRX Rows', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'TRX Pull-ups', sets: 3, reps: 'AMRAP*', timer: 60 }
        ],
        'Treadmill': [{ name: 'Warm-up Run', sets: 1, reps: '5 min', timer: 300 }],
        'Stationary bike': [{ name: 'Cardio Warm-up', sets: 1, reps: '5 min', timer: 300 }],
        'Rowing machine': [
            { name: 'Rowing Intervals', sets: 5, reps: '500m row', timer: 120 },
            { name: 'Steady-State Row', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Jump Rope': [{ name: 'Jump Rope Warm-up', sets: 1, reps: '3 min', timer: 180 }],
        'Weight Plates': [
            { name: 'Plate Rows', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Shrugs', sets: 3, reps: '15 Reps', timer: 30 }
        ],
        'Squat-Rack': [
            { name: 'Deadlifts', sets: 3, reps: '6 Reps', timer: 120 },
            { name: 'Barbell Rows', sets: 3, reps: '8 Reps', timer: 60 },
            { name: 'Rack Pulls', sets: 3, reps: '8 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Dumbbell Rows', sets: 3, reps: '10 Reps', timer: 45 }
        ],
        'SandBags': [
            { name: 'Sandbag Rows', sets: 3, reps: '12 Reps', timer: 45 },
            { name: 'Sandbag Deadlifts', sets: 3, reps: '8 Reps', timer: 90 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    },
    'Legs': {
        'None': [
            { name: 'Squats', sets: 3, reps: '15 Reps', timer: 30 },
            { name: 'Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 45 },
            { name: 'Glute Bridges', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Dumbbells': [
            { name: 'Dumbbell Lunges', sets: 3, reps: '12 Reps (each leg)', timer: 60 },
            { name: 'Goblet Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Romanian Deadlifts', sets: 3, reps: '10 Reps', timer: 60 }
        ],
        'Barbells': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Romanian Deadlifts', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Calf Raises', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Medicine Ball': [
            { name: 'Med Ball Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Med Ball Lunges', sets: 3, reps: '10 Reps', timer: 60 },
            { name: 'Med Ball Wall Sits', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Resistance Band': [
            { name: 'Band Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Band Leg Press', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Band Kickbacks', sets: 3, reps: '15 Reps (each leg)', timer: 30 }
        ],
        'Cable Machines': [
            { name: 'Cable Pull-throughs', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Cable Leg Curls', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Cable Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 }
        ],
        'Pull Up Bars': [{ name: 'Hanging Leg Raises', sets: 3, reps: '12 Reps', timer: 45 }],
        'Suspension trainers (TRX)': [
            { name: 'TRX Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'TRX Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'TRX Hamstring Curls', sets: 3, reps: '12 Reps', timer: 45 }
        ],
        'Treadmill': [
            { name: 'Treadmill Hill Sprints', sets: 5, reps: '30s on, 30s off', timer: 60 },
            { name: 'Incline Walk', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Stationary bike': [
            { name: 'Bike Sprints', sets: 5, reps: '1 min on, 1 min off', timer: 120 },
            { name: 'Steady-State Bike', sets: 1, reps: '20 min', timer: 1200 }
        ],
        'Rowing machine': [
            { name: 'Rowing Intervals', sets: 5, reps: '500m row', timer: 120 },
            { name: 'Steady-State Row', sets: 1, reps: '15 min', timer: 900 }
        ],
        'Jump Rope': [
            { name: 'Jump Rope', sets: 3, reps: '3 min', timer: 180 },
            { name: 'High Knees', sets: 3, reps: '60 Seconds', timer: 60 }
        ],
        'Weight Plates': [
            { name: 'Plate Squats', sets: 3, reps: '15 Reps', timer: 45 },
            { name: 'Plate Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Calf Raises', sets: 3, reps: '20 Reps', timer: 30 }
        ],
        'Squat-Rack': [
            { name: 'Barbell Squats', sets: 3, reps: '8 Reps', timer: 90 },
            { name: 'Deadlifts', sets: 3, reps: '6 Reps', timer: 120 },
            { name: 'Box Squats', sets: 3, reps: '8 Reps', timer: 60 }
        ],
        'Bench (flat, incline, adjustable)': [
            { name: 'Bench Step-ups', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Box Jumps', sets: 3, reps: '10 Reps', timer: 45 },
            { name: 'Bulgarian Split Squats', sets: 3, reps: '12 Reps (each leg)', timer: 60 }
        ],
        'SandBags': [
            { name: 'Sandbag Squats', sets: 3, reps: '12 Reps', timer: 60 },
            { name: 'Sandbag Lunges', sets: 3, reps: '10 Reps (each leg)', timer: 60 },
            { name: 'Sandbag Deadlifts', sets: 3, reps: '8 Reps', timer: 90 }
        ],
        'Battle Ropes': [
            { name: 'Rope Slams', sets: 3, reps: '30 Seconds', timer: 30 },
            { name: 'Waves', sets: 3, reps: '45 Seconds', timer: 45 }
        ]
    }
};

// Elements from the DOM
const bodySelect = document.getElementById('body');
const equipmentSelect = document.getElementById('equipments');
const generateBtn = document.querySelector('.gen-btn button');
const workoutPlanContainer = document.getElementById('workout-plan-container');
const workoutPlanList = document.getElementById('workout-plan-list');
const timerContainer = document.querySelector('.timer-container');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

let currentTimerInterval;
let workoutList = [];
let currentExerciseIndex = 0;
let sound = new Audio('path/to/your/sound.mp3'); // Replace with your sound file path

// Function to generate a random workout plan
function generateWorkout() {
    const selectedBodyPart = bodySelect.options[bodySelect.selectedIndex].textContent;
    const selectedEquipment = equipmentSelect.options[equipmentSelect.selectedIndex].textContent;

    // Clear previous workout plan
    workoutPlanList.innerHTML = '';

    // Get the workout plan based on user selection
    workoutList = workouts[selectedBodyPart][selectedEquipment];
    
    // Display the workout plan and timer on the page
    displayWorkoutPlan(workoutList);
    
    // Show the workout plan and timer containers
    workoutPlanContainer.style.display = 'block';
    timerContainer.style.display = 'flex';
}

// Function to display the workout plan on the page
function displayWorkoutPlan(plan) {
    plan.forEach((exercise, index) => {
        const exerciseCard = document.createElement('div');
        exerciseCard.className = 'exercise-card'; // Use a class for styling
        exerciseCard.innerHTML = `
            <h2>${exercise.name}</h2>
            <p>${exercise.sets} Sets x ${exercise.reps}</p>
        `;
        workoutPlanList.appendChild(exerciseCard);
    });

    // Initialize timer display with the first exercise's time
    if (plan.length > 0) {
        timerDisplay.textContent = formatTime(plan[0].timer);
    }
}

// Function to format time (e.g., 60 seconds -> 01:00)
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Function to start a countdown timer
function startTimer(duration) {
    let timer = duration;
    currentTimerInterval = setInterval(() => {
        timerDisplay.textContent = formatTime(timer);
        
        if (--timer < 0) {
            clearInterval(currentTimerInterval);
            if (sound) sound.play(); // Play a sound when the timer finishes
            alert('Time for the next exercise!');
            // Add logic here to automatically move to the next exercise if desired
        }
    }, 1000);
}

// Event listener for the main button
generateBtn.addEventListener('click', generateWorkout);

// Event listeners for the timer controls
startBtn.addEventListener('click', () => {
    // Get the duration from the currently active workout card or from a variable
    if (workoutList.length > 0) {
        const firstExerciseTime = workoutList[0].timer; // Using the first exercise for simplicity
        startTimer(firstExerciseTime);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(currentTimerInterval);
});

resetBtn.addEventListener('click', () => {
    clearInterval(currentTimerInterval);
    if (workoutList.length > 0) {
        timerDisplay.textContent = formatTime(workoutList[0].timer);
    }
});