var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x,y, hitSize, damage, image, xScale, yScale){
      var hitZoneSize = hitSize; // define the size of the hitzone and assign to a variable
    var damageFromObstacle = damage; // defines the amount of damage obstacle causes and assigns to variable
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone
    obstacleHitZone.x = x; // sets the x coordinate of the obstacle
    obstacleHitZone.y = y; // stets the y coordinate of the obstacle
    game.addGameItem(obstacleHitZone); // adds the obstacle
    var obstacleImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
    obstacleHitZone.addChild(obstacleImage); // attaches the image to the obstacle hitzone
    obstacleImage.x = -25; // position the image on the hitzone's x value by moving it left 25 pixils
    obstacleImage.y = -25; // position the image on the hitzone's y value by moving it up 25 pixils
    obstacleHitZone.rotationalVelocity = 8;
    obstacleImage.scaleX = xScale;
    obstacleImage.scaleY = yScale;
    }
    
    //createObstacles(400, groundY - 50, 25, 10);
    //createObstacles(800, groundY - 50, 25, 20);
    //createObstacles(1000, groundY - 50, 25, 30);

    

    function createEnemy (x, y, velocity, damage, score, image, xScale, yScale){
      var enemy = game.createGameItem("enemy", 25); // creates game item and add it to the game
      var enemyImage = draw.bitmap(image); // creates a red square and stores it in the var enemyImage
      enemyImage.x = -67; // offsets the image form the hitzone by -25 pixels
      enemyImage.y = -90; // offsets the image form the hitzone by -25 pixels
      enemy.addChild(enemyImage); // add the red square as a child to our enemy variable
      enemy.x = x; // x pos of enemy
      enemy.y = y; // y pos of enemy
      game.addGameItem(enemy); // add the enemy to the game
      enemy.velocityX -= velocity; // controlling how fast the enemy moves on the x axis
      enemy.rotationalVelocity = 0; // sets the rotaional velocity of the enemy
      enemyImage.scaleX = xScale;
      enemyImage.scaleY = yScale;
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-damage) // subtracts 10 health from halleBot's HUD
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(score); // increases your score when Halle shoots the enemy
        enemy.fadeOut(); // enemy fades out when halle shoots enemy
        //shrink()
        //flyTo(0,0)
      };
    }
    //createEnemy(400, groundY - 50, 3, 10, 100);
    //createEnemy(800, groundY - 50, 3, 15, 200);
    //createEnemy(1100, groundY - 50, 3, 20, 300);


    function createReward (x, y, velocity, health, score){
      var reward = game.createGameItem("reward", 25); // creates game item and add it to the game
      var blueSquare = draw.rect(50, 50, "blue"); // creates a blue square and stores it in the var blueSquare
      blueSquare.x = -25; // offsets the image form the hitzone by -25 pixels
      blueSquare.y = -25; // offsets the image form the hitzone by -25 pixels
      reward.addChild(blueSquare); // add the blue square as a child to our reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // add the reward to the game
      reward.velocityX -= velocity; // controlling how fast the reward moves on the x axis
      reward.rotationalVelocity = 8; // sets the rotaional velocity of the reward
      reward.onPlayerCollision = function () {
        game.changeIntegrity(+health) // subtracts 10 health from halleBot's HUD
        reward.shrink()
        game.increaseScore(score); // increases your score when Halle shoots the reward
      };
      reward.onProjectileCollision = function () {
        reward.fadeOut(); // reward fades out when halle shoots reward
        
        //flyTo(0,0)
      };
    }
    //createReward(500, groundY - 100, 2, 10, 100);

    function createlevel (x, y, velocity){
      var level = game.createGameItem("level", 25); // creates game item and add it to the game
      var yellowSquare = draw.rect(50, 50, "yellow"); // creates a yellow square and stores it in the var yellowSquare
      yellowSquare.x = -25; // offsets the image form the hitzone by -25 pixels
      yellowSquare.y = -25; // offsets the image form the hitzone by -25 pixels
      level.addChild(yellowSquare); // add the yellow square as a child to our level variable
      level.x = x; // x pos of level
      level.y = y; // y pos of level
      game.addGameItem(level); // add the level to the game
      level.velocityX -= velocity; // controlling how fast the level moves on the x axis
      level.rotationalVelocity = 8; // sets the rotaional velocity of the level
      level.onPlayerCollision = function () {
        level.shrink() // makes the box shrink when the player hits it
        startLevel(); // starts the next level
      };
    }

    //createlevel(1500, groundY - 50, 3);
    
    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; // fetches the currentlevel from the levelData array and stores it in var level array
      var levelObjects = level.gameItems // retrive the array of gameItems and stores it in level.gramesItems

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i]; // allows eveything in the array usesable

        if(element.type === "sawblade"){ // checks the type key:value of the gameItems object to detrimen which object to manifest
          createObstacles(element.x, element.y, element.hitSize, element.damage, element.image, element.xScale, element.yScale); // if the conditon is true it will pass the permiter
        }

        if(element.type === "enemy"){ // checks the type key:value of the gameItems object to detrimen which object to manifest
          createEnemy(element.x, element.y, element.velocity, element.damage, element.score, element.image, element.xScale, element.yScale); // if the conditon is true it will pass the permiter
        }

        if(element.type === "reward"){ // checks the type key:value of the gameItems object to detrimen which object to manifest
          createReward(element.x, element.y, element.velocity, element.health, element.score); // if the conditon is true it will pass the permiter
        }

        if(element.type === "level"){ // checks the type key:value of the gameItems object to detrimen which object to manifest
          createlevel(element.x, element.y, element.velocity); // if the conditon is true it will pass the permiter
        }


      }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
