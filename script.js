let yesScale = 1;

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  startHearts();
});

function expandLetter(e) {
  e.stopPropagation();
  document.querySelector(".container").classList.add("hidden");
  document.getElementById("expanded").classList.remove("hidden");
}

function goToChoice() {
  document.getElementById("expanded").classList.add("hidden");
  document.getElementById("choice").classList.remove("hidden");
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*200-100}px, ${Math.random()*120-60}px)`;

  yesScale += 0.1;
  document.getElementById("yesBtn").style.transform = `scale(${yesScale})`;
});

/* Hearts */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.bottom = "-20px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 6s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);
}

/* Heart animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-900px); opacity: 0; }
}`;
document.head.appendChild(style);


