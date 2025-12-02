---
title: device-posture
slug: Web/CSS/Reference/At-rules/@media/device-posture
original_slug: Web/CSS/@media/device-posture
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`device-posture`** permet de détecter la [posture actuelle](/fr/docs/Web/API/Device_Posture_API) d'un appareil, c'est-à-dire si la zone d'affichage est à plat (`continuous`) ou repliée (`folded`).

## Syntaxe

La caractéristique `device-posture` se définit à l'aide d'une valeur-mot-clé choisie parmi la liste suivante&nbsp;:

- `continuous`
  - : Indique un état d'écran à plat. Les appareils pliables sont `continuous` lorsqu'ils sont à plat, qu'ils soient complètement ouverts ou fermés. Les appareils non pliables sont considérés comme à plat et donc toujours `continuous` — cela inclut les écrans incurvés sans jointure ainsi que les écrans classiques d'ordinateurs de bureau, portables, tablettes et mobiles.
- `folded`
  - : Indique un état d'écran replié. Les appareils pliables sont `folded` lorsqu'ils sont utilisés en posture de livre ou d'ordinateur portable.

## Exemples

Dans cet exemple, la caractéristique média `device-posture` détecte lorsqu'un appareil est en posture repliée, et ajoute une marge selon son [`orientation`](/fr/docs/Web/CSS/Reference/At-rules/@media/orientation) pour créer un espace plus large entre les deux panneaux de l'application et faciliter la lecture.

```css
@media (device-posture: folded) and (orientation: landscape) {
  .list-view {
    margin-inline-end: 60px;
  }
}

@media (device-posture: folded) and (orientation: portrait) {
  .list-view {
    margin-block-end: 60px;
  }
}
```

Pour voir le code ci-dessus en action, consultez la [démo de l'API Device Posture <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/device-posture-api/) sur un appareil pliable si possible. Les outils de développement des navigateurs permettent d'émuler des appareils pliables, mais n'incluent pas l'émulation des appareils partiellement repliés — seulement des appareils complètement ouverts ou fermés — donc ils retourneront toujours `continuous`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DevicePosture")}}
- L'[API Device Posture](/fr/docs/Web/API/Device_Posture_API)
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@media")}}
