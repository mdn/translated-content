---
title: Cache.delete()
slug: Web/API/Cache/delete
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - ServiceWorker
  - delete
translation_of: Web/API/Cache/delete
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`delete()`** de l'interface {{domxref("Cache")}} cherche l'entrée {{domxref("Cache")}} dont la clé est la requête passée en argument, et retourne une {{jsxref("Promise", "Promesse")}}. Si une entrée {{domxref("Cache")}} est trouvée, elle est supprimée, et la promesse est résolue à `true`. Dans le cas contraire, la promesse est résolue à `false`.

## Syntaxe

```js
cache.delete(request,{options}).then(function(true) {
  //your cache entry has been deleted
});
```

### Paramètres

- request
  - : La {{domxref("Request", "Requête")}} à supprimer.
- options {{optional_inline}}

  - : Un objet dont les paramètres contrôlent comment le matching est effectué lors de l'opération de `delete`. Les options disponibles sont :

    - `ignoreSearch`: Un {{domxref("Boolean")}} qui spécifie si le matching doit ignorer ou non la query string dans l'url.  Si mis à `true`, la partie `?value=bar` de l'url `http://foo.com/?value=bar` sera ignorée lors du matching. Est à `false` par défaut.
    - `ignoreMethod`: Un {{domxref("Boolean")}} qui, quand mis à `true`, empêche les opérations de matching de valider la méthode `HTTP` de la {{domxref("Request", "Requête")}} (en temps normal, seules `GET` et `HEAD` sont autorisées.) Est à  `false` par défaut.
    - `ignoreVary`: Un {{domxref("Boolean")}} qui, quand mis à `true,` indique à l'opération de matching de ne pas effectuer le matching `VARY` des header.  En d'autres termes, si l'URL correspond, un match sera obtenu peu importe que la {{domxref("Response", "Réponse")}} ait un header `VARY` ou non. Est à `false` par défaut.
    - `cacheName`: Une {{domxref("DOMString")}} qui représente un cache spécifique où effectuer la recherche. A noter que cette option est ignorée par `Cache.delete()`.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue à `true` si l'entrée de cache est supprimée, ou à `false` dans le cas contraire.

## Exemples

```js
caches.open('v1').then(function(cache) {
  cache.delete('/images/image.png').then(function(response) {
    someUIUpdateFunction();
  });
})
```

## Spécifications

| Spécification                                                                                | Statut                               | Commentaires         |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-delete', 'Cache: delete')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.Cache.delete")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
