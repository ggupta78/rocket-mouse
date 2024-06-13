import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class Game extends Phaser.Scene {
  private background!: Phaser.GameObjects.TileSprite;
  private body!: Phaser.Physics.Arcade.Body;

  constructor() {
    super(SceneKeys.Game);
  }

  // preload() {}

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.background = this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0, 0)
      .setScrollFactor(0, 0);

    const mouse = this.physics.add
      .sprite(
        width * 0.5,
        height - 30,
        TextureKeys.RocketMouse,
        "rocketmouse_run01.png"
      )
      .setOrigin(0.5, 1)
      .play(AnimationKeys.RocketMouseRun);

    // const body = mouse.body as Phaser.Physics.Arcade.Body;
    this.body = mouse.body as Phaser.Physics.Arcade.Body;
    this.body.setCollideWorldBounds(true);

    this.body.setVelocityX(200);

    this.physics.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height - 30);

    this.cameras.main.startFollow(mouse);
    this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height);
  }

  update(time: number, delta: number): void {
    //scroll the background
    // let cameraScrollX = this.cameras.main.scrollX;
    // let mouseX = this.body.x;
    // let tilePositionX = this.background.tilePositionX;
    // console.log(
    //   `mouseX: ${mouseX}, cameraScrollX: ${cameraScrollX}, tilePositionX: ${tilePositionX}`
    // );
    this.background.setTilePosition(this.cameras.main.scrollX);
    // console.log(`New TitlePositionX: ${this.background.tilePositionX}`);
  }
}
