import type { LostArkClass } from '../types';

/**
 * Reemplaza cada src con la URL o ruta de tu icono de clase.
 * Ejemplo local: '/classes/Berserker.png'
 * Ejemplo URL:   'https://tu-cdn.com/classes/berserker.png'
 */
export const CLASS_ICON_SRC: Record<LostArkClass, string> = {
  Berserker: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/berserker_s.png',
  Gunlancer: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/warlord_s.png',
  Destroyer: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/destroyer_s.png',
  Paladin: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/holyknight_s.png',
  Slayer: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/berserker_female_s.png',
  Valkyrie: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/holyknight_female_s.png',
  Wardancer: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/battle_master_s.png',
  Scrapper: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/infighter_s.png',
  Soulfist: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/force_master_s.png',
  Glaivier: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/lance_master_s.png',
  Striker: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/battle_master_male_s.png',
  Breaker: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/infighter_male_s.png',
  Deadeye: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/devil_hunter_s.png',
  Artillerist: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/blaster_s.png',
  Sharpshooter: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/hawk_eye_s.png',
  Machinist: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/scouter_s.png',
  Gunslinger: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/devil_hunter_female_s.png',
  Summoner: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/summoner_s.png',
  Arcanist: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/arcana_s.png',
  Bard: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/bard_s.png',
  Sorceress: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/elemental_master_s.png',
  Deathblade: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/blade_s.png',
  Shadowhunter: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/demonic_s.png',
  Reaper: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/reaper_s.png',
  Souleater: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/soul_eater_s.png',
  Artist: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/yinyangshi_s.png',
  Aeromancer: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/weather_artist_s.png',
  Wildsoul: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/alchemist_s.png',
  GuardianKnight: 'https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/thumb/dragon_knight_s.png',
};

export function getClassIconSrc(className: LostArkClass): string {
  return CLASS_ICON_SRC[className];
}
