let student = {};
    let questions = [
      {
        q: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
      },
      {
        q: "Which is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
      },
      {
        q: "Which symbol is used for strict equality in JS?",
        options: ["==", "===", "!=", "="],
        answer: "==="
      },
      {
        q: "What is 5 * 3?",
        options: ["8", "15", "10", "20"],
        answer: "15"
      },
      {
        q: "Which company created JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Apple"],
        answer: "Netscape"
      }
    ];
    let selectedQuestions = [];

    function registerUser() {
      try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = parseInt(document.getElementById("age").value);

        if (!name || !email || isNaN(age)) {
          throw new Error("All fields are required.");
        }
        if (age < 12) {
          throw new Error("Age must be 12 or above.");
        }

        student = { name, email, age };
        document.getElementById("regError").innerText = "";
        document.getElementById("registrationSection").classList.add("hidden");
        document.getElementById("quizSection").classList.remove("hidden");

        // Pick 3 random questions
        selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 3);
        renderQuiz();
      } catch (err) {
        document.getElementById("regError").innerText = err.message;
      }
    }

    function renderQuiz() {
      let quizForm = document.getElementById("quizForm");
      quizForm.innerHTML = "";
      selectedQuestions.forEach((qObj, idx) => {
        let qDiv = document.createElement("div");
        qDiv.innerHTML = `<p><b>Q${idx+1}. ${qObj.q}</b></p>`;
        qObj.options.forEach(opt => {
          qDiv.innerHTML += `
            <label>
              <input type="radio" name="q${idx}" value="${opt}"> ${opt}
            </label><br>`;
        });
        quizForm.appendChild(qDiv);
      });
    }

    function submitQuiz() {
      document.getElementById("quizMsg").innerText = "Calculating result...";
      
      new Promise((resolve) => {
        setTimeout(() => {
          let form = document.forms["quizForm"];
          let score = 0;

          selectedQuestions.forEach((qObj, idx) => {
            let answer = form[`q${idx}`]?.value;
            if (answer === qObj.answer) score++;
          });

          let percentage = (score / selectedQuestions.length) * 100;
          let grade;
          if (percentage >= 80) grade = "A";
          else if (percentage >= 60) grade = "B";
          else if (percentage >= 40) grade = "C";
          else grade = "D";

          let timestamp = new Date().toLocaleString();

          let result = { score, percentage, grade, timestamp };
          student.result = result;

          resolve(student);
        }, 2500);
      }).then((data) => {
        document.getElementById("quizMsg").innerText = "";
        document.getElementById("quizSection").classList.add("hidden");
        document.getElementById("resultSection").classList.remove("hidden");

        document.getElementById("resultOutput").innerHTML = `
          <b>Total Score:</b> ${data.result.score}/${selectedQuestions.length}<br>
          <b>Percentage:</b> ${data.result.percentage.toFixed(2)}%<br>
          <b>Grade:</b> ${data.result.grade}<br>
          <b>Timestamp:</b> ${data.result.timestamp}
        `;

        document.getElementById("jsonOutput").innerText = JSON.stringify(data, null, 2);
      });
    }