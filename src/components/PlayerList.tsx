import type { GuildPlayer } from '../types';
import { getPlayerBgColor, getPlayerColor, getPlayerRingColor } from '../utils/colors';

interface PlayerListProps {
  players: GuildPlayer[];
  absentPlayerIds: string[];
  onToggleAbsent: (playerId: string) => void;
  onClearAbsent: () => void;
}

export function PlayerList({
  players,
  absentPlayerIds,
  onToggleAbsent,
  onClearAbsent,
}: PlayerListProps) {
  const hasSelection = absentPlayerIds.length > 0;

  return (
    <div className="mb-6 rounded-lg border border-zinc-700/80 bg-zinc-800/60 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-sm font-semibold text-zinc-300">Jugadores ausentes</h2>
        {hasSelection && (
          <button
            type="button"
            onClick={onClearAbsent}
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            Limpiar selección
          </button>
        )}
      </div>
      {hasSelection && (
        <p className="mb-3 text-xs text-zinc-500">
          Las parties atenuadas incluyen a algún jugador ausente. Las demás se pueden hacer sin
          ellos.
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {players.map((player) => {
          const isAbsent = absentPlayerIds.includes(player.id);
          return (
            <button
              key={player.id}
              type="button"
              onClick={() => onToggleAbsent(player.id)}
              className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all ${
                isAbsent
                  ? `border-zinc-500 bg-zinc-700 ring-2 ring-offset-1 ring-offset-zinc-900 ${getPlayerRingColor(player.color)}`
                  : 'border-zinc-700 bg-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-700/80'
              }`}
            >
              <span
                className={`h-3 w-3 shrink-0 rounded-full ${getPlayerBgColor(player.color)}`}
              />
              <span className={`font-medium ${getPlayerColor(player.color)}`}>{player.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
