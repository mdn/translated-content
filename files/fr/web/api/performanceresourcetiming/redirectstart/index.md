---
title: PerformanceResourceTiming.redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`redirectStart`** retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'instant du début de la récupération qui initie la redirection.

S'il y a des redirections HTTP lors de l'extraction de la ressource et si l'une des redirections ne provient pas de la même origine que le document actuel, mais que l'algorithme de vérification de l'autorisation de synchronisation réussit pour chaque ressource redirigée, cette propriété renvoie l'heure de début de l'extraction qui initie la redirection ; sinon, zéro est renvoyé.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.redirectStart;
```

### Valeur de retour

Un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure de début de l'extraction qui déclenche la redirection.

## Exemple

Dans l'exemple suivant, la valeur des propriétés `*Start` et `*End` de tous les événements de [type](/fr/docs/Web/API/PerformanceEntry/entryType) `"resource"` sont enregistrés.

```js
function print_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i < p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Imprime les horodatages des propriétés *start et *end
  properties = [
    "connectStart",
    "connectEnd",
    "domainLookupStart",
    "domainLookupEnd",
    "fetchStart",
    "redirectStart",
    "redirectEnd",
    "requestStart",
    "responseStart",
    "responseEnd",
    "secureConnectionStart",
  ];

  for (let i = 0; i < properties.length; i++) {
    // vérifie chaque propriété
    let supported = properties[i] in perfEntry;
    if (supported) {
      let value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = N'EST PAS pris en charge");
    }
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
