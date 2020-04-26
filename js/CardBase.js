export default class CardBase extends Phaser.GameObjects.Container {
    // Pretty userful container of game objects!
    constructor(data) {
        let { scene, x, y, name, card, image, depth} = data;
        // Let's put in the card as the background! It's main img so (0,0)
        let spriteCard = new Phaser.GameObjects.Sprite(scene, 0, 0, card);
        let spriteImage = new Phaser.GameObjects.Sprite(scene, 0, 20, image);
        let textName = new Phaser.GameObjects.BitmapText(scene, 0, 0, 'pressstart', name, 16, Phaser.GameObjects.BitmapText.ALIGN_CENTER);
        // Pass to the container all this information via the super method
        super(scene, x, y, [spriteCard, spriteImage, textName]);
        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.textName = textName;
        this.cardName = name;
        this.depth = depth;
        this.scene = scene;
        // Add this container into our scene!
        this.scene.add.existing(this);
    }

    // Make setter for cardname
    set cardName(newName) {
        this._cardName = newName;
        this.textName.text = this._cardName;
        // Prevent our text from overflowing past the card
        this.textName.maxWidth = this.spriteCard.width;
        this.textName.tint = 0; // Make text black
        this.textName.x = -this.textName.width / 2;
        this.textName.y = 120 - this.textName.height; // From trial and error
    }
}