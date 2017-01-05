class Person {
  constructor(name, destinationFloor){
    this.name = name;
    this.destinationFloor = destinationFloor;
  }

  destinationArrived(){
    console.log(`${this.name}: I arrived to my destination`);
  }
}

module.exports = Person;
