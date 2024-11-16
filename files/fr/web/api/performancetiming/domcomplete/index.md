---
title: PerformanceTiming.domComplete
slug: Web/API/PerformanceTiming/domComplete
---

{{APIRef("Navigation Timing")}}

> [!WARNING]
> Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.domComplete`](/fr/docs/Web/API/PerformanceNavigationTiming/domComplete) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domComplete`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le parseur a terminé son travail sur le document principal, c'est-à-dire lorsque son [`Document.readyState`](/fr/docs/Web/API/Document/readyState) passe à `'complete'` et que l'événement [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event) correspondant est lancé.

## Syntaxe

```js
let time = performanceTiming.domComplete;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
