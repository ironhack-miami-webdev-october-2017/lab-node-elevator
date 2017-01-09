const Person = require('./person.js');
const Floor = require('./floor.js');
const Elevator = require('./elevator.js');

let pedro = new Person("Pedro", 0, 5);

let elevator = new Elevator();
elevator.start();

elevator.call(pedro);
// elevator.call({at: 5, to: 3});

setTimeout(() => {elevator.call({at: 3, to: 5})}, 10000);

// let rafael = new Person("Rafael", 5);
// let sara = new Person("Sara", 4);
//
// let floors = [];
//
// for(let i = 0;i<10;i++){
//   floors.push(new Floor(i));
// }
//
// floors[2].addPerson(rafael);
// floors[0].addPerson(sara);
