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
    currentGame.Spaceship.fireWeapon(whereToGo);
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

function detectCollision(obstacle) {
    return !((currentPlayer.y > obstacle.y + obstacle.height))
    }

let obstaclesFrequency = 1;
function updateCanvas() {
    ctx.clearRect(0, 0, 900, 600);
    currentGame.Spaceship.drawPlayer();
    
    obstaclesFrequency++;
    if (obstaclesFrequency % 100 === 1) {
        //Draw an obstacle
        let newObstacle = new Obstacle(
            0, 
            0, 
            30, 
            30);
        currentGame.obstacles.push(newObstacle);
        //console.log(currentGame.obstacles);
    }
    for(let i = 0; i<currentGame.obstacles.length; i++) {
        currentGame.obstacles[i].y += 0.5;
        currentGame.obstacles[i].drawObstacle();
        
        if (detectCollision(currentGame.obstacles[i])) {
            alert('GAME OVER')
            obstaclesFrequency = 0;
            currentGame.score = 0;
            document.getElementById('score').innerHTML = 0;
            currentGame.obstacles = [];
            document.getElementById('game-board').style.display = 'none';
        }
        // Obstacle moved outside the canvas
        if (currentGame.obstacles.length > 0 && currentGame.obstacles[i].y >= 600) {
            currentGame.obstacles.splice(i, 1);
            currentGame.score++;
            document.getElementById('score').innerHTML = currentGame.score;
        }
    }
    requestAnimationFrame(updateCanvas);
}


