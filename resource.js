class Wood{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'tree');
    }

    destructor(){
        this.sprite.destroy();
    }
}

class Rock{
    constructor(x, y){
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'rock');
    }

    destructor(){
        this.sprite.destroy();
    }
}