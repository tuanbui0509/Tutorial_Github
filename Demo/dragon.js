function Dragon(name){
    this.stomach = [];
    this.name = name;
    this.dead = false;
}

Dragon.prototype.eat = function(animal){
    this.stomach.push(animal)
}

Dragon.prototype.die = function() {
    this.dead = true;
}

module.exports = Dragon;