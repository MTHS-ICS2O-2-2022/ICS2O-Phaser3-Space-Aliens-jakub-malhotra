/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This is the game scene

/**
 * This class is the Game Scene.
 */
class GameScene extends Phaser.Scene {
  /**
   * This method is the constructor for the Game Scene.
   */
  constructor() {
    super({ key: "gameScene" })

    this.background = null
    this.ship = null
    this.fireMissle = null
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
    console.log("Game Scene")

    this.load.image("starBackground", "./assets/starBackground.png")
    this.load.image("ship", "./assets/spaceShip.png")
    this.load.image("missle", "./assets/missle.png")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to create game objects.
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  create(data) {
    this.background = this.add.sprite(0, 0, "starBackground").setScale(2.0)
    this.background.setOrigin(0, 0)

    this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")

    //create a group for the missles
    this.missles = this.physics.add.group()
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is active.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
      if (this.ship.x < 0) {
        this.ship.x = 1920
      }
    }

    if (keyRightObj.isDown === true) {
      this.ship.x += 15
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissle === false) {
        this.fireMissle = true
        this.aNewMissle = this.physics.add.sprite(
          this.ship.x,
          this.ship.y,
          "missle"
        )
        this.misslesGroup.add(aNewMissle)
      }
    }

    if (keySpaceObj.isUp === true) {
      this.fireMissle = false
    }
  }
}

export default GameScene
