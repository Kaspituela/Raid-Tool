import { useCallback, useMemo, useState } from 'react';
import { partyHasAnyPlayer } from '../data/loadParties';
import { useParties } from '../hooks/useParties';
import type { FilterMode } from '../types';
import { FilterBar } from './FilterBar';
import { PartyCard } from './PartyCard';
import { PlayerList } from './PlayerList';

export function Dashboard() {
  const { parties, raids, guildPlayers, toggleCompleted, resetProgress } = useParties();
  const [filter, setFilter] = useState<FilterMode>('all');
  const [raidId, setRaidId] = useState<string>('all');
  const [absentPlayerIds, setAbsentPlayerIds] = useState<string[]>([]);

  const toggleAbsent = useCallback((playerId: string) => {
    setAbsentPlayerIds((prev) =>
      prev.includes(playerId)
        ? prev.filter((id) => id !== playerId)
        : [...prev, playerId],
    );
  }, []);

  const activeParties = useMemo(
    () => parties.filter((p) => p.players.length > 0),
    [parties],
  );

  const pendingCount = useMemo(
    () => activeParties.filter((p) => !p.isCompleted).length,
    [activeParties],
  );

  const filteredParties = useMemo(() => {
    return parties.filter((party) => {
      const matchesRaid = raidId === 'all' || party.raidId === raidId;
      const matchesFilter =
        filter === 'all' ||
        (filter === 'pending' && !party.isCompleted) ||
        (filter === 'completed' && party.isCompleted);
      return matchesRaid && matchesFilter;
    });
  }, [parties, filter, raidId]);

  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1600px]">
        <FilterBar
          filter={filter}
          raidId={raidId}
          raids={raids}
          pendingCount={pendingCount}
          totalCount={activeParties.length}
          onFilterChange={setFilter}
          onRaidChange={setRaidId}
          onResetProgress={resetProgress}
        />

        <PlayerList
          players={guildPlayers}
          absentPlayerIds={absentPlayerIds}
          onToggleAbsent={toggleAbsent}
          onClearAbsent={() => setAbsentPlayerIds([])}
        />

        {filteredParties.length === 0 ? (
          <p className="py-12 text-center text-zinc-500">
            No hay parties que coincidan con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredParties.map((party) => (
              <PartyCard
                key={party.id}
                party={party}
                dimmed={partyHasAnyPlayer(party, absentPlayerIds)}
                onToggleCompleted={toggleCompleted}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
