let currentGame;
let currentPlayer;


document.getElementById('game-board').style.display = 'none';
const myCanvas = document.getElementById('the-canvas');
const ctx = myCanvas.getContext('2d');
document.getElementById('start-button').onclick = () => {
    startGame();
}

document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.Spaceship.movePlayer(whereToGo);
}


function resetGame () {
    this.car = {},
    this.obstacles = [];
    this.shots = [];
    this.score = 0;
    document.getElementById('score').innerHTML = currentGame.score;
    let shotsFrequency = 0;
    
}

function startGame() {
    document.getElementById('game-board').style.display = 'block';
    //Instantiate a new game of the game class
    currentGame = new Game();
    //Instantiate a new car
    currentPlayer = new Spaceship();
    currentGame.Spaceship = currentPlayer;
    currentGame.Spaceship.drawPlayer();
    updateCanvas();
}

function bulletHit(obstacle, bullet) {
    return (bullet.x > obstacle.x - obstacle.width
        && bullet.y + bullet.height > obstacle.y
        && bullet.y < obstacle.y + obstacle.height
        && bullet.x < obstacle.x + obstacle.width);

    /*    return (bullet.y + bullet.height > obstacle.y &&
                bullet.x < obstacle.x + obstacle.width &&
                bullet.x + bullet.with > obstacle.x &&
                bullet.y < obstacle.y + obstacle.height);*/
        
}


function detectCollision(obstacle) {;
    return (currentPlayer.x > obstacle.x - obstacle.width
        && currentPlayer.y + currentPlayer.height > obstacle.y
        && currentPlayer.y < obstacle.y + obstacle.height
        && currentPlayer.x < obstacle.x + obstacle.width);
}
 
let shotsFrequency = 0;
let obstaclesFrequency = 0;
function updateCanvas() {
    ctx.clearRect(0, 0, 900, 600);
    currentGame.Spaceship.drawPlayer();
   
    //Draw bullets
    shotsFrequency++
    if (shotsFrequency % 30 === 1) { //bullets speed
        let newBullet = new Bullets(
            currentPlayer.x+25, 
            currentPlayer.y, 
            5, 
            5, 20);
        currentGame.shots.push(newBullet);
      //  console.log(currentGame.shots);
        
    }
    for(let i = 0; i<currentGame.shots.length; i++) { 
       currentGame.shots[i].y -= 10;
       currentGame.shots[i].drawBullet();
    }

    obstaclesFrequency++;
    if (obstaclesFrequency % 100 === 0) {
        //Draw an obstacle
        let randomObstacleX = Math.floor(Math.random() * 720);
        let randomObstacleY = 0;
        let newObstacle = new Obstacle(
            randomObstacleX, 
            randomObstacleY, 
            50, 
            50);
        currentGame.obstacles.push(newObstacle);
        

       // console.log(currentGame.obstacles);
    }
    for(let i = 0; i<currentGame.obstacles.length; i++) {
        currentGame.obstacles[i].y += 0.5;
        currentGame.obstacles[i].drawObstacle();
    
        for(let j = 0; j<currentGame.obstacles.length -1; j++){
        for (let k = 0; k<currentGame.shots.length; k++) {
            if (bulletHit(currentGame.obstacles[j],currentGame.shots[k])){
                currentGame.obstacles.splice(j,1);
                currentGame.shots.splice(k,1);
                currentGame.score++;
                document.getElementById('score').innerHTML = currentGame.score;
            }
        }
        }
         
        if (detectCollision(currentGame.obstacles[i])) {
            alert('GAME OVER')
            resetGame ()
            obstaclesFrequency = 0;
            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;
            currentGame.obstacles = [];
            document.getElementById('game-board').style.display = 'none';
        }
        
        // Obstacle moved outside the canvas
        if (currentGame.obstacles.length > 0 && currentGame.obstacles[i].y >= 600) {
            currentGame.obstacles.splice(i, 1);
        }
    }
    
    requestAnimationFrame(updateCanvas);
}




