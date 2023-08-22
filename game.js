import  Phaser from './node_modules/phaser';
// import PlayScene from './scenes/playScenes.js';
// import TitleScene from './scenes/TitleScene.js';
const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    audio: {
        disableWebAudio: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 0 },
        }
    },
};

const game = new Phaser.Game(config);

// game.scene.add('PlayScene', PlayScene);
// game.scene.add('TitleScene', TitleScene);
