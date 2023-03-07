import { Calculator } from "./calculator.js";

class Div extends Calculator {
    constructor(x, y) {
        super(x, y);
    }

    Div () {
        return this.x / this.y;
    }
}

export default Div