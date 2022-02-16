---
title: PerformanceResourceTiming.decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - decodedBodySize
translation_of: Web/API/PerformanceResourceTiming/decodedBodySize
---
{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`decodedBodySize`** renvoie la taille (en octets) reçue de la récupération (HTTP ou cache) du corps du message, après suppression de tout codage de contenu appliqué. Si la ressource est récupérée à partir d'un cache d'application ou de ressources locales, elle renvoie la taille de la donnée utile après suppression de tous les codages de contenu appliqués.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.decodedBodySize;
```

### Valeur de retour

La taille (en octets) reçue de l'extraction (HTTP ou cache) du corps du message, après suppression de tout codage de contenu appliqué.

## Exemple

Dans l'exemple suivant, la valeur des propriétés de taille de tous les événements de [type](/fr/docs/Web/API/PerformanceEntry/entryType) `"resource"` est enregistrée.

```js
function log_sizes(perfEntry){
  // Vérifie la prise en charge des propriétés *size et imprime leurs
  // valeurs si elles sont prises en charge.
  if ("decodedBodySize" in perfEntry) {
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  } else {
    console.log("decodedBodySize = N'EST PAS pris en charge");
  }

  if ("encodedBodySize" in perfEntry) {
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  } else {
    console.log("encodedBodySize = N'EST PAS pris en charge");
  }

  if ("transferSize" in perfEntry) {
    console.log("transferSize = " + perfEntry.transferSize);
  } else {
    console.log("transferSize = N'EST PAS pris en charge");
  }
}
function check_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i < p.length; i++) {
    log_sizes(p[i]);
  }
}
```

## Spécifications

| Spécification                                                                                                                                        | Statut                                   | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Resource Timing 2',
        '#dom-performanceresourcetiming-decodedbodysize', 'decodedBodySize')}} | {{Spec2('Resource Timing 2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.decodedBodySize")}}
