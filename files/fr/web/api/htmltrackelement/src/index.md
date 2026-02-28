---
title: "HTMLTrackElement : propriété src"
short-title: src
slug: Web/API/HTMLTrackElement/src
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLTrackElement")}} reflète la valeur de l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/track#src) de l'élément HTML {{HTMLElement("track")}}, qui indique l'URL des données de la piste de texte.

## Valeur

Une chaîne de caractères contenant l'URL des données de la piste de texte.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`URL de la piste : ${trackElement.src}`);
trackElement.src = "newTrack.vtt";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLTrackElement")}}
- L'élément HTML {{HTMLElement("track")}}
