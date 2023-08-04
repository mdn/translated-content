---
title: PerformanceTiming.domLoading
slug: Web/API/PerformanceTiming/domLoading
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domLoading`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le parseur a commencé son travail, c'est-à-dire lorsque son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `"loading"` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est déclenché.

## Syntaxe

```js
let time = performanceTiming.domLoading;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
