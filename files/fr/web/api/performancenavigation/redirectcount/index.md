---
title: PerformanceNavigation.redirectCount
slug: Web/API/PerformanceNavigation/redirectCount
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Déprécié
  - HTML
  - Navigation Timing
  - PerformanceNavigation
  - Property
  - Propriété
  - Read-only
  - Héritage
translation_of: Web/API/PerformanceNavigation/redirectCount
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.redirectCount`](/fr/docs/Web/API/PerformanceNavigationTiming/redirectCount) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`PerformanceNavigation.redirectCount`** renvoie un `unsigned short` représentant le nombre de **Redirections** effectués avant d'atteindre la page.

## Syntaxe

```js
let amount = performanceNavigation.redirectCount;
```

## Spécifications

| Spécifications                                                                                                                                                       | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancenavigation-redirectcount',
        'PerformanceNavigation.redirectCount')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceNavigation.redirectCount")}}

## Voir aussi

- L'interface [`PerformanceNavigation`](/fr/docs/Web/API/PerformanceNavigation) à laquelle il appartient.
