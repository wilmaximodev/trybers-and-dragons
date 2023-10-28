import { EnergyType } from '../Energy';
import Archetype from './Archetype';

// A classe Mage existe;
// A classe Mage herda de Archetype;
// O atributo name da classe Mage pode ser lido;
// O método energyType da Classe Mage existe e retorna um EnergyType;
// O método createdArchetypeInstances deve retornar o número correto de instâncias criadas da classe Mage;

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