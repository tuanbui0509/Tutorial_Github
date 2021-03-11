let chalk = require('chalk');

function test(){

}

test.prototype.color1 = function(){
    console.log('Hi! I want to show you that is '+chalk.green('My wife'))
};

module.exports = test;