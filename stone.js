class Stone {
    constructor(x,y,radius){
        var options={ isStatic:false, restitution:0, friction:1, density:1.2 }
        this.image= loadImage("stone.png") 
        this.body = Bodies.circle (x,y,radius,options)
        this.radius = radius
        World.add(world, this.body);  
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("brown");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
  
}