class House{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'house');
        player.inhabitant += 3;
        player.citizen += 3;
        menuHouse();
    }

    destructor(){
        this.sprite.destroy();
        player.inhabitant -= 3;
        player.citizen -= 3;
        menuReset();
    }
}

class Mine{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'mine');
        this.worker = 0;
        menuMine();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }

    destructor(){
        this.sprite.destroy();
        inputRock -= this.worker*RES_FLUX;
        player.inhabitant += this.worker;
        menuReset();
    }

    addWorker(){
        if(this.worker<4){
            player.inhabitant --;
            this.worker += 1;
            inputRock += 1*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            this.worker -= 1;
            inputRock -=1*RES_FLUX;
            player.inhabitant += 1;
        }
    }
}

class Farm{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'farm');
        this.worker = 0;
        menuFarm();
    }

    destructor(){
        this.sprite.destroy();
        inputFood -= this.worker*RES_FLUX;
        player.inhabitant += this.worker;
        menuReset();
    }

    addWorker(){
        if(this.worker<4){            
            player.inhabitant --;
            this.worker += 1;
            inputFood += 1*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            this.worker -= 1;
            inputFood -=1*RES_FLUX;
            player.inhabitant += 1;
        }
    }
}

class Dyke{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'dyke');
        menuReset();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}

class Woodcutter{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'woodcutter');
        this.worker = 0;
        menuWoodcutter();
    }

    destructor(){
        this.sprite.destroy();
        inputWood -= this.worker*RES_FLUX;
        player.inhabitant += this.worker;
        menuReset();
    }

    addWorker(){
        if(this.worker<4){
            player.inhabitant --;
            this.worker += 1;
            inputWood += 1*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            player.inhabitant += 1;
            this.worker -= 1;
            inputWood -=1*RES_FLUX;
        }
    }
}