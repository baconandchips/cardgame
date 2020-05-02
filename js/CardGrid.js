import CardBase from '../js/CardBase.js';

export default class CardGrid extends CardBase {
    constructor(data) {
        let { value, type } = data;
        super(data);
        // The -100: it's really efficient to set the initial position and never change it!
        this.textValue = new Phaser.GameObjects.BitmapText(this.scene, 0, -100, 'pressstart', this.value);
        // Add to card. This add method is offered as part of Phaser's component, which is why it works
        this.add(this.textValue);
        this.value = value;
        this.cardtype = type;
    }
    set value(newValue) {
        this._value = newValue;
        this.textValue.text = this._value;
        this.textValue.x = -45 - this.textValue.width / 2;
        this.textValue.tint = 0;
    }
    get value() {
        return this._value;
    }
}