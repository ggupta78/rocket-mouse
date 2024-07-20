import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader);
  }

  preload() {
    this.load.image(TextureKeys.Background, "house/bg_repeat_340x640.png");

    // Load Mouse Hole
    this.load.image(TextureKeys.MouseHole, "house/object_mousehole.png");

    // Load Windows
    this.load.image(TextureKeys.Window1, "house/object_window1.png");
    this.load.image(TextureKeys.Window2, "house/object_window2.png");

    // Load Bookcases
    this.load.image(TextureKeys.Bookcase1, "house/object_bookcase1.png");
    this.load.image(TextureKeys.Bookcase2, "house/object_bookcase2.png");

    this.load.atlas(
      TextureKeys.RocketMouse,
      "characters/rocket-mouse.png",
      "characters/rocket-mouse.json"
    );
  }

  create() {
    this.anims.create({
      key: AnimationKeys.RocketMouseRun,
      frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
        start: 1,
        end: 4,
        prefix: "rocketmouse_run",
        zeroPad: 2,
        suffix: ".png",
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.start(SceneKeys.Game);
  }
}
