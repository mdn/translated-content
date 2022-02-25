---
title: Cache.keys()
slug: Web/API/Cache/keys
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - ServiceWorker
  - keys
translation_of: Web/API/Cache/keys
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`keys()`** de l'interface {{domxref("Cache")}} retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau de clé de {{domxref("Cache")}}.

Les requêtes sont retournées dans le même ordre que l'ordre d'insertion.

> **Note :** Les requêtes avec des URLs déjà présentes mais des headers différents peuvent être retournées si leurs réponses comportent le header `VARY`.

## Syntaxe

```js
cache.keys(request,{options}).then(function(response) {
  // fait quelque chose avec votre tableau de réponses
});
```

### Paramètres

- request {{optional_inline}}
  - : La {{domxref("Request", "Requête")}} à retourner, si une clé en particulier est désirée.
- options {{optional_inline}}

  - : Un objet dont les paramètres contrôlent comment le matching est effectué lors de l'opération `keys`. Les options disponibles sont :

    - `ignoreSearch`: Un {{domxref("Boolean")}} qui spécifie si le matching doit ignorer ou non la query string dans l'url.  Si mis à `true`, la partie `?value=bar` de l'url `http://foo.com/?value=bar` sera ignorée lors du matching. Est à `false` par défaut.
    - `ignoreMethod`: Un {{domxref("Boolean")}} qui, quand mis à `true`, empêche les opérations de matching de valider la méthode `HTTP` de la {{domxref("Request", "Requête")}} (en temps normal, seules `GET` et `HEAD` sont autorisées). Est à  `false` par défaut.
    - `ignoreVary`: Un {{domxref("Boolean")}} qui, quand mis à `true,` indique à l'opération de matching de ne pas effectuer le matching `VARY` des header.  En d'autres termes, si l'URL correspond, un match sera obtenu peu importe que la {{domxref("Response", "Réponse")}} ait un header `VARY` ou non. Est à `false` par défaut.
    - `cacheName`: Une {{domxref("DOMString")}} qui représente un cache spécifique où effectuer la recherche. A noter que cette option est ignorée par `Cache.keys()`.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau de clé de {{domxref("Cache")}}.

## Exemples

```js
caches.open('v1').then(function(cache) {
  cache.keys().then(function(keys) {
    keys.forEach(function(request, index, array) {
      cache.delete(request);
    });
  });
})
```

## Spécifications

| Spécification                                                                            | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-keys', 'Cache: keys')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.Cache.keys")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
