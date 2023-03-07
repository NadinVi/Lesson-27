import { Calculator } from "./calculator.js";

class Mult extends Calculator {
    constructor(x, y) {
        super(x, y);
    }

    Mult () {
        return this.x * this.y;
    }
}

export default Mult