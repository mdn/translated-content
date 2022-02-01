---
title: PerformanceTiming.requestStart
slug: Web/API/PerformanceTiming/requestStart
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
  - requestStart
translation_of: Web/API/PerformanceTiming/requestStart
---
{{ APIRef("PerformanceTiming") }}

> **Attention :** Cette interface est dépréciée dans la spécification [Navigation Timing Level 2](https://w3c.github.io/navigation-timing/#obsolete). Veuillez utiliser l'interface [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) à la place.

L'ancienne propriété en lecture seule **`requestStart`** retourne un `unsigned long long` représentant le moment, en millisecondes depuis l'époque UNIX, où le navigateur a envoyé la requête pour obtenir le document actuel, depuis le serveur ou depuis un cache. Si la couche de transport échoue après le début de la requête et que la connexion est rouverte, cette propriété sera définie sur le temps correspondant à la nouvelle requête.

## Syntaxe

```js
let time = performanceTiming.requestStart;
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#dom-performancetiming-requeststart',
        'PerformanceTiming.requestStart')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceTiming.requestStart")}}

## Voir aussi

- L'interface [`PerformanceTiming`](/fr/docs/Web/API/PerformanceTiming) à laquelle elle appartient.
