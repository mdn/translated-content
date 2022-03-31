---
title: PerformanceTiming.loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
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
  - loadEventEnd
translation_of: Web/API/PerformanceTiming/loadEventEnd
---
{{APIRef("Navigation Timing")}}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser la propriété [`PerformanceNavigationTiming.loadEventEnd`](/fr/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) de l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`loadEventEnd`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le gestionnaire d'événement [`load`](/fr/docs/Web/API/Document/load_event) s'est terminé, c'est-à-dire lorsque l'événement de chargement est terminé. Si cet événement n'a pas encore été envoyé, ou n'est pas encore terminé, il retourne `0`.

## Syntaxe

```js
let time = performanceTiming.loadEventEnd;
```

## Specifications

| Spécification                                                                                                                                                | Statut                                   | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-loadedeventend',
        'PerformanceTiming.loadEventEnd')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.loadEventEnd")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
