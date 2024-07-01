---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
---

{{APIRef("Web Sockets API")}}

La propriété en lecture seule **`WebSocket.bufferedAmount`** renvoie le nombre d'octets de données qui ont été placées dans la queue via des appels à [`send()`](/fr/docs/Web/API/WebSocket/send) mais qui n'ont pas encore été transmises sur le réseau. Cette valeur est réinitialisée à zéro lorsque toutes les données ont été envoyées. Cette valeur n'est pas remise à zéro lorsque la connexion est fermée. Des appels successifs à [`send()`](/fr/docs/Web/API/WebSocket/send) feront croître cette valeur.

## Syntaxe

```js
var bufferedAmount = aWebSocket.bufferedAmount;
```

## Valeur

Un nombre au format `unsigned long`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
