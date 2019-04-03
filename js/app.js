// Enemies our player must avoid
class Enemy {
    constructor(x=1) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        let postionYArray=[60,140,220]
        let YMax=2;
        this.x = x;
        this.y = postionYArray[Math.floor(Math.random()*(YMax+1))];
        let max=10;
        let min=3;
        this.speed=Math.floor(Math.random()*(max-min+1)+min);
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if(this.x>499){
            this.x=2;
        }
        else{
            this.x = this.x + this.speed
            //this.x*=dt
        }
        
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 353;
        this.moveX=0;
        this.moveY=0;
    }
    update(){
       this.x-=this.moveX;
       this.moveX=0
       this.y-=this.moveY;
       this.moveY=0;
    }
    handleInput(keyCode){
        console.log(keyCode)
        switch(keyCode){
            case 'left':
                this.moveX=80;
                break
            case 'right':
               this.moveX=-80;
               break
            case 'up':
               this.moveY=80;
               break
            case 'down':
               this.moveY=-80;
               break
        } 
    }
    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
let allEnemies=[new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy(),new Enemy()];
let player=new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
