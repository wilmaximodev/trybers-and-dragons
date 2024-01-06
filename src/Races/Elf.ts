import Race from './Race';

class Elf extends Race {
  maxlife = 99;
  static countInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.countInstances;
  }
  
  get maxLifePoints(): number {
    return this.maxlife;
  }   
}

export default Elf;