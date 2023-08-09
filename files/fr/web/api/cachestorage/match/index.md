---
title: CacheStorage.match()
slug: Web/API/CacheStorage/match
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La fonction **`match()`** de l'interface {{domxref("CacheStorage")}} qu'une {{domxref("Request", "Requête")}} est la clé d'un objet {{domxref("Cache")}} object suivie par un objet {{domxref("CacheStorage")}} et retourne une {{jsxref("Promise", "Promesse")}} qui renvoie la {{domxref("Response", "Réponse")}} correspondante.

Vous pouvez accéder à `CacheStorage` via la propriété globale [`caches`](/fr/docs/Web/API/caches).

Les objets `Cache` sont cherchés par ordre de création.

> **Note :** {{domxref("CacheStorage.match()", "caches.match()")}} est une méthode de commodité. Une fonctionnalité équivalente consiste à appeler {{domxref("cache.match()")}} sur chaque cache (dans l'ordre renvoyé par {{domxref("CacheStorage.keys()", "caches.keys()")}}) jusqu'à ce qu'une {{domxref("Response", "Réponse")}} soit renvoyée.

## Syntaxe

```js
caches.match(request, { options }).then(function (response) {
  // faire quelque-chose avec la requête et la réponse
});
```

### Paramètres

- request
  - : La {{domxref("Request", "Requête")}} recherchée.
- options {{optional_inline}}

  - : Un objet dont les propriétés contrôlent comment la correspondance est fait avec l'opération `match`. Les options disponible sont:

    - `ignoreSearch`: Un {{domxref("Boolean")}} qui détermine si le preocessus de rapprochement doit ignorer la chaîne de requête dans l'url. Défini à `true`, la partie `?value=bar` de `http://foo.com/?value=bar` sera ignoré lors d'un rapporchement. La valeur par défaut est `false`.
    - `ignoreMethod`: Un {{domxref("Boolean")}} qui, quand défini à `true`, empêche l'opération de rapprochement de valider le verbe http de la {{domxref("Request", "Requête")}} `http` (normalement, seulement `GET` et `HEAD` sont authorisés) La valeur par défaut est `false`.
    - `ignoreVary`: Un {{domxref("Boolean")}} qui, quand défini à `true`, dit à l'opération de rapprochement de ne pas faire le rapprochement avec le header `VARY`. En d'autres termes, si une URL est sélectionnée elle sera conservée indépemment de la présence du header `VARY`. La valeur par défaut est `false`.
    - `cacheName`: Un {{domxref("DOMString")}} qui représente le cache dans lequel on recherche.

### Valeur retournée

Une {{jsxref("Promise", "Promesse")}} qui renvoie les {{domxref("Response", "Réponses")}} correspondante.

## Exemples

Cet exemple est tiré du MDN [sw-test example](https://github.com/mdn/sw-test/) (voir [sw-test running live](https://mdn.github.io/sw-test/)). Nous attendons pour un évènement {{domxref("FetchEvent")}} et nous construisons une réponse comme suit:

1. Vérifier si une correspondance pour la requète est trouvée dans le {{domxref("CacheStorage")}} en utilisant {{domxref("CacheStorage.match")}}. Si oui, la servir.
2. Si non, ouvrire le cache `v1` avec `open()`, mettre le réseau par défaut dans le cache avec {{domxref("Cache.put")}} et retourner un clone du réseau par défaut en utilisant `return response.clone()` — obligatoire car `put()` détruit le corps de la réponse.
3. Si ceci échoue (e.g., parce que le réseau est inactif), retourner une réponse de secours.

```js
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (response) {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open("v1").then(function (cache) {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(function () {
            return caches.match("/sw-test/gallery/myLittleVader.jpg");
          });
      }
    }),
  );
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- [`caches`](/fr/docs/Web/API/caches)
