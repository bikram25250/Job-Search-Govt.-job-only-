/* =========================
   QUESTIONS
========================= */

const questions = [

    {
        question: "Choose the synonym of Brave",
        options: ["Coward", "Courageous", "Weak", "Lazy"],
        answer: 1
    },

    {
        question: "Antonym of Ancient",
        options: ["Old", "Historic", "Modern", "Traditional"],
        answer: 2
    },

    {
        question: "Choose correct spelling",
        options: ["Enviroment", "Environment", "Envirnment", "Enviornment"],
        answer: 1
    },

    {
        question: "Choose synonym of Happy",
        options: ["Sad", "Joyful", "Weak", "Angry"],
        answer: 1
    },

    {
        question: "Choose antonym of Victory",
        options: ["Success", "Defeat", "Achievement", "Win"],
        answer: 1
    }

];

/* Fill up to 20 Questions */

while (questions.length < 20) {

    questions.push({
        question: "Sample Question " + (questions.length + 1),
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        answer: 0
    });

}

/* =========================
   USER INFO
========================= */

const userName =
    localStorage.getItem("userName") || "Guest User";

const userId =
    localStorage.getItem("userId") || "Not Available";

document.getElementById("userName").innerHTML =
    `Welcome, ${userName} `;

document.getElementById("userId").innerHTML =
    `User ID : ${userId}`;

/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;

let answers =
    new Array(questions.length).fill(null);

const questionText =
    document.getElementById("questionText");

const questionNumber =
    document.getElementById("questionNumber");

const optionsContainer =
    document.getElementById("optionsContainer");

const palette =
    document.getElementById("palette");

/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

    const q =
        questions[currentQuestion];

    questionNumber.innerHTML =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.innerHTML =
        q.question;

    optionsContainer.innerHTML = "";

    q.options.forEach((option, index) => {

        const label =
            document.createElement("label");

        label.className = "option";

        label.innerHTML = `
        <input
        type="radio"
        name="answer"
        value="${index}"
        ${answers[currentQuestion] === index ? "checked" : ""}
        >
        ${option}
        `;

        label.onclick = () => {

            answers[currentQuestion] = index;

            updatePalette();

        };

        optionsContainer.appendChild(label);

    });

}

/* =========================
   CREATE PALETTE
========================= */

function createPalette() {

    palette.innerHTML = "";

    questions.forEach((_, index) => {

        const btn =
            document.createElement("button");

        btn.innerHTML =
            index + 1;

        btn.onclick = () => {

            currentQuestion = index;

            loadQuestion();

            updatePalette();

            closeMobileMenu();

        };

        palette.appendChild(btn);

    });

    updatePalette();

}

/* =========================
   UPDATE PALETTE
========================= */

function updatePalette() {

    const buttons =
        palette.querySelectorAll("button");

    buttons.forEach((btn, index) => {

        btn.classList.remove("answered");
        btn.classList.remove("active");

        if (answers[index] !== null) {

            btn.classList.add("answered");

        }

        if (index === currentQuestion) {

            btn.classList.add("active");

        }

    });

}

/* =========================
   PREVIOUS
========================= */

document
    .getElementById("prevBtn")
    .onclick = () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            loadQuestion();

            updatePalette();

        }

    };

/* =========================
   NEXT
========================= */

document
    .getElementById("nextBtn")
    .onclick = () => {

        if (currentQuestion < questions.length - 1) {

            currentQuestion++;

            loadQuestion();

            updatePalette();

        }

    };

/* =========================
   RESULT
========================= */

function showResult() {

    let correct = 0;

    questions.forEach((q, index) => {

        if (answers[index] === q.answer) {
            correct++;
        }

    });

    const attempted =
        answers.filter(answer => answer !== null).length;

    const wrong = attempted - correct;

    const notAnswered =
        questions.length - attempted;

    const score =
        Math.round(
            (correct / questions.length) * 100
        );

    document.querySelector(".container").innerHTML = `

    <div class="result-box">

        <h2>🎉 Test Completed</h2>

        <h3>${userName}</h3>

        <p>User ID : ${userId}</p>

        <br>

        <p>Total Questions : ${questions.length}</p>

        <p>Attempted : ${attempted}</p>

        <p>Correct : ${correct}</p>

        <p>Wrong : ${wrong}</p>

        <p>Not Answered : ${notAnswered}</p>

        <br>

        <h2>Score : ${score}%</h2>

        <br>

        <button onclick="reviewAnswers()" class="review-btn">
            Review Answers
        </button>

        <button onclick="location.reload()" class="retake-btn">
            Retake Test
        </button>

        <button onclick="window.location.href='GP_MockTest_Subject.html'" class="back-btn-subject">
            Back To Subjects
        </button>

    </div>

    `;
}

/* =========================
   SUBMIT
========================= */

document
    .getElementById("submitBtn")
    .onclick = () => {

        if (confirm(
            "Are you sure you want to submit the test?"
        )) {

            showResult();

        }

    };

/* =========================
   TIMER
========================= */

let time = 900;

const timer =
    document.getElementById("timer");

const timerInterval =
    setInterval(() => {

        let minutes =
            Math.floor(time / 60);

        let seconds =
            time % 60;

        timer.innerHTML =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        time--;

        if (time < 0) {

            clearInterval(timerInterval);

            alert(
                "⏰ Time Over! Test Submitted Automatically."
            );

            showResult();

        }

    }, 1000);

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const paletteSection =
    document.getElementById("paletteSection");

const closePalette =
    document.getElementById("closePalette");

function openMobileMenu() {

    paletteSection.classList.add("show");

}

function closeMobileMenu() {

    paletteSection.classList.remove("show");

}

menuBtn.addEventListener(
    "click",
    openMobileMenu
);

closePalette.addEventListener(
    "click",
    closeMobileMenu
);

/* =========================
   START
========================= */

loadQuestion();

createPalette();

function reviewAnswers() {

    let html = `
    <div class="result-box">

    <h2>📖 Answer Review</h2>
    <p>Review your answers and correct solutions</p.
    <br>
    `;

    questions.forEach((q, index) => {

        const userAnswer =
            answers[index] !== null
                ? q.options[answers[index]]
                : "Not Answered";

        const correctAnswer =
            q.options[q.answer];

        const isCorrect =
            answers[index] === q.answer;

        html += `

       <div style="
        background:white;
        padding:25px;
        margin-bottom:20px;
        border-radius:15px;
        text-align:left;
        box-shadow:0 4px 15px rgba(0,0,0,0.1);
        border-left:6px solid #2563eb;
      ">

        <h3>
        Q${index + 1}. ${q.question}
        </h3>

        <br>

        <p style="
        color:${isCorrect ? 'green' : 'red'};
        font-weight:bold;
        ">
        Your Answer :
        ${userAnswer}
        </p>

        <p style="
        color:blue;
        font-weight:bold;
        ">
        Correct Answer :
        ${correctAnswer}
        </p>

        </div>

        `;

    });

    html += `

   <div style="
text-align:center;
margin-top:30px;
">

<button
class="retake-btn"
onclick="location.reload()">
Retake Test
</button>

<button
class="back-btn-subject"
onclick="window.location.href='GP_MockTest_Subject.html'">
Back To Subjects
</button>

</div>
    `;

    document.querySelector(".container").innerHTML =
        html;
}