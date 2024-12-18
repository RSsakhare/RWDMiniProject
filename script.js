// ------------------- Dropdown Navigation -------------------
document.addEventListener('DOMContentLoaded', () => {
    // For Dropdown Navigation
    const dropdowns = document.querySelectorAll('nav ul li');

    dropdowns.forEach(item => {
        item.addEventListener('mouseover', () => {
            const dropdownMenu = item.querySelector('.dropdown');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', () => {
            const dropdownMenu = item.querySelector('.dropdown');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'none';
            }
        });
    });
});
//-----------------------------carousel---------------------------


// Auto-advance the carousel every 3 seconds
setInterval(nextSlide, 3000);

// ------------------- Form Submission Alert -------------------
function showAlertOnSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Data has been added!');
}

// ------------------- Form Validation (For Login and Registration) -------------------
function validateForm(event) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const gender = document.querySelectorAll('input[name="gender"]:checked');

    // Check if required fields are filled
    if (!username.value || !password.value || (email && !email.value) || (phone && !phone.value)) {
        alert('Please fill all required fields.');
        event.preventDefault(); // Prevent form submission-
    }

    // Check for selected gender
    if (!gender.length) {
        alert('Please select your gender.');
        event.preventDefault(); // Prevent form submission
    }
}

// ------------------- Show/Hide Details in Table -------------------
function toggleDetails(event) {
    const details = event.target.nextElementSibling;
    if (details) {
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    }
}

// ------------------- Marquee Effect (for Future Tours Page) -------------------
function scrollMarquee() {
    const marquee = document.querySelector('marquee');
    if (marquee) {
        marquee.scrollLeft = marquee.scrollWidth; // Keeps scrolling effect smooth
    }
}

// ------------------- Page-Specific Functions -------------------

// For Registration Page
const registrationForm = document.querySelector('.registration-container form');
if (registrationForm) {
    registrationForm.addEventListener('submit', showAlertOnSubmit);
}

// For Login Page (Validation)
const loginForm = document.querySelector('.login-container form');
if (loginForm) {
    loginForm.addEventListener('submit', validateForm);
}

// For Past Tours Page (Toggle itinerary visibility)
const detailsElements = document.querySelectorAll('details');
detailsElements.forEach(detail => {
    detail.addEventListener('click', toggleDetails);
});

// For Marquee Scrolling Effect on Future Tours
const futureToursMarquee = document.querySelector('marquee');
if (futureToursMarquee) {
    setInterval(scrollMarquee, 700); // Adjust scroll speed if necessary
}