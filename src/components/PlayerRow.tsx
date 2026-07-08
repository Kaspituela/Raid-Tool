import type { Character } from '../types';
import { playerMap } from '../data/loadParties';
import { getPlayerColor } from '../utils/colors';
import { ClassIcon } from './ClassIcon';

interface PlayerRowProps {
  character: Character;
}

export function PlayerRow({ character }: PlayerRowProps) {
  const player = playerMap.get(character.playerId);
  const colorClass = player ? getPlayerColor(player.color) : 'text-zinc-200';

  return (
    <div className="grid grid-cols-[28px_36px_1fr] items-center gap-1 py-0.5 text-xs">
      <ClassIcon className={character.class} />
      <span className="font-mono text-blue-300">{character.ilvl}</span>
      <span className={`truncate font-medium ${colorClass}`}>{character.name}</span>
    </div>
  );
}
