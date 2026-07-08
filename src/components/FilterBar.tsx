import type { FilterMode, Raid } from '../types';

interface FilterBarProps {
  filter: FilterMode;
  raidId: string;
  raids: Raid[];
  pendingCount: number;
  totalCount: number;
  onFilterChange: (filter: FilterMode) => void;
  onRaidChange: (raidId: string) => void;
  onResetProgress: () => void;
}

const filterButtons: { value: FilterMode; label: string }[] = [
  { value: 'all', label: 'Ver todas' },
  { value: 'pending', label: 'Pendientes' },
  { value: 'completed', label: 'Completadas' },
];

export function FilterBar({
  filter,
  raidId,
  raids,
  pendingCount,
  totalCount,
  onFilterChange,
  onRaidChange,
  onResetProgress,
}: FilterBarProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-zinc-100">Raid Tool</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Pendientes:{' '}
            <span className="font-semibold text-amber-400">{pendingCount}</span>
            <span className="text-zinc-600"> / {totalCount}</span>
          </p>
        </div>
        <button
          type="button"
          onClick={onResetProgress}
          className="rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-red-900/50 hover:text-red-300"
        >
          Resetear progreso
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex flex-wrap gap-1 rounded-lg bg-zinc-800/80 p-1">
          {filterButtons.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onFilterChange(value)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                filter === value
                  ? 'bg-zinc-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 rounded-lg bg-zinc-800/80 p-1">
          <button
            type="button"
            onClick={() => onRaidChange('all')}
            className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
              raidId === 'all'
                ? 'bg-zinc-600 text-white'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Todos
          </button>
          {raids.map((raid) => (
            <button
              key={raid.id}
              type="button"
              onClick={() => onRaidChange(raid.id)}
              className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                raidId === raid.id
                  ? 'bg-zinc-600 text-white'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {raid.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
