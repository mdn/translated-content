---
title: PerformanceNavigationTiming.redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété en lecture seule **`redirectCount`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le nombre de redirections depuis la dernière navigation sans redirection dans le contexte de navigation actuel.

## Syntaxe

```js
perfEntry.redirectCount;
```

### Valeur de retour

Un nombre représentant le nombre de redirections depuis la dernière navigation sans redirection dans le contexte de navigation actuel.

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
