import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// ---------------- SIGNUP ----------------

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const signupBtn = document.querySelector(".signup-submit-btn");

    signupBtn.disabled = true;
    signupBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';

    const fullName = document.getElementById("fullname").value.trim();
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      signupBtn.disabled = false;
      signupBtn.innerHTML = '<i class="fas fa-user-plus"></i> Sign Up';

      alert("Password does not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        USER_ID: Date.now(),
        USER_NAME: fullName,
        GENDER: gender,
        EMAIL: email,
        CREATED_AT: new Date().toISOString()
      });

      localStorage.setItem("userName", fullName);

      signupBtn.disabled = false;
      signupBtn.innerHTML = '<i class="fas fa-user-plus"></i> Sign Up';

      window.location.href = "Success_Message.html";

    } catch (error) {

      signupBtn.disabled = false;
      signupBtn.innerHTML = '<i class="fas fa-user-plus"></i> Sign Up';

      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        alert("Password must be at least 6 characters.");
      } else {
        alert(error.message);
      }
    }
  });
}

// ---------------- SIGNIN ----------------

const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const signinBtn = document.querySelector(".signin-btn");

    signinBtn.disabled = true;
    signinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const userRef = doc(db, "users", userCredential.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        localStorage.setItem("userName", userSnap.data().USER_NAME);
      }

      signinBtn.disabled = false;
      signinBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';

      const redirectPage = localStorage.getItem("redirectPage");

      if (redirectPage) {
        window.location.href = redirectPage;
      } else {
        window.location.href = "Join_Class.html";
      }

    } catch (error) {

      signinBtn.disabled = false;
      signinBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';

      if (error.code === "auth/user-not-found") {
        alert("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address.");
      } else {
        alert("Unable to Sign-In.");
      }
    }
  });
}
