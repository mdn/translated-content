---
title: PerformanceTiming.secureConnectionStart
slug: Web/API/PerformanceTiming/secureConnectionStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`secureConnectionStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la poignée de main de connexion sécurisée commence. Si aucune connexion de ce type n'est demandée, elle retourne `0`.

## Syntaxe

```js
let time = performanceTiming.secureConnectionStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
