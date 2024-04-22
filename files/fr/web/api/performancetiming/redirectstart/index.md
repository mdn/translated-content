---
title: PerformanceTiming.redirectStart
slug: Web/API/PerformanceTiming/redirectStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`redirectStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la première redirection HTTP commence. S'il n'y a pas de redirection, ou si l'une des redirections n'est pas de la même origine, la valeur renvoyée est `0`.

## Syntaxe

```js
let time = performanceTiming.redirectStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
