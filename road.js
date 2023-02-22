class Road {
    constructor(x, w, laneCount = 4) {
        this.x = x
        this.w = w
        this.laneCount = laneCount
        this.left = x - w / 2
        this.right = x + w / 2

        const infinity = 999999;
        this.top = -infinity
        this.bottom = infinity

    }

    draw(ctx) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "white";

        for (let i = 0; i <= this.laneCount; i++) {
            //linear interpolation
            const x = lerp(
                this.left,
                this.right,
                i / this.laneCount
            )

            if(i>0 && i<this.laneCount){
                ctx.setLineDash([20,20])
            }
            else{
                ctx.setLineDash([])
            }
            ctx.beginPath();
            ctx.moveTo(x, this.top)
            ctx.lineTo(x, this.bottom)
            ctx.stroke();
        }

        // ctx.beginPath();
        // ctx.moveTo(this.right, this.top)
        // ctx.lineTo(this.right,this.bottom)
        // this.stroke();
    }

}
