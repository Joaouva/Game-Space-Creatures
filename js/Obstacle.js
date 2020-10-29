class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = './images/alienspaceship.png';
        this.img1 ='./images/alienblue.png'
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
        this.height = 50;
        this.width = 50;
        this.img1 ='../images/asteroid.png'
    }
    drawObstacle1(){
        const obsImg1 = new Image();
        obsImg1.src = this.img1;
        ctx.drawImage(obsImg1,this.x, this.y -10, 50, 50);
    }
}

/*
    ctx.drawImage(obsImg,170, this.y, 30, 30);
        ctx.drawImage(obsImg1,220, this.y, 30, 30);
        ctx.drawImage(obsImg2,270, this.y, 30, 30);
        ctx.drawImage(obsImg,320, this.y, 30, 30);
        ctx.drawImage(obsImg1,370, this.y, 30, 30);
        ctx.drawImage(obsImg2,420, this.y, 30, 30);
        ctx.drawImage(obsImg,470, this.y, 30, 30);
        ctx.drawImage(obsImg1,520, this.y, 30, 30);
        ctx.drawImage(obsImg2,570, this.y, 30, 30);
        ctx.drawImage(obsImg,620, this.y, 30, 30);
        ctx.drawImage(obsImg1,670, this.y, 30, 30);
        ctx.drawImage(obsImg2,720, this.y, 30, 30);
        ctx.drawImage(obsImg,770, this.y, 30, 30);
        */