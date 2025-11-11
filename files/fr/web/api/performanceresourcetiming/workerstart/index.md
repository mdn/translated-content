---
title: PerformanceResourceTiming.workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`workerStart`** de l'interface [`PerformanceResourceTiming`](/fr/docs/Web/API/PerformanceResourceTiming) renvoie un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant l'envoi du [`FetchEvent`](/fr/docs/Web/API/FetchEvent) si un processus de _service worker_ est déjà en cours, ou immédiatement avant le démarrage du processus de _service worker_ s'il n'est pas déjà en cours. Si la ressource n'est pas interceptée par un _service worker_, la propriété renvoie toujours 0.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.workerStart;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant de transmettre le [`FetchEvent`](/fr/docs/Web/API/FetchEvent) si un processus de _service worker_ est déjà en cours, ou immédiatement avant de lancer le processus de _service worker_ s'il n'est pas encore en cours. Si la ressource n'est pas interceptée par un _service worker_, la propriété retourne toujours 0.

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
