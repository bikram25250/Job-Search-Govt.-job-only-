// Side Navbar
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-btn");

function openSidebar() {
  if (sidebar) sidebar.classList.add("active");
  if (overlay) overlay.classList.add("active");
  if (menuBtn) menuBtn.style.display = "none";
}

function closeSidebar() {
  if (sidebar) sidebar.classList.remove("active");
  if (overlay) overlay.classList.remove("active");
  if (menuBtn) menuBtn.style.display = "block";
}

// Signup page password show/hide
function toggleSignupPassword(fieldId, element) {
  const input = document.getElementById(fieldId);
  const icon = element.querySelector("i");

  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

// Signin page password show/hide
function toggleSigninPassword() {
  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  if (!password || !eyeIcon) return;

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

