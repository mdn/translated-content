---
title: PerformanceResourceTiming.transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`transferSize`** représente la taille (en octets) de la ressource extraite. La taille comprend les champs d'en-tête de la réponse plus la charge utile du corps de la réponse (comme défini par la [RFC 7230](https://httpwg.github.io/specs/rfc7230.html#message.body)).

{{AvailableInWorkers}}

Si la ressource est extraite d'un cache local ou s'il s'agit d'une ressource d'origine croisée, cette propriété renvoie zéro.

## Syntaxe

```js
resource.transferSize;
```

### Valeur de retour

Un `number` représentant la taille (en octets) de la ressource extraite. La taille comprend les champs d'en-tête de la réponse plus la taille [de la charge utile du corps de la réponse](https://httpwg.github.io/specs/rfc7230.html#message.body) (RFC7230).

## Exemple

Dans l'exemple suivant, les valeurs des propriétés de taille de tous les [types](/fr/docs/Web/API/PerformanceEntry/entryType) `"resource"` sont enregistrées.

```js
function log_sizes(perfEntry) {
  // Vérifie la prise en charge des propriétés PerformanceEntry.*size et imprime leurs valeurs
  // si elles sont prises en charge
  if ("decodedBodySize" in perfEntry)
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  else console.log("decodedBodySize = N'EST PAS pris en charge");

  if ("encodedBodySize" in perfEntry)
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  else console.log("encodedBodySize = N'EST PAS pris en charge");

  if ("transferSize" in perfEntry)
    console.log("transferSize = " + perfEntry.transferSize);
  else console.log("transferSize = N'EST PAS pris en charge");
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
