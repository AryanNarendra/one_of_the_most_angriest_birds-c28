class SlingShot{
    constructor(body1, point2, length, weight){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: length
        }  
        this.weight=weight;
        this.pointB=point2;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        
    }
    
    
    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (this.weight==null){
                strokeWeight(4)
            }
            else {
                strokeWeight(this.weight);
            }
            ;
            line(pointA.x, pointA.y, pointB.x, pointB.y);  
        }  
    }
    fly(){
        this.sling.bodyA=null;
    }
};