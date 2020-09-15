class Chain{
    constructor(body1, body2, length, weight){
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length: length
        }  
        this.weight=weight;
       
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
        
    }
    
    
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        if (this.weight==null){
            strokeWeight(4)
        }
        else {
            strokeWeight(this.weight);
        }
        ;
        line(pointA.x, pointA.y, pointB.x, pointB.y);    
    }

};