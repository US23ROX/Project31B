class Plinko{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'static' :true
        }
        this.body = Bodies.circle(x,y,20,options)
        World.add(world, this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white")
        ellipse(this.body.position.x,this.body.position.y,20,20)
        pop();
        
    }
}