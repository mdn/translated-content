---
title: PerformanceTiming.connectStart
slug: Web/API/PerformanceTiming/connectStart
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`connectStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la demande d'ouverture de connexion est envoyée au réseau. Si la couche transport signale une erreur et que l'établissement de la connexion est relancé, le dernier moment de début d'établissement de la connexion est donné. Si une connexion persistante est utilisée, la valeur sera la même que [`PerformanceTiming.fetchStart`](/fr/docs/Web/API/PerformanceTiming/fetchStart).

## Syntaxe

```js
let time = performanceTiming.connectStart;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
