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
      this.currentReq = this.requests[0];
    } else {
      if(this.requests.length !== 0 || this.currentReq){ this.log() };

      if (this.currentReq < this.floor) {
        this.floorDown();
      } else if (this.currentReq > this.floor) {
        this.floorUp();
      } else {
        this.idle = true;
        this.currentReq = null;
      }

      // si this.request.at === this.floor
      //    this.passengers.push this.request.shift
      //    console "hemos llegado a tu planta"
      // si this.passengers.to === this.floor
      //    this.passengers.shift
      //    console "te dejamos en tu planta"
    }
  }

  floorUp () {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    }
  }

  floorDown () {
    if (this.floor >= 0) {
      this.floor--;
    }
  }

  call (person) {
    this.requests.push(person.originFloor);
    this.requests.push(person.destinationFloor);

    this.requests = _sortRequests();

    // if(!this.requests.includes(person.at)) {
    //   this.requests.push(person.at);
    // }
    // if(!this.requests.includes(person.to)) {
    //   this.requests.push(person.to);
    // }
  }

  log () {
    console.log(`Idle: ${this.idle} | Floor: ${this.floor} | Request: ${this.currentReq} | Requests: ${this.requests}`);
  }

  _sortRequests () {
    if (this.direction === "up") {
      return this.requests.sort((a, b) => {
        return a - b;
      })
    } else {
      return this.requests.sort((a, b) => {
        return b - a;
      })
    }

  }

  _updatePassengers () {
    this.passengers.forEach(() => {

    })
  }
}

module.exports = Elevator;
