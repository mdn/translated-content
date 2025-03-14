---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`requestStart`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) du moment immédiatement avant que le navigateur ne commence à demander la ressource au serveur, au cache ou à la ressource locale. Si la connexion de transport échoue et que le navigateur retire la demande, la valeur renvoyée sera le début de la nouvelle demande.

Il n'y a pas de propriété de fin (« _requestEnd_ ») correspondante pour `requestStart`.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.requestStart;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le moment immédiatement avant que le navigateur ne commence à demander la ressource au serveur.

## Example

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
