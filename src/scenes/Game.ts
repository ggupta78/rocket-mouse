import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import AnimationKeys from "../consts/AnimationKeys";

export default class Game extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Game);
  }

  // preload() {}

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.add
      .tileSprite(0, 0, width, height, TextureKeys.Background)
      .setOrigin(0, 0);

    this.add
      .sprite(
        width * 0.5,
        height * 0.5,
        TextureKeys.RocketMouse,
        "rocketmouse_run01.png"
      )
      .play(AnimationKeys.RocketMouseRun);
  }
}
