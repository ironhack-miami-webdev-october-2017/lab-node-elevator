// First iteration everyone is in the basement
// People is in different floors and wants to go to different floors. One by one.
//

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 5;
    this.requests   = [];
    this.idle       = true; //when true, the elevator is not serving any request
    this.passengers = [];
    this.direction  = "up";
    this.currentReq = null;
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

      if (this.currentReq < this.floor) {
        this.floorDown();
      } else if (this.currentReq > this.floor) {
        this.floorUp();
      } else {
        this.idle = true;
        console.log(this.floor);
        this.currentReq = null;

      }
      this.passengers.forEach((passenger) => {
        if (passenger.originFloor === this.floor) {
          console.log(`${passenger.name} has entered the elevator. He smells`);
        }
        if (passenger.destinationFloor === this.floor) {
          console.log(`${passenger.name} has left the elevator. He arrived`);
        }
      })

      // si this.request.at === this.floor
      //    this.passengers.push this.request.shift
      //    console "hemos llegado a tu planta"
      // si this.passengers.to === this.floor
      //    this.passengers.shift
      //    console "te dejamos en tu planta"
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }

  floorDown() {
    if (this.floor >= 0) {
      this.floor--;
    }
  }

  call(person) {
    this.passengers.push(person);

    this.requests = this._sortPassengerRequests();
  }

  _sortPassengerRequests() {

    let floorsRequested = [];

    this.passengers.forEach((passenger) => {
      if(!floorsRequested.includes(passenger.originFloor))
        floorsRequested.push(passenger.originFloor);
      if(!floorsRequested.includes(passenger.destinationFloor))
        floorsRequested.push(passenger.destinationFloor);
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
