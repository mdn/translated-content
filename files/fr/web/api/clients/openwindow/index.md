---
title: Clients.openWindow()
slug: Web/API/Clients/openWindow
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La méthode **`openWindow()`** de l'interface {{domxref("Clients")}} crée un nouveau niveau de contexte de navigation et charge une URL donnée. Si le script d'origine n'a pas la permission d'ouvrir une popup, **`openWindow()`** lèvera une InvalidAccessError.

Dans Firefox, une méthode est authorisée d'ouvrir une popup seulement lorsqu'elle est appelée à la suite d'un click sur une notification.

## Syntaxe

```js
ServiceWorkerClients.openWindow(url).then(function (WindowClient) {
  // Faire quelque chose avec le WindowClient
});
```

### Paramètres

- `url`
  - : Une {{domxref("USVString")}} représentant l'URL que le client veut ouvrir dans une nouvelle fenêtre. Généralement, cette valeur doit être une URL de la même origine que le script d'origine.

### Valeur de retour

Une {{jsxref("Promise")}} qui résoud un objet {{domxref("WindowClient")}} si l'URL est de la même origine que le service worker, et {{Glossary("null", "null value")}} sinon.

## Exemples

```js
// Quand l'utilisateur click sur une notification, focus sur la fenêtre si elle existe,
// ou ouvre en une autre.
onotificationclick = function (event) {
  var found = false;
  clients.matchAll().then(function (clients) {
    for (i = 0; i < clients.length; i++) {
      if (clients[i].url === event.data.url) {
        // La fenêtre existe, focus dessus.
        found = true;
        clients[i].focus();
        break;
      }
    }
    if (!found) {
      // Crée une nouvelle fenêtre
      clients.openWindow(event.data.url).then(function (windowClient) {
        // Faire quelque chose avec le WindowClient
      });
    }
  });
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
