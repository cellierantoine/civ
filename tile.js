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
    for(let z=0; z<3; z++){
        flood(ground)
    }
}

function mapRiver(ground){
    for(let i=0; i<24; i++){
        ground.push(new Array);
        for(let j=0; j<22; j++){
            if(i+j > 20 && i+j < 24){
                ground[i].push(new Tile(i*25, j*25, 'water'));
                game.add.sprite(i * 25, j * 25 + 50, 'water');
            }else{
                ground[i].push(new Tile(i*25, j*25, 'grass'));
                game.add.sprite(i * 25, j * 25 + 50, 'grass');
            }
        }
    }
    for(let z=0; z<3; z++){
        flood(ground)
    }
}

function mapLake(ground){
    for(let i=0; i<24; i++){
        ground.push(new Array);
        for(let j=0; j<22; j++){
            if(i+j > 19 && i+j < 25 && i < 15  && i > 7){
                ground[i].push(new Tile(i*25, j*25, 'water'));
                game.add.sprite(i * 25, j * 25 + 50, 'water');
            }else{
                ground[i].push(new Tile(i*25, j*25, 'grass'));
                game.add.sprite(i * 25, j * 25 + 50, 'grass');
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
    }

    updateTerrainType(terrainType){
        this.terrainType = terrainType;
        game.add.sprite(this.x, this.y +50, terrainType);
    }

}



