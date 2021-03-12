var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mouse');
var Horse = require('./horse');
var chalk = require('chalk');

var butch = new Dog('Butch');
var tom = new Cat('Tom');
var jerry = new Mouse('Jerry', 1);
var unicorn = new Horse('Unicorn');
// butch.sayHi();
// console.log("Before");
// console.log(jerry);
// console.log(tom);
// console.log(butch);
try {
    console.log(" tom.eat(butch);");
    tom.eat(butch);
} catch (error) {
    console.log('Cat only eat ',chalk.red('mouse!'));
}
// jerry.die();
// butch.eat(tom);
// tom.die();
// console.log(tom);
// console.log(butch);
// console.log("After being ate tom and jerry are died");
// console.log(jerry);
// console.log(tom);
console.log(`I'm Mouse, My name is ${jerry.name} and i'm so happy wonderfull in my life`);
console.log('Tom eat Jerry');
tom.eat(jerry);
jerry.die();
console.log(`RIP ${jerry.name}`)
console.log(tom);
console.log('Tom eat Butch');
try {
    tom.eat(butch);
} catch (error) {
    console.log('Error while cat eat a dog');
}
console.log(tom);

console.log('Dog eat cat')
butch.eat(tom);
console.log(butch);

console.log('Dog eat horse')
try {
    butch.eat(unicorn);
} catch (error) {
    console.log("Dog isn't eat horse");
}
console.log(butch);