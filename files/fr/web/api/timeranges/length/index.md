---
title: "TimeRanges : propriété length"
short-title: length
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`length`** de l'interface {{DOMxRef("TimeRanges")}} retourne le nombre de plages dans l'objet.

## Valeur

Un nombre.

## Exemples

Étant donné un élément vidéo avec l'ID `"maVideo"`&nbsp;:

```js
const v = document.getElementById("maVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // une seule plage
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // La seule plage commence au début et se termine à
    // la fin de la vidéo, donc toute la vidéo est chargée
  }
}
```

Cet exemple examine les plages temporelles et vérifie si la vidéo a été
chargée entièrement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
