import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Fighter, 
    private _monsters: SimpleFighter[],
  ) {
    super(_character);
  }

  private verifyLifePoints(): boolean {
    return this._character.lifePoints > 0
    && this._monsters.some((monster) => monster.lifePoints > 0);
  }

  fight() {
    while (this.verifyLifePoints()) {
      this._character.attack(this._monsters[0]);
      this._monsters[0].attack(this._character);
    }
    return super.fight();
  }
}

export default PVE;