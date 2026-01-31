document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const letter = document.getElementById("letter");

  envelope.addEventListener("click", () => {
    envelope.classList.add("open");
    startHearts();
  });

  letter.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("expanded-letter").classList.remove("hidden");
  });
});

let yesScale = 1;

function goToChoice() {
  document.getElementById("expanded-letter").classList.add("hidden");
  document.getElementById("choice").classList.remove("hidden");
}

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousemove", moveNoButton);

function sayYes() {
  document.getElementById("choice").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");
  showReasons();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

function showReasons() {
  const container = document.getElementById("reasons");
  const baseReasons = [
    "You make me feel safe",
    "You believe in me",
    "Your smile fixes everything",
    "You’re my calm",
    "You make ordinary days special"
  ];

  for (let i = 1; i <= 100; i++) {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.style.setProperty("--r", `${Math.random()*6-3}deg`);
    card.style.animationDelay = `${i * 0.04}s`;
    card.textContent = `Reason ${i}: ${baseReasons[i % baseReasons.length]}`;
    container.appendChild(card);
  }
}
