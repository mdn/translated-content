---
title: PerformanceResourceTiming.secureConnectionStart
slug: Web/API/PerformanceResourceTiming/secureConnectionStart
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - secureConnectionStart
translation_of: Web/API/PerformanceResourceTiming/secureConnectionStart
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`secureConnectionStart`** renvoie un [`timestamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne commence le processus de poignée de main (_handshake_) pour sécuriser la connexion actuelle. Si une connexion sécurisée n'est pas utilisée, la propriété renvoie zéro.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.secureConnectionStart;
```

### Valeur de retour

Si la ressource est récupérée par le biais d'une connexion sécurisée, un [`DOMHighResTimeStamp`](/fr/docs/Web/API/DOMHighResTimeStamp) immédiatement avant que le navigateur ne lance le processus de poignée de main (_handshake_) pour sécuriser la connexion actuelle. Si une connexion sécurisée n'est pas utilisée, cette propriété renvoie zéro.

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

| Spécification                                                                                                                                                    | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Resource Timing',
        '#dom-performanceresourcetiming-secureconnectionstart', 'secureConnectionStart')}} | {{Spec2('Resource Timing')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.secureConnectionStart")}}
