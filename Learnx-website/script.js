function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }
  alert(`Logged in as ${username}`);
  closeModal();
}

function signupUser() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }
  alert(`Signup successful for ${username}`);
  closeModal();
}

function viewCourse(courseId) {
  localStorage.setItem("currentCourse", courseId);
  window.location.href = `course.html`;
}

function submitContact(event) {
  event.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  localStorage.setItem("subscribedEmail", email);
  alert("Thank you for subscribing to our newsletter!");
  document.getElementById("newsletterEmail").value = "";
}

// Close modal on overlay click
window.addEventListener("click", function (e) {
  const modals = ["loginModal", "signupModal"];
  modals.forEach((id) => {
    const modal = document.getElementById(id);
    if (e.target === modal) modal.style.display = "none";
  });
});

// Close modal on Escape key
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

function viewCourse(courseId) {
  localStorage.setItem("currentCourse", courseId);
  // You could also pass query params:
  window.location.href = `course.html?course=${courseId}`;
}
// Close modal on overlay click or ESC key
window.addEventListener("click", function (e) {
  const modals = ["loginModal", "signupModal"];
  modals.forEach((id) => {
    const modal = document.getElementById(id);
    if (e.target === modal) modal.style.display = "none";
  });
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }
  alert(`Logged in as ${username}`);
  closeModal();
}

function signupUser() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }
  alert(`Signup successful for ${username}`);
  closeModal();
}



function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }
  alert(`Logged in as ${username}`);
  closeModal();
}

function signupUser() {
  const username = document.getElementById("signupUsername").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  if (!username || !password) {
    alert("Please enter a username and password.");
    return;
  }
  alert(`Signup successful for ${username}`);
  closeModal();
}

function viewCourse(courseId) {
  localStorage.setItem("currentCourse", courseId);
  window.location.href = `course.html`;
}

function submitContact(event) {
  event.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  localStorage.setItem("subscribedEmail", email);
  alert("Thank you for subscribing to our newsletter!");
  document.getElementById("newsletterEmail").value = "";
}

// Close modal on overlay click
window.addEventListener("click", function (e) {
  const modals = ["loginModal", "signupModal"];
  modals.forEach((id) => {
    const modal = document.getElementById(id);
    if (e.target === modal) modal.style.display = "none";
  });
});

// Close modal on Escape key
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

function openLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
  document.getElementById("signupModal").style.display = "none";
}

function loginUser() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  alert(`Logged in as ${username}`);
  closeModal();
}

function signupUser() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  alert(`Signup successful for ${username}`);
  closeModal();
}

function viewCourse(courseId) {
  localStorage.setItem("currentCourse", courseId);
  localStorage.setItem("lastVisitedCourse", courseId);
  window.location.href = "course.html";
}

function submitContact(event) {
  event.preventDefault();
  alert("Thank you for your message!");
}

function subscribeNewsletter(event) {
  event.preventDefault();
  const email = document.getElementById("newsletterEmail").value;
  localStorage.setItem("subscribedEmail", email);
  alert("Subscribed!");
  document.getElementById("newsletterEmail").value = "";
}

let timer;
let timeLeft = 15;

function startTimer() {
  timeLeft = 15;
  document.getElementById("timeLeft").textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up! Moving to next question.");
      quizIndex++;
      loadQuestion();
    }
  }, 1000);
}

function viewCourse(courseId) {
  localStorage.setItem("currentCourse", courseId);
  localStorage.setItem("lastVisitedCourse", courseId);
  window.location.href = "course.html";
}

let courseId = localStorage.getItem("currentCourse");
if (!courseId) {
  courseId = localStorage.getItem("lastVisitedCourse") || "Unknown";
}
if (!localStorage.getItem("currentCourse") && courseId !== "Unknown") {
  alert(`Resuming your last visited course: ${courseId.toUpperCase()}`);
}

function updateProgressBar() {
  const progress = ((quizIndex / currentQuiz.questions.length) * 100).toFixed(0);
  document.getElementById("progressBar").style.width = `${progress}%`;
}
function retakeQuiz() {
  score = 0;
  quizIndex = 0;
  loadQuestion();
  scoreDisplay.textContent = "";
}