class Particle{
    constructor(x,y,r){
        var options={
           'friction': 0.1,
           'restitution': 0.4,
           'airFriction': 0.0001,
        }
        this.r=5;
        this.body=Matter.Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.color=color(random(0,255),random(0,255),random(0,255))
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r *2,this.r *2)
        pop();
    }
}