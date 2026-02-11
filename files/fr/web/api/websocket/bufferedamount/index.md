---
title: "WebSocket : propriété bufferedAmount"
short-title: bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`bufferedAmount`** de l'interface {{DOMxRef("WebSocket")}} retourne le nombre d'octets de données qui ont été placées dans la queue via des appels à {{DOMxRef("WebSocket.send", "send()")}} mais qui n'ont pas encore été transmises sur le réseau. Cette valeur est réinitialisée à zéro lorsque toutes les données ont été envoyées. Cette valeur n'est pas remise à zéro lorsque la connexion est fermée. Des appels successifs à {{DOMxRef("WebSocket.send", "send()")}} feront croître cette valeur.

## Valeur

Un nombre au format `unsigned long`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
