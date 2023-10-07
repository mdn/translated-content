---
title: PerformanceNavigationTiming.type
slug: Web/API/PerformanceNavigationTiming/type
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

La propriété en lecture seule **`type`** renvoie une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) représentant le type de navigation. La valeur doit être l'une des suivantes :

- `navigate`
  - : La navigation a commencé en cliquant sur un lien, en saisissant l'URL dans la barre d'adresse du navigateur, en soumettant un formulaire ou en s'initialisant par une opération de script autre que reload et back_forward, comme indiqué ci-dessous.
- `reload`
  - : La navigation s'effectue par l'opération de rechargement du navigateur ou [`location.reload()`](/fr/docs/Web/API/location/reload).
- `back_forward`
  - : La navigation se fait par l'opération de traversée de l'historique du navigateur.
- `prerender`
  - : La navigation est initiée par un [indice de prétraitement](https://www.w3.org/TR/resource-hints/#prerender).

## Syntaxe

```js
perfEntry.type;
```

### Valeur de retour

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) qui est l'une des valeurs énumérées ci-dessus.

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
