class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


    display(){
            var pointB = this.sling.bodyB.position;
            var pointA = this.pointA;
            strokeWeight(7);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
    
}