---
title: PerformanceResourceTiming.encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
tags:
  - API
  - Property
  - Propriété
  - Reference
  - Performance Web
  - Resource Timing API
  - encodedBodySize
translation_of: Web/API/PerformanceResourceTiming/encodedBodySize
---
{{APIRef("Resource Timing API")}}

La propriété **`encodedBodySize`** en lecture seule représente la taille (en octets) reçue de la récupération (HTTP ou cache), du _corps de la donnée utile_, avant de supprimer tout codage de contenu appliqué.

{{AvailableInWorkers}}

Si la ressource est extraite d'un cache d'application ou d'une ressource locale, elle doit renvoyer la taille du corps de la charge utile avant de supprimer tout codage de contenu appliqué.

## Syntaxe

```js
resource.encodedBodySize;
```

### Valeur de retour

Un `number` représentant la taille (en octets) reçue de la récupération (HTTP ou cache), du _corps de la donnée utile_, avant de supprimer tout codage de contenu appliqué.

## Exemple

Dans l'exemple suivant, la valeur des propriétés de taille de tous les [types](/fr/docs/Web/API/PerformanceEntry/entryType) `"resource"` sont enregistrées.

```js
function log_sizes(perfEntry){
  // Vérifie la prise en charge des propriétés PerformanceEntry.*size et imprime leurs valeurs
  // si elles sont prises en charge
  if ("decodedBodySize" in perfEntry)
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  else
    console.log("decodedBodySize = N'EST PAS pris en charge");

  if ("encodedBodySize" in perfEntry)
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  else
    console.log("encodedBodySize = N'EST PAS pris en charge");

  if ("transferSize" in perfEntry)
    console.log("transferSize = " + perfEntry.transferSize);
  else
    console.log("transferSize = N'EST PAS pris en charge");
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
        '#dom-performanceresourcetiming-encodedbodysize', 'encodedBodySize')}} | {{Spec2('Resource Timing 2')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.PerformanceResourceTiming.encodedBodySize")}}
