class House{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'house');
        menuHouse();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}

class Mine{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'mine');
        menuMine();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}

class Farm{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'farm');
        menuFarm();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
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
        menuWoodcutter();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}