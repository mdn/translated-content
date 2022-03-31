---
title: WindowClient
slug: Web/API/WindowClient
tags:
  - API
  - Client
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
  - WindowClient
translation_of: Web/API/WindowClient
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

L'interface `WindowClient` de l'[API ServiceWorker](/en-US/docs/Web/API/ServiceWorker_API) représente la portée d'un client service worker lorsque celui-ci existe en tant que document dans un contexte navigateur, controlé par un worker actif. Le client sélectionne et utilise un service worker pour son propre chargement et celui de ses sous-ressources.

## Méthodes

_`WindowClient` hérite certaines méthodes de son parent, {{domxref("Client")}}._

- {{domxref("WindowClient.focus()")}}
  - : Assigne le focus au client en cours.
- {{domxref("WindowClient.navigate()")}}
  - : Charge l'url spécifiée dans la page en cours.

## Propriétés

_`WindowClient` hérite certaines propriétés de son parent, {{domxref("Client")}}._

- {{domxref("WindowClient.focused")}} {{readonlyInline}}
  - : Un booléen qui indique si oui ou non le client en cours est focus.
- {{domxref("WindowClient.visibilityState")}} {{readonlyInline}}
  - : Indique la visibilité du client en cours. Peut prendre les valeures `hidden`, `visible`, `prerender`, ou `unloaded`.

## Exemple

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // Vérifie si le client en cours est ouvert et
  // le focus le cas échéant
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#window-client-interface', 'WindowClient')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.WindowClient")}}

## Voir aussi

- [Using Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Promises](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Using web workers](/en-US/docs/Web/Guide/Performance/Using_web_workers)
- [Channel Messaging API](/en-US/docs/Web/API/Channel_Messaging_API)
