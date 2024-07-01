---
title: PerformanceNavigationTiming.domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété en lecture seule **`domInteractive`** retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne définisse la disponibilité du document actuel à [interactif](https://html.spec.whatwg.org/multipage/syntax.html#the-end).

## Syntaxe

```js
perfEntry.domInteractive;
```

### Valeur de retour

Une [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant la valeur temporelle égale au temps immédiatement avant que l'agent utilisateur ne définisse la disponibilité du document actuel à [interactif](https://html.spec.whatwg.org/multipage/syntax.html#the-end).

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
