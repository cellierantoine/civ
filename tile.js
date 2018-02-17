function mapBeach(ground){
    for(let i=0; i<LEVEL_SIZE; i++){
        ground.push(new Array);
        for(let j=0; j<LEVEL_SIZE; j++){
            if(i<2){
                ground[i].push(new Tile(i, j, 'water'));
            }else{
                ground[i].push(new Tile(i, j, 'grass'));
            }
        }
    }
    for(let z=0; z<3; z++){
        flood(ground)
    }
}

function mapRiver(ground){
    for(let i=0; i<LEVEL_SIZE; i++){
        ground.push(new Array);
        for(let j=0; j<LEVEL_SIZE; j++){
            if(i+j > 20 && i+j < 24){
                ground[i].push(new Tile(i, j, 'water'));
            }else{
                ground[i].push(new Tile(i, j, 'grass'));
            }
        }
    }
    for(let z=0; z<3; z++){
        flood(ground)
    }
}

function mapLake(ground){
    for(let i=0; i<LEVEL_SIZE; i++){
        ground.push(new Array);
        for(let j=0; j<LEVEL_SIZE; j++){
            if(i+j > 19 && i+j < 25 && i < 15  && i > 7){
                ground[i].push(new Tile(i, j, 'water'));
            }else{
                ground[i].push(new Tile(i, j, 'grass'));
            }
        }
    }
    for(let z=0; z<3; z++){
        flood(ground)
    }
}



class Tile {
    constructor(x, y, terrainType){
        this.x = x;
        this.y = y;
        this.terrainType = terrainType;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, terrainType);
    }

    updateTerrainType(terrainType){
        this.terrainType = terrainType;
        this.sprite.destroy();
        this.sprite = game.add.sprite(this.x*TILE_SIZE, this.y*TILE_SIZE + TOP_BAR_SIZE, terrainType);
    }

}



