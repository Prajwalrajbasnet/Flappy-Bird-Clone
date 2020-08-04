export default function Pipes(game, sprite, canvas, topPipeOffsetY){
  this.game = game;
  this.ctx = this.game.ctx;
  this.sprite = sprite;
  this.canvas = canvas;
  this.topPipeSx = 56;
  this.topPipeSy = 322;
  this.bottomPipeSx = 84;
  this.bottomPipeSy = 322;
  this.width = 26;
  this.height = 160;
  this.scale = 3.5;
  this.scaledHeight = this.height * this.scale;
  this.scaledWidth = this.width * this.scale;
  this.topPipeOffsetY = topPipeOffsetY;
  this.separation = 150;
  this.bottomPipeOffsetY = this.topPipeOffsetY + this.scaledHeight + this.separation;
  this.offsetX = this.canvas.width + 30;

  this.dx = 4;

  this.draw = function(){
    this.ctx.drawImage(this.sprite, this.topPipeSx, this.topPipeSy, this.width, this.height, this.offsetX, this.topPipeOffsetY, this.scaledWidth, this.scaledHeight );
    this.ctx.drawImage(this.sprite, this.bottomPipeSx, this.bottomPipeSy, this.width, this.height, this.offsetX, this.bottomPipeOffsetY,  this.scaledWidth, this.scaledHeight );
  }

  this.update = function(){
    this.draw();
    this.offsetX -= this.dx;
  }
}