export default function Bird(game, sprite, canvas){
  this.game = game;
  this.sprite = sprite;
  this.canvas = canvas;
  this.ctx = this.game.ctx;
  this.birdState = [
    {spX: 3, spY: 491}, 
    {spX: 31, spY: 491}, 
    {spX: 59, spY: 491},
    {spX: 31, spY: 491}
  ];
  this.wingState = 0;
  this.height = 12;
  this.width = 20;
  this.scale = 2.5;
  this.gravity = 0.35;
  this.jump = 6.65;
  this.speed = 0;
  this.positionX = 150;
  this.positionY = 150;
  this.scaledHeight = this.height * this.scale;
  this.scaledWidth = this.width * this.scale;
  this.score = 0;
  this.frameCount = 0;
  if(!(localStorage.getItem('HighScore'))){
    localStorage.setItem('HighScore',0);
  }
  
  this.draw = function(){
    var bird = this.birdState[this.wingState];
    this.ctx.drawImage(this.sprite, bird.spX, bird.spY, this.width, this.height, this.positionX , this.positionY, this.scaledWidth, this.scaledHeight);
  }
  
  this.update = function(){
    this.speed += this.gravity;
    this.positionY += this.speed;
    this.draw();
    this.frameCount ++;
    if(this.positionY >= 572){
      this.game.gameOver();
    }
    else{
      this.wingState += (this.frameCount % 5 == 0) ? 1 : 0;
      if(this.wingState >= this.birdState.length){
        this.wingState = 0;
      }
    }
    if(this.score > localStorage.getItem('HighScore')){
      localStorage.setItem('HighScore', this.score);
    }
    
  }
  this.flapUp = function(){
    this.speed = - this.jump;
  }

  this.renderScore = function(){
    this.ctx.lineWidth = '2';
    this.ctx.font = '55px Teko';
    this.ctx.fillText(this.score, this.canvas.width/2, 70);
    this.ctx.strokeText(this.score,this.canvas.width/2, 70 );
    this.ctx.strokeStyle = 'white';
  }
}