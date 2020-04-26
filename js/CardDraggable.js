import CardBase from '../js/CardBase.js';

export default class CardDraggable extends CardBase {
    constructor(data) {
        // A new data that we want to pass in to our draggable card 
        // is a function that gets called when we stop dragging the card. 
        let { onDragEnd } = data;
        super(data);
        this.originalX = this.x; // We get back to original place if we drag randomly or not to allowed location
        this.originalY = this.originalY;
        this.draggable = true;
        this.dragging = false; // We may want to keep track of when we're dragging card
        this.onDragEnd = onDragEnd;
        // To make card interactive, we need to specify size of our component
        this.setSize(this.spriteCard.width, this.spriteCard.height);
        this.setInteractive();
        this.scene.input.setDraggable(this);
        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            if (!this.draggable) return;
            this.dragging = true;
            gameObject.x = dragX; // What Phaser sends us
            gameObject.y = dragY;
        });

        // What happens when we stop dragging?
        this.scene.input.on('dragend', (pointer, gameObject) => {
            this.dragging = false;
            gameObject.onDragEnd(pointer, gameObject);
        });
    }
}