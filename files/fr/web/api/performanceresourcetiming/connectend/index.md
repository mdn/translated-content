---
title: PerformanceResourceTiming.connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - connectEnd
translation_of: Web/API/PerformanceResourceTiming/connectEnd
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`connectEnd`** renvoie le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) de l'instant suivant immédiatement la fin d'établissement de la connexion du navigateur au serveur pour récupérer la ressource. La valeur de l'horodatage comprend l'intervalle de temps pour établir la connexion de transport, ainsi que d'autres intervalles de temps tels que la poignée de main TLS/SSL et l'authentification SOCKS.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.connectEnd;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant le temps après l'établissement d'une connexion.

## Exemple

Dans l'exemple suivant, la valeur des propriétés `*Start` et `*End` de tous les événements de [type](/fr/docs/Web/API/PerformanceEntry/entryType) `"resource"` sont consignés.

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
| {{SpecName('Resource Timing', '#dom-performanceresourcetiming-connectend',
        'connectEnd')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.connectEnd")}}
