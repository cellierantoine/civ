//HOUSE MATERIALS
var HOUSE_F = 20;
var HOUSE_R = 40;
var HOUSE_W = 80;

class House{
    constructor(x, y){
        player.wood -= HOUSE_W;
        player.food -= HOUSE_F;
        player.rock -= HOUSE_R;
        this.sprite = game.add.sprite(x * TILE_SIZE, y * TILE_SIZE + TOP_BAR_SIZE, 'house');
        player.inhabitant += 3;
        player.citizen += 3;
        player.citizenCap += 3;
        menuHouse();
    }

    destructor(){
        this.sprite.destroy();
        player.citizenCap -= 3;
        menuGrass();
    }
}


//MINE MATERIALS
var MINE_F = 0;
var MINE_R = 0;
var MINE_W = 120;

class Mine{
    constructor(x, y){
        player.wood -= MINE_W;
        player.food -= MINE_F;
        player.rock -= MINE_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'mine');
        this.worker = 0;
        menuMine();
    }

    destructor(){
        this.sprite.destroy();
        let x = this.worker;
        for(let i = 0; i<x; i++){
            this.removeWorker();
        }
        menuRock();
    }

    addWorker(){
        if(this.worker<4){
            player.inhabitant --;
            this.worker += 1;
            citizenStack.push(this);
            inputRock += 1*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            this.worker -= 1;
            inputRock -=1*RES_FLUX;
            citizenStack.splice(citizenStack.indexOf(this), 1);
            player.inhabitant += 1;
        }
    }

    information(){
        return this.worker+" / 4 workers";
    }
}

//FARM MATERIALS
var FARM_F = 0;
var FARM_R = 20;
var FARM_W = 80;

class Farm{
    dtructor(x, y){
        player.wood -= FARM_W;
        player.food -= FARM_F;
        player.rock -= FARM_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'farm');
        this.worker = 0;
        this.production = 1;
        if(ground[x][y+1].terrainType === 'water' || ground[x][y-1].terrainType === 'water' ||
            ground[x-1][y].terrainType === 'water' ||ground[x+1][y].terrainType === 'water'){
            this.production = 2;
        }
        menuFarm();
    }

    destructor(){
        this.sprite.destroy();
        let x = this.worker;
        for(let i = 0; i<x; i++){
            this.removeWorker();
        }
        menuGrass();
    }

    addWorker(){
        if(this.worker<4){            
            player.inhabitant --;
            this.worker += 1;
            citizenStack.push(this);
            inputFoodFarm += this.production*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            this.worker -= 1;
            inputFoodFarm -=this.production*RES_FLUX;
            citizenStack.splice(citizenStack.indexOf(this), 1);
            player.inhabitant += 1;
        }
    }

    information(){
        return this.worker+" / 4 workers";
    }
}

//DYKE MATERIALS
var DYKE_F = 0;
var DYKE_R = 20;
var DYKE_W = 150;

class Dyke{
    constructor(x, y){
        player.wood -= DYKE_W;
        player.food -= DYKE_F;
        player.rock -= DYKE_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'dyke');
        menuWater();
    }

    destructor(){
        this.sprite.destroy();
        menuReset();
    }
}


//WOODCUTTER MATERIALS
var WOODCUTTER_F = 0;
var WOODCUTTER_R = 40;
var WOODCUTTER_W = 40;

class Woodcutter{
    constructor(x, y){
        player.wood -= WOODCUTTER_W;
        player.food -= WOODCUTTER_F;
        player.rock -= WOODCUTTER_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'woodcutter');
        this.worker = 0;
        menuWoodcutter();
    }

    destructor(){
        this.sprite.destroy();
        let x = this.worker;
        for(let i = 0; i<x; i++){
            this.removeWorker();
        }
        menuWood();
    }

    addWorker(){
        if(this.worker<4){
            player.inhabitant --;
            this.worker += 1;
            citizenStack.push(this);
            inputWood += 1*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            player.inhabitant += 1;
            this.worker -= 1;
            citizenStack.splice(citizenStack.indexOf(this), 1);
            inputWood -=1*RES_FLUX;
        }
    }

    information(){
        return this.worker+" / 4 workers";
    }
}

//FISHERSHIP MATERIALS
var FISHERSHIP_F = 0;
var FISHERSHIP_R = 0;
var FISHERSHIP_W = 250;

class Fishership{
    constructor(x, y){
        player.wood -= FISHERSHIP_W;
        player.food -= FISHERSHIP_F;
        player.rock -= FISHERSHIP_R;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, 'fishership');
        this.worker = 0;
        this.production = 1.5;
        menuFishership();
    }

    destructor(){
        this.sprite.destroy();
        let x = this.worker;
        for(let i = 0; i<x; i++){
            this.removeWorker();
        }
        menuWater();
    }

    addWorker(){
        if(this.worker<4){            
            player.inhabitant --;
            this.worker += 1;
            citizenStack.push(this);
            inputFoodFish += this.production*RES_FLUX;
        }
    }

    removeWorker(){
        if(this.worker>0){
            this.worker -= 1;
            inputFoodFish -=this.production*RES_FLUX;
            citizenStack.splice(citizenStack.indexOf(this), 1);
            player.inhabitant += 1;
        }
    }

    information(){
        return this.worker+" / 4 workers";
    }
}

//OBSERVATORY MATERIALS
var OBSERVATORY_F = 0;
var OBSERVATORY_R = 200;
var OBSERVATORY_W = 400;
class Observatory{
    constructor(x, y){
        player.wood -= OBSERVATORY_W;
        player.food -= OBSERVATORY_F;
        player.rock -= OBSERVATORY_R;
        this.sprite = game.add.sprite(x * TILE_SIZE, y * TILE_SIZE + TOP_BAR_SIZE, 'observatory');
        menuObservatory();
    }

    destructor(){
        this.sprite.destroy();
        menuGrass();
    }
}

//MARKET MATERIALS
var MARKET_F = 0;
var MARKET_R = 400;
var MARKET_W = 200;
class Market{
    constructor(x, y){
        player.wood -= MARKET_W;
        player.food -= MARKET_F;
        player.rock -= MARKET_R;

        this.tradeRouteNumber = 0;

        this.sprite = game.add.sprite(x * TILE_SIZE, y * TILE_SIZE + TOP_BAR_SIZE, 'market');
        menuMarket();
    }

    destructor(){
        let i;
        this.sprite.destroy();
        if(this.tradeRouteNumber > 0){
            for(i = tradeRouteFoodIn.length-1; i>=0; i--){
                if(tradeRouteFoodIn[i] === this){
                    this.removeTradeRouteIn('food');
                }
            }
            for(i = tradeRouteWoodIn.length-1; i>=0; i--){
                if(tradeRouteWoodIn[i] === this){
                    this.removeTradeRouteIn('wood');
                }
            }
            for(i = tradeRouteRockIn.length-1; i>=0; i--){
                if(tradeRouteRockIn[i] === this){
                    this.removeTradeRouteIn('rock');
                }
            }
            for(i = tradeRouteFoodOut.length-1; i>=0; i--){
                if(tradeRouteFoodOut[i] === this){
                    this.removeTradeRouteOut('food');
                }
            }
            for(i = tradeRouteWoodOut.length-1; i>=0; i--){
                if(tradeRouteWoodOut[i] === this){
                    this.removeTradeRouteOut('wood');
                }
            }
            for(i = tradeRouteRockOut.length-1; i>=0; i--){
                if(tradeRouteRockOut[i] === this){
                    this.removeTradeRouteOut('rock');
                }
            }
        }

        menuGrass();
    }

    addTradeRouteIn(resource){
        if(this.tradeRouteNumber < 2){
            if(resource == 'food'){
                tradeFood += 1;
                inputGold -= 2;
                tradeRouteFoodIn.push(this);
            }else if(resource == 'rock'){
                tradeRock += 1;
                inputGold -= 2;
                tradeRouteRockIn.push(this);
            }else if(resource == 'wood'){
                tradeWood += 1;
                inputGold -= 2;
                tradeRouteWoodIn.push(this);
            }
            this.tradeRouteNumber += 1;
        }
    }

    removeTradeRouteIn(resource){
        if(this.tradeRouteNumber > 0){
            if(resource == 'food'){
                tradeFood -= 1;
                inputGold += 2;
                tradeRouteFoodIn.splice(tradeRouteFoodIn.indexOf(this), 1);
            }else if(resource == 'rock'){
                tradeRock -= 1;
                inputGold += 2;
                tradeRouteRockIn.splice(tradeRouteRockIn.indexOf(this), 1);
            }else if(resource == 'wood'){
                tradeWood -= 1;
                inputGold += 2;
                tradeRouteWoodIn.splice(tradeRouteWoodIn.indexOf(this), 1);
            }
            this.tradeRouteNumber -= 1;
        }
    }

    addTradeRouteOut(resource){
        if(this.tradeRouteNumber < 2){
            if(resource == 'food'){
                tradeFood -= 1;
                inputGold += 1;
                tradeRouteFoodOut.push(this);
            }else if(resource == 'rock'){
                tradeRock -= 1;
                inputGold += 1;
                tradeRouteRockOut.push(this);
            }else if(resource == 'wood'){
                tradeWood -= 1;
                inputGold += 1;
                tradeRouteWoodOut.push(this);
            }
            this.tradeRouteNumber += 1;
        }
    }

    removeTradeRouteOut(resource){
        if(this.tradeRouteNumber > 0){
            if(resource == 'food'){
                tradeFood += 1;
                inputGold -= 1;
                tradeRouteFoodOut.splice(tradeRouteFoodOut.indexOf(this), 1);
            }else if(resource == 'rock'){
                tradeRock += 1;
                inputGold -= 1;
                tradeRouteRockOut.splice(tradeRouteRockOut.indexOf(this), 1);
            }else if(resource == 'wood'){
                tradeWood += 1;
                inputGold -= 1;
                tradeRouteWoodOut.splice(tradeRouteWoodOut.indexOf(this), 1);
            }
            this.tradeRouteNumber -= 1;
        }
    }
}