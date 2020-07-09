const chalkAnimation = require('chalk-animation');

class Race {
    constructor() {
        this.racesContent = '';
        this.length = 50;
        this.players = [];
        this.animation = null;
        this.finishedPlayerNum = false;
    }
    addPlayer(item) {
        this.players.push(item);
    }
    getState(item, index) {
        return `${index > 0 ? '\n' : ''}|${'.'.repeat(item.distance)}${item.name}${'.'.repeat(this.length - item.distance)}》`;
    }
    start() {
        setTimeout(() => {
            this.racesContent = '';
            this.players.forEach((item, index) => {
                item.run(this.length);
                this.racesContent = this.racesContent + this.getState(item, index);
            });
            this.animation.replace(this.racesContent);
            if (this.players.filter((item) => item.end).length !== this.players.length) {
                this.start();
            }
        }, 100);
    }
    init() {
        const len = this.players.length;
        for (let i = 0; i < len; i++) {
            this.racesContent = this.racesContent + this.getState(this.players[i], i)
        }
        this.animation = chalkAnimation.rainbow(this.racesContent);
    }
};

module.exports = Race;