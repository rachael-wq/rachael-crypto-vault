function checkLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "Rachel" && password === "supersecret123") {
    document.getElementById("login").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("login").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("dashboard").style.opacity = "1";
      showSection('dashboard');
    }, 500);
    setTimeout(() => {
      document.getElementById("warning").style.display = "block";
    }, 2000);
    updateTimestamp();
    startTimer();
  } else {
    document.getElementById("error").innerHTML = "Access Denied: Invalid Credentials.";
  }
}

function logout() {
  document.getElementById("dashboard").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("login").style.opacity = "1";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("warning").style.display = "none";
    hideSections();
  }, 500);
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

function hideSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
}

function updateTimestamp() {
  let timestamp = document.getElementById("timestamp");
  setInterval(() => {
    timestamp.innerHTML = new Date().toLocaleString();
  }, 1000);
}

function startTimer() {
  let timer = document.getElementById("timer");
  let time = 5;
  setInterval(() => {
    time--;
    timer.innerHTML = `${time}s`;
    if (time <= 0) {
      time = 5;
      // Simulate balance update (fake, just for effect)
      document.querySelector('.balance').innerHTML = `$13,000,000 <span class="currency">(USDT)</span>`;
    }
  }, 1000);
}

function showNotice(message) {
  alert(message);
}