---
title: PerformanceTiming.unloadEventEnd
slug: Web/API/PerformanceTiming/unloadEventEnd
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.unloadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`unloadEventEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le gestionnaire d'événement [`unload`](/fr/docs/Web/API/Window/unload_event) se termine. S'il n'y a pas de document précédent, ou si le document précédent, ou l'une des redirections nécessaires, n'est pas de la même origine, la valeur retournée est `0`.

## Syntaxe

```js
let time = performanceTiming.unloadEventEnd;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
