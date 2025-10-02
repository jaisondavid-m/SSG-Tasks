// Object to store student info
  let student = {};

  // 1. Save Profile
  function saveProfile() {
    let name = document.getElementById("name").value.trim();   //trim remove the extra spaces
    let birthYear = Number(document.getElementById("birthYear").value);
    let city = document.getElementById("city").value.trim();

    if (!name || !birthYear || !city || isNaN(birthYear)) {
      alert("Please enter valid Name, Birth Year, and City!");
      return;
    }

    student.name = name;
    student.birthYear = birthYear;
    student.city = city;

    document.getElementById("profileOutput").innerText = 
      "Profile Saved!\n" + JSON.stringify(student, null, 2);
  }

  // 2. Age Checker & Eligibility
  function checkAge() {
    if (!student.birthYear) {
      alert("Profile not set! Enter your birth year first.");
      return;
    }
    let currentYear = new Date().getFullYear();
    let age = currentYear - student.birthYear;
    let eligibility = age >= 18 ? "✅ Eligible" : "❌ Not Eligible";
    document.getElementById("ageOutput").innerText = `Age: ${age}\nEligibility for voting: ${eligibility}`;
  }

  // 3. Greeting based on time
  function greetUser() {
    if (!student.name) {
      alert("Profile not set! Enter your name first.");
      return;
    }
    let hour = new Date().getHours();
    let greeting;
    if (hour < 12)
        greeting = "Good Morning";
    else if(hour < 18)
        greeting = "Good Afternoon";
    else
        greeting = "Good Evening";

    document.getElementById("greetingOutput").innerText = `${greeting}, ${student.name}!`;
  }

  // 4. Calculator
  function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
      alert("Enter valid numbers!");
      return;
    }

    let result;
    switch(op) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide": 
        if(num2 === 0) { alert("Cannot divide by zero!"); return; }
        result = num1 / num2; 
        break;
    }
    document.getElementById("calcOutput").innerText = `Result: ${result}`;
  }

  // 5. Motivational Quotes
  const quotes = [
    "Believe in yourself!",
    "Keep going, you’re doing great!",
    "Mistakes are proof that you are learning.",
    "Dream big and dare to fail.",
    "Stay positive, work hard, make it happen."
  ];

  function showQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);   //quotes length is 5 here
    document.getElementById("quoteOutput").innerText = quotes[randomIndex];
  }