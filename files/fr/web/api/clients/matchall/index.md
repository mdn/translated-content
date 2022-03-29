---
title: Clients.matchAll()
slug: Web/API/Clients/matchAll
tags:
  - API
  - Client
  - Expérimental(2)
  - Méthode
  - Référence(2)
  - Service Workers
translation_of: Web/API/Clients/matchAll
---
{{SeeCompatTable}}{{APIRef("Service Workers API")}}La méthode **`matchAll()`** de l'interface {{domxref("Clients")}} retourne une [`Promesse`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) pour une liste de service worker clients. Inclure le paramètre `options` permet de retourner tous les services worker clients dont l'origine est la même que l'origine du service worker associé. Si `options` n'est pas inclus, la méthode retourne que le service worker client controllé par le service worker.

## Syntaxe

```js
ServiceWorkerClients.matchAll(options).then(function(clients) {
  // faire quelque chose avec la list de clients
});
```

### Paramètres

- `options`

  - : L'objet `option` vous permet de définir les options pour l'opération. Les options disponibles sont :

    - `includeUncontrolled`: Un {{domxref("Boolean")}} — défini à `true`, l'opération retournera tous les services worker clients qui sont de la même origine que le service worker courant. Sinon, elle ne retournera que le service worker client controllé par le service worker courant. La valeur par défaut est `false`.
    - `type`: Défini le type de client que vous voulez observer. Les types disponibles sont `window`, `worker`, `sharedworker`, et `all`. La valeur par défaut est `all`.

### Valeur de retour

Une  [`Promesse`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui se résout avec un tableau d'objets {{domxref("Client")}}.

## Exemples

```js
clients.matchAll(options).then(function(clientList) {
  for(var i = 0 ; i < clients.length ; i++) {
    if(clientList[i].url === 'index.html') {
      clients.openWindow(clientList[i]);
      // ou faire quelque chose avec le client
    }
  }
});
```

## Spécifications

| Spécification                                                            | Statut                               | Commentaire         |
| ------------------------------------------------------------------------ | ------------------------------------ | ------------------- |
| {{SpecName('Service Workers', '#clients', 'Clients')}} | {{Spec2('Service Workers')}} | Définition initial. |

## Compatibilité des navigateurs

{{Compat("api.Clients.matchAll")}}
