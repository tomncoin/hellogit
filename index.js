var Dog = require('./dog');
var Cat = require('./cat');

var dog = new Dog('Tom');

dog.sayHi();

var tom = new Cat();
tom.eat('dog');

console.log(tom);