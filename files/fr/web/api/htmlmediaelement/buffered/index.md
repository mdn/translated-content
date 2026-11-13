---
title: "HTMLMediaElement : propriété buffered"
short-title: buffered
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`buffered`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un nouvel [objet `TimeRanges` normalisé](/fr/docs/Web/API/TimeRanges#objets_timeranges_normalisés) statique représentant les plages de la ressource média, s'il y en a, que l'agent utilisateur a mises en mémoire tampon au moment de l'accès à la propriété `buffered`.

## Valeur

Un nouvel [objet `TimeRanges` normalisé](/fr/docs/Web/API/TimeRanges#objets_timeranges_normalisés) statique qui représente les plages de la ressource média, s'il y en a, que l'agent utilisateur a mises en mémoire tampon au moment de l'accès à la propriété `buffered`.

## Exemples

```js
let obj = document.createElement("video");
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.buffered`
