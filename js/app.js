// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
   this.x = x;
   this.y = y;
   this.speed = speed;
 
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
this.x = this.x + (dt * this.speed);

   if (this.x > 550) {
        this.restart();
        }

    // Player collides with Enemy at various y coordinates to make the game more difficult
    if (this.y == player.y - 60 && (this.x > player.x - 20 && this.x < player.x + 20)) {
        player.reset();
        }
        else if (this.y == player.y -40 && (this.x > player.x - 20 && this.x < player.x + 20)) {
                player.reset();
        }        
        else if (this.y == player.y -20 && (this.x > player.x - 20 && this.x < player.x + 20)) {
                player.reset();
        }       
        else if (this.y == player.y  && (this.x > player.x - 20 && this.x < player.x + 20)) {
                player.reset();
        }
        else if (this.y == player.y + 20 && (this.x > player.x - 20 && this.x < player.x + 20)) {
                player.reset();
        }       

};

Enemy.prototype.restart = function () {
    var yS = [220, 140, 60];
    var speedS = [450, 550, 650];
    this.x = x;
    this.y = yS[Math.floor(Math.random() * 3)];
    this.speed = speedS[Math.floor(Math.random() * 3)]
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = 200;
    this.y = 400;
    this.speed = 300;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.udate = function() {

    this.x = this.x;
    this.y = this.y;
    this.speed = this.speed;
    
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y)

};

//Player movement with arrow keys
Player.prototype.handleInput = function(dir) {
    if (dir == 'up') {
        this.y = this.y - 20;
    } else if (dir == 'down') {
        this.y = this.y + 20;
    } else if (dir == 'left') {
        this.x = this.x - 20;
    } else if (dir == 'right') {
        this.x = this.x + 20;
    }
//Resets the player position if he reaches the water
    if (this.y > 404) {
        this.y = 404;
    } else if (this.y < -5) {
        this.reset();
    }

    if (this.x < -15) {
        this.x = -15;
    } else if (this.x > 415) {
        this.x = 415;
    }

};

// Reset player to original starting position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
    this.speed = 300;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [];
var yS = [220, 140, 60];
var speedS = [450, 550, 650];

    for (var i = 0; i < 4; i++) {

        var x = -200;
        var y = yS[Math.floor(Math.random() * 3)];
        var speed = speedS[Math.floor(Math.random() * 4)];

        var enemy = new Enemy(x, y, speed);

        allEnemies.push(enemy);
    }
// Place the player object in a variable called player

var player = new Player(x, y, speed);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
