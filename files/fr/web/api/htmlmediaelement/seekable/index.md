---
title: "HTMLMediaElement : propriété seekable"
short-title: seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`seekable`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un nouvel objet [`TimeRanges` normalisé](/fr/docs/Web/API/TimeRanges#objets_timeranges_normalisés) qui représente les plages de la ressource média, le cas échéant, que l'agent utilisateur est capable de rechercher au moment où la propriété `seekable` est accédée.

## Valeur

Un nouvel objet [`TimeRanges` normalisé](/fr/docs/Web/API/TimeRanges#objets_timeranges_normalisés) qui représente les plages de la ressource média, le cas échéant, que l'agent utilisateur est capable de rechercher au moment où la propriété `seekable` est accédée.

## Exemples

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
// Parcourez l'objet et générez un tableau
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.seekable`
- [L'API Media Source](/fr/docs/Web/API/Media_Source_Extensions_API)
- [Mise en mémoire tampon, recherche et plages temporelles des médias](/fr/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
