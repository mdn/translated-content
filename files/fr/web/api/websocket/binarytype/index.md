---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
browser-compat: api.WebSocket.binaryType
---
{{APIRef("Web Sockets API")}}

La propriété **`WebSocket.binaryType`** contrôle le type de données binaires reçues via la connexion WebSocket.

## Syntaxe

```js
var binaryType = aWebSocket.binaryType;
```

## Valeur

Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) ayant l'une de ces deux valeurs&nbsp;:

- `"blob"`
  - : Utilise des objets [`Blob`](/fr/docs/Web/API/Blob) pour les données binaires. Il s'agit de la valeur par défaut.
- `"arraybuffer"`
  - : Utilise des objets [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) pour les données binaires.

## Exemples

```js
// On crée une connexion WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");
// On change le type de données binaires de "blob" à "arraybuffer"
socket.binaryType = "arraybuffer";

// On écoute les différents messages
socket.addEventListener("message", function (event) {
  if(event.data instanceof ArrayBuffer) {
    // Frame de données binaires
    const view = new DataView(event.data);
    console.log(view.getInt32(0));
  } else {
    // Frame textuelle
    console.log(event.data);
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
