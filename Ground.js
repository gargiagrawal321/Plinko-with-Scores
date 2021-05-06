class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':0,
          densuty:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("gray");
      var pos =this.body.position;
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
