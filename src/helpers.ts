import _ from 'lodash';
import { MyCreepMemory } from './interface.Creepmemory';

export function clearCache(): void {
  for (const name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
    }
  }
}

/** @param {string} role **/
export function getCreepsByRole(role: string): Creep[] {
  return _.filter(Game.creeps, (creep) => (creep.memory as MyCreepMemory).role == role);
}
