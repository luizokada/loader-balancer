class RoundRobin {
  constructor() {
    this.index = 0;
  }

  traditional() {
    if (this.index === 0) {
        this.index++;
        return 'http://localhost:3001';
    } else if (this.index === 1) {
        this.index++;
        return 'http://localhost:3002';
    } else if (this.index === 2) {
        this.index = 0;
        return 'http://localhost:3003';
    }
  }
    
    conectionType() {
    if (this.index === 0) {
        this.index++;
        return 'http://localhost:3002';
    } else if (this.index === 1) {
        this.index=0;
        return 'http://localhost:3003';
    }
    
    }
}
module.exports= RoundRobin;