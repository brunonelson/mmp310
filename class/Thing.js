class Thing {
	constructor(x, y, size, speedX, speedY) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.speedX = speedX;
		this.speedY = speedY;
	}
		
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
	collide(other) {
		var d = dist(this.x, this.y, other.x, other.y);
		var s = this.size + other.size;
		if (d < s/2) {
			textSize(100);
            //textcolor(198, 165, 209 );
			textAlign(CENTER, CENTER);
			text("continue?", width/2, height/2);
			noLoop();
		}
	}
}