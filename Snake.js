class Snake {
  
    constructor() {
        this.body = [];
      this.body[0] = createVector(floor(wid/2), floor(hig/2));
      this.xdir = 0;
      this.ydir = 0;
      this.len = 0;
    }
    
    setDir(x, y) {
        this.xdir = x;
      this.ydir = y;
    }
    
    update() {
        var head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdir;
      head.y += this.ydir;
      this.body.push(head);
    }
    
    grow() {
        var segment = this.body[this.body.length-1].copy();
      this.len++;
      this.body.push(segment);
    }
    
    gameOver() {
        var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x > wid-1 || x < 0 || y > hig-1 || y < 0) {  
         return true;
      }
      for(var i = 0; i < this.body.length-1; i++) {
          var part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
      }
    }
    
    eat(item) {
        var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x == item.x && y == item.y) {
        this.grow();
        return true;
      }
    }
    
    display() {
        for(var i = 0; i < this.body.length; i++) {
        fill(250,250,250);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)
      }
    }
  
  }