class Car {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 0;
        this.accele = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        if (this.controls.forward) {
            // this.y -= 2; //y increases downwards on a computer
            this.speed += this.accele;
        }
        if (this.controls.reverse) {
            // this.y += 2;
            this.speed -= this.accele
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed
        }
        if (this.speed < -this.maxSpeed / 2) { //reverse shouldn't be as fast, can have maxReverseSpeed so no need
            this.speed = -this.maxSpeed / 2 //- sign is just to indicate car going in negative direction
        }
        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        // if (this.controls.left) {
        //     this.angle+=0.2
        // } //for the car to behave like a tank
        // if (this.controls.right) {
        //     this.angle-=0.2
        // }

        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;

            if (this.controls.left) {
                this.angle += 0.03*flip 
                //this angle works according to the unit circle,
                // but in out case, value of 0 is upwards, 
                //so this is a unit circle which is rotated 90 degrees counterclockwise
            }
            if (this.controls.right) {
                this.angle -= 0.03*flip
            }
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;

    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.w / 2,
            -this.h / 2,
            this.w,
            this.h
        )
        ctx.fill()
        ctx.restore();
    }
}