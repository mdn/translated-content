---
title: WindowClient.focus()
slug: Web/API/WindowClient/focus
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La méthode **`focus()`** de l'interface {{domxref("WindowClient")}} focus le client en cours et retourne une {{jsxref("Promise")}} qui est résolue vers le {{domxref("WindowClient")}} existant.

## Syntaxe

```js
Client.focus().then(function (WindowClient) {
  // utilisez le WindowClient une fois qu'il est focus
});
```

### Paramètres

Nil.

### Valeur de retour

Une {{jsxref("Promise")}} qui est résolue vers le {{domxref("WindowClient")}} existant.

## Exemple

```js
self.addEventListener("notificationclick", function (event) {
  console.log("On notification click: ", event.notification.tag);
  event.notification.close();

  // Vérifie si le client en cours est ouvert et
  // le focus le cas échéant
  event.waitUntil(
    clients
      .matchAll({
        type: "window",
      })
      .then(function (clientList) {
        for (var i = 0; i < clientList.length; i++) {
          var client = clientList[i];
          if (client.url == "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow("/");
      }),
  );
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
