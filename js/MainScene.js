import CardPlayer from '../js/CardPlayer.js';
import CardGrid from './CardGrid.js';
import Grid from './Grid.js';

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
        this.load.image('healingpotion', 'assets/healingpotion.png');
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
        this.grid = new Grid({ scene: this, columns: 3, rows: 3 });

        this.player = new CardPlayer( {
            scene: this,
            name: 'Paladin',
            x: this.game.config.width / 2,
            y: this.game.config.height - 200,
            card: 'playercard',
            image: 'paladin',
            health: 16,
            depth: 1,
            onDragEnd: (pointer, gameObject) => {
                // Snap back our original card!
                this.player.x = this.player.originalX;
                this.player.y = this.player.originalY;
            },
        });
    }
}