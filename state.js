var endState = {
    create : function(){
        if(victory){
            game.add.sprite(0, 0, 'victory');
        }else{
            game.add.sprite(0, 0, 'defeat');
        }
    }
}

var menuState = {
    preload : function() {
        //ui
        game.load.image('background', 'assets/ui/background.png');
        game.load.image('selector', 'assets/ui/selector.png');
        game.load.image('food', 'assets/ui/food.png');
        game.load.image('stone', 'assets/ui/rock.png');
        game.load.image('citizen', 'assets/ui/citizen.png');
        game.load.image('wood', 'assets/ui/wood.png');
        game.load.image('information', 'assets/info.png')
        game.load.image('gold', 'assets/ui/gold.png');
        game.load.image('previouspage', 'assets/ui/previouspage.png');
        game.load.image('nextpage', 'assets/ui/nextpage.png');


        //Tiles
        game.load.image('grass1', 'assets/terrain/grass1.png');
        game.load.image('grass2', 'assets/terrain/grass2.png');
        game.load.image('grass3', 'assets/terrain/grass3.png');
        game.load.image('water', 'assets/terrain/water.png');

        //Building
        game.load.image('house', 'assets/building/house.png');
        game.load.image('farm', 'assets/building/farm.png');
        game.load.image('mine', 'assets/building/mine.png');
        game.load.image('woodcutter', 'assets/building/woodcutter.png');
        game.load.image('dyke', 'assets/building/dyke.png');
        game.load.image('observatory', 'assets/building/observatory.png');
        game.load.image('fishership', 'assets/building/fishership.png');
        game.load.image('market', 'assets/building/market.png');
        game.load.image('keep', 'assets/building/keep.png');

        game.load.image('food+', 'assets/menu/food+.png');
        game.load.image('food-', 'assets/menu/food-.png');
        game.load.image('wood+', 'assets/menu/wood+.png');
        game.load.image('wood-', 'assets/menu/wood-.png');
        game.load.image('rock+', 'assets/menu/rock+.png');
        game.load.image('rock-', 'assets/menu/rock-.png');

        game.load.image('goldF+', 'assets/menu/goldF+.png');
        game.load.image('goldF-', 'assets/menu/goldF-.png');
        game.load.image('goldW+', 'assets/menu/goldW+.png');
        game.load.image('goldW-', 'assets/menu/goldW-.png');
        game.load.image('goldR+', 'assets/menu/goldR+.png');
        game.load.image('goldR-', 'assets/menu/goldR-.png');

        game.load.image('worker+', 'assets/worker+.png');
        game.load.image('worker-', 'assets/worker-.png');
        game.load.image('bomb', 'assets/bomb.png');

        game.load.image('pickaxe', "assets/pickaxe.png");
        game.load.image('axe', "assets/axe.png");

        game.load.image('sky', 'assets/moonsky.png');

        //Wonder
        game.load.image('wonder',"assets/wonder/wonder.png");
        game.load.image('wonder2',"assets/wonder/wonder2.png");
        game.load.image('wonder3',"assets/wonder/wonder3.png");
        game.load.image('wonder4',"assets/wonder/wonder4.png");

        //Resources
        game.load.image('tree', 'assets/resources/tree.png');
        game.load.image('rock', 'assets/resources/rock.png');

        game.load.image('victory', 'assets/victory.png');
        game.load.image('defeat', 'assets/defeat.png');
        game.load.image('menu', 'assets/menu.png');
    }, 

    create : function() {
        game.add.sprite(0, 0, 'menu');
    }
}



var gameState = {

    create : function() {
        //SPRITE
        game.add.sprite(0, 0, 'background');

        game.add.sprite(25, 16, 'food');
        game.add.sprite(175, 16, 'stone');
        game.add.sprite(325, 16, 'wood');
        game.add.sprite(475, 16, 'citizen');
        game.add.sprite(625, 16, 'gold');

        displayFood = game.add.text(65, 20, player.food.toString(), { font: "20px Arial", fill: "#000000", align: "center" });
        displayRock = game.add.text(215, 20, player.rock.toString(), { font: "20px Arial", fill: "#000000", align: "center" });
        displayWood = game.add.text(365, 20, player.wood.toString(), { font: "20px Arial", fill: "#000000", align: "center" });
        displayCitizen = game.add.text(515, 20, player.inhabitant + "/" + player.citizen, { font: "20px Arial", fill: "#000000", align: "center" });
        displayGold = game.add.text(665, 20, player.gold.toString(), { font: "20px Arial", fill: "#000000", align: "center" });

        mapLake(ground);


        //SELECTOR
        selector = new Selector();

        //LISTENERS
        clickListener = function(event){ click(event, ground, selector); };
        document.addEventListener("click", clickListener);
        document.addEventListener("mousemove", hover);

        //TIME
        start = game.time.now;
        resourceTime = game.time.now;

        //BUTTONS
        for(let i = 0; i<menu.length; i++){
            buttons.push(new Button(menu[i][0], menu[i][1]));
        }

        displayText = game.add.text(700, 600, "", {font: "12px Arial", fill: "#000000", align: "center"});

        game.time.events.repeat(Phaser.Timer.SECOND * 240, 5, era);
    },

    update : function() {
        let i;

        if(game.time.now > start+5000){
            //flood(ground);
            start = game.time.now;
        }

        if(x>692 && x<853 && y>99 && y<561){
            selector.hoverSideMenu(x, y);
        }
        
        if(game.time.now > resourceTime+1000){
            player.wood += inputWood + tradeWood;
            player.rock += inputRock + tradeRock;
            player.gold += inputGold;
            if(player.food >0){
                let x = (player.citizen-1)*0.5;
                if(player.citizen == 0){
                    x = 0;
                }
                if(droughtFarm){
                    player.food += inputFoodFish - x + tradeFood;
                }else{
                    player.food += inputFoodFarm + inputFoodFish - x + tradeFood;
                }
            }
            
            if(player.food <= 0){
                player.food = 0;
                for(i = 0; i<tradeRouteFoodOut.length; i++){
                    tradeRouteFoodOut[i].removeTradeRouteOut('food');
                }
            }
            if(player.wood <= 0){
                player.wood = 0;
                for(i = 0; i<tradeRouteWoodOut.length; i++){
                    tradeRouteWoodOut[i].removeTradeRouteOut('wood');
                }
            }
            if(player.rock <= 0){
                player.rock = 0;
                for(i = 0; i<tradeRouteRockOut.length; i++){
                    tradeRouteRockOut[i].removeTradeRouteOut('rock');
                }
            }
            if(player.gold <= 0){
                player.gold = 0;
                for(i = 0; i<tradeRouteFoodIn.length; i++){
                    tradeRouteFoodIn[i].removeTradeRouteIn('food');
                }
                for(i = 0; i<tradeRouteWoodIn.length; i++){
                    tradeRouteWoodIn[i].removeTradeRouteIn('wood');
                }
                for(i = 0; i<tradeRouteRockIn.length; i++){
                    tradeRouteRockIn[i].removeTradeRouteIn('rock');
                }
                
            }
            resource();
            resourceTime = game.time.now;
        }
        
        

        if(player.food <= 0 && starvation == false){
            starvation = true;
            citizenDecay = game.time.now;
        }else if(player.food > 0 && starvation == true){
            starvation = false;
            citizenGrow = game.time.now;
        }
        
        if(starvation == true && game.time.now > citizenDecay + 5000){
            if(player.citizen>1){
                player.citizen --;
                player.inhabitant --;
                if(player.inhabitant<0){
                    citizenStack[citizenStack.length-1].removeWorker();
                }
            }
            citizenDecay = game.time.now;
        }
        if(player.citizenCap > player.citizen && starvation == false && game.time.now > citizenGrow + 5000){
            player.inhabitant ++;
            player.citizen ++;
            citizenGrow = game.time.now;
        }

        if(player.citizenCap < player.citizen){
            let delta = player.citizen - player.citizenCap;
            player.citizen = player.citizenCap;
            for(let i=0; i<delta; i++){
                player.inhabitant --;
                if(player.inhabitant<0){
                    citizenStack[citizenStack.length-1].removeWorker();
                }
            }
        }
    }
}