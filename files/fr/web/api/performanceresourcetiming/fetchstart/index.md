---
title: PerformanceResourceTiming.fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - fetchStart
translation_of: Web/API/PerformanceResourceTiming/fetchStart
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`fetchStart`** représente un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence à récupérer la ressource.

S'il y a des redirections HTTP, la propriété renvoie le temps immédiatement avant que l'agent utilisateur ne commence à récupérer la ressource finale dans la redirection.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.fetchStart;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence à récupérer la ressource.

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
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

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

| Spécification                                                                                                                        | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Resource Timing', '#dom-performanceresourcetiming-fetchstart',
        'fetchStart')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.fetchStart")}}
