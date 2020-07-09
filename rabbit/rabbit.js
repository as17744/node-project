class Rabbit {
    constructor(name) {
        this.name = name;
        this.speed = 3;
        this.distance = 0;
        this.end = false;
        this.restPoint = 30;
        this.restTime = 0;
        this.needRestTime = 40;
    }
    run(limit) {
        if (this.distance === this.restPoint && this.restTime <= this.needRestTime) {
            this.restTime++;
            return;
        }
        this.distance = this.distance + this.speed;
        if (this.distance > limit) {
            this.distance = limit;
            this.end = true;
        }
    }
}

module.exports = Rabbit;