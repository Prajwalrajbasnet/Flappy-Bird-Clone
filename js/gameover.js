import Game from './game.js';
export default function GameOver(game, sprite, canvas){
  var self = this;
  this.game = game;
  this.sprite = sprite;
  this.canvas = canvas;
  this.ctx = this.game.ctx;
  this.scale = 2.5;
  this.restart = new Image;
  this.restart.src = 'assets/restart.png';

  this.draw = function(){
    this.ctx.drawImage(this.sprite, 395, 59, 97, 21, this.canvas.width/2 - 112 -10, 150, 97 * this.scale, 21 * this.scale );
    this.ctx.drawImage(this.sprite, 3, 257, 113, 65, this.canvas.width/2 - 112 -30, this.canvas.height / 2 - 57, 112 * this.scale, 57 * this.scale);
    this.ctx.drawImage(this.restart, this.canvas.width/2 - 50, 500, 100, 35);
  }

  this.renderScores = function(score, highScore){
    this.ctx.lineWidth = '2';
    this.ctx.font = '30px Teko';
    this.ctx.fillStyle  ='black';
    this.ctx.fillText(score, 320, 350);
    this.ctx.strokeStyle = 'white';
    this.ctx.strokeText(score, 320, 350 );

    this.ctx.lineWidth = '2';
    this.ctx.font = '30px Teko';
    this.ctx.fillStyle  ='black';
    this.ctx.fillText(highScore, 320, 400);
    this.ctx.strokeStyle = 'white';
    this.ctx.strokeText(highScore, 320, 400 );
  }
  canvas.addEventListener('click', function(){
    // self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    // self.game.render();
    // self.game.mock();
    // console.log("event after game over");
    // location.reload();
  });
}