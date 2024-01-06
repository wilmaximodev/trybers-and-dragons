import Character from './Character';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';

// characters 
export const player1 = new Character('player1');
player1.levelUp();
player1.levelUp();
player1.levelUp();
console.log(player1);
export const player2 = new Character('player2');
export const player3 = new Character('player3');
console.log(player2);
console.log(player3);
export const monster1 = new Monster();
export const monster2 = new Monster();

export const pvp = new PVP(player2, player3);
export const pve = new PVE(player1, [monster1, monster2]);

export const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};