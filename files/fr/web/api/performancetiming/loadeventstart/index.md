---
title: PerformanceTiming.loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.loadEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventStart) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`loadEventStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où l'événement [`load`](/fr/docs/Web/API/Document/load_event) a été envoyé pour le document actuel. Si cet événement n'a pas encore été envoyé, il retourne `0`.

## Syntaxe

```js
let time = performanceTiming.loadEventStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
