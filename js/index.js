const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector(".game-intro");
const roadImg = new Image ()
roadImg.src = "/images/road.png";
const carImg = new Image ()
carImg.src = "/images/car.png";

// Obstecales
//let obstacle = []; 
let obstacleSpeed = 2;
let obstacleInt = 2000;
let lastObstcale = 0; 
let obstacleX 
let randomObstacle = [];
let obstacleWidth = 85
let obstacleHeight = 25





// Car
const car = {
  height: canvas.height/5,
  width: canvas.width/7,
  speed: 5,
}

let carX = canvas.width/2 - car.width/2
let carY = canvas.height - car.height

let isMovingLeft = false
let isMovingRight = false

let score = 0
let gameOver = false
let animateId


const animate = () => {
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, carX, carY, car.width, car.height)
  recObstacle()

  if (isMovingLeft && carX > 60){
    carX-= car.speed
  }
  else if(isMovingRight && carX < canvas.width - car.width - 55) {
    carX += car.speed
  }

  if (canvas.width == 0) {
    gameOver = true
  }

  if (gameOver) {
    cancelAnimationFrame(animateId)
  }
  else {
    animateId = requestAnimationFrame(animate)
  }

};

function recObstacle() {
  let obstacleX = Math.floor(Math.random() * 5000)
  randomObstacle.push(new obstacles(obstacleX, 0, obstacleWidth, obstacleHeight, obstacleSpeed, 'tomato'))
  randomObstacle.forEach(element => {
    element.y += 1
    element.drawObstcale()
  });
}

// Obstecales
class obstacles {
  constructor (x, y, width, height, speed, color) {
  this.x = x
  this.y = 0
  this.height = height
  this.width = width
  this.speed = speed
  this.color = color
  }
  drawObstcale() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

// Window

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  };

  function startGame() {
    canvas.style.display = 'block'
    startScreen.style.display = 'none'
    animate()
  }
};

// AddEventListener
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') {
    isMovingLeft = true
  }
  if (event.key === 'ArrowRight') {
    isMovingRight = true
  }
});

document.addEventListener('keyup', event => {
  if (event.key === 'ArrowLeft') {
    isMovingLeft = false
  }
  if (event.key === 'ArrowRight') {
    isMovingRight = false
  }
})


/*let randomPlaceObstacle = getRandomInt(60, 400)
let randomWidthObstacle = getRandomInt(10, 200)
let obstacleSpeed = 2

const drawObstacle = () => {
  ctx.beginPath()
  ctx.fillStyle = 'tomato'
  ctx.rect(randomPlaceObstacle, 0, randomWidthObstacle, 50)
  ctx.fill()
  ctx.closePath()
}*/

/*.setInterval(() => {

    
  }, 200);*/