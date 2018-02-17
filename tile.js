function mapBeach(ground){
    for(let i=0; i<24; i++){
        ground.push(new Array);
        for(let j=0; j<22; j++){
            if(i<2){
                ground[i].push(new Tile(i*25, j*25, 'water'));
                game.add.sprite(i * 25, j * 25 + 50, 'water');
            }else{
                ground[i].push(new Tile(i*25, j*25, 'grass'));
                game.add.sprite(i * 25, j * 25 + 50, 'grass');
            }
        }
    }
}

function mapRiver(ground){
    for(let i=0; i<24; i++){
        ground.push(i);
        for(let j=0; j<22; j++){
            if(i+j > 19 && i+j < 25){
                ground[i][j] = new Tile(i*25, j*25, 'water');
                game.add.sprite(i * 25, j * 25 + 50, 'water');
            }else{
                ground[i][j] = new Tile(i*25, j*25, 'grass');
                game.add.sprite(i * 25, j * 25 + 50, 'grass');
            }
        }
    }
}

function mapLake(ground){
    for(let i=0; i<24; i++){
        ground.push(i);
        for(let j=0; j<22; j++){
            if(i+j > 19 && i+j < 25 && i < 15  && i > 7){
                ground[i][j] = new Tile(i*25, j*25, 'water');
                game.add.sprite(i * 25, j * 25 + 50, 'water');
            }else{
                ground[i][j] = new Tile(i*25, j*25, 'grass');
                game.add.sprite(i * 25, j * 25 + 50, 'grass');
            }
        }
    }
}



class Tile {
    constructor(x, y, terrainType){
        this.x = x;
        this.y = y;
        this.terrainType = terrainType;
    }

    updateTerrainType(terrainType){
        this.terrainType = terrainType;
        game.add.sprite(this.x, this.y +50, terrainType);
    }

}



