// import the only scene we have for our game
import MainScene from './MainScene.js'; 

const config = {
    width: 640, 
    height: 1024,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [MainScene]
} // we let phaser automatically choose the canvas type

new Phaser.Game(config);