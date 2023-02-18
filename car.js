class Car {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.speed = 0;
        this.accele = 0.2;
        this.maxSpeed = 3;
        this.friction= 0.05;

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

        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed
        }
        if(this.speed < -this.maxSpeed/2){ //reverse shouldn't be as fast, can have maxReverseSpeed so no need
            this.speed = -this.maxSpeed/2 //- sign is just to indicate car going in negative direction
        }
        if(this.speed>0){
            this.speed -=this.friction;
        }
        if(this.speed<0){
            this.speed += this.friction;
        }
        this.y -= this.speed;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(
            this.x - this.w / 2,
            this.y - this.h / 2,
            this.w,
            this.h
        )
        ctx.fill()
    }
}