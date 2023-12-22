$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

function login(event) {
    // Replace these values with your actual login credentials
    event.preventDefault();
    
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const Email = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Validate password format
    const IsUppercase = /[A-Z]/.test(password);
    const IsNumber = /\d/.test(password);
    const HasSymbol = /@/.test(password);

    if (!(IsUppercase && IsNumber && HasSymbol)) {
        alert('Password must contain an uppercase letter, a number, and only accept @ as a special character.');
        return;
    }
    const validEmail = 'user@example.com';
    const validPassword = 'SmartServTest@123';
    // Check if the credentials are valid
    if (Email === validEmail && password === validPassword) {
        alert('Login successful!');
        // Redirect to the dashboard page
        window.location.href='dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
    return false;
}