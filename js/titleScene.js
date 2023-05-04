/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This is the Title Scene

/**
 * This class is the Splash Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor for the Splash Scene.
   */
  constructor() {
    super({ key: "titleScene" })

    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = { 
      font: "200px Times",
      fill: "#fde4b9",
      align: "center", 
    }
  }

  /**
   * Can be defined on your own scenes.
   * This method is called by the scene manager when the scene is started,
   *  before preload() and create ().
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "./assets/aliens_screen_image.jpg")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to create game objects.
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  create(data) {
    this.titleSceneBackgroundImage = this.add
    .sprite(0, 0, "titleSceneBackground")
    .setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    this.TitleSceneText = this.add
    .text(1920 / 2, (1080 / 2) + 350, "Space Aliens", this.titleSceneTextStyle)
    .setOrigin(0.5)
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is active.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    if (time > 5000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene
