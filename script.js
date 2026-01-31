let yesScale = 1;

function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
  document.getElementById("bgMusic").play();

  setTimeout(() => {
    document.getElementById("envelope-container").classList.add("hidden");
    document.getElementById("choice").classList.remove("hidden");
  }, 2500);
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.12;
  document.getElementById("yesBtn").style.transform = `scale(${yesScale})`;
});

function sayYes() {
  document.getElementById("choice").classList.add("hidden");
  document.getElementById("celebration").classList.remove("hidden");
  startHearts();
  showReasons();
}

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 250);
}

function showReasons() {
  const list = document.getElementById("reasons");

  const reasons = [
    "You make even ordinary days feel special",
    "Your smile instantly calms me",
    "You believe in me even when I doubt myself",
    "You make me want to be better",
    "You’re my safe place",
    "You laugh at my dumb jokes",
    "You understand me without words",
    "You’re patient with me",
    "You make life feel lighter",
    "You feel like home",
  ];

  for (let i = 1; i <= 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Reason ${i}: ${reasons[i % reasons.length]}`;
    li.style.animationDelay = `${i * 0.05}s`;
    list.appendChild(li);
  }
}
