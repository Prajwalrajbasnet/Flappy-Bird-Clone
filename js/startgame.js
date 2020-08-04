export default function StartGame(game, sprite, canvas){
  this.game = game;
  this.sprite = sprite;
  this.canvas = canvas;
  this.ctx = this.game.ctx;
  this.scale = 2.5;

  this.draw = function(){
    this.ctx.fillStyle = 'lightblue';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.sprite, 350, 90, 91, 26, 100, 200, 91 * 3, 26 * 3);
    this.ctx.drawImage(this.sprite, 353, 117, 54, 61, this.canvas.width/2 - 60, 450, 54 * this.scale, 61 * this.scale );
  }

}