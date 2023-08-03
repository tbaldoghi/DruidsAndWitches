import Phaser from "phaser";
import config from "./config";
import MainScene from "./scenes/MainScene";
import MenuScene from "./scenes/MenuScene";

new Phaser.Game(
  Object.assign(config, {
    scene: [MainScene, MenuScene],
  })
);
