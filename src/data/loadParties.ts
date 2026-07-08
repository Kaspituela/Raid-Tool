import partiesFile from './parties.json';
import type {
  Character,
  CharacterDef,
  CompletionState,
  GuildPlayer,
  PartiesFile,
  Party,
  Raid,
} from '../types';

const data = partiesFile as PartiesFile;

export const guildPlayers: GuildPlayer[] = data.players;
export const raids: Raid[] = data.raids;

export const playerMap = new Map(guildPlayers.map((p) => [p.id, p]));

const characterMap = new Map<string, CharacterDef & { playerId: string }>();
for (const player of guildPlayers) {
  for (const character of player.characters) {
    characterMap.set(character.name, { ...character, playerId: player.id });
  }
}

function resolveMembers(memberNames: string[]): Character[] {
  return memberNames.flatMap((name) => {
    const def = characterMap.get(name);
    if (!def) {
      console.warn(`Personaje no encontrado en players: "${name}"`);
      return [];
    }
    return [
      {
        name: def.name,
        class: def.class,
        ilvl: def.ilvl,
        playerId: def.playerId,
      },
    ];
  });
}

function calcAverageLevel(members: Character[]): number {
  if (members.length === 0) return 0;
  const sum = members.reduce((acc, m) => acc + m.ilvl, 0);
  return Math.round(sum / members.length);
}

export function buildParties(completed: CompletionState): Party[] {
  return raids.flatMap((raid) =>
    raid.parties.map((party) => {
      const players = resolveMembers(party.members);
      return {
        id: party.id,
        name: party.name,
        members: party.members,
        players,
        averageLevel: calcAverageLevel(players),
        raidId: raid.id,
        isCompleted: completed[party.id] ?? false,
      };
    }),
  );
}

export function partyHasAnyPlayer(party: Party, playerIds: string[]): boolean {
  if (playerIds.length === 0) return false;
  const absent = new Set(playerIds);
  return party.players.some((c) => absent.has(c.playerId));
}
