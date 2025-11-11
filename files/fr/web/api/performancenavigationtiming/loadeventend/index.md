---
title: PerformanceNavigationTiming.loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété en lecture seule **`loadEventEnd`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) qui est égal à l'heure à laquelle l'événement de chargement du document actuel est terminé.

## Syntaxe

```js
perfEntry.loadEventEnd;
```

### Valeur de retour

Un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le moment où l'événement de chargement du document actuel est terminé.

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
