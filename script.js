// script.js

// DOM Content Loaded Event - Preserving your existing code
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Close menu if overlay is clicked
    overlay.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Initialize other functionality
    initRotatingQuotes();
    initDailyTip();
    initNewsletterForm();
    initFeatureBoxes();
});

// ===== ROTATING QUOTES =====
function initRotatingQuotes() {
    const quoteElement = document.getElementById('rotating-quote');
    if (!quoteElement) return;
    
    const quotes = [
        "Your health journey starts here.",
        "Nourish your body, fuel your life.",
        "Small changes create big results.",
        "Wellness is a journey, not a destination.",
        "Eat well, live well, be well.",
        "Your body hears everything your mind says."
    ];
    
    let currentIndex = 0;
    
    // Function to change quote
    function changeQuote() {
        quoteElement.style.opacity = 0;
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % quotes.length;
            quoteElement.textContent = quotes[currentIndex];
            quoteElement.style.opacity = 1;
        }, 500);
    }
    
    // Initial call and set interval
    changeQuote();
    setInterval(changeQuote, 5000);
}

// ===== DAILY HEALTH TIP =====
function initDailyTip() {
    const tipElement = document.getElementById('tip-content');
    if (!tipElement) return;
    
    const tips = [
        "Remember to drink plenty of water!",
        "Get at least 7-8 hours of sleep each night.",
        "Include a source of protein in every meal.",
        "Take short breaks to stretch if you sit for long periods.",
        "Aim for 30 minutes of physical activity daily.",
        "Practice deep breathing to reduce stress.",
        "Eat a variety of colorful fruits and vegetables.",
        "Limit processed foods and added sugars.",
        "Stay consistent with your meal times.",
        "Don't skip breakfast - it kickstarts your metabolism.",
        "Practice mindful eating without distractions.",
        "Include healthy fats like avocados and nuts in your diet.",
        "Find physical activities you enjoy to stay motivated.",
        "Stay hydrated with herbal teas as well as water.",
        "Get some sunlight for vitamin D every day."
    ];
    
    // Get a tip based on the day of the month for consistency
    const today = new Date().getDate();
    const tipIndex = today % tips.length;
    
    tipElement.textContent = tips[tipIndex];
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        // Simple email validation
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Store email in localStorage
        saveEmailToLocalStorage(email);
        
        // Show success message
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        
        // Reset form
        this.reset();
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function saveEmailToLocalStorage(email) {
    // Get existing emails or initialize empty array
    let emails = JSON.parse(localStorage.getItem('newsletterEmails')) || [];
    
    // Add new email if not already exists
    if (!emails.includes(email)) {
        emails.push(email);
        localStorage.setItem('newsletterEmails', JSON.stringify(emails));
    }
}

// ===== FEATURE BOXES =====
function initFeatureBoxes() {
    const featureBoxes = document.querySelectorAll('.feature-box');
    
    featureBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Get the page based on the content of the feature box
            let page = '';
            if (this.querySelector('h3').textContent.includes('Recipes')) {
                page = 'recipe.html';
            } else if (this.querySelector('h3').textContent.includes('Workout')) {
                page = 'workout.html';
            } else if (this.querySelector('h3').textContent.includes('Mindfulness')) {
                page = 'mindfulness.html';
            } else if (this.querySelector('h3').textContent.includes('Calculator')) {
                page = 'calculator.html';
            }
            
            // Navigate to the page if identified
            if (page) {
                window.location.href = page;
            }
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        max-width: 300px;
        animation: fadeIn 0.3s, fadeOut 0.3s 2.7s forwards;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#4CAF50';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#F44336';
    } else {
        notification.style.backgroundColor = '#2196F3';
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// ===== REUSABLE FUNCTIONS =====
// Function to get stored data from localStorage
function getStoredData(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

// Function to store data in localStorage
function storeData(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (e) {
        console.error('Error writing to localStorage:', e);
        return false;
    }
}

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(notificationStyles);