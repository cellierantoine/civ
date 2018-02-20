class House{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'house');
        menuReset();
    }
}

class Mine{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'mine');
        menuReset();
    }
}

class Farm{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'farm');
        menuReset();
    }
}
