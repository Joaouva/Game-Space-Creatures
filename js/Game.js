class Game {
    constructor() {
        this.car = {},
        this.obstacles = [];
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