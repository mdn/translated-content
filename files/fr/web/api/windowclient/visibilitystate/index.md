---
title: WindowClient.visibilityState
slug: Web/API/WindowClient/visibilityState
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La propriété **`visibilityState`**, en lecture seule de l'interface {{domxref("WindowClient")}} indique la visibilité du client courant. La valeur pourra être : `hidden`, `visible`, `prerender`, or `unloaded`.

## Syntaxe

```js
myVisState = WindowClient.visibilityState;
```

### Value

une {{domxref("DOMString")}}.

## Example

```js
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url == '/' && 'focus' in client) {
        if(visibilityState === 'hidden')
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
