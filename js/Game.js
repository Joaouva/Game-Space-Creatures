class Game {
    constructor() {
        this.car = {},
        this.obstacles = [];
        this.shots = [];
        this.score = 0;
    }
}

class GameOver {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 400;
      this.height = 400;
      this.img = '../images/gameover.png';
    }
    drawGameOver(){
      const gameOver = new Image();
      GameOverImg.src = this.img;
      ctx.drawImage(GameOverImg, this.x, this.y, this.width, this.height);
    }
}

class Bullets {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }
    drawBullet (){
        ctx.fillStyle = 'white';
        ctx.fillRect (this.x, this.y, this.width, this.height);
    }
}