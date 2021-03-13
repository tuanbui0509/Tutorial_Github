Mouse = require('./mouse');


function Cat(name) {
    this.stomach = [];
    this.name = name;
    this.dead = false;
}

Cat.prototype.eat = function(animal) {
    if(animal instanceof Mouse)
        this.stomach.push(animal)
    else 
        throw new Error('Cat con only eat mouse!');
}

Cat.prototype.die = function() {
    this.dead = true;
}

Cat.prototype.run = function() {
    console.log('Cat is running ...');
}

module.exports = Cat;