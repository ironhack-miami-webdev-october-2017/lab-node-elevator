// First iteration everyone is in the basement
// People is in different floors and wants to go to different floors. One by one.
//

class Elevator {
  constructor(){
    this.floor       = 0;
    this.MAXFLOOR    = 10;
    this.requests    = [];
    this.idle        = true; //when true, the elevator is not serving any request
    this.waitingList = [];
    this.passengers  = [];
    this.direction   = "up";
    this.currentReq  = null;
  }

  start(){
    this.timer = setInterval(() => { this.update() }, 1000);
  }

  stop(){
    clearInterval(this.timer);
  }

  update(){
    if (this.idle && this.requests.length !== 0) {
      this.idle = false;
      this.currentReq = this.requests.shift();
    } else {
      if(this.requests.length !== 0 || this.currentReq){ this.log() };
      console.log(this.currentReq);
      if (this.currentReq < this.floor) {
        console.log("Bajando");
        this.floorDown();
      } else if (this.currentReq > this.floor) {
        console.log("Subiendo");
        this.floorUp();
      } else {
        this.idle = true;
        console.log(this.floor);
        this.currentReq = null;

      }
      this.waitingList.forEach((person, index) => {
        if (person.originFloor === this.floor) {
          this.passengers.push(person);
          this.waitingList.splice(index, 1);
          console.log(`${person.name} has entered the elevator. He smells`);
        }
      })

      this.passengers.forEach((passenger, index) => {
        if (passenger.destinationFloor === this.floor) {
          this.passengers.splice(index, 1);
          console.log(`${passenger.name} has left the elevator. He arrived`);
        }
      })

      console.log("Waiting List: ", this.waitingList);
      console.log("Passengers: ", this.passengers);
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.direction = "up";
    }
  }

  floorDown() {
    if (this.floor >= 0) {
      this.floor--;
      this.direction = "down";
    }
  }

  call(person) {
    this.waitingList.push(person);

    this.requests = this._sortWaitingRequests();
  }

  _sortWaitingRequests() {

    let floorsRequested = [];

    this.waitingList.forEach((person) => {
      if(!floorsRequested.includes(person.originFloor))
        floorsRequested.push(person.originFloor);
      if(!floorsRequested.includes(person.destinationFloor))
        floorsRequested.push(person.destinationFloor);
    })

    if (this.direction === "up") {
      return floorsRequested.sort((a, b) => {
        return a - b;
      })
    } else {
      return floorsRequested.sort((a, b) => {
        return b - a;
      })
    }
  }

  log() {
    console.log(`Idle: ${this.idle} | Floor: ${this.floor} | Request: ${this.currentReq} | Requests: ${this.requests}`);
  }
}

module.exports = Elevator;
