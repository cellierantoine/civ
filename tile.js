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

    displaySideMenu(terrainType, terrainConstruction){
        for(let i = 0; i<buttons.length; i++){
            buttons[i].sprite.destroy();
            buttons[i].displayer.destroy();
        }
        if(terrainConstruction != null) {
            console.log('COUCOUCOCUCOCUOCUCOUCOUCOCUOCUC');
        }else if(terrainType == 'grass'){
            buttons[0].updateButton('house', "maisonGrass", selector.tileSelected.buildHouse);
        }else if(terrainType == 'water'){
            buttons[3].updateButton('house', "maisonWater");
        }
    }

    hoverSideMenu(x, y){
        if(x > buttons[0].x && x < buttons[0].x+68 && y > buttons[0].y && y < buttons[0].y+68){
            console.log('btn1');
        }else if(x > buttons[1].x && x < buttons[1].x+68 && y > buttons[1].y && y < buttons[1].y+68) {
            console.log('btn2');
        }
    }

}



class Tile {
    constructor(x, y, terrainType){
        this.x = x;
        this.y = y;
        this.terrainType = terrainType;
        this.sprite = game.add.sprite(x*TILE_SIZE, y*TILE_SIZE + TOP_BAR_SIZE, terrainType);
        this.resource = null;
        this.building = null;
    }

    updateTerrainType(terrainType){
        this.sprite.destroy();
        this.terrainType = terrainType;
        this.sprite = game.add.sprite(this.x*TILE_SIZE, this.y*TILE_SIZE + TOP_BAR_SIZE, terrainType);
    }

    buildHouse(){
        this.building = new House(this.x, this.y);
    }

}

class Button{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.sprite = game.add.sprite(0, 0, null);
        this.act = '';
        this.text = '';
        this.displayer = game.add.text(700, 600, '', this.style);
        this.style = { font: "12px Arial", fill: "#000000", align: "center" };
    }

    updateButton(sprite, text, act) {
        this.sprite.destroy();
        this.sprite = game.add.sprite(this.x, this.y, sprite);
        this.sprite.width = this.sprite.width*2;
        this.sprite.height = this.sprite.height*2;
        this.sprite.smoothed = false;
        
        this.text = text;
        
        this.act = act;
    }

    hoverText(){
        this.displayer.destroy();
        this.displayer = game.add.text(700, 600, this.text, this.style);
    }
}


