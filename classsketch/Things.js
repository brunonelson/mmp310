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
}