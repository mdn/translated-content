---
title: PerformanceTiming.responseStart
slug: Web/API/PerformanceTiming/responseStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`responseStart`** retourne un `unsigned long long` représentant le moment (en millisecondes depuis l'époque UNIX) où le navigateur a reçu le premier octet de la réponse du serveur, du cache ou de la ressource locale.

## Syntaxe

```js
let time = performanceTiming.responseStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
