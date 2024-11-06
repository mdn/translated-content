---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La propriété **`focused`** , en lecture seule de l'interface {{domxref("WindowClient")}} , est un {{domxref("Boolean")}} qui indique si client actuel a le focus .

## Syntaxe

```js
myFocused = WindowClient.focused;
```

### Value

A {{domxref("Boolean")}}.

## Example

```js
self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        if(!client.focused)
          return client.focus();
        }
      }
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
