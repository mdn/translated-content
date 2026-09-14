---
title: "HTMLTrackElement : propriété default"
short-title: default
slug: Web/API/HTMLTrackElement/default
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`default`** de l'interface {{DOMxRef("HTMLTrackElement")}} indique si la piste sera activée si les préférences de l'utilisateur·ice n'indiquent pas qu'une autre piste serait plus appropriée. Elle reflète l'attribut booléen [`default`](/fr/docs/Web/HTML/Reference/Elements/track#default) de l'élément HTML {{HTMLElement("track")}}, retournant `true` s'il est présent et `false` sinon.

## Valeur

Un booléen.

## Exemple

```js
const trackElement = document.getElementById("exampleTrack");
console.log(trackElement.default);
trackElement.default = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTrackElement.kind")}}
- La propriété {{DOMxRef("HTMLTrackElement.label")}}
