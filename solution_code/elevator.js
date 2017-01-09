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
    this.currentReq = -1;
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

      si this.request.at === this.floor
         this.people.push this.request.shift
         console "hemos llegado a tu planta"
      si this.people.to === this.floor
         this.people.shift
         console "te dejamos en tu planta"
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
      this.passengers.forEach((person) => {
        person.at = this.floor;
      })
    }
  }

  floorDown() {
    if (this.floor >= 0) {
      this.floor--;
      this.passengers.forEach((person) => {
        person.at = this.floor;
      })
    }
  }

  call (person) {
    if(!this.requests.includes(person.at)) {
      this.requests.push(person.at);
    }
    if(!this.requests.includes(person.to)) {
      this.requests.push(person.to);
    }
  }

  log() {
    console.log(`Idle: ${this.idle} | Floor: ${this.floor} | Request: ${this.currentReq} | Requests: ${this.requests}`);
  }
}

module.exports = Elevator;
