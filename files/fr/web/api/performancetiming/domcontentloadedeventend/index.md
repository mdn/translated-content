---
title: PerformanceTiming.domContentLoadedEventEnd
slug: Web/API/PerformanceTiming/domContentLoadedEventEnd
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Propriété
  - Read-only
  - legacy
  - domContentLoadedEventEnd
translation_of: Web/API/PerformanceTiming/domContentLoadedEventEnd
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.domContentLoadedEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domContentLoadedEventEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, juste après que tous les scripts qui doivent être exécutés le plus rapidement possible, dans l'ordre ou non, aient été exécutés.

## Syntaxe

```js
let time = performanceTiming.domContentLoadedEventEnd;
```

## Spécifications

| Spécification                                                                                                                                                                                        | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing',
        '#dom-performancetiming-domcontentloadedeventend',
        'PerformanceTiming.domContentLoadedEventEnd')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.domContentLoadedEventEnd")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
