---
title: PerformanceTiming.connectEnd
slug: Web/API/PerformanceTiming/connectEnd
---

{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`connectEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la connexion a été ouverte en réseau. Si la couche de transport signale une erreur et que l'établissement de la connexion est recommencé, l'heure de fin du dernier établissement de la connexion est donnée. Si une connexion persistante est utilisée, la valeur sera la même que [`PerformanceTiming.fetchStart`](/fr/docs/Web/API/PerformanceTiming/fetchStart). Une connexion est considérée comme ouverte lorsque toute poignée de main de connexion sécurisée, ou authentification SOCKS, est terminée.

## Syntaxe

```js
let time = performanceTiming.connectEnd;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
