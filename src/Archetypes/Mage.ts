import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static countInstances = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Mage.countInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.countInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;