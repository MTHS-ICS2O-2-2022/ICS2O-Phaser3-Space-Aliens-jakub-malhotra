/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
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
  }

  /**
   * Can be defined on your own scenes.
   * Use it to create game objects.
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  create(data) {
//pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is active.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
//pass
    }
  }

export default GameScene
