import GameScene from "./GameScene";

class NewGameScene extends Phaser.Scene {
  constructor() {
    super("NewGameScene");
  }

  create(): void {
    this.scene.start("GameScene", GameScene);
  }
}

export default NewGameScene;
