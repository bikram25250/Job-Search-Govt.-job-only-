// Forgot password 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl9cKFnTgsJ4sqs_L5ZB6_d5Q9YDzBxHE",
  authDomain: "job-search-da3b4.firebaseapp.com",
  projectId: "job-search-da3b4",
  storageBucket: "job-search-da3b4.firebasestorage.app",
  messagingSenderId: "35535353453",
  appId: "1:35535353453:web:e81a103ad68aa72002f164"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const forgotForm = document.getElementById("forgotForm");

forgotForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("forgotEmail").value.trim();
  const forgotBtn = document.querySelector(".forgot-btn");

  forgotBtn.disabled = true;
  forgotBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    await sendPasswordResetEmail(auth, email);

    alert("Password reset link sent to your email.");

    forgotBtn.disabled = false;
    forgotBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Reset Link';

  } catch (error) {
    forgotBtn.disabled = false;
    forgotBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Reset Link';

    if (error.code === "auth/user-not-found") {
      alert("No account found with this email.");
    } else if (error.code === "auth/invalid-email") {
      alert("Please enter a valid email address.");
    } else {
      alert(error.message);
    }
  }
});