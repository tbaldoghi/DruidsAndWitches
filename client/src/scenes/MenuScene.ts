import Phaser from "phaser";
import TextButton from "../ui/common/TextButton";
import NewGameScene from "./NewGameScene";

class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  public preload(): void {
    this.load.image("uiBackground", "assets/images/ui/background.png");
  }

  create(): void {
    const uiBackground = this.add.image(0, 0, "uiBackground");
    const title = this.add.text(100, 100, "Druids & Witches", {
      font: `64px Oswald`,
      color: "#4b3d44",
    });
    const width = this.scale.gameSize.width / 2;
    const height = this.scale.gameSize.height / 4;
    const newGameButton = new TextButton(
      this,
      100,
      400,
      "NEW GAME",
      this.handleNewGameClick
    );
    const fullScreenButton = new TextButton(
      this,
      100,
      500,
      "FULL SCREEN",
      this.handleFullScreenClick
    );

    uiBackground.setOrigin(0);
  }

  handleNewGameClick = (): void => {
    this.scene.start("NewGameScene", NewGameScene);
  };

  handleFullScreenClick = (): void => {
    this.scale.toggleFullscreen();
  };
}

export default MenuScene;
