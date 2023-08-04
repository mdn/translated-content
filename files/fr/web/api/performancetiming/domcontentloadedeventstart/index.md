---
title: PerformanceTiming.domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.domContentLoadedEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domContentLoadedEventStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, juste avant que le parseur n'envoie l'événement [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event), c'est-à-dire juste après que tous les scripts qui doivent être exécutés juste après le parsing aient été exécutés.

## Syntaxe

```js
let time = performanceTiming.domContentLoadedEventStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
