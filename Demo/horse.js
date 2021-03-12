function horse(name) {
    this.name = name;
    this.stomach = [];
}

horse.prototype.eat = function(grass) {
    this.stomach.push(grass);
}

horse.prototype.jump = function(){
    console.log(this.name + ' is jumping ...!');
}

horse.prototype.run = function(){
    console.log(this.name + ' is running ...');
};

module.exports = horse;