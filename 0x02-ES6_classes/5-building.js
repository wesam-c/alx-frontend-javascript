export default class Building {
    constructor(sqft) {
        this._sqft = sqft;

        if (this.constructor !== Building) {
            if (typeof this.evacuationWarningMessage !== 'function') {
                throw Error('Class extending Building must override evacuationWarningMessage');
            }
        }
    }

    //getter
    get sqft() {
        return this._sqft;
    }
}