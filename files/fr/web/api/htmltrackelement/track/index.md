---
title: "HTMLTrackElement : propriété track"
short-title: track
slug: Web/API/HTMLTrackElement/track
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`track`** de l'interface {{DOMxRef("HTMLTrackElement")}} retourne un objet {{DOMxRef("TextTrack")}} correspondant à la piste de texte de l'élément HTML {{HTMLElement("track")}}.

## Valeur

Un objet {{DOMxRef("TextTrack")}}.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.dir(trackElement.track);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTrackElement")}}
- L'interface {{DOMxRef("TextTrack")}}
- L'élément HTML {{HTMLElement("track")}}
