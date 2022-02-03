class Angle {
    private val = 0; 

    constructor() {}

    setDeg(newval: number) {
        this.val = newval;
    }
    setRad(newval: number) {
        this.val = newval * (180/Math.PI);
    }
    getDeg() {
        return this.val;
    }
    getRad() {
        return this.val * (Math.PI/180);
    }
}