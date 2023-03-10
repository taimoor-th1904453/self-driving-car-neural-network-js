class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.#addKeyboardListener();
    }

    #addKeyboardListener(){
        document.onkeydown = (event) => { //using the arrow function so we can use 'this'
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                
            }
            // console.table(this)
        }
        document.onkeyup = (event) => {
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                
            }
            // console.table(this)
        }
    }
}