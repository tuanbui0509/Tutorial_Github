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

Dragon.prototype.sleep = function(){
    console.log('Sleeping ...zzZ');
}

module.exports = Dragon;