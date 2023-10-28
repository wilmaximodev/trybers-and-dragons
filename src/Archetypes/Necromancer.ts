import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static countInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer.countInstances += 1;
    this._energyType = 'mana';
  }
    
  static createdArchetypeInstances(): number {
    return Necromancer.countInstances;
  }
    
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;