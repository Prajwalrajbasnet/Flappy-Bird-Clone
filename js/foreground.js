export default function Foreground(game, sprite){
  this.game = game;
  this.ctx = this.game.ctx;
  this.sprite = sprite;
  this.spX = 292;
  this.spY = 0;
  this.width = 168;
  this.height = 55;

  this.dx = 4;
  this.xOffset = 950;
  this.draw = function(){
    this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, this.xOffset, 600, 300, 100);
    this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, this.xOffset - 350, 600, 300, 100);
    this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, this.xOffset - 650, 600, 300, 100);
    this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, this.xOffset - 950, 600, 300, 100);


    // this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, 300, 600, 300, 100);
  }

  this.update = function(){
    if(this.xOffset <= 650){
      this.xOffset = 950;
    }
    this.draw();
    this.xOffset -= this.dx;
  }
}