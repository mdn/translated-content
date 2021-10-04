---
title: PerformanceTiming.domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
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
  - domainLookupEnd
translation_of: Web/API/PerformanceTiming/domainLookupEnd
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`domainLookupEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où la recherche de domaine est terminée. Si une connexion persistante est utilisée, ou si les informations sont stockées dans un cache ou une ressource locale, la valeur sera la même que [`PerformanceTiming.fetchStart`](/fr/docs/Web/API/PerformanceTiming/fetchStart).

## Syntaxe

```js
let time = performanceTiming.domainLookupEnd;
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-domainlookupend',
        'PerformanceTiming.domainLookupEnd')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.domainLookupEnd")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
