---
title: performance.timing
slug: Web/API/Performance/timing
tags:
  - API
  - Rétrocompatibilité
  - Déprécié
  - Navigation Timing
  - Performance
  - Property
  - Propriété
  - Read-only
  - Lecture seule
  - Reference
translation_of: Web/API/Performance/timing
---
{{deprecated_header}}{{APIRef("Navigation Timing")}}

> **Attention :** Cette propriété est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface {{domxref("PerformanceNavigationTiming")}} à la place.

L'ancienne propriété **`Performance.timing`** renvoie un objet {{domxref("PerformanceTiming")}} en lecture seule contenant des informations de performance liées à la latence.

{{warning("Cette propriété n'est pas disponible dans les Web Workers.")}}

## Syntaxe

```js
  timingInfo = performance.timing;
```

## Spécifications

| Spécification                                                            | Statut                                               | Commentaire          |
| ------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing Level 2', '#obsolete')}} | {{Spec2('Navigation Timing Level 2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Performance.timing")}}

## Voir aussi

- L'interface {{domxref("Performance")}} à laquelle il appartient.
