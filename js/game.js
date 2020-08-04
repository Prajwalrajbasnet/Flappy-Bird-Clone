import Background from './background.js';
import Foreground from './foreground.js';
import Bird from './bird.js';
import Pipes from './pipes.js';
import GameOver from './gameover.js';
import StartGame from './startgame.js';
export default function Game(){
    var self = this; 
    this.canvas = document.createElement('canvas');
    this.canvas.width = 475;
    this.canvas.height = 700;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
    this.canvas.style.border = '1px solid black';
    this.sprite = new Image();
    this.sprite.src = 'assets/flappy-bird-sprite.png';
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height );
    this.ctx.drawImage(this.sprite, 0, 0);

    this.pipes = [];

    this.background = new Background(this, this.sprite);
    this.foreground = new Foreground(this, this.sprite);
    this.bird = new Bird(this, this.sprite, this.canvas);
    this.over = new GameOver(this, this.sprite, this.canvas);
    this.start = new StartGame(this, this.sprite, this.canvas);
    this.states = ['start', 'game', 'over'];
    this.activeState = 'start';

    this.render = function(){
      if(this.activeState == 'start'){
        this.start.draw();
      }
      else{
        this.background.draw();
        this.foreground.update();
        this.pipes.forEach(function(pipe){
          pipe.update();
        });
        this.bird.update();
        this.bird.renderScore();
        }
    }

  this.renderGame = function(){
      this.background.draw();
      this.foreground.draw();
      this.bird.draw();
  }

  this.update = function(){
    this.pipes.forEach(function(pipe){
      if(pipe.offsetX <= -100){
        self.pipes.splice(self.pipes.indexOf(pipe), 1);
        self.bird.score += 1;
      }

    if(self.bird.positionX < pipe.offsetX + pipe.scaledWidth && 
      self.bird.positionX + self.bird.scaledWidth > pipe.offsetX && 
      self.bird.positionY < pipe.topPipeOffsetY + pipe.scaledHeight &&
      self.bird.positionY + self.bird.scaledHeight > pipe.topPipeOffsetY){
        self.gameOver();
      }

      if(self.bird.positionX < pipe.offsetX + pipe.scaledWidth && 
        self.bird.positionX + self.bird.scaledWidth > pipe.offsetX && 
        self.bird.positionY < pipe.bottomPipeOffsetY + pipe.scaledHeight &&
        self.bird.positionY + self.bird.scaledHeight > pipe.bottomPipeOffsetY){
          self.gameOver();
        }
    });


  }
  this.generatePipes = function(){
    var topPipeY = Math.random() * 200 - 350;
    self.pipes.push(new Pipes(self, self.sprite, self.canvas, topPipeY));
  }

  var pipeGenerator = setInterval(this.generatePipes, 2000);

  this.gameOver = function(){
    this.bird.jump = 0;
    this.bird.positionY = 572;
    this.bird.gravity = 0;
    this.bird.wingState = 2;
    this.bird.speed = 0;
    this.foreground.dx = 0;
    this.pipes.forEach(function(p){
      p.dx = 0;
    })
    this.activeState = 'over';
    this.over.draw();
    this.over.renderScores(this.bird.score, localStorage.getItem('HighScore'));
  }
  this.reset = function(){
    this.bird.jump = 6.65;
    this.bird.positionY = 150;
    this.bird.gravity = 0.35;
    this.bird.wingState = 0;
    this.bird.speed = 0;
    this.foreground.dx = 4;
    this.bird.update();
    this.pipes = [];
    this.bird.score = 0;
    this.activeState = 'game';
    this.render();
  }
  var gameLoop = function(){
    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
    window.requestAnimationFrame(gameLoop);
    self.render();
    self.update();
  }
  window.requestAnimationFrame(gameLoop);

  this.canvas.addEventListener('click', function(){
    console.log(self.activeState);
    if(self.activeState == 'start'){
      self.activeState = 'game';
      self.render();
      console.log('changed to game');
    }
    else if(self.activeState == 'game'){
      self.bird.flapUp();
      console.log('in game');
    }
    else if(self.activeState == 'over'){
      self.activeState = 'game';
      self.reset();
      console.log('changed to game');
    }
  });
}
var game = new Game();