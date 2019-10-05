class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.roll = Math.floor(Math.random() * (max - min)) + min;
        return this.roll;
    }

    lower() {
        this.max = this.roll;
    }

    greater() {
        this.min = this.roll;
    }
}

module.exports = GuessingGame;