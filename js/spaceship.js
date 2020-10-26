class Spaceship {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = '../images/Spaceship.png';
    }
    drawPlayer(){
      const player = new Image();
      player.src = this.img;
      ctx.drawImage(player, this.x, this.y, this.width, this.height);
    }
    movePlayer(keyCode){
      console.log('x', this.x);
      console.log('y', this.y);
      ctx.clearRect(this.x, this.y, this.width, this.height);
      switch(keyCode){
        case 37:
        //Making sure car doesn't go off the road
        if(this.x > 20){
          this.x -= 80;
        }
          break;
        case 39:
        //Making sure car doesn't go off the road
        if (this.x < 790 ){
          this.x += 80;
        }
          break;
        case 38:
        if (this.y > 20) {
          this.y -= 80;
        }
        break;
        case 40:
          if (this.y < 520) {
            this.y += 80;
          }
      }
    }
    fireWeapon(keyCode){
      ctx.clearRect(this.x, this.y, this.width, this.height);
      switch (keyCode) {
        case 32:
        drawFire();
      }
    }
  }

  class Fire {
    constructor(){
      this.x = Spaceship.x;
      this.y = Spaceship.y;
      this.width = 10;
      this.height = 10;
      this.img = '../images/Spaceship.png';
    }
    drawFire(){
      const fireImg = new Fire();
      fireImgsrc = this.img;
      ctx.drawImage(fireImg, this.x, this.y, this.width, this.height);
    }
  }