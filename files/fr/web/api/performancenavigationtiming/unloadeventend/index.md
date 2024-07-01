---
title: PerformanceNavigationTiming.unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété **`unloadEventEnd`** en lecture seule retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement après la fin de l'événement de déchargement du document précédent par l'agent utilisateur. S'il n'y a pas de document précédent, la valeur de cette propriété est `0`.

## Syntaxe

```js
perfEntry.unloadEventEnd;
```

### Valeur de retour

Un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant une valeur temporelle égale au temps immédiatement après que l'agent utilisateur ait terminé l'événement de déchargement du document précédent.

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
    console.log(
      "Contenu du DOM chargé = " +
        (p.domContentLoadedEventEnd - p.domContentLoadedEventStart),
    );
    console.log("Contenu du DOM complet = " + p.domComplete);
    console.log("Contenu du DOM interactif = " + p.interactive);

    // temps de chargement et de déchargement des documents
    console.log("Document chargé = " + (p.loadEventEnd - p.loadEventStart));
    console.log(
      "Document déchargé = " + (p.unloadEventEnd - p.unloadEventStart),
    );

    // autres propriétés
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
