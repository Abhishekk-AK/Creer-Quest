const wrapper = document.querySelector('.wrapper');
const loginBtn = document.getElementById('loginBtn');
const closeLogin = document.getElementById('closeLogin');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeMessage = document.getElementById('welcomeMessage');

let isLoggedIn = false; // Keep track of user authentication status

// Function to show the welcome message
function showWelcome(username) {
  welcomeMessage.textContent = `Welcome, ${username}!`;
  welcomeMessage.style.display = 'block';
}

// Function to hide the welcome message
function hideWelcome() {
  welcomeMessage.style.display = 'none';
}

// Function to handle successful login
function handleLogin(email) {
  isLoggedIn = true;
  showWelcome(email);
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'block';
  wrapper.classList.remove('active-popup');
}

// Function to handle logout
function handleLogout() {
  isLoggedIn = false;
  logoutBtn.style.display = 'none';
  loginBtn.style.display = 'block';
  hideWelcome();
}

loginBtn.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

closeLogin.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  hideWelcome();
});

showRegister.addEventListener('click', () => {
  wrapper.classList.add('active');
  hideWelcome();
});

showLogin.addEventListener('click', () => {
  wrapper.classList.remove('active');
  hideWelcome();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // You can add your login logic here, e.g., validate the login credentials
  // and show the user name after successful login.
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;
  console.log('Login submitted:', { email, password });
  // Replace the above console.log with your login logic.

  // For this example, we'll assume the login is successful and show the welcome message.
  handleLogin(email);
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // You can add your registration logic here, e.g., validate the input fields,
  // save the user data to a database, etc.
  const username = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;
  const agreeTerms = registerForm.querySelector('input[type="checkbox"]').checked;

  if (!agreeTerms) {
    alert('Please agree to the terms and conditions.');
    return;
  }

  console.log('Registration submitted:', { username, password });
  // Replace the above console.log with your registration logic.
  // You can also show a success message or redirect the user to the login page.
  // For this example, we'll assume the registration is successful and show the welcome message.
  handleLogin(email);
});

logoutBtn.addEventListener('click', () => {
  handleLogout();
});
