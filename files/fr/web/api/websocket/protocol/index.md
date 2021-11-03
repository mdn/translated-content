---
title: WebSocket.protocol
slug: Web/API/WebSocket/protocol
browser-compat: api.WebSocket.protocol
---
{{APIRef("Web Sockets API")}}

La propriété en lecture seule **`WebSocket.protocol`** renvoie le nom du sous protocole sélectionné par le serveur. Cette valeur sera l'une des chaînes de caractères du paramètre `protocols` utilisé lors de la création de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) ou la chaîne vide si aucune connexion n'est établie.

## Syntax

```js
var protocol = uneWebSocket.protocol;
```

## Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
