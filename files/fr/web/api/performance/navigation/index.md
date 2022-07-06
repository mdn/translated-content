---
title: performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - Rétrocompatibilité
  - Déprécié
  - HTTP
  - Performance
  - Propriété
  - Property
  - Lecture seule
  - Read-only
  - Reference
  - legacy
translation_of: Web/API/Performance/navigation
---
{{Deprecated_Header}}{{APIRef("Navigation Timing")}}

> **Attention :** Cette propriété est dépréciée dans la spécification [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).

L'ancienne propriété en lecture seule **`Performance.navigation`** renvoie un objet {{domxref("PerformanceNavigation")}} représentant le type de navigation qui se produit dans le contexte de navigation donné, comme le nombre de redirections nécessaires pour aller chercher la ressource.

{{warning("Cette propriété n'est pas disponible dans les Web Workers.")}}

## Syntaxe

```js
  navObject = performance.navigation;
```

## Spécifications

| Spécification                                                                                                                    | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing', '#sec-window.performance-attribute', 'Performance.navigation')}} | {{Spec2('Navigation Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Performance.navigation")}}

## Voir aussi

- L'interface {{domxref("Performance")}} à laquelle il appartient.
