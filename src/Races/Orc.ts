import Race from './Race';

class Orc extends Race {
  _maxlife = 74;
  static countInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.countInstances += 1;
  }
    
  static createdRacesInstances(): number {
    return Orc.countInstances;
  }
    
  get maxLifePoints(): number {
    return this._maxlife;
  }   
}

export default Orc;