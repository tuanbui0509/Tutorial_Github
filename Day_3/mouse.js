function mouse(){
    console.log("Hi i'm Jerry and i appreciate to meet you")
    this.stomach = []
}

mouse.prototype.eat = function(animal_tiny){
    this.stomach.push(animal_tiny)
}