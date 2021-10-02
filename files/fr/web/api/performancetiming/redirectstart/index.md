---
title: PerformanceTiming.redirectStart
slug: Web/API/PerformanceTiming/redirectStart
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
  - redirectStart
translation_of: Web/API/PerformanceTiming/redirectStart
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`redirectStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la première redirection HTTP commence. S'il n'y a pas de redirection, ou si l'une des redirections n'est pas de la même origine, la valeur renvoyée est `0`.

## Syntaxe

```js
let time = performanceTiming.redirectStart;
```

## Spécifications

| Spécification                                                                                                                                                | Statut                                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-redirectstart',
        'PerformanceTiming.redirectStart')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.redirectStart")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
