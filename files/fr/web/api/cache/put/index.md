---
title: Cache.put()
slug: Web/API/Cache/put
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - put
translation_of: Web/API/Cache/put
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`put()`** de l'interface {{domxref("Cache")}} permet d'ajouter des paires clé/valeur à l'objet {{domxref("Cache")}} en cours.

Souvent, le comportement voulu est juste de {{domxref("WindowOrWorkerGlobalScope.fetch","fetch()")}} une ou plusieurs requête, et d'ajouter les résultats directement dans le cache. Dans ce type de cas, il est plus judicieux d'utiliser  {{domxref("Cache.add","Cache.add()")}}/{{domxref("Cache.addAll","Cache.addAll()")}} , étant donné que ces méthodes sont des raccourcis pour une ou plusieurs de ces opérations&nbsp;:

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('Bad response status');
  }
  return cache.put(url, response);
})
```

> **Note :** `put()` écrasera toute paire clé/valeur précedemment stockée en cache et qui correspond à la requête.

> **Note :** Les implémentations initiales de Cache (à la fois dans Blink et Gecko) résolvent les promesses   {{domxref("Cache.add")}}, {{domxref("Cache.addAll")}}, et {{domxref("Cache.put")}} quand le corps de la réponse est entièrement écrit en stockage.  Les versions plus récentes des spécifications sont plus précises en déclarant que le navigateur peut résoudre ces promesses dès que l'entrée est enregistrée en base de donnée, même si le reste de la requête est encore en train d'arriver.

> **Note :** Depuis Chrome 46, l'API Cache ne stocke que les requêtes depuis des origines sécurisées, à savoir celles servies en HTTPS.

## Syntaxe

```js
cache.put(request, response).then(function() {
  // la paire requête/réponse a été ajoutée au cache
});
```

### Paramètres

- request
  - : La {{domxref("Request", "Requête")}} à ajouter au cache.
- response
  - : La {{domxref("Response", "Réponse")}} à associer à la requête.

### Retour

Une {{jsxref("Promise", "Promesse")}} est retournée avec void.

> **Note :** La promesse sera rompue avec un `TypeError` si le schéma d'URL n'est pas `http` ou `https`.

## Exemples

Cet extrait de code est tiré du MDN [sw-test example](https://github.com/mdn/sw-test/) (lancez [sw-test dans votre navigateur](https://mdn.github.io/sw-test/)). On attend le déclenchement d'un {{domxref("FetchEvent")}}, puis l'on va retourner une réponse spéciale d'après la procédure suivante&nbsp;:

1.  Vérifier si un match pour la requête a été trouvé dans le {{domxref("CacheStorage")}} grâce à  {{domxref("CacheStorage.match","CacheStorage.match()")}} . Si oui, servir cette réponse.
2.  Sinon, ouvrir le cache `v1` avec `open()`, insérer la requête réseau par défaut dans le cache via {{domxref("Cache.put","Cache.put()")}} , et retourner un clone de cette requête avec `return response.clone()` — nécessaire car `put()` détruit le corps de la réponse.
3.  En cas d'échec (e.g., car le réseau est inaccessible), retourner une réponse de secours.

```js
var response;
var cachedResponse = caches.match(event.request).catch(function() {
  return fetch(event.request);
}).then(function(r) {
  response = r;
  caches.open('v1').then(function(cache) {
    cache.put(event.request, response);
  });
  return response.clone();
}).catch(function() {
  return caches.match('/sw-test/gallery/myLittleVader.jpg');
});
```

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-put', 'Cache: put')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Cache.put")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
