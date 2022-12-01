class Player {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = 50 - (this.width/2);
        this.positionY = 0;
        

        this.domElement = null;
        //we use null to give a value later
        this.createDomElement();

      
    }
    
    createDomElement() {
        //step one create the element"
        this.domElement = document.createElement('div');
        
        //step2: add content or modify(ex.innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";
        
        //Step3: append to the DOM:`parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement);
    }
    moveLeft() {
        this.positionX = this.positionX - 5;
        this.domElement.style.left = this.positionX + "vw";
       //to test if its moving left:
       // console.log("new position...." + this.positionX)
       //update css for the player dom element
    }

    moveRight() {
        this.positionX = this.positionX + 5;
        this.domElement.style.left = this.positionX + "vw";
        //we always start counting from the bottom left thats why move right and move left we have the same thing(left)
    
       //to test if the player is moving right
       // console.log("new position...." + this.positionX)
       //update css for the player dom element
    }
 }


const player = new Player();

document.addEventListener('keydown', function(event) {
    // const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    if(event.key === "ArrowRight") {
        player.moveRight();
    } else if(event.key === "ArrowLeft") {
        player.moveLeft();

    }

});