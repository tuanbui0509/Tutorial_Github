var horse = require('./horse');
var cat = require('./cat');
var chalk = require('chalk');
function Dog(name) {
    this.stomach = [];
    this.name = name;
    this.dead = false;
}

Dog.prototype.eat = function (animal) {
    if (animal instanceof cat)
        this.stomach.push(cat);
    else
        throw new Error('Dog is not eat horse!');
}

Dog.prototype.sayHi = function () {
    console.log('Hi! i am a dog. My name is ' + chalk.red(this.name));
}

Dog.prototype.die = function(){
    this.dead = true;
}

module.exports = Dog;
//https://www.npmjs.com/package/chalk