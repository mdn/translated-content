---
title: Cache
slug: Web/API/Cache
tags:
  - API
  - API Cache
  - API Service worker
  - Cache
  - Interface
  - Reference
  - Service Workers
  - Stockage
  - hors ligne
translation_of: Web/API/Cache
---
{{APIRef("Service Workers API")}} {{SeeCompatTable}}

L'interface `Cache` fournit un mécanisme de stockage pour les paires d'objets [`Request`](http://fetch.spec.whatwg.org/#request)/[`Response`](http://fetch.spec.whatwg.org/#response) qui sont mises en cache, par exemple dans le cadre du cycle de vie {{domxref("ServiceWorker")}}. Il est à noter que l'interface `Cache` est exposée à des portées fenêtrées ainsi qu'à des service workers. Vous n'êtes pas obligé de l'utiliser avec des services workers, même si elle est définie dans la spécification relative aux services workers.

Une origine peut avoir plusieurs objets nommés `Cache`. Vous êtes responsable de l'implémentation de la manière dont votre script (par exemple dans un {{domxref("ServiceWorker")}}) gère les mises à jour du cache. Les éléments d'un cache ne sont pas mis à jour, sauf demande explicite ; ils n'expirent pas, sauf s'ils sont supprimés. Utilisez {{domxref("CacheStorage.open", "CacheStorage.open()")}} pour ouvrir un objet `Cache` spécifique et appelez ensuite l'une des méthodes `Cache` pour maintenir le `Cache`.

Vous êtes également responsable de la purge périodique des entrées du cache. Chaque navigateur a une limite stricte sur la quantité de mémoire cache qu'une origine donnée peut utiliser. Les estimations de l'utilisation du quota de cache sont disponibles via le lien {{domxref("StorageEstimate")}} API. Le navigateur fait de son mieux pour gérer l'espace disque, mais il peut supprimer le stockage en cache d'une origine. Le navigateur supprime généralement toutes les données d'une origine ou aucune des données d'une origine. Veillez à nommer les caches et à n'utiliser les caches qu'à partir de la version du script sur laquelle ils peuvent fonctionner en toute sécurité. Pour plus d'informations, voir [Suppression des anciens caches](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers#Supprimer_les_anciens_caches).

> **Note :** Les implémentations initiales du cache (dans Blink et Gecko) résolvent les engagements {{domxref("Cache.add()")}}, {{domxref("Cache.addAll()")}}, et {{domxref("Cache.put()")}} lorsque le corps de la réponse est entièrement écrit sur le stockage. Des versions plus récentes de la spécification précisent que le navigateur peut résoudre la promesse dès que l'entrée est enregistrée dans la base de données, même si le corps de réponse est encore en cours d'écriture.

> **Note :** L'algorithme des correspondances de clés est dépendant de la valeur de l'[en-tête VARY](https://www.fastly.com/blog/best-practices-using-vary-header). Ainsi, pour faire correspondre une nouvelle clé, il faut examiner à la fois la clé et la valeur des entrées dans le Cache.

> **Note :** L'API de mise en cache n'honore pas les en-têtes de mise en cache HTTP.

## Méthodes

- {{domxref("Cache.match", "Cache.match(request, options)")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise" , "Promesse" )}} qui se résout en une réponse associée à la première requête correspondante dans l'objet {{domxref("Cache")}}.
- {{domxref("Cache.matchAll", "Cache.matchAll(request, options)")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise" , "Promesse" )}} qui se résout en un tableau de toutes les requêtes correspondantes dans l'objet {{domxref("Cache")}}.
- {{domxref("Cache.add", "Cache.add(request)")}} {{experimental_inline}}
  - : Prend une URL, la récupère et ajoute l'objet réponse associé au cache donné. C'est une fonctionnalité équivalente à l'appel de fetch(), puis à l'utilisation de Cache.put() pour ajouter les résultats  au cache.
- {{domxref("Cache.addAll", "Cache.addAll(requests)")}} {{experimental_inline}}
  - : Prend un tableau d'URLs, les récupère, et ajoute les objets réponses associés au cache donné.
- {{domxref("Cache.put", "Cache.put(request, response)")}} {{experimental_inline}}
  - : Prend à la fois une requête et sa réponse et l'ajoute au cache donné.
- {{domxref("Cache.delete", "Cache.delete(request, options)")}} {{experimental_inline}}
  - : Trouve l'entrée {{domxref("Cache")}} dont la clé est la requête, et le cas échéant, supprime l'entrée {{domxref("Cache")}} et retourne une {{jsxref("Promise" , "Promesse" )}} qui se résout à `true`. Si aucune entrée {{domxref("Cache")}} n'est trouvée, elle retourne `false`.
- {{domxref("Cache.keys", "Cache.keys(request, options)")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise" , "Promesse" )}} qui se résout en un tableau clés {{domxref("Cache")}}.

## Exemples

Cet extrait de code provient de [l'exemple de mise en cache sélective](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (voir [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) Le code utilise {{domxref("CacheStorage.open", "CacheStorage.open(cacheName)")}} pour ouvrir tous les objets {{domxref("Cache")}} avec un en-tête Content-Type qui débute par `font/`.

Le code utilise alors {{domxref("Cache.match", "Cache.match(request, options)")}} pour voir s'il y a déjà une fonte correspondante dans le cache, et le cas échéant, la retourne. S'il n'y a pas de correspondance, le code récupère la fonte à partir du réseau et utilise {{domxref("Cache.put","Cache.put(request, response)")}} pour mettre en cache la ressource récupérée.

Le code gère les exceptions déclenchées par l'opération de {{domxref("Globalfetch.fetch","fetch()")}}. A noter qu'une réponse HTTP en erreur (e.g., 404) ne déclenchera pas une exception. Elle retournera un objet de réponse normal qui dispose du code d'erreur approprié.

Cet extrait de code illustre également une bonne pratique pour versionner les caches utilisés par le service worker. Bien qu'il y ait seulement un cache dans cet exemple, la même approche peut être utilisée pour des caches multiples. Il associe un identifiant  court avec un nom de cache versionné et spécifique. Le code supprime aussi tous les caches qui ne sont pas nommés dans `CURRENT_CACHES`.

> **Note :** In Chrome, visit chrome://inspect/#service-workers and click on the "inspect" link below the registered service worker to view logging statements for the various actions the [service-worker.js](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) script is performing.

```js
var CACHE_VERSION = 1;

// Shorthand identifier mapped to specific versioned cache.
var CURRENT_CACHES = {
  font: 'font-cache-v' + CACHE_VERSION
};

self.addEventListener('activate', function(event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  // Active worker won't be treated as activated until promise resolves successfully.
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) == -1) {
            console.log('Deleting out of date cache:', cacheName);

            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(

    // Opens Cache objects that start with 'font'.
    caches.open(CURRENT_CACHES['font']).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        if (response) {
          console.log(' Found response in cache:', response);

          return response;
        }
      }).catch(function(error) {

        // Handles exceptions that arise from match() or fetch().
        console.error('  Error in fetch handler:', error);

        throw error;
      });
    })
  );
});
```

### Storing cookies in Caches

L'[API Fetch](/fr/docs/Web/API/Fetch_API) exige que les en-têtes {{httpheader("Set-Cookie")}} soient supprimés avant de renvoyer un objet {{domxref("Response")}} à partir de {{domxref("WindowOrWorkerGlobalScope", "fetch()")}}. Ainsi, une réponse stockée dans un cache ne contiendra pas d'en-têtes.

## Spécifications

| Spécification                                                        | Statut                               | Commentaire          |
| -------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#cache', 'Cache')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Cache")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Code d'exemple basique de Service workers](https://github.com/mdn/sw-test)
- [Le ServiceWorker est prêt ?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise" , "Promesse" )}}
- [Utilisation des Web Workers](/fr/docs/Web/API/Web_Workers_API/Utilisation_des_web_workers)
