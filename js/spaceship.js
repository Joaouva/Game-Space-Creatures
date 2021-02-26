class Spaceship {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.speedX = 0;
      this.speedY = 0;
      this.img = './images/Spaceship.png';
    }
    drawPlayer(){
      const player = new Image();
      player.src = this.img;
      ctx.drawImage(player, this.x, this.y, this.width, this.height);
    }
    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    left() {
      return this.x;
    }

    right() {
      return this.x + this.width;
   }

    top() {
      return this.y;
   }

    bottom() {
      return this.y + this.height;
    }

  
  }

  