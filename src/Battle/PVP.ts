import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  constructor(private _playerOne: Fighter, private _playerTwo: Fighter) {
    super(_playerOne);
  }

  private verifyLifePoints(): boolean {
    return this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0;
  }

  fight() {
    while (this.verifyLifePoints()) {
      this._playerOne.attack(this._playerTwo);
      console.log(this._playerTwo.lifePoints);
      this._playerTwo.attack(this._playerOne);
      console.log(this._playerOne.lifePoints);
    }
    return super.fight();
  }
}

export default PVP;