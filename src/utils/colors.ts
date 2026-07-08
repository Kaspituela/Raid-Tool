import type { NameColor } from '../types';

export const PLAYER_COLORS: Record<NameColor, string> = {
  red: 'text-red-400',
  cyan: 'text-cyan-300',
  green: 'text-green-400',
  blue: 'text-blue-400',
  orange: 'text-orange-400',
  pink: 'text-pink-400',
  purple: 'text-purple-400',
  yellow: 'text-yellow-400',
};

export const PLAYER_BG_COLORS: Record<NameColor, string> = {
  red: 'bg-red-400',
  cyan: 'bg-cyan-300',
  green: 'bg-green-400',
  blue: 'bg-blue-400',
  orange: 'bg-orange-400',
  pink: 'bg-pink-400',
  purple: 'bg-purple-400',
  yellow: 'bg-yellow-400',
};

export const PLAYER_RING_COLORS: Record<NameColor, string> = {
  red: 'ring-red-400',
  cyan: 'ring-cyan-300',
  green: 'ring-green-400',
  blue: 'ring-blue-400',
  orange: 'ring-orange-400',
  pink: 'ring-pink-400',
  purple: 'ring-purple-400',
  yellow: 'ring-yellow-400',
};

export function getPlayerColor(color: NameColor): string {
  return PLAYER_COLORS[color] ?? 'text-gray-200';
}

export function getPlayerBgColor(color: NameColor): string {
  return PLAYER_BG_COLORS[color] ?? 'bg-gray-400';
}

export function getPlayerRingColor(color: NameColor): string {
  return PLAYER_RING_COLORS[color] ?? 'ring-gray-400';
}

export const STORAGE_KEY = 'party-editor-state';
