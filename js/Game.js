class Game {
    constructor() {
        this.car = {},
        this.obstacles = [];
        this.obstacles2 = [];
        this.shots = [];
        this.score = 0;
        this.gameRunning = false;
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