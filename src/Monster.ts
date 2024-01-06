import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85,
    private _strength: number = 63,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const actualLife = this._lifePoints - attackPoints;
    if (actualLife > 0) {
      this._lifePoints = actualLife;
    } else {
      this._lifePoints = -1;
    }
    console.log(
      'damage received:',
      attackPoints,
      'life points:',
      this._lifePoints,
    );
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
    console.log('MONSTER ATTACK!');
  }
}

export default Monster;