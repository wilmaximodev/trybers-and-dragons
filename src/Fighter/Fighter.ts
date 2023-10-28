import Energy from '../Energy';

interface Fighter {
  // atributes 
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  
  //   methods
  attack(enemy: Fighter): void;
  special?(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;