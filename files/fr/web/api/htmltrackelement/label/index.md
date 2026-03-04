---
title: "HTMLTrackElement : propriété label"
short-title: label
slug: Web/API/HTMLTrackElement/label
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`label`** de l'interface {{DOMxRef("HTMLTrackElement")}} représente le titre lisible par l'utilisateur·ice affiché lors de l'affichage des sous-titres, légendes et descriptions audio pour une piste. Elle reflète l'attribut [`label`](/fr/docs/Web/HTML/Reference/Elements/track#label) de l'élément HTML {{HTMLElement("track")}}.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.log(`Libellé de la piste : ${trackElement.label}`);
trackElement.label = "Libellé mis à jour";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTrackElement.track")}}
- La propriété {{DOMxRef("HTMLTrackElement.kind")}}
