---
title: "HTMLMediaElement : propriété duration"
short-title: duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`duration`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique la durée du média de l'élément en secondes.

## Valeur

Une valeur à virgule flottante en double précision indiquant la durée du média en secondes. Si aucune donnée média n'est disponible, la valeur `NaN` est retournée. Si le média de l'élément n'a pas de durée connue, comme pour les flux média en direct, la valeur de `duration` vaut `Infinity`.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Technologies multimédias Web](/fr/docs/Web/Media)
- La propriété {{DOMxRef("HTMLMediaElement.currentTime")}}&nbsp;: La position de lecture actuelle du média
- Les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}}
