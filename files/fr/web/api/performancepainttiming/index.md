---
title: PerformancePaintTiming
slug: Web/API/PerformancePaintTiming
tags:
  - API
  - Interface
  - Paint Timing
  - Performance Timeline API
  - PerformancePaintTiming
  - Reference
  - Performance Web
translation_of: Web/API/PerformancePaintTiming
---
{{APIRef("Performance Timeline API")}}

L'interface **`PerformancePaintTiming`** de l'API [Paint Timing API](/fr/docs/Web/API/Paint_Timing_API) fournit des informations de temps sur les opérations de « peinture » (également appelées « render ») pendant la construction de la page Web. « Paint » fait référence à la conversion de l'arbre de rendu en pixels à l'écran.

Une application peut enregistrer un [`PerformanceObserver`](/fr/docs/Web/API/PerformanceObserver) pour le [type d'entrée de performance](/fr/docs/Web/API/PerformanceEntry) « `paint` » et l'observateur peut récupérer les heures auxquelles les événements de peinture se produisent. Utilisez ces informations pour aider à identifier les zones qui prennent trop de temps pour offrir une bonne expérience utilisateur.

{{InheritanceDiagram}}

## Propriétés

Cette interface n'a pas de propriétés mais elle étend les propriétés de [`PerformanceEntry`](/fr/docs/Web/API/PerformanceEntry) suivantes (pour [le type d'entrée de performance](/fr/docs/Web/API/PerformanceEntry/entryType) « `paint` ») en qualifiant/contraignant les propriétés comme suit :

- [`PerformanceEntry.entryType`](/fr/docs/Web/API/PerformanceEntry/entryType)
  - : Retourne « `paint` ».
- [`PerformanceEntry.name`](/fr/docs/Web/API/PerformanceEntry/name)
  - : Retourne soit `"first-paint"` ou `"first-contentful-paint"`.
- [`PerformanceEntry.startTime`](/fr/docs/Web/API/PerformanceEntry/startTime)
  - : Retourne le [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) du moment où la peinture s'est produite.
- [`PerformanceEntry.duration`](/fr/docs/Web/API/PerformanceEntry/duration)
  - : Retourne « `0` ».

## Méthodes

Cette interface n'a pas de méthodes.

## Exemple

```js
function showPaintTimings() {
  if (window.performance) {
    let performance = window.performance;
    let performanceEntries = performance.getEntriesByType('paint');
    performanceEntries.forEach( (performanceEntry, i, entries) => {
      console.log("Le temps pour " + performanceEntry.name + " est de " + performanceEntry.startTime + " millisecondes.");
    });
  } else {
    console.log("Performance Timing n'est pas prise en charge.");
  }
}
```

Le code ci-dessus produit une sortie de console semblable à ce qui suit :

    Le temps pour first-paint est de 2785.915 millisecondes.
    Le temps pour first-contentful-paint est de 2787.460 millisecondes.

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('Paint Timing','#sec-PerformancePaintTiming','PerformancePaintTiming')}} | {{Spec2('Paint Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformancePaintTiming")}}
