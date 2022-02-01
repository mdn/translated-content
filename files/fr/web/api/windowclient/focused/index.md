---
title: WindowClient.focused
slug: Web/API/WindowClient/focused
translation_of: Web/API/WindowClient/focused
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}

La propriété **`focused`** , en lecture seule de l'interface  {{domxref("WindowClient")}} , est un {{domxref("Boolean")}} qui indique si client actuel a le focus .

## Syntax

    myFocused = WindowClient.focused;

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

## Specifications

| Specification                                                                                        | Status                               | Comment            |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------ |
| {{SpecName('Service Workers', '#window-client-interface', 'WindowClient')}} | {{Spec2('Service Workers')}} | Initial definition |

## Compatibilité des navigateurs

{{Compat("api.WindowClient.focused")}}
