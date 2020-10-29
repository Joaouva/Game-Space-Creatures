let currentGame;
let currentPlayer;

document.getElementById('game-board').style.display = 'none';
document.getElementById('game-over').style.display = 'none';
document.getElementById('game-over-score').style.display = 'none';
document.getElementById('welcome-image').style.display = 'inline';
document.getElementById('messages').style.display = 'none';

const myCanvas = document.getElementById('the-canvas');
const ctx = myCanvas.getContext('2d');
document.getElementById('start-button').onclick = () => {
    startGame();
}
document.getElementById('restart-button').onclick = () => {
   currentGame.gameRunning = !currentGame.gameRunning;
}

/*
const image = new Image ()
image.src = document.getElementById('game-board').style.display
const backgroundImage = {
    image: image,
    x: 20,
    speed: 50,
    move: function() {
        this.x += this.speed;
        this.x %= 1200;
    },
    draw: function () {
        ctx.drawImage (this.image, this.x, 0, myCanvas.width, myCanvas.height);
        ctx.drawImage(this.image, this.x, 0, myCanvas.width, myCanvas.height);
    }
}



/*document.onkeydown = (e) => {
    let whereToGo = e.keyCode;
    currentGame.Spaceship.movePlayer(whereToGo);
}*/

function levelUp () {
    if (currentGame.score > 3 && currentGame.score < 20) {
        document.getElementById('messages').style.display = 'block';
        setTimeout(clearMessages, 5000);
     //   backgroundImage.draw ();
     //   backgroundImage.move ();
    }
}


function clearMessages () {
    document.getElementById('messages').style.display = 'none';
}

function checkBoundaries () {
        if (currentPlayer.x >= 820) {
        currentPlayer.x = 819;
        currentPlayer.speedX = 0;
        } 
        else if (currentPlayer.x <= 20) {
        currentPlayer.x = 21;
        currentPlayer.speedX = 0;
        } else if (currentPlayer.y <= 20) {
        currentPlayer.y = 21;
        currentPlayer.speedY = 0;
        } else if (currentPlayer.y >= 520) {
        currentPlayer.y = 519;
        currentPlayer.speedY = 0;
        }
}

document.addEventListener ('keydown', e => {
    switch (e.keyCode) {
        case 38:
            currentPlayer.speedY -= 0.5;
            break;
        case 40:    
            currentPlayer.speedY += 0.5;
            break;
        case 37:
            currentPlayer.speedX -= 0.5;
            break;
        case 39:
            currentPlayer.speedX += 0.5;
            break; 
    }
});


function resetGame () {
    this.car = {},
    this.obstacles = [];
    this.shots = [];
    document.getElementById('game-board').style.display = 'inline';
    document.getElementById('score').innerHTML = currentGame.score;
    document.getElementById('score').style.display = 'none';
    document.getElementById('game-over-score').innerHTML = `FINAL SCORE: ${currentGame.score}`;
    document.getElementById('game-over').style.display = 'inline';
    document.getElementById('game-over-score').style.display = 'inline';
}

function startGame() {
    document.getElementById('score').innerHTML = 0;
    document.getElementById('game-board').style.display = 'block';
    document.getElementById('game-welcome').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-score').style.display = 'none';
    document.getElementById('score').style.display = 'inline';
    //Instantiate a new game of the game class
    currentGame = new Game();
    currentGame.gameRunning = true;
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
let obstacles2Frequency = 0;


function updateCanvas() {
    ctx.clearRect(0, 0, 900, 600);
    currentGame.Spaceship.drawPlayer();
    currentPlayer.newPos();
    checkBoundaries ();

   
    //Draw bullets
    shotsFrequency++
    if (shotsFrequency % 20 === 1) { //bullets speed
        let newBullet = new Bullets(
            currentPlayer.x+25, 
            currentPlayer.y, 
            10, 
            10);
        currentGame.shots.push(newBullet);

      //  console.log(currentGame.shots);
        
    }
    for(let i = 0; i<currentGame.shots.length; i++) { 
       currentGame.shots[i].y -= 10;
       currentGame.shots[i].drawBullet();
       if (currentGame.shots[i].y < 0) {
        currentGame.shots.splice(i,1);
       }
    }

    //Draw an obstacle
    obstaclesFrequency++;
    if (obstaclesFrequency % 100 === 1) {
        
        let randomObstacleX = Math.floor(Math.random() * 720);
        let randomObstacleY = 0;
        let newObstacle = new Obstacle(
            randomObstacleX, 
            randomObstacleY, 
            50, 
            50);
        currentGame.obstacles.push(newObstacle);
        
    }

if (currentGame.obstacles.length > 0) {
    for(let h = 0; h<=currentGame.obstacles.length -1; h++) {
        currentGame.obstacles[h].y += 0.5;
        currentGame.obstacles[h].drawObstacle();
        
        if (currentGame.obstacles[h].y > 520) {
        currentGame.obstacles.splice(h,1);
           }


        //draw obstacle 2
        if (currentGame.score > 3) {
            obstacles2Frequency++;
            if (obstacles2Frequency % 90 === 1) {
        
            let randomObstacle2X = Math.floor(Math.random() * 800);
            let randomObstacle2Y = 0;
            let newObstacle2 = new Obstacle2(
                randomObstacle2X, 
                randomObstacle2Y, 
                50, 
                50);
            currentGame.obstacles2.push(newObstacle2);
         }}

        for(let i = 0; i<=currentGame.obstacles2.length -1; i++) {
        currentGame.obstacles2[i].y += 0.5;
        currentGame.obstacles2[i].drawObstacle1();

        if (currentGame.obstacles2[i].y > 520) {
            currentGame.obstacles2.splice(i,1);
               }
    
    }
    
        for(let j = 0; j<currentGame.obstacles.length -1; j++){
        for (let k = 0; k<currentGame.shots.length; k++) {
            
            if (bulletHit(currentGame.obstacles[j],currentGame.shots[k])){
                currentGame.obstacles.splice(j,1);
                currentGame.shots.splice(k,1);
                currentGame.score++;
                levelUp () 
                document.getElementById('score').innerHTML = currentGame.score;
            }
        }
        }
         
        if (detectCollision(currentGame.obstacles[h])) {
            currentGame.gameRunning = false;
            resetGame ()
            obstaclesFrequency = 0;
            currentGame.obstacles = [];
            
        }

    if (currentGame.obstacles2.length > 0) {
       for (let l = 0; l<currentGame.obstacles2.length -1; l++) {
        if (detectCollision(currentGame.obstacles2[l])) {
            currentGame.gameRunning = false;
            resetGame ()
            obstacles2Frequency = 0;
            currentGame.obstacles2 = [];
            
        }
       }

       for(let j = 0; j<currentGame.obstacles2.length -1; j++){
        for (let k = 0; k<currentGame.shots.length; k++) {
            
            if (bulletHit(currentGame.obstacles2[j],currentGame.shots[k])){
                currentGame.obstacles2.splice(j,1);
                currentGame.shots.splice(k,1);
                currentGame.score++;
                levelUp () 
            }
        }
        }
    }

    
        
        // Obstacle moved outside the canvas
        if (currentGame.obstacles.length > 0 && currentGame.obstacles[h].y >= 600) {
            currentGame.obstacles.splice(h, 1);
        }
    }
}

    if (currentGame.gameRunning) { 
    requestAnimationFrame(updateCanvas);
    }
}




