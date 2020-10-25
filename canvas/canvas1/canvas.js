const canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const c = canvas.getContext('2d');

const mouse = {
  x: undefined,
  y: undefined,
};

const maxRadius = 40;
const minRadius = 2;

const colorArray = [
  '#34495e',
  '#d35400',
  '#ecf0f1',
  '#3498db',
  '#2980b9',
]

window.addEventListener('mousemove', event => {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }

  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
  
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (
      mouse.x - this.x < 50 && 
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

let circleArray = [];

function init() {
  circleArray = [];

  for (var i = 0; i < 1000; i++) {
    const radius = Math.random() * 3 + 2;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = Math.random() - 0.5;
    const dy = Math.random() - 0.5;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

init();
animate();