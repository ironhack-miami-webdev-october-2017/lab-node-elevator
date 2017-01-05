class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 5;
    this.requests   = [];
    this.idle       = true; //not serving any request at the moment
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
        this.currentReq = null;
      }
    }
  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++ ;
    }
  }

  floorDown() {
    if (this.floor >= 0) {
      this.floor--;
    }
  }

  call(floor) {
    if (!this.requests.includes(floor)) {
      this.requests.push(floor)
    }
  }

  log() {
    console.log(`
      Idle: ${this.idle} | Floor: ${this.floor} | Request: ${this.currentReq} | Requests: ${this.requests}`);
  }
}

module.exports = Elevator;
