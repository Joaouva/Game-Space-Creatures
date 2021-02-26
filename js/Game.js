class Game {
    constructor() {
        this.car = {},
        this.obstacles = [];
        this.obstacles2 = [];
        this.obstacles3 = [];
        this.shots = [];
        this.score = 0;
        this.gameRunning = true;
    }
}


class Bullets {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.img = '../images/lasershot.png';
    }
    drawBullet (){
        const bulletImg = new Image ()
        bulletImg.src = this.img;
        ctx.drawImage(bulletImg,this.x, this.y, 10, 10);
    }
}