import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static countInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Warrior.countInstances += 1;
    this._energyType = 'stamina';
  }
        
  static createdArchetypeInstances(): number {
    return Warrior.countInstances;
  }
        
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;