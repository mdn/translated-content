---
title: "HTMLTrackElement : propriété readyState"
short-title: readyState
slug: Web/API/HTMLTrackElement/readyState
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`readyState`** de l'interface {{DOMxRef("HTMLTrackElement")}} retourne un nombre représentant l'état de préparation de la piste de texte de l'élément HTML {{HTMLElement("track")}}&nbsp;:

0. `NONE`&nbsp;: état où la piste de texte n'est pas chargée
1. `LOADING`&nbsp;: état où la piste de texte est en cours de chargement
2. `LOADED`&nbsp;: état où la piste de texte est chargée
3. `ERROR`&nbsp;: état où le chargement de la piste de texte a échoué

## Valeur

Un nombre&nbsp;; `0`, `1`, `2` ou `3`.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.readyState); // 0, 1, 2 ou 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTrackElement")}}
- La propriété {{DOMxRef("HTMLMediaElement.readyState")}}
- L'élément HTML {{HTMLElement("track")}}
