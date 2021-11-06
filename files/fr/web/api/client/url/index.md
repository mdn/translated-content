---
title: Client.url
slug: Web/API/Client/url
tags:
  - API
  - Client
  - Experimental
  - Property
  - Reference
  - ServiceWorkers
  - URL
translation_of: Web/API/Client/url
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}La propriété **`url`** (lecture seule) de l'interface {{domxref("Client")}} retourne l'url du service worker client courant.

## Syntaxe

```js
var clientUrl = Client.url;
```

### Valeur de retour

Valeur de type {{domxref("USVString")}}.

## Exemple

```js
self.addEventListener('notificationclick', function(event) {
  console.log('Au click de notification : ', event.notification.tag);
  event.notification.close();

  // Vérification pour savoir si l'évenement est ouvert et
  // se focalise dessus si c'est le cas
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

| Spécification                                                            | Statut                               | Commentaire         |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#client-url', 'url')}} | {{Spec2('Service Workers')}} | Défintion initiale. |

## Compatibilité des navigateurs

{{Compat("api.Client.url")}}
