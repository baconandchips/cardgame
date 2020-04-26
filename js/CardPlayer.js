import CardDraggable from '../js/CardDraggable.js';

export default class CardPlayer extends CardDraggable {
    constructor(data) {
        let { health } = data;
        super(data);
        this.textHealth = new Phaser.GameObjects.BitmapText(this.scene, 0, -102, 'pressstart', health); // pressstart is the text pack
        this.textMaxHealth = new Phaser.GameObjects.BitmapText(this.scene, -20, -90, 'pressstart', health, 12); // Font size is 12, slightly smaller
        this.textArmor = new Phaser.GameObjects.BitmapText(this.scene, 0, 0, 'pressstart'); // No initial value for initial armor, otherwise we can set zero
        this.spriteArmor = new Phaser.GameObjects.Sprite(this.scene, 50, -80, 'armor'); // If armor, we show armor sprite
        this.textHealth.tint = 0;
        this.textMaxHealth.tint = 0;
        // Add these into the component!
        this.add([this.textHealth, this.textMaxHealth, this.textArmor, this.spriteArmor]);
        this.health = health;
        this.maxHealth = health;
        this.armor = 0;
    }

    set health(newHealth) {
        this._health = newHealth;
        this.textHealth.text = this._health;
        this.textHealth.x = -44 - this.textHealth.width / 2; // Center around text
    }

    get health() {
        return this._health;
    }

    set maxHealth(newMaxHealth) {
        this._maxHealth = newMaxHealth;
    }

    get maxHealth() {
        return this._maxHealth;
    }

    set armor(newArmor) {
        // Don't show unless nonzero!
        this._armor = newArmor;
        this.textArmor.text = this._armor;
        this.textArmor.x = 46 - this.textArmor.width / 2;
        this.textArmor.alpha = this._armor == 0 ? 0 : 1; // If armor is zero, set alpha to zero. Otherwise one.
        this.spriteArmor.alpha = this._armor == 0 ? 0 : 1;
    }

    get armor() {
        return this._armor;
    }
}