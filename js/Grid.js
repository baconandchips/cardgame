import CardGrid from './CardGrid.js';
import CardTypes from'./CardTypes.js';


export default class Grid {
    // No extending here! It's gonna be its own class
    constructor(data) {
        // Implement number of columns. Currently 3 but extendable later
        let { scene, columns, rows } = data; 
        // Position our grid a little ways off from the edge of the canvas
        this.xOffset = 120;
        this.yOffset = 280;
        this.yStart = scene.game.config.height / 2;
        this.columns = columns;
        this.rows = rows;
        this.scene = scene;
        this.cards = [];
        this.addCards(0);
    }

    addCards(startIndex){
        for (let index = startIndex; index < this.columns * this.rows; ++index) {
            const cardType = CardTypes[Math.floor(Math.random() * CardTypes.length)];
            let card = new CardGrid({
                scene: this.scene,
                /* We place the card at the 0, 1, and 2 index positions with this bit of math! */
                x: this.xOffset + (this.scene.game.config.width / 2 - this.xOffset) * (index % this.columns),
                y: this.yStart - this.yOffset * Math.floor(index / this.columns),
                card: 'card',
                image: cardType.image,
                value: cardType.value,
                name: cardType.name,
                type: cardType.type
            });
            card.depth = 0;
            this.cards.push(card);
        }
    }

    addBackRow() {
        // Called every time! We can avoid doing multiple times with check
        if (this.cards.length >= this.columns * this.rows) return;
        this.addCards(6); // Add starting at index 6!
    }

    fadeFrontRow() {
        setTimeout(()=>{
            // Destroy first three cards, and then bring everything following it down
            this.cards.splice(0, 3).forEach(card => card.destroy());
            this.cards.forEach(card=> {
                // Tweens is a function for doing animation transitions
                this.scene.tweens.add({
                    targets: card,
                    duration: 400,
                    y: card.y + this.yOffset,
                    onComplete: () => this.addBackRow()
                });
            });
        }, 1000);

        this.cards.slice(0, 3).forEach(card => {
            if (!card.selected) {
                this.scene.tweens.add({
                    targets: card,
                    alpha: 0,
                    duration: 200
                });
            }
        })
    }
}