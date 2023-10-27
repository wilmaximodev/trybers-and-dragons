import Race from './Race';

class Dwarf extends Race {
  _maxlife = 80;
  static countInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.countInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxlife;
  }   
}

export default Dwarf;   