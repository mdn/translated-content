---
title: PerformanceResourceTiming.redirectEnd
slug: Web/API/PerformanceResourceTiming/redirectEnd
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - redirectEnd
translation_of: Web/API/PerformanceResourceTiming/redirectEnd
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`redirectEnd`** retourne un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après la réception du dernier octet de la réponse de la dernière redirection.

Lors de l'extraction d'une ressource, s'il y a plusieurs redirections HTTP, que l'une d'entre elles a une origine différente du document actuel, et que l'algorithme de vérification d'autorisation de synchronisation réussit pour chaque ressource redirigée, cette propriété renvoie l'heure immédiatement après la réception du dernier octet de la réponse de la dernière redirection ; sinon, zéro est retourné.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.redirectEnd;
```

### Valeur de retour

Un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après la réception du dernier octet de la réponse de la dernière redirection.

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
| {{SpecName('Resource Timing', '#dom-performanceresourcetiming-redirectend',
        'redirectEnd')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.redirectEnd")}}
