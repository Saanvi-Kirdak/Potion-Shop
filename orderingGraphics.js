let targetX = 350
let customerX = 600;
let customerImages = []
let customer;

class Customer {
    constructor(img) {
        this.img = img;
        this.x = 600;
        this.y = 150;
        this.targetX = targetX;
        this.speed = 5;
        this.potionCompleted = false;

    }

    motion(){

        if(this.x > this.targetX){
            this.x -= this.speed;
        }
        else{
            this.x = this.targetX;
        }
        if(this.potionCompleted === false){
        imageMode(CENTER);
        image(this.img, this.x, this.y);
        }

    }

    clicked(){
                if(dist(mouseX, mouseY, this.x, this.y) < 500){
                this.potionCompleted = true;
            }
        }
    }

    function newCustomer(){
        let randomImg = random(customerImages);
        customer = new Customer(randomImg);
    }



