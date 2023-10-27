import Race from './Race';

class Halfling extends Race {
  _maxlife = 60;
  static countInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.countInstances;
  }
    
  get maxLifePoints(): number {
    return this._maxlife;
  }   
}

export default Halfling;