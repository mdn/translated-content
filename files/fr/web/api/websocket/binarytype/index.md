---
title: "WebSocket : propriété binaryType"
short-title: binaryType
slug: Web/API/WebSocket/binaryType
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

La propriété **`binaryType`** de l'interface {{DOMxRef("WebSocket")}} contrôle le type de données binaires reçues via la connexion WebSocket.

## Valeur

Une chaîne de caractères&nbsp;:

- `"blob"`
  - : Utilise des objets {{DOMxRef("Blob")}} pour les données binaires. Il s'agit de la valeur par défaut.
- `"arraybuffer"`
  - : Utilise des objets {{JSxRef("ArrayBuffer")}} pour les données binaires.

## Exemples

```js
// On crée une connexion WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// On change le type de données binaires de "blob" à "arraybuffer"
socket.binaryType = "arraybuffer";

// On écoute les différents messages
socket.addEventListener("message", (event) => {
  if (event.data instanceof ArrayBuffer) {
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
