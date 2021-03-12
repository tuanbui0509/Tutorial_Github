function lion(name) {
    this.name = name;
}

lion.prototype.run = function () {
    console.log(`${this.name} is running ...`);
}

lion.prototype.jump = function () {
    console.log(`${this.name} is jumping`);
}

module.exports = lion;