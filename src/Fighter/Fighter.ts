import { EnergyType } from '../Energy';

interface Fighter {
  // atributes 
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: EnergyType;
  
  //   methods
  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;