import type { Party } from '../types';
import { PlayerRow } from './PlayerRow';

interface PartyCardProps {
  party: Party;
  dimmed: boolean;
  onToggleCompleted: (id: string) => void;
}

export function PartyCard({ party, dimmed, onToggleCompleted }: PartyCardProps) {
  const isEmpty = party.players.length === 0;

  return (
    <article
      className={`flex flex-col rounded-lg border bg-zinc-800/90 p-3 shadow-lg transition-all ${
        party.isCompleted
          ? 'border-green-600/60 opacity-60'
          : dimmed
            ? 'border-zinc-700/40 opacity-30'
            : 'border-zinc-700/80 hover:border-zinc-600'
      }`}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <h2 className="truncate text-sm font-semibold text-zinc-100">{party.name}</h2>
        <button
          type="button"
          onClick={() => onToggleCompleted(party.id)}
          title={party.isCompleted ? 'Marcar como pendiente' : 'Marcar como completada'}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-colors ${
            party.isCompleted
              ? 'border-green-500 bg-green-500/20 text-green-400'
              : 'border-zinc-600 bg-zinc-700/50 text-zinc-400 hover:border-green-500/50 hover:text-green-400'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </header>

      <div className="mb-1 grid grid-cols-[28px_36px_1fr] gap-1 border-b border-zinc-700/80 pb-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
        <span>CLS</span>
        <span>LV</span>
        <span>NAME</span>
      </div>

      <div className="min-h-[88px] flex-1">
        {isEmpty ? (
          <p className="py-6 text-center text-xs text-zinc-500">Sin jugadores</p>
        ) : (
          party.players.map((character, index) => (
            <PlayerRow key={`${party.id}-${index}`} character={character} />
          ))
        )}
      </div>

      <footer className="mt-2 border-t border-zinc-700/60 pt-2 text-xs text-zinc-400">
        AverageLV {party.averageLevel || '—'}
      </footer>
    </article>
  );
}
