---
title: PerformanceTiming.fetchStart
slug: Web/API/PerformanceTiming/fetchStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`fetchStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le navigateur est prêt à aller chercher le document en utilisant une requête HTTP. Ce moment est _avant_ la vérification de tout cache d'application.

## Syntaxe

```js
let time = performance.timing.fetchStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
