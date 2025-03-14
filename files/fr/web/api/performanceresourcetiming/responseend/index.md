---
title: PerformanceResourceTiming.responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`responseEnd`** retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après que le navigateur a reçu le dernier octet de la ressource ou immédiatement avant la fermeture de la connexion de transport, selon ce qui se produit en premier.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.responseEnd;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après la réception par le navigateur du dernier octet de la ressource ou immédiatement avant la fermeture de la connexion de transport, selon ce qui arrive en premier.

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
