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
          { type: "ceilingTrap", x: 400, y: groundY - 120, hitSize: 25, damage: 20, image: "img/ceilingtrap.png", xScale: .36, yScale: .36, imageX: -39, imageY: -28 },
          { type: "trap", x: 600, y: groundY + 10, hitSize: 25, damage: 20, image: "img/trap.png", xScale: .35, yScale: .35, imageX: -39, imageY: -50 },
          { type: "trap", x: 800, y: groundY + 10, hitSize: 25, damage: 20, image: "img/trap.png", xScale: .35, yScale: .35, imageX: -39, imageY: -50 },
          { type: "ceilingTrap", x: 1000, y: groundY - 120, hitSize: 25, damage: 20, image: "img/ceilingtrap.png", xScale: .36, yScale: .36, imageX: -39, imageY: -28 },
          { type: "trap", x: 1100, y: groundY + 10, hitSize: 25, damage: 20, image: "img/trap.png", xScale: .35, yScale: .35, imageX: -39, imageY: -50 },
          { type: "ceilingTrap", x: 1300, y: groundY - 120, hitSize: 25, damage: 20, image: "img/ceilingtrap.png", xScale: .36, yScale: .36, imageX: -39, imageY: -28 },
          { type: "ceilingTrap", x: 1400, y: groundY - 120, hitSize: 25, damage: 20, image: "img/ceilingtrap.png", xScale: .36, yScale: .36, imageX: -39, imageY: -28 },
          { type: "trap", x: 1600, y: groundY + 10, hitSize: 25, damage: 20, image: "img/trap.png", xScale: .35, yScale: .35, imageX: -39, imageY: -50 },

          { type: "enemy", x: 600, y: groundY - 50, velocity: 5, damage: 10, score: 300, image: "img/zombie.png", xScale: 0.6, yScale: 0.6  },
          { type: "enemy", x: 1700, y: groundY - 50, velocity: 3.8, damage: 10, score: 300, image: "img/zombie.png", xScale: 0.6, yScale: 0.6  },
         

          { type: "reward", x: 1600, y: groundY - 140, velocity: 4, health: 20, score: 0, image: "img/medkit.png", xScale: .33, yScale: .33, imageX: -31, imageY: -35  },
          //{ type: "reward", x: 700, y: groundY - 100, velocity: 2, health: 0, score: 200, image: "img/dillbit.png", xScale: .24, yScale: .24, imageX: -28, imageY: -28  },

          { type: "level", x: 1800, y: groundY - 50, velocity: 1.5, image: "img/vBuck.png", xScale: .11, yScale: .11, imageX: -28, imageY: -28   },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "trap", x: 400, y: groundY, hitSize: 25, damage: 10, image: "img/sawblade.png", xScale: 1, yScale: 1 },
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
