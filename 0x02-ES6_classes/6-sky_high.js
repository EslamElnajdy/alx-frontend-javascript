import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('all arguments must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
