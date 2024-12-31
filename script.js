// Snow Effect
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = Array.from({ length: 150 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 3 + 1,
  speed: Math.random() * 3 + 1,
}));

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  snowflakes.forEach((flake) => {
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    ctx.fill();
    flake.y += flake.speed;
    if (flake.y > canvas.height) flake.y = -flake.radius;
  });
}

function animateSnow() {
  drawSnowflakes();
  requestAnimationFrame(animateSnow);
}

animateSnow();
