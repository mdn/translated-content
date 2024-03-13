---
title: PerformanceTiming.domainLookupStart
slug: Web/API/PerformanceTiming/domainLookupStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domainLookupStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la recherche de domaine commence. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que [`PerformanceTiming.fetchStart`](/fr/docs/Web/API/PerformanceTiming/fetchStart).

## Syntaxe

```js
let time = performanceTiming.domainLookupStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
