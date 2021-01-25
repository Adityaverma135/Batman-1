class Drop {
    constructor(x,y){
        this.body=Bodies.circle(x,y,15,{restitution:0.1, friction:0.01})
        this.radius=20
        World.add(world,this.body)
    }
    display(){
        fill(0,102,204)
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
    updateY(){ 
        if(this.body.position.y > height)
        { Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)}) } }
}
