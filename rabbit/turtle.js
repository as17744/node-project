class Turtle {
    constructor(name) {
        this.name = name;
        this.speed = 1;
        this.distance = 0;
        this.end = false;
    }
    run(limit) {
        this.distance = this.distance + this.speed;
        if (this.distance > limit) {
            this.distance = limit;
            this.end = true;
        }
    }
};

module.exports = Turtle;
