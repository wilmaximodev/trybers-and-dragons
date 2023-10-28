import Fighter from './Fighter';
import Race, { Elf } from './Races';
import { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Mage;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(private _name: string) {
    this._race = new Elf(_name, getRandomInt(1, 10));
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints = Math.min(
      getRandomInt(1, 10) + this._maxLifePoints,
      this.race.maxLifePoints,
    );
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 3);
    console.log('CRITICAL HIT RECEIVED!');
  }

  get name(): string { 
    return this._name;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get defense(): number {
    return this._defense;
  }

  get strength(): number {
    return this._strength;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Mage {
    return this._archetype;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }
}

export default Character;