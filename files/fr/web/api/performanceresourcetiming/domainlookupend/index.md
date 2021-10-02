---
title: PerformanceResourceTiming.domainLookupEnd
slug: Web/API/PerformanceResourceTiming/domainLookupEnd
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - domainLookupEnd
translation_of: Web/API/PerformanceResourceTiming/domainLookupEnd
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`domainLookupEnd`** retourne le [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement après que le navigateur ait terminé la recherche du nom de domaine pour la ressource.

Si l'agent utilisateur dispose des informations de domaine dans le cache, [`domainLookupStart`](/fr/docs/Web/API/PerformanceResourceTiming/domainLookupStart) et [`domainLookupEnd`](/fr/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) représentent les moments où l'agent utilisateur commence et termine la récupération des données de domaine dans le cache.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.domainLookupEnd;
```

### Valeur de retour

Un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) représentant l'heure immédiatement après la fin de la recherche du nom de domaine de la ressource par le navigateur.

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

| Spécification                                                                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Resource Timing', '#dom-performanceresourcetiming-domainlookupend',
        'domainLookupEnd')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.domainLookupEnd")}}
