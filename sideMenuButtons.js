function menuReset(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton(-1, "");
}


function menuGrass(){
    let houseTxt = "House\nFood : "+HOUSE_F+"\nLumber : "+HOUSE_W+"\nStone : "+HOUSE_R;
    let farmTxt = "Farm\nFood : "+FARM_F+"\nLumber : "+FARM_W+"\nStone : "+FARM_R;
    let observatoryTxt = "Observatory\nFood : "+OBSERVATORY_F+"\nLumber : "+OBSERVATORY_W+"\nStone : "+OBSERVATORY_R;
    let marketTxt = "Market\nFood : "+MARKET_F+"\nLumber : "+MARKET_W+"\nStone : "+MARKET_R;

    buttons[0].updateButton('house', houseTxt, selector.tileSelected.buildHouse);
    buttons[1].updateButton('farm', farmTxt, selector.tileSelected.buildFarm);
    buttons[2].updateButton('observatory', observatoryTxt, selector.tileSelected.buildObservatory);
    buttons[3].updateButton('market', marketTxt, selector.tileSelected.buildMarket);
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton(-1, "");
}

function menuRock(){
    let mineTxt = "Farm\nFood : "+MINE_F+"\nLumber : "+MINE_W+"\nStone : "+MINE_R;

    buttons[0].updateButton('mine', mineTxt, selector.tileSelected.buildMine);
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton('pickaxe', "Harvest resource\n +30 Stone", selector.tileSelected.harvest);
}

function menuWood(){
    let woodcutterTxt = "Woodcutter hut\nFood : "+WOODCUTTER_F+"\nLumber : "+WOODCUTTER_W+"\nStone : "+WOODCUTTER_R;

    buttons[0].updateButton("woodcutter", woodcutterTxt, selector.tileSelected.buildWoodcutter);
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton("axe", "Harvest resource\n +30 Lumber", selector.tileSelected.harvest);
}

function menuWater(){
    let dykeTxt = "Dyke\nFood : "+DYKE_F+"\nLumber : "+DYKE_W+"\nStone : "+DYKE_R;
    let fishershipTxt = "Fishership\nFood : "+FISHERSHIP_F+"\nLumber : "+FISHERSHIP_W+"\nStone : "+FISHERSHIP_R;

    buttons[0].updateButton("dyke", dykeTxt, selector.tileSelected.buildDyke);
    buttons[1].updateButton("fishership", fishershipTxt, selector.tileSelected.buildFishership);
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton(-1, "");
}


//SIDE MENU FOR BUILDING
function menuHouse(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuFarm(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton('worker+', "Add a worker", selector.tileSelected.addWorker);
    buttons[9].updateButton('worker-', "Remove a worker", selector.tileSelected.removeWorker);
    buttons[10].updateButton('information', selector.tileSelected.displayInformation);
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuMine(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton('worker+', "Add a worker", selector.tileSelected.addWorker);
    buttons[9].updateButton('worker-', "Remove a worker", selector.tileSelected.removeWorker);
    buttons[10].updateButton('information', selector.tileSelected.displayInformation);
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuWoodcutter(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton('worker+', "Add a worker", selector.tileSelected.addWorker);
    buttons[9].updateButton('worker-', "Remove a worker", selector.tileSelected.removeWorker);
    buttons[10].updateButton('information', selector.tileSelected.displayInformation);
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuFishership(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton('worker+', "Add a worker", selector.tileSelected.addWorker);
    buttons[9].updateButton('worker-', "Remove a worker", selector.tileSelected.removeWorker);
    buttons[10].updateButton('information', selector.tileSelected.displayInformation);
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuMarket(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}

function menuObservatory(){
    buttons[0].updateButton(-1, "");
    buttons[1].updateButton(-1, "");
    buttons[2].updateButton(-1, "");
    buttons[3].updateButton(-1, "");
    buttons[4].updateButton(-1, "");
    buttons[5].updateButton(-1, "");
    buttons[6].updateButton(-1, "");
    buttons[7].updateButton(-1, "");
    buttons[8].updateButton(-1, "");
    buttons[9].updateButton(-1, "");
    buttons[10].updateButton(-1, "");
    buttons[11].updateButton('bomb', "Destroy the building", selector.tileSelected.destroyBuilding);
}