---
title: PerformanceNavigationTiming.toJSON()
slug: Web/API/PerformanceNavigationTiming/toJSON
tags:
  - API
  - Method
  - Méthode
  - Reference
  - PerformanceNavigationTiming
  - Performance Web
translation_of: Web/API/PerformanceNavigationTiming/toJSON
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La méthode **`toJSON()`** est un _sérialiseur_ - elle renvoie une représentation JSON de l'objet [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming).

## Syntaxe

```js
const json = resourcePerfEntry.toJSON();
```

### Arguments

Aucun.

### Valeur de retour

- `json`
  - : Un objet JSON qui est la sérialisation de l'objet [`PerformanceNavigationTiming`](/fr/docs/Web/API/PerformanceNavigationTiming) comme une carte avec des entrées de l'interface héritée la plus proche et avec des entrées pour chacun des attributs sérialisables.

## Exemple

```js
// Obtient une entrée de performance des ressources
let perfEntries = performance.getEntriesByType("navigation");
let entry = perfEntries[0];

// Récupère le JSON et l'affiche dans les journaux
let json = entry.toJSON();
let s = JSON.stringify(json);
console.log("PerformanceNavigationTiming.toJSON() = " + s);
```

## Spécifications

| Spécification                                                                                                                                | Statut                                               | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing Level 2',
        '#dom-performancenavigationtiming-tojson', 'toJSON()')}} | {{Spec2('Navigation Timing Level 2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceNavigationTiming.toJSON")}}
