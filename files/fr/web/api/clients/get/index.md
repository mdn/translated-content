---
title: Clients.get()
slug: Web/API/Clients/get
---

{{SeeCompatTable}}{{APIRef("Service Workers API")}}La méthode **`get()`** de l'interface {{domxref("Clients")}} récupère un service worker client correspondant à un id donné et le retourne dans une {{jsxref("Promise")}}.

## Syntaxe

```js
self.clients.get(id).then(function (client) {
  // Faire quelque chose avec le client
});
```

### Paramètres

- `id`
  - : Une {{domxref("DOMString")}} représentant l'id du client que vous souhaitez récuperer.

### Valeur de retour

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résoud avec un objet {{domxref("Client")}}.

## Exemples

```js
self.clients.get(options).then(function (client) {
  self.clients.openWindow(client.url);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
