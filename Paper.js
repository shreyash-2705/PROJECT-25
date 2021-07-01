class Paper{
	constructor(x,y,r)
	{ var options = {
		isStatic:false,
        density:1,
		friction: 5,
		restitution:0.3
	  };
	// assign options to the rubber ball
	//	this.body = Bodies.circle(x,y,width,options);
		this.y = y;
		this.x=x;
		this.r=r;
		this.body=Bodies.circle(this.x,this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x,paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);      
			pop()
	}

}

function keyPressed(){
if(keyCode===UP_ARROW);
if(keyCode===DOWN_ARROW);
if(keyCode===RIGHT_ARROW);
if(keyCode===LEFT_ARROW);
}






