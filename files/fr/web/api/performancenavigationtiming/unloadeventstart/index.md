---
title: PerformanceNavigationTiming.unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
tags:
  - API
  - Property
  - Propriété
  - Reference
  - PerformanceNavigationTiming
  - Performance Web
translation_of: Web/API/PerformanceNavigationTiming/unloadEventStart
---
{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété en lecture seule **`unloadEventStart`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne commence l'événement de déchargement du document précédent. S'il n'y a pas de document précédent, cette propriété renvoie `0`.

## Syntaxe

```js
perfEntry.unloadEventStart;
```

### Valeur de retour

Un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne lance l'événement de déchargement du document précédent.

## Exemple

L'exemple suivant illustre l'utilisation de cette propriété.

```js
function print_nav_timing_data() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements de type "navigation".
  let perfEntries = performance.getEntriesByType("navigation");

  for (let i = 0; i < perfEntries.length; i++) {
    console.log("= Entrée de navigation : entry[" + i + "]");
    let p = perfEntries[i];
    // propriétés du DOM
    console.log("Contenu du DOM chargé = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
    console.log("Contenu du DOM complet = " + p.domComplete);
    console.log("Contenu du DOM interactif = " + p.interactive);

    // temps de chargement et de déchargement des documents
    console.log("Document chargé = " + (p.loadEventEnd - p.loadEventStart));
    console.log("Document déchargé = " + (p.unloadEventEnd - p.unloadEventStart));

    // autres propriétés
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
```

## Spécifications

| Spécification                                                                                                                                                        | Statut                                               | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------- |
| {{SpecName('Navigation Timing Level 2',
        '#dom-performancenavigationtiming-unloadeventstart', 'unloadEventStart')}} | {{Spec2('Navigation Timing Level 2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceNavigationTiming.unloadEventStart")}}
