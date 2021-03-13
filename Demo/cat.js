Mouse = require('./mouse');


function Cat(name) {
    this.stomach = [];
    this.name = name;
    this.dead = false;
}

Cat.prototype.eat = function (animal) {
    if (animal instanceof Mouse)
        this.stomach.push(animal)
    else
        throw new Error('Cat con only eat mouse!');
}

Cat.prototype.die = function () {
    this.dead = true;
}

Cat.prototype.jump = function () {
    console.log('Cat is jumping ...');
}

Cat.prototype.beat = function () {
    console.log('Cat is beating snack');
}
Cat.prototype.cry = function () {
    console.log('Cat is crying hu hu hu');
}



module.exports = Cat;