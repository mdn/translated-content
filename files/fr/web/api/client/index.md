---
title: Client
slug: Web/API/Client
---

{{APIRef("Service Workers API")}}

L'interface `Client` de l'[API ServiceWorker](/fr/docs/Web/API/Service_Worker_API) représente la portée d'exécution d'un {{domxref("Worker")}} ou {{domxref("SharedWorker")}}. Les clients {{domxref("Window")}} sont représentés par le plus spécifique {{domxref("WindowClient")}}. Vous pouvez obtenir les objets `Client`/`WindowClient` via les méthodes {{domxref("Clients.matchAll","Clients.matchAll()")}} et {{domxref("Clients.get","Clients.get()")}}.

## Méthodes

- {{domxref("Client.postMessage()")}}
  - : Permet à un service worker d'envoyer un message au [`ServiceWorkerClient`](/fr/docs/Web/API/Client).

## Propriétés

- {{domxref("Client.id")}} {{readonlyInline}}
  - : Retourne l'identifiant universellement unique de l'objet `Client`.
- {{domxref("Client.type")}} {{readonlyInline}}
  - : Indique le type de contexte de navigation du client courant. Cette valeur peut être `auxiliary`, `top-level`, `nested`, or `none`.
- {{domxref("Client.url")}} {{readonlyInline}}
  - : Retourne l'URL du client service worker courant.

## Exemples

Ce code est basé sur un fragment pris d'un [exemple d'envoi de message](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/post-message/index.html) (voir [l'exemple en ligne](https://googlechrome.github.io/samples/service-worker/post-message/).) Ce code envoie une référence de message à laquelle le service worker peut répondre via {{domxref("Client.postMessage()")}}.

Ce message est contenu dans une promesse qui est résolue si la réponse ne contient pas d'erreur et est rejetée avec une erreur.

```js
// client service worker (par exemple un document)
function sendMessage(message) {
  return new Promise(function (resolve, reject) {
    // Notez que c'est la version du ServiceWorker.postMessage
    navigator.serviceWorker.controller.postMessage(message);
    window.serviceWorker.onMessage = function (e) {
      resolve(e.data);
    };
  });
}

// Contrôle du service worker
self.addEventListener("message", function (e) {
  // e.source est un object client
  e.source.postMessage("Hello! Your message was: " + e.data);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Exemple simple de service workers](https://github.com/mdn/sw-test)
- [Est ce que le ServiceWorker est prêt&nbsp;?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Utilisation performante des web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Channel Messaging API](/fr/docs/Web/API/Channel_Messaging_API)
