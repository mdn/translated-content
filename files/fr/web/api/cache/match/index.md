---
title: Cache.match()
slug: Web/API/Cache/match
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Workers
  - Service worker API
  - ServiceWorker
  - match
translation_of: Web/API/Cache/match
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`match()`** de l'interface {{domxref("Cache")}} retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en une {{domxref("Response", "Réponse")}} associée à la première requête qui match dans l'objet {{domxref("Cache")}}. Si aucune requête n'est trouvée, la {{jsxref("Promise", "Promesse")}} est résolue en {{jsxref("undefined")}}.

## Syntaxe

```js
cache.match(request,{options}).then(function(response) {
  // faire quelque chose avec la réponse
});
```

### Paramètres

- request
  - : La {{domxref("Request")}} à trouver dans le {{domxref("Cache")}}.
- options {{optional_inline}}

  - : Un objet qui définit des options pour l'opération de `match`. Les options disponibles sont les suivantes :

    - `ignoreSearch`: Un {{domxref("Boolean")}} qui spécifie si le matching doit ignorer ou non la query string dans l'url.  Si mis à `true`, la partie `?value=bar` de l'url `http://foo.com/?value=bar` sera ignorée lors du matching. Est à `false` par défaut.
    - `ignoreMethod`: Un {{domxref("Boolean")}} qui, quand mis à `true`, empêche les opérations de matching de valider la méthode `HTTP` de la {{domxref("Request", "Requête")}} (en temps normal, seules `GET` et `HEAD` sont autorisées.) Est à  `false` par défaut.
    - `ignoreVary`: Un {{domxref("Boolean")}} qui, quand mis à `true,` indique à l'opération de matching de ne pas effectuer le matching `VARY` des header.  En d'autres termes, si l'URL correspond, un match sera obtenu peu importe que la {{domxref("Response", "Réponse")}} ait un header `VARY` ou non. Est à `false` par défaut.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue en la première {{domxref("Response", "Réponse")}} qui match la requête, ou en {{jsxref("undefined")}} si aucune requête n'est trouvée.

> **Note :** `Cache.match()` est quasiment identique à {{domxref("Cache.matchAll()")}}, si ce n'est qu'elle est résolue en `response[0]` (la première réponse qui matche) plutôt que `response[]` (un tableau de toutes les réponses qui matchent).

## Exemples

Cet exemple est extrait de l'exemple [Page hors ligne custom](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/custom-offline-page/service-worker.js) ([demo](https://googlechrome.github.io/samples/service-worker/custom-offline-page/index.html)).

L'exemple suivant se sert d'un cache pour fournir les données demandées même quand une requête échoue. Une clause `catch()` est déclenchée quand l'appel à `fetch()` lève une exception. A l'intérieur de la clause `catch()`, `match()` est utilisée to pour retourner la réponse appropriée.

Dans cet exemple, nous avons décidé que seul les documents HTML récupérés via le verbe HTTP GET seront mis en cache. Si notre condition `if()` est false, le gestionnaire fetch n'intercepte pas la requête. Si d'autres gestionnaires fetch sont enregistrés, ils ont une occasion d'appeler `event.respondWith()`. Si aucun gestionnaire fetch ne décide d'appeler `event.respondWith()`, la requête sera gérée par le navigateur comme si les service workers n'avaient pas existé. Si `fetch()` retourne une réponse HTTP valide avec un code réponse dans les 4xx ou 5xx, la clause `catch()` ne sera PAS appelée.

```js
self.addEventListener('fetch', function(event) {
  // We only want to call event.respondWith() if this is a GET request for an HTML document.
  if (event.request.method === 'GET' &&
      event.request.headers.get('accept').indexOf('text/html') !== -1) {
    console.log('Handling fetch event for', event.request.url);
    event.respondWith(
      fetch(event.request).catch(function(e) {
        console.error('Fetch failed; returning offline page instead.', e);
        return caches.open(OFFLINE_CACHE).then(function(cache) {
          return cache.match(OFFLINE_URL);
        });
      })
    );
  }
});
```

## Spécifications

| Specification                                                                            | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-match', 'Cache match')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.Cache.match")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
