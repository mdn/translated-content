---
title: Client.postMessage()
slug: Web/API/Client/postMessage
tags:
  - API
  - Client
  - Méthode
  - Reference
  - Service Worker
  - ServiceWorker
  - postMessage
translation_of: Web/API/Client/postMessage
---
{{SeeCompatTable}}{{APIRef("Client")}}

La méthode **`postMessage()`** de l'interface [`Client`](/fr/docs/Web/API/Client) permet à un service worker client d'envoyer un message à un [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker).

## Syntaxe

```js
Client.postMessage(message[, transfer]);
```

### Valeur de retour

Void.

### Paramètres

- `message`
  - : Le message à envoyer au service worker.
- `transfer {{optional_inline}}`
  - : Un objet transferable, comme par exemple une référence à un port.

## Exemples

Ce fragment de code est tiré de l'[exemple d'envoi de message du service worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/post-message/index.html) exemple d'envoi de message du service worker (voir [exemple en ligne](https://googlechrome.github.io/samples/service-worker/post-message/)). Le code envoi un message et transfert le port vers le service worker qui pourra répondre via {{domxref("Client.postMessage()")}}.

Ce message est contenu dans une promesse qui se résolvera si la réponse ne contient pas d'erreur et qui échouera avec l'erreur.

```js
function sendMessage(message) {
  return new Promise(function(resolve, reject) {
     var messageChannel = new MessageChannel();
     messageChannel.port1.onmessage = function(event) {
       if (event.data.error) {
         reject(event.data.error);
       } else {
         resolve(event.data);
       }
     };
    navigator.serviceWorker.controller.postMessage(message, [messageChannel.port2]);
  });
}
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#client-postmessage-method', 'postMessage()')}} | {{Spec2('Service Workers')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Client.postMessage")}}
