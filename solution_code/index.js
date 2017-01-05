const Person = require('./person.js');
const Floor = require('./floor.js');
const Elevator = require('./elevator.js');

class ElevatorManager {
  constructor(elevator){
    this.elevator = elevator;
  }
}

let elevator = new Elevator(floors);
let manager = new ElevatorManager(elevator)
manager.elevator.start();

manager.elevator.call(3);
manager.elevator.call(1);

setTimeout(() => {manager.elevator.call(3)}, 10000);

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
