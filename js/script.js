let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
const signupButton = document.getElementById('signup-btn');
const signinButton = document.getElementById('signin-btn');
const logo = document.querySelector('.logo-img');

logo.addEventListener('mouseover', function() {
    logo.style.transform = 'rotate(360deg) scale(1.2)'; 
});

logo.addEventListener('mouseout', function() {
    logo.style.transform = 'rotate(0deg) scale(1)';
});

// Set up event listeners for the buttons
signupButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.location.href = 'signup.html'; // Redirect to Sign Up page
});

signinButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    window.location.href = 'login.html'; // Redirect to Sign In page
});


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }

});
// Get references to the Attender and Organizer buttons
const attenderBtn = document.getElementById("attender-btn");
const organizerBtn = document.getElementById("organizer-btn");

// Add event listeners to redirect to the sign-up page
attenderBtn.addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to the sign-up section or page
});

organizerBtn.addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to the sign-up section or page
});

// Function to handle the attender login
function handleAttenderLogin() {
        window.location.href = "signup.html"; // Change to your signup page's path
    
}

// Function to handle the organizer login
function handleOrganizerLogin() {
    // Simulate the login process for Organizer (confirmation box)
    const isLoggedIn = confirm("Do you have an account as an Organizer?"); // Example confirmation

    if (isLoggedIn) {
        // Redirect to the Organizer page (replace 'organizer.html' with your actual page)
        window.location.href = "organizer.html"; // Change to your organizer page's path
    } else {
        alert("Please sign up first.");
        // Redirect to the signup page for Organizer
        window.location.href = "signup.html"; // Change to your signup page's path
    }
}
