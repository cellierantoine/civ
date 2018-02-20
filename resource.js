class Wood{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'tree');
    }
}

class Rock{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'rock');
    }
}