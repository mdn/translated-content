---
title: PerformanceTiming.unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
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
  - unloadEventStart
translation_of: Web/API/PerformanceTiming/unloadEventStart
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.unloadEventStart`](/fr/docs/Web/API/PerformanceNavigationTiming/unloadEventStart) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`unloadEventStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où l'événement [`unload`](/fr/docs/Web/API/Window/unload_event) a été lancé. S'il n'y a pas de document précédent, ou si le document précédent, ou l'une des redirections nécessaires, n'est pas de la même origine, la valeur retournée est `0`.

## Syntaxe

```js
let time = performanceTiming.unloadEventStart;
```

## Spécifications

| Spécification                                                                                                                                                        | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-unloadeventstart',
        'PerformanceTiming.unloadEventStart')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.unloadEventStart")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
