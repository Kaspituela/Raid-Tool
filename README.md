# Party Editor — Lost Ark

Dashboard web para gestionar parties de Lost Ark. Los datos viven en `parties.json`; solo el progreso de completado persiste en `localStorage`.

## Instalación

```bash
npm install
npm run dev
```

## Editar datos

### `src/data/parties.json`

Los personajes se definen **una vez** bajo cada jugador con su clase e ilvl. Las parties solo listan nombres:

```json
{
  "players": [
    {
      "id": "player1",
      "name": "player1",
      "color": "blue",
      "characters": [
        { "name": "Einlazord", "class": "Berserker", "ilvl": 1750 }
      ]
    }
  ],
  "raids": [
    {
      "id": "catedral",
      "label": "Catedral",
      "parties": [
        {
          "id": "cat-1",
          "name": "catedral 1",
          "members": ["Einlazord", "Kaspitaniah", "Kyocchiro", "Santya"]
        }
      ]
    }
  ]
}
```

- **averageLevel** se calcula automáticamente desde los ilvl de los miembros
- Para añadir un personaje: agrégalo en `players[].characters` y úsalo en `members`

### Iconos de clase

Edita las URLs en `src/data/classIcons.ts`:

```typescript
export const CLASS_ICON_SRC: Record<LostArkClass, string> = {
  Berserker: '/classes/Berserker.png',  // ← reemplaza con tu URL o ruta
  Gunlancer: '/classes/Gunlancer.png',
  // ...
};
```

Puedes usar rutas locales (`public/classes/Berserker.png`) o URLs externas.

## Funcionalidades

- Marcar parties como completadas (localStorage)
- Filtros: Ver todas / Pendientes / Completadas
- Filtro por raid
- Selección múltiple de jugadores ausentes (atenúa sus parties)
- Contador de parties pendientes
