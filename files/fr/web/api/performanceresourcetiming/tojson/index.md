---
title: PerformanceResourceTiming.toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
tags:
  - API
  - Method
  - Méthode
  - Reference
  - Performance Web
  - Resource Timing API
  - toJSON()
translation_of: Web/API/PerformanceResourceTiming/toJSON
---
{{APIRef("Resource Timing API")}}

La méthode **`toJSON()`** est un _sérialiseur_ qui retourne une représentation JSON de l'objet [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming).

## Syntaxe

```js
let json = resourcePerfEntry.toJSON();
```

### Arguments

Aucun.

### Valeur de retour

- `json`
  - : Un objet JSON qui est la sérialisation de l'objet [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming) comme une carte avec des entrées de l'interface héritée la plus proche et avec des entrées pour chacun des attributs sérialisables.

## Exemple

```js
// Obtient une entrée de performance des ressources
let perfEntries = performance.getEntriesByType("resource");
let entry = perfEntries[0];

// Récupère le JSON et l'enregistre
let json = entry.toJSON();
let s = JSON.stringify(json);
console.log("PerformanceEntry.toJSON = " + s);
```

## Spécifications

| Spécification                                                                                                                | Statut                                   | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| {{SpecName('Resource Timing 2', '#dom-performanceresourcetiming-tojson',
        'toJSON')}} | {{Spec2('Resource Timing 2')}} |             |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.toJSON")}}
