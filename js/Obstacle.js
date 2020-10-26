class Obstacle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = '../images/alienspaceship.png';
        this.img1 ='../images/alienblue.png'
        this.img2 ='../images/asteroid.png'
    }
    drawObstacle() {
        const obsImg = new Image();
        const obsImg1 = new Image();
        const obsImg2 = new Image();
        obsImg.src = this.img;
        obsImg1.src = this.img1;
        obsImg2.src = this.img2;
        ctx.drawImage(obsImg,20, this.y, 30, 30);
        ctx.drawImage(obsImg,70, this.y, 30, 30);
        ctx.drawImage(obsImg,120, this.y, 30, 30);
        ctx.drawImage(obsImg,20, this.y, 30, 30);
        ctx.drawImage(obsImg,70, this.y, 30, 30);
        ctx.drawImage(obsImg,120, this.y, 30, 30);
        ctx.drawImage(obsImg,20, this.y, 30, 30);
        ctx.drawImage(obsImg,70, this.y, 30, 30);
        ctx.drawImage(obsImg,120, this.y, 30, 30);
    }
    drawObstacle1(){
        const obsImg1 = new Image();
        obsImg1.src = this.img1;
        ctx.drawImage(obsImg1,20, this.y, 30, 30);
        ctx.drawImage(obsImg1,70, this.y, 30, 30);
        ctx.drawImage(obsImg1,120, this.y, 30, 30);
        ctx.drawImage(obsImg1,20, this.y, 30, 30);
        ctx.drawImage(obsImg1,70, this.y, 30, 30);
        ctx.drawImage(obsImg1,120, this.y, 30, 30);
        ctx.drawImage(obsImg1,20, this.y, 30, 30);
        ctx.drawImage(obsImg1,70, this.y, 30, 30);
        ctx.drawImage(obsImg1,120, this.y, 30, 30);

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