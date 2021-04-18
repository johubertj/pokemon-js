class userMovement {
    constructor(parent, pos, img) {
        this.parent = parent;
        this.pos = pos;
        this.img = img;

        this.pos.x = this.pos.x - (this.pos.x % 32);
        this.pos.y = this.pos.y - (this.pos.y % 32);

        this.speed = 4;
        this.target = {
            x: this.pos.x,
            y: this.pos.y
        }
        this.moving = false;
        this.keys = {
            W: 87,
            A: 65,
            S: 83,
            D: 68
        };
    }
    step() {
        if (keyIsDown(this.keys.W) && !this.moving) {
            this.img.setY(3)
            this.moving = true;
            this.target.y -= 32;
        }
        if (keyIsDown(this.keys.A) && !this.moving) {
            this.img.setY(1)
            this.moving = true;
            this.target.x -= 32;
        }
        if (keyIsDown(this.keys.S) && !this.moving) {
            this.img.setY(0)
            this.moving = true;
            this.target.y += 32;
        }
        if (keyIsDown(this.keys.D) && !this.moving) {
            this.img.setY(2)
            this.moving = true;
            this.target.x += 32;
        }

        if (this.moving) {
            let distX = this.target.x - this.pos.x;
            let distY = this.target.y - this.pos.y;
            let dx = Math.sign(distX) * this.speed;
            let dy = Math.sign(distY) * this.speed;
            if (Math.abs(distX) <= this.speed && Math.abs(distY) <= this.speed) {
                this.pos.x = this.target.x;
                this.pos.y = this.target.y;
                this.moving = false;
                this.img.setX(0);
            } else {
                this.pos.x += dx;
                this.pos.y += dy;
                this.img.animateX();
            }
        }
    }
}