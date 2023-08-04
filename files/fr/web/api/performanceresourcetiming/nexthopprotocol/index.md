---
title: PerformanceResourceTiming.nextHopProtocol
slug: Web/API/PerformanceResourceTiming/nextHopProtocol
---

{{APIRef("Resource Timing API")}}

La propriété en lecture seule **`nextHopProtocol`** est une [chaîne de caractères](/fr/docs/Web/API/DOMString) représentant le _protocole réseau_ utilisé pour récupérer la ressource, tel qu'identifié par le [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

Lorsqu'un proxy est utilisé, si une connexion tunnel est établie, cette propriété renvoie l'ID du protocole ALPN du protocole tunnelisé. Sinon, cette propriété renvoie l'ID du protocole ALPN du premier saut vers le proxy.

{{AvailableInWorkers}}

## Syntaxe

```js
resource.nextHopProtocol;
```

### Valeur de retour

Une chaîne de caractères [`string`](/fr/docs/Web/API/DOMString) représentant le _protocole réseau_ utilisé pour récupérer la ressource, tel qu'identifié par le [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).

## Exemple

L'exemple suivant utilise la propriété `nextHopProtocol` :

```js
function print_PerformanceEntries() {
  // Utilise getEntriesByType() pour obtenir uniquement les événements "resource"
  let p = performance.getEntriesByType("resource");
  for (let i = 0; i < p.length; i++) {
    print_nextHopProtocol(p[i]);
  }
}
function print_nextHopProtocol(perfEntry) {
  let value = "nextHopProtocol" in perfEntry;
  if (value) console.log("nextHopProtocol = " + perfEntry.nextHopProtocol);
  else console.log("nextHopProtocol = N'EST PAS pris en charge");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
