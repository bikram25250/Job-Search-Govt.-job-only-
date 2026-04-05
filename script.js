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
