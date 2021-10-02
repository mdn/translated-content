---
title: Clients
slug: Web/API/Clients
tags:
  - API
  - Clients
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - Workers
translation_of: Web/API/Clients
---
{{APIRef("Service Workers API")}}

L'interface `Clients` permet d'accéder aux objets [`Client`](/fr/docs/Web/API/Client). On y accède via `self.clients` au sein d'un [service worker](/fr/docs/Web/API/Service_Worker_API).

## Méthodes

- [`Clients.get()`](/fr/docs/Web/API/Clients/get)
  - : Retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (« _Promesse_ ») pour un [`Client`](/fr/docs/Web/API/Client) correspondant à un [`id`](/fr/docs/Web/API/Client/id) donné.
- [`Clients.matchAll()`](/fr/docs/Web/API/Clients/matchAll)
  - : Retourne une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (« _Promesse_ ») pour un tableau d'objets [`Client`](/fr/docs/Web/API/Client). L'argument options vous permet de contrôler les types de clients renvoyés.
- [`Clients.openWindow()`](/fr/docs/Web/API/Clients/openWindow)
  - : Ouvre une nouvelle fenêtre de navigateur pour une url donnée et renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (« _Promesse_ ») pour le nouveau [`WindowClient`](/fr/docs/Web/API/WindowClient).
- [`Clients.claim()`](/fr/docs/Web/API/Clients/claim)
  - : Permet à un service worker actif de se définir comme le [`controller`](/fr/docs/Web/API/ServiceWorkerContainer/controller) (« _Controlleur_ ») pour tous les clients dans son [`scope`](/fr/docs/Web/API/ServiceWorkerRegistration/scope) (« _sa portée_ »).

## Exemple

L'exemple suivant montre une fenêtre de chat existante ou en crée une nouvelle lorsque l'utilisateur clique sur une notification.

```js
addEventListener('notificationclick', event => {
  event.waitUntil(async function() {
    const allClients = await clients.matchAll({
      includeUncontrolled: true
    });

    let chatClient;

    // Voyons si nous avons déjà une fenêtre de discussion ouverte :
    for (const client of allClients) {
      const url = new URL(client.url);

      if (url.pathname == '/chat/') {
        // Excellent, utilisons-la !
        client.focus();
        chatClient = client;
        break;
      }
    }

    // Si nous n'avons pas trouvé de fenêtre de discussion existante,
    // ouvrons-en une nouvelle :
    if (!chatClient) {
      chatClient = await clients.openWindow('/chat/');
    }

    // Envoyez un message au client :
    chatClient.postMessage("Nouveaux messages !");
  }());
});
```

## Spécifications

| Spécification                                                            | Statut                               | Commentaire          |
| ------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#clients', 'Clients')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Clients")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Le ServiceWorker est-il prêt ?](https://jakearchibald.github.io/isserviceworkerready/) (en anglais)
- L'objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
