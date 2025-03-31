var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 120, hitSize: 25, damage: 10, image: "img/sawblade.png", xScale: 1, yScale: 1 },
          { type: "sawblade", x: 800, y: groundY - 120, hitSize: 25, damage: 20, image: "img/sawblade.png", xScale: 1, yScale: 1 },
          { type: "sawblade", x: 1000, y: groundY - 120, hitSize: 25, damage: 30, image: "img/sawblade.png", xScale: 1, yScale: 1 },

          { type: "enemy", x: 400, y: groundY - 50, velocity: 3, damage: 10, score: 100 },
          { type: "enemy", x: 800, y: groundY - 50, velocity: 3, damage: 15, score: 200 },
          { type: "enemy", x: 1100, y: groundY - 50, velocity: 3, damage: 20, score: 300 },

          { type: "reward", x: 500, y: groundY - 100, velocity: 2, health: 10, score: 100 },

          { type: "level", x: 1800, y: groundY - 50, velocity: 3 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, hitSize: 25, damage: 10, image: "img/sawblade.png", xScale: 1, yScale: 1 },
          { type: "sawblade", x: 600, y: groundY, hitSize: 25, damage: 10, image: "img/sawblade.png", xScale: 1, yScale: 1 },
          { type: "sawblade", x: 900, y: groundY, hitSize: 25, damage: 10, image: "img/sawblade.png", xScale: 1, yScale: 1 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
