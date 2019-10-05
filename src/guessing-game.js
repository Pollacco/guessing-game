class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.roll =  Math.ceil((this.min + this.max) / 2);
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