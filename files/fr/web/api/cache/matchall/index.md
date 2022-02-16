---
title: Cache.matchAll()
slug: Web/API/Cache/matchAll
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - matchAll
translation_of: Web/API/Cache/matchAll
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`matchAll()`** de l'interface {{domxref("Cache")}} retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau de toutes les requêtes qui matchent dans l'objet {{domxref("Cache")}}.

## Syntaxe

```js
cache.matchAll(request,{options}).then(function(response) {
  // faire quelque chose avec le tableau des réponses
});
```

### Paramètres

- request
  - : La {{domxref("Request", "Requête")}} à trouver dans le {{domxref("Cache")}}.
- options {{optional_inline}}

  - : Un objet d'options vous permettant de définir des options de contrôle spécifiques pour la correspondance effectuée. Les options disponibles sont les suivantes :

    - `ignoreSearch`: Un {{domxref("Boolean")}} qui spécifie si le matching doit ignorer ou non la query string dans l'url.  Si mis à `true`, la partie `?value=bar` de l'url `http://foo.com/?value=bar` sera ignorée lors du matching. Est à `false` par défaut.
    - `ignoreMethod`: Un {{domxref("Boolean")}} qui, quand mis à `true`, empêche les opérations de matching de valider la méthode `HTTP` de la {{domxref("Request", "Requête")}} (en temps normal, seules `GET` et `HEAD` sont autorisées.) Est à  `false` par défaut.
    - `ignoreVary`: Un {{domxref("Boolean")}} qui, quand mis à `true,` indique à l'opération de matching de ne pas effectuer le matching `VARY` des header.  En d'autres termes, si l'URL correspond, un match sera obtenu peu importe que la {{domxref("Response", "Réponse")}} ait un header `VARY` ou non. Est à `false` par défaut.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau de toutes les requêtes qui matchent dans l'objet {{domxref("Cache")}}.

> **Note :** {{domxref("Cache.match()")}} est quasiment identique à [`Cache.matchAll()`](/fr/docs/Web/API/Cache/matchAll), si ce n'est qu'elle est résolue en `response[0]` (la première réponse qui matche) plutôt que `response[]` (un tableau de toutes les réponses qui matchent).

## Exemples

```js
caches.open('v1').then(function(cache) {
  cache.matchAll('/images/').then(function(response) {
    response.forEach(function(element, index, array) {
      cache.delete(element);
    });
  });
})
```

## Spécifications

| Spécification                                                                                    | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-matchall', 'Cache: matchAll')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.Cache.matchAll")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
