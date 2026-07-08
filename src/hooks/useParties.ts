import { useCallback, useEffect, useMemo, useState } from 'react';
import { buildParties, guildPlayers, raids } from '../data/loadParties';
import type { CompletionState } from '../types';
import { STORAGE_KEY } from '../utils/colors';

function loadCompletion(): CompletionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as CompletionState;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function useParties() {
  const [completed, setCompleted] = useState<CompletionState>(loadCompletion);

  const parties = useMemo(() => buildParties(completed), [completed]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggleCompleted = useCallback((partyId: string) => {
    setCompleted((prev) => {
      const next = { ...prev };
      if (next[partyId]) {
        delete next[partyId];
      } else {
        next[partyId] = true;
      }
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    setCompleted({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return { parties, raids, guildPlayers, toggleCompleted, resetProgress };
}
