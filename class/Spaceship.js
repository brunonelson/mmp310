class Spaceship extends Thing {
	constructor() {
		super(width/2, height - 100, 100, 0, 0);
	}
	
	display() {
		//stroke(255);
		//strokeWeight(8);
		//ellipse(this.x, this.y, this.size);
        stroke(29, 1, 38 ); 
        strokeWeight(10);  
        point(this.x, this.y);
	}
	
	move() {
		if (keyIsDown(RIGHT_ARROW)) {
			this.speedX = 5;
		} else if (keyIsDown(LEFT_ARROW)) {
			this.speedX = -5;
		} else {
			this.speedX = 0;
		}
		
		if (keyIsDown(DOWN_ARROW)) {
			this.speedY = 5;
		} else if (keyIsDown(UP_ARROW)) {
			this.speedY = -5;	
		} else {
			this.speedY = 0;	
		}
	}
}