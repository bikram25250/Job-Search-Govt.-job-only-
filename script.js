// Side navbar section
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
  menuBtn.style.display = 'none';
}

function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  menuBtn.style.display = 'block';
}
// Signup page hide & show password
function togglePassword(fieldId, element) {
  const input = document.getElementById(fieldId);
  const icon = element.querySelector('i');

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}
// Signup page success message
const signupForm = document.querySelector(".signup-form");
const signupBtn = document.getElementById("signupBtn");
const btnText = document.getElementById("btnText");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  btnText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Account Creating...';
  signupBtn.disabled = true;

  setTimeout(() => {
    window.location.href = "Success_Message.html";
  }, 2000);
});
//Signin page part
 function togglePassword() {
      const password = document.getElementById("password");
      const eyeIcon = document.getElementById("eyeIcon");

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
