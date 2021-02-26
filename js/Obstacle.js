class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = './images/alienspaceship.png';
    }
    drawObstacle() {
        const obsImg = new Image();
        obsImg.src = this.img;
        ctx.drawImage(obsImg,this.x, this.y, 50, 50);
    }

}

class Obstacle2 extends Obstacle {
    constructor(x, y, width, height) {
        super (x, y, width, height)
        this.x = x;
        this.y = y;
        this.height =width;
        this.width =height;
        this.img1 ='./images/asteroid.png';
    }
    drawObstacle1(){
        const obsImg1 = new Image();
        obsImg1.src = this.img1;
        ctx.drawImage(obsImg1,this.x, this.y -10, 50, 50);
    }
}


class Obstacle3 extends Obstacle {
    constructor(x, y, width, height) {
        super (x, y, width, height)
        this.x = x;
        this.y = y;
        this.height = width;
        this.width = height;
        this.img1 ='./images/alienblue.png';
    }
    drawObstacle2(){
        const obsImg1 = new Image();
        obsImg1.src = this.img1;
        ctx.drawImage(obsImg1,this.x, this.y -10, 50, 50);
    }
}
