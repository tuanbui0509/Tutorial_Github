function tiger() {
    this.fightWin = [];
    this.fightLost = [];
}

tiger.prototype.fight = function(dog) {
    this.fightWin.push(dog);
}

tiger.prototype.lost = function(lion) {
    this.fightLost.push(lion);
}

tiger.prototype.eat = function() {
    console.log('A tiger is eatting bone');
}

tiger.prototype.sleep = function() {
    console.log('A tiger is sleeping in the garden');
}

module.exports = tiger;