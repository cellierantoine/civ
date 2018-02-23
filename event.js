function flood(ground){
    let flood= [];
    for(let i=0; i<ground.length; i++){
        for(let j=0; j<ground[i].length; j++){
            let x = 0.25;
            if(ground[i][j].building instanceof Dyke){
                x = 0.025;
            }
            if(ground[i][j].terrainType == 'water' && Math.random()<x){
                if(i<ground.length-1 && ground[i+1][j].terrainType != 'water'){
                    flood.push([i+1, j]);
                }
                if(i>0 && ground[i-1][j].terrainType != 'water'){
                    flood.push([i-1, j]);
                }
                if(j<ground[i].length-1 && ground[i][j+1].terrainType != 'water'){
                    flood.push([i, j+1]);
                }
                if(j>0 && ground[i][j-1].terrainType != 'water'){
                    flood.push([i, j-1]);
                }
            }
        }
    }
    for(let x=0; x<flood.length; x++){
        ground[flood[x][0]][flood[x][1]].resource = null;
        if(ground[flood[x][0]][flood[x][1]].building != null){
            ground[flood[x][0]][flood[x][1]].destroyBuilding();
        }
        ground[flood[x][0]][flood[x][1]].updateTerrainType('water', 'water');
    }
}


function collapse(ground){
    for(let i=0; i<ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if (ground[i][j].building != null && Math.random() < 0.075) {
                ground[i][j].destroyBuilding();
            }
        }
    }
}
