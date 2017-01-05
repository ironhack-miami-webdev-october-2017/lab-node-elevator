class Floor {
  constructor(floorNumber){
    this.floorNumber = floorNumber;
    this.people = [];
  }

  addPerson(person){
    this.people.push(person);
  }
}

module.exports = Floor;
