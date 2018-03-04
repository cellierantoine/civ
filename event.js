function flood(){
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
        if(ground[flood[x][0]][flood[x][1]].building instanceof Wonder){
            continue;
        }

        ground[flood[x][0]][flood[x][1]].resource = null;
        if(ground[flood[x][0]][flood[x][1]].building != null){
            ground[flood[x][0]][flood[x][1]].destroyBuilding();
        }
        ground[flood[x][0]][flood[x][1]].updateTerrainType('water', 'water');
    }
}


function collapse(x){
    for(let i=0; i<ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if (ground[i][j].building != null && Math.random() < x && !(ground[i][j].building instanceof Wonder)) {
                ground[i][j].destroyBuilding();
            }
        }
    }
}

var droughtFarm = false;
function drought(){
    if(droughtFarm){
        droughtFarm = false;
    }else{
        droughtFarm = true;
    }
}

function fire(x){
    for(let i=0; i<ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if(ground[i][j].resource instanceof Wood && Math.random() < x){
                if(ground[i][j].building instanceof Woodcutter){
                    ground[i][j].building.destructor();
                    ground[i][j].building = null;
                }
                ground[i][j].resource.destructor();
                ground[i][j].resource = null;
            }
        }
    }
}


function invasion(x){
    let army = 0;
    let soldier = 0;

    for(let i=0; i<ground.length; i++) {
        for (let j = 0; j < ground[i].length; j++) {
            if(ground[i][j].building instanceof Keep){
                soldier += ground[i][j].building.worker
            }
        }
    }
    army = (player.citizen-soldier) + soldier*5;
    if(Math.random() > (army/x)){
        player.food = Math.round(player.food / (Math.round(Math.random()*100)%3+1));
        player.rock = Math.round(player.rock / (Math.round(Math.random()*100)%3+1));
        player.wood = Math.round(player.wood / (Math.round(Math.random()*100)%3+1));
        player.gold = Math.round(player.gold / (Math.round(Math.random()*100)%3+2));
    }
}

function era(){
    let disasterList = [flood, collapse, drought, fire, invasion];
    if(disaster == flood){
        let intensity;
        let wavesNumber;
        if(eraNumber == 1){
            intensity = 119;
            wavesNumber = 2;
        }else if(eraNumber == 2){
            intensity = 79;
            wavesNumber = 3;
        }else if(eraNumber == 3){
            intensity = 59;
            wavesNumber = 4;
        }else if(eraNumber == 4){
            intensity = 39;
            wavesNumber = 6;
        } 
        game.time.events.repeat(Phaser.Timer.SECOND * intensity, wavesNumber, flood);

    }else if(disaster == collapse){
        collapse(eraNumber/10);
    }else if(disaster == drought){
        let intensity;
        if(eraNumber == 1){
            intensity = 160;
        }else if(eraNumber == 2){
            intensity = 200;
        }else if(eraNumber == 3 || eraNumber == 4){
            intensity = 240;
        }
        drought();  
        game.time.events.add(Phaser.Timer.SECOND * intensity, drought);
    }else if(disaster == fire){
        fire(eraNumber/10);
    }else if(disaster == invasion){
        invasion(eraNumber*40);
    }

    disaster = disasterList[Math.round(Math.random()*100)%5];
    eraNumber ++;
}