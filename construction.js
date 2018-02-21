//HOUSE MATERIALS
var HOUSE_F = 80;
var HOUSE_R = 40;
var HOUSE_W = 80;

class House{
    constructor(x, y){
        player.wood -= HOUSE_W;
        player.food -= HOUSE_F;
        player.rock -= HOUSE_R;
        this.sprite = game.add.sprite(x * TILE_SIZE, y * TILE_SIZE + TOP_BAR_SIZE, 'house');
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


//MINE MATERIALS
var MINE_F = 0;
var MINE_R = 0;
var MINE_W = 120;

class Mine{
    constructor(x, y){
        player.wood -= MINE_W;
        player.food -= MINE_F;
        player.rock -= MINE_R;
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

//FARM MATERIALS
var FARM_F = 0;
var FARM_R = 20;
var FARM_W = 80;

class Farm{
    constructor(x, y){
        player.wood -= FARM_W;
        player.food -= FARM_F;
        player.rock -= FARM_R;
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

//DYKE MATERIALS
var DYKE_F = 0;
var DYKE_R = 20;
var DYKE_W = 150;

class Dyke{
    constructor(x, y){
        player.wood -= DYKE_W;
        player.food -= DYKE_F;
        player.rock -= DYKE_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'dyke');
        menuReset();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}


//WOODCUTTER MATERIALS
var WOODCUTTER_F = 0;
var WOODCUTTER_R = 40;
var WOODCUTTER_W = 40;

class Woodcutter{
    constructor(x, y){
        player.wood -= WOODCUTTER_W;
        player.food -= WOODCUTTER_F;
        player.rock -= WOODCUTTER_R;
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