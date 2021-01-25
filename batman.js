class Batman{
    constructor(){
        this.body=Bodies.circle(200,350,50, {isStatic:true})
        this.radius=50
        World.add(world, this.body);
    }
    display(){
        ellipseMode(CENTER)
       // ellipse(this.body.position.x,this.body.position.y,50,50)
    }
}