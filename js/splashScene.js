/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This is the splash scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor for the Splash Scene.
   */
  constructor() {
    super({ key: "splashScene" })

    this.splashSceneBackgroundImage = null
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
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to create game objects.
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   * Should be overidden by your own Scenes.
   * This method is called once per game step while the scene is active.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
