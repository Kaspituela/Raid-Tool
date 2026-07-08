export type NameColor =
  | 'red'
  | 'cyan'
  | 'green'
  | 'blue'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'yellow';

export type LostArkClass =
  | 'Berserker'
  | 'Gunlancer'
  | 'Destroyer'
  | 'Paladin'
  | 'Slayer'
  | 'Valkyrie'
  | 'Wardancer'
  | 'Scrapper'
  | 'Soulfist'
  | 'Glaivier'
  | 'Striker'
  | 'Breaker'
  | 'Deadeye'
  | 'Artillerist'
  | 'Sharpshooter'
  | 'Machinist'
  | 'Gunslinger'
  | 'Summoner'
  | 'Arcanist'
  | 'Bard'
  | 'Sorceress'
  | 'Deathblade'
  | 'Shadowhunter'
  | 'Reaper'
  | 'Souleater'
  | 'Artist'
  | 'Aeromancer'
  | 'Wildsoul'
  | 'GuardianKnight';

export interface CharacterDef {
  name: string;
  class: LostArkClass;
  ilvl: number;
}

export interface GuildPlayer {
  id: string;
  name: string;
  color: NameColor;
  characters: CharacterDef[];
}

export interface PartyDataRaw {
  id: string;
  name: string;
  members: string[];
}

export interface Raid {
  id: string;
  label: string;
  parties: PartyDataRaw[];
}

export interface PartiesFile {
  players: GuildPlayer[];
  raids: Raid[];
}

export interface Character {
  name: string;
  class: LostArkClass;
  ilvl: number;
  playerId: string;
}

export interface Party {
  id: string;
  name: string;
  members: string[];
  players: Character[];
  averageLevel: number;
  raidId: string;
  isCompleted: boolean;
}

export type FilterMode = 'all' | 'pending' | 'completed';

export type CompletionState = Record<string, boolean>;
