var _ = require('lodash');

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

    this.log();
    if (this.requests.length !== 0) {

      this._passengersEnter();
      this._passengersLeave();

      this.requests = _.sortBy(_.uniq(this.requests))

      if (this.requests.includes(this.floor)) {
        this.requests.splice(this.requests.indexOf(this.floor),1);
      }

      if (this.direction === "up" && _.max(this.requests) > this.floor) {
        this.floorUp();
      }
      if (this.direction === "down" && _.min(this.requests) < this.floor) {
        this.floorDown();
      }

      // Check if the elevator needs to reverse direction
      this._checkSwitchDirection();
    }
  }


  _passengersEnter() {
    this.waitingList.forEach((person, index) => {
      if (person.originFloor === this.floor) {
        this.passengers.push(person);
        this.requests.push(person.destinationFloor);
        this.waitingList.splice(index, 1);
        console.log(`${person.name} has entered the elevator`);
      }
    })
  }


  _passengersLeave () {
    this.passengers.forEach((passenger, index) => {
      if (passenger.destinationFloor === this.floor) {
        this.passengers.splice(index, 1);
        console.log(`${passenger.name} has left the elevator`);
      }
    })
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
    console.log("call")
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
    this.requests = _.sortBy(_.uniq(this.requests))
  }

  _checkSwitchDirection () {
    if (( this.direction === "up"   && this.floor > _.max(this.requests)) ||
        ( this.direction === "down" && this.floor < _.min(this.requests))) {
       console.log('change direction!')
       this.direction = this.direction === "up" ? "down" : "up";
    }
  }

  _waitNames ()      { return _.map(this.waitingList, 'name'); }
  _passengernames () { return _.map(this.passengers,  'name'); }

  log() {
    console.log(`Direction: ${this.direction} | Idle: ${this.idle} | Floor: ${this.floor} | Waiting List: ${ this._waitNames() } | Passengers: ${this._passengernames()} | Requests: ${this.requests}`);
  }
}

module.exports = Elevator;
