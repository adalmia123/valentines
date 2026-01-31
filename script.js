let yesScale = 1;

function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
  document.getElementById("bgMusic").play();

  setTimeout(() => {
    document.getElementById("envelopeStage").classList.add("hidden");
    document.getElementById("choiceStage").classList.remove("hidden");
  }, 2800);
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.12;
  document.getElementById("yesBtn").style.transform = `scale(${yesScale})`;
});

function sayYes() {
  document.getElementById("choiceStage").classList.add("hidden");
  document.getElementById("celebrationStage").classList.remove("hidden");
  startHearts();
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
  const list = document.getElementById("reasons");
  const base = [
    "You make my world calmer",
    "You support my dreams",
    "You’re my comfort",
    "You believe in me",
    "You feel like home"
  ];

  for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Reason ${i}: ${base[i % base.length]}`;
    li.style.animationDelay = `${i * 0.04}s`;
    list.appendChild(li);
  }
}

