---
title: Clients.get()
slug: Web/API/Clients/get
tags:
  - API
  - Clients
  - Méthode
  - Reference
  - Service Workers
  - get
translation_of: Web/API/Clients/get
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}La méthode **`get()`** de l'interface {{domxref("Clients")}} récupère un service worker client correspondant à un id donné et le retourne dans une {{jsxref("Promise")}}.

## Syntaxe

```js
self.clients.get(id).then(function(client) {
  // Faire quelque chose avec le client
});
```

### Paramètres

- `id`
  - : Une {{domxref("DOMString")}} représentant l'id du client que vous souhaitez récuperer.

### Valeur de retour

Une [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résoud avec un objet {{domxref("Client")}}.

## Exemples

```js
self.clients.get(options).then(function(client) {
  self.clients.openWindow(client.url);
});
```

## Spécifications

| Spécification                                                                        | Statut                               | Commentaires        |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#clients-get-method', 'get()')}} | {{Spec2('Service Workers')}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Clients.get")}}
