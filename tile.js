function mapBeach(ground){
    for(let i=0; i<LEVEL_SIZE; i++){
        ground.push(new Array);
        for(let j=0; j<LEVEL_SIZE; j++){
            if(i<2){
                ground[i].push(new Tile(i, j, 'water', 'water'));
            }else{
                let a = Math.random(); //random terrain sprite
                if(a<0.25) {
                    ground[i].push(new Tile(i, j, 'grass', 'grass3'));
                }else if(a<0.5){
                    ground[i].push(new Tile(i, j, 'grass', 'grass1'));
                }else{
                    ground[i].push(new Tile(i, j, 'grass', 'grass2'));
                }
                let x = Math.random(); //random resources
                if(x<0.15){
                    ground[i][j].resourceWood();
                }else if(x<0.20){
                    ground[i][j].resourceRock();
                }
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
                ground[i].push(new Tile(i, j, 'water', 'water'));
            }else{
                let a = Math.random();
                if(a<0.25) {
                    ground[i].push(new Tile(i, j, 'grass', 'grass3'));
                }else if(a<0.5){
                    ground[i].push(new Tile(i, j, 'grass', 'grass1'));
                }else{
                    ground[i].push(new Tile(i, j, 'grass', 'grass2'));
                }
                let x = Math.random(); //random resources
                if(x<0.15){
                    ground[i][j].resourceWood();
                }else if(x<0.20){
                    ground[i][j].resourceRock();
                }
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
                ground[i].push(new Tile(i, j, 'water', 'water'));
            }else{
                let a = Math.random();
                if(a<0.25) {
                    ground[i].push(new Tile(i, j, 'grass', 'grass3'));
                }else if(a<0.5){
                    ground[i].push(new Tile(i, j, 'grass', 'grass1'));
                }else{
                    ground[i].push(new Tile(i, j, 'grass', 'grass2'));
                }
                let x = Math.random(); //random resources
                if(x<0.15){
                    ground[i][j].resourceWood();
                }else if(x<0.20){
                    ground[i][j].resourceRock();
                }
            }
        }
    }
    for(let z=0; z<3; z++){
        flood(ground)
    }
}

class Selector{
    constructor(){
        this.sprite = game.add.sprite(0,0,null);
        this.tileSelected = null;
    }

    moveSelector(event, ground){
        this.sprite.destroy();

        let x = event.clientX - event.clientX % TILE_SIZE;
        let y = event.clientY - event.clientY % TILE_SIZE;

        this.tileSelected = ground[x/TILE_SIZE][(y - TOP_BAR_SIZE)/TILE_SIZE];

        this.sprite = game.add.sprite(x, y, 'selector');
    }

    displaySideMenu(terrainType, terrainConstruction, resource){
        for(let i = 0; i<buttons.length; i++){
            buttons[i].sprite.destroy();
            displayText.destroy();
        }

        //Construction menu
        if(terrainConstruction != null) {
            if (terrainConstruction instanceof House) {
                menuHouse();
            } else if (terrainConstruction instanceof Woodcutter) {
                menuWoodcutter();
            } else if (terrainConstruction instanceof Mine) {
                menuMine();
            } else if (terrainConstruction instanceof Farm) {
                menuFarm();
            } else if(terrainConstruction instanceof Fishership) {
                menuFishership();
            } else if(terrainConstruction instanceof Observatory) {
                menuObservatory();
            }else if(terrainConstruction instanceof Market){
                menuMarket();
            }else if(terrainConstruction instanceof Wonder){
                menuWonder(terrainConstruction);
            }else if(terrainConstruction instanceof Keep){
                menuKeep();
            }
        }else{
            if (terrainType == 'grass') {
                if(resource instanceof Wood){
                    menuWood();
                }else if(resource instanceof Rock){
                    menuRock();
                }else {
                    menuGrass();
                }
            } else if (terrainType == 'water') {
                menuWater();
            }
        }


    }

    hoverSideMenu(x, y){
        if(x > buttons[0].x && x < buttons[0].x+68 && y > buttons[0].y && y < buttons[0].y+68){
            buttons[0].hoverText();
        }else if(x > buttons[1].x && x < buttons[1].x+68 && y > buttons[1].y && y < buttons[1].y+68) {
            buttons[1].hoverText();
        }else if(x > buttons[2].x && x < buttons[2].x+68 && y > buttons[2].y && y < buttons[2].y+68) {
            buttons[2].hoverText();
        }else if(x > buttons[3].x && x < buttons[3].x+68 && y > buttons[3].y && y < buttons[3].y+68) {
            buttons[3].hoverText();
        }else if(x > buttons[4].x && x < buttons[4].x+68 && y > buttons[4].y && y < buttons[4].y+68) {
            buttons[4].hoverText();
        }else if(x > buttons[5].x && x < buttons[5].x+68 && y > buttons[5].y && y < buttons[5].y+68) {
            buttons[5].hoverText();
        }else if(x > buttons[6].x && x < buttons[6].x+68 && y > buttons[6].y && y < buttons[6].y+68) {
            buttons[6].hoverText();
        }else if(x > buttons[7].x && x < buttons[7].x+68 && y > buttons[7].y && y < buttons[7].y+68) {
            buttons[7].hoverText();
        }else if(x > buttons[8].x && x < buttons[8].x+68 && y > buttons[8].y && y < buttons[8].y+68) {
            buttons[8].hoverText();
        }else if(x > buttons[9].x && x < buttons[9].x+68 && y > buttons[9].y && y < buttons[9].y+68) {
            buttons[9].hoverText();
        }else if(x > buttons[10].x && x < buttons[10].x+68 && y > buttons[10].y && y < buttons[10].y+68) {
            buttons[10].hoverText();
        }else if(x > buttons[11].x && x < buttons[11].x+68 && y > buttons[11].y && y < buttons[11].y+68) {
            buttons[11].hoverText();
        }
    }

}



class Tile {
    constructor(x, y, terrainType, terrainSprite){
        this.x = x;
        this.y = y;
        this.terrainType = terrainType;
        this.terrainSprite = terrainSprite;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, terrainSprite);
        this.resource = null;
        this.building = null;
    }

    updateTerrainType(terrainType, terrainSprite){
        this.sprite.destroy();
        this.terrainType = terrainType;
        this.sprite = game.add.sprite(this.x*TILE_SIZE, this.y*TILE_SIZE + TOP_BAR_SIZE, terrainSprite);
    }

    //Resource methods
    resourceRock(){
        this.resource = new Rock(this.x, this.y);
    }

    resourceWood(){
        this.resource = new Wood(this.x, this.y);
    }

    harvest(){
        if(this.resource instanceof Wood){
            this.resource.destructor();
            this.resource = null;
            player.wood += 30;
            menuGrass();
        }else if(this.resource instanceof Rock){
            this.resource.destructor();
            this.resource = null;
            player.rock += 30;
            menuGrass();
        }
    }


    //Build methods
    buildHouse(){
        if(player.wood >= HOUSE_W && player.food >= HOUSE_F && player.rock >= HOUSE_R) {
            this.building = new House(this.x, this.y);
        }
    }

    buildFarm(){
        if(player.wood >= FARM_W && player.food >= FARM_F && player.rock >= FARM_R) {
            this.building = new Farm(this.x, this.y);
        }
    }

    buildMine(){
        if(player.wood >= MINE_W && player.food >= MINE_F && player.rock >= MINE_R) {
            this.building = new Mine(this.x, this.y);
        }
    }

    buildDyke(){
        if(player.wood >= DYKE_W && player.food >= DYKE_F && player.rock >= DYKE_R) {
            this.building = new Dyke(this.x, this.y);
        }
    }

    buildWoodcutter(){
        if(player.wood >= WOODCUTTER_W && player.food >= WOODCUTTER_F && player.rock >= WOODCUTTER_R) {
            this.building = new Woodcutter(this.x, this.y);
        }
    }

    buildFishership(){
        if(player.wood >= FISHERSHIP_W && player.food >= FISHERSHIP_F && player.rock >= FISHERSHIP_R) {
            this.building = new Fishership(this.x, this.y);
        }
    }

    buildObservatory(){
        if(player.wood >= OBSERVATORY_W && player.food >= OBSERVATORY_F && player.rock >= OBSERVATORY_R) {
            this.building = new Observatory(this.x, this.y);
        }
    }

    buildKeep(){
        if(player.wood >= KEEP_W && player.food >= KEEP_F && player.rock >= KEEP_R) {
            this.building = new Keep(this.x, this.y);
        }
    }

    buildMarket(){
        if(player.wood >= MARKET_W && player.food >= MARKET_F && player.rock >= MARKET_R) {
            this.building = new Market(this.x, this.y);
        }
    }

    buildWonder(){
        if(player.wood >= WONDER_W && player.food >= WONDER_F && player.rock >= WONDER_R) {
            this.building = new Wonder(this.x, this.y);
        }
    }

    //Market methods
    addTradeRouteFoodIn(){
        this.building.addTradeRouteIn('food');
    }

    addTradeRouteFoodOut(){
        this.building.addTradeRouteOut('food');
    }

    addTradeRouteWoodIn(){
        this.building.addTradeRouteIn('wood');
    }

    addTradeRouteWoodOut(){
        this.building.addTradeRouteOut('wood');
    }

    addTradeRouteRockIn(){
        this.building.addTradeRouteIn('rock');
    }

    addTradeRouteRockOut(){
        this.building.addTradeRouteOut('rock');
    }
    
    removeTradeRouteFoodIn(){
        this.building.removeTradeRouteIn('food');
    }

    removeTradeRouteFoodOut(){
        this.building.removeTradeRouteOut('food');
    }

    removeTradeRouteWoodIn(){
        this.building.removeTradeRouteIn('wood');
    }

    removeTradeRouteWoodOut(){
        this.building.removeTradeRouteOut('wood');
    }

    removeTradeRouteRockIn(){
        this.building.removeTradeRouteIn('rock');
    }

    removeTradeRouteRockOut(){
        this.building.removeTradeRouteOut('rock');
    }

    nextPage(){
        menuMarket2();
    }

    previousPage(){
        menuMarket();
    }
    
    //Wonder methods
    firstUpgrade(){
        if(player.wood >= this.building.woodNextUpgrade 
            && player.food >= this.building.foodNextUpgrade 
            && player.rock >= this.building.rockNextUpgrade 
            && player.gold >= this.building.goldNextUpgrade) {
            this.building.firstUpgrade();
        }
    }

    secondUpgrade(){
        if(player.wood >= this.building.woodNextUpgrade 
            && player.food >= this.building.foodNextUpgrade 
            && player.rock >= this.building.rockNextUpgrade 
            && player.gold >= this.building.goldNextUpgrade) {
            this.building.secondUpgrade();
            }
    }

    thirdUpgrade(){
        if(player.wood >= this.building.woodNextUpgrade 
            && player.food >= this.building.foodNextUpgrade 
            && player.rock >= this.building.rockNextUpgrade 
            && player.gold >= this.building.goldNextUpgrade) {
            this.building.thirdUpgrade();
        }
    }

    //Destroy methods
    destroyBuilding(){
        this.building.destructor();
        this.building = null;
    }

    //Worker methods
    addWorker(){
        if(player.inhabitant > 0){
            this.building.addWorker();
        }
    }

    removeWorker(){
        this.building.removeWorker();
    }

    //Others
    displayInformation(){
        displayText.destroy();
        return this.building.information();
    }
}



class Button{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = game.add.sprite(0, 0, null);
        this.act = null;
        this.text = '';
        this.style = { font: "18px Arial", fill: "#000000", align: "left" };
    }

    updateButton(sprite, text, act = null) {
        this.sprite.destroy();
        if(sprite != -1) {
            this.sprite = game.add.sprite(this.x+2, this.y+2, sprite);
            this.sprite.width = this.sprite.width * 2;
            this.sprite.height = this.sprite.height * 2;
            this.sprite.smoothed = false;
        }

        this.text = text;
        
        this.act = act;
    }

    hoverText(){
        displayText.destroy();
        if(this.text instanceof Function){
            displayText = game.add.text(700, 600, this.text.apply(selector.tileSelected), this.style);
        }else {
            displayText = game.add.text(700, 600, this.text, this.style);
        }
    }
}


