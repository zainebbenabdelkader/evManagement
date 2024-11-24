document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        alert("Passwords do not match!");
    }

    // Ensure all fields are filled
    if (!username || !email || !password || !confirmPassword) {
        event.preventDefault(); // Prevent form submission
        alert("Please fill in all fields.");
    }
});
// For Attender
attenderBtn.addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to the separate sign-up page
});

// For Organizer
organizerBtn.addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to the separate sign-up page
});
