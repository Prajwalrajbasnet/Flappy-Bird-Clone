export default function Background(game, sprite){
    this.game = game;
    this.ctx = this.game.ctx;
    this.spX = 0;
    this.spY = 0;
    this.width = 144;
    this.height = 256;
    this.sprite = sprite;

    this.draw = function(){
      this.ctx.drawImage(this.sprite, this.spX, this.spY, this.width, this.height, 0, 0, 475, 700 );
    }
}