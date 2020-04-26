import CardBase from '../js/CardBase.js';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    // Phaser scenes have a few handy functions; one of this is preload
    // Load image files here!
    preload() {
        // Figma is a good place to be creating assets from
        // Press Start 2P is a good pixel art font to use
        // OpenGameArt.org offers some assets, Dungeon Crawl tileset is popular
        this.load.image('armor', 'assets/armor.png');
        this.load.image('card', 'assets/card.png');
        this.load.image('dead', 'assets/dead.png');
        this.load.image('deathknight', 'assets/deathknight.png');
        this.load.image('firedrake', 'assets/firedrake.png');
        this.load.image('goldendragon', 'assets/goldendragon.png');
        this.load.image('kobold', 'assets/kobold.png');
        this.load.image('ogre', 'assets/ogre.png');
        this.load.image('paladin', 'assets/paladin.png');
        this.load.image('playercard', 'assets/playercard.png');
        this.load.image('restartbutton', 'assets/restartbutton.png');
        this.load.image('shield', 'assets/shield.png');
        this.load.image('troll', 'assets/troll.png');

        // Load in bitmap fonts
        this.load.bitmapFont('pressstart', 'assets/pressstart.png', 'assets/pressstart.fnt');
    }
    create() {
        this.player = new CardBase( {
            scene: this,
            name: 'Paladin',
            x: 200,
            y: 200,
            card: 'playercard',
            image: 'paladin',
            depth: 1
        });
    }
}