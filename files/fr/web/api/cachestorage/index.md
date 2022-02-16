---
title: CacheStorage
slug: Web/API/CacheStorage
tags:
  - API
  - Cache de stockage
  - Experimental
  - Interface
  - Reference
  - Service Workers
  - ServiceWorker
translation_of: Web/API/CacheStorage
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

L'interface `CacheStorage` représente le stockage des objets {{domxref("Cache")}}.

L'interface :

- Fournit un répertoire principal de tous les caches nommés qui peut être accessible par un {{domxref("ServiceWorker")}} ou un autre type de travailleur ou portée de {{domxref("window")}} (vous n'êtes pas limité à l'utiliser uniquement avec des Service Workers, même si la spécification {{SpecName("Service Workers")}} le définit).

  > **Note :** [Chrome et Safari n'exposent que "CacheStorage" au contexte fenêtré sur HTTPS](https://bugs.chromium.org/p/chromium/issues/detail?id=1026063). {{domxref("window.caches")}} sera indéfinie, à moins qu'un certificat SSL ne soit configuré.

- Maintient une correspondance entre les noms des chaînes de caractères et les objets {{domxref("Cache")}} correspondants.

Utilisez {{domxref("CacheStorage.open()")}} pour obtenir une instance {{domxref("Cache")}}.

Utilisez {{domxref("CacheStorage.match()")}} pour vérifier si une {{domxref("Request", "Requête")}} donnée est une clé dans l'un des objets {{domxref("Cache")}} que l'objet `CacheStorage` surveille.

Vous pouvez accéder à `CacheStorage` via la propriété globale {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}}.

> **Note :** CacheStorage échouera systématiquement avec une `SecurityError` sur les domaines non certifiés (i.e. ceux qui n'utilisent pas HTTPS, bien que cette définition risque de devenir plus complexe dans le future). Pendant vos tests vous pouvez contourner ce comportement en cochant l'option "Enable Service Workers over HTTP (when toolbox is open)" dans les options Firefox Devtools / le menu gear.

> **Note :** {{domxref("CacheStorage.match()")}} est une méthode de convenance. Il est possible d'implémenter une fonctionnalité équivalente pour matcher une entrée de cache en appelant {{domxref("CacheStorage.open()")}}, puis en retournant {{domxref("CacheStorage.keys()")}}, et en matchant les entrées voulues avec {{domxref("CacheStorage.match()")}}.

## Méthodes

- {{domxref("CacheStorage.match()")}} {{experimental_inline}}
  - : Cherche si une {{domxref("Request")}} donnée est la clé de n'importe lequel des objets {{domxref("Cache")}} maintenus par le {{domxref("CacheStorage")}}, et retourne une {{jsxref("Promise", "Promesse")}} résolue en cet objet {{domxref("Cache")}}.
- {{domxref("CacheStorage.has()")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en `true` si un objet {{domxref("Cache")}} qui correspond au `cacheName` existe.
- {{domxref("CacheStorage.open()")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en l'objet {{domxref("Cache")}} qui correspond au `cacheName` (si il n'existe pas, un nouveau cache est créé).
- {{domxref("CacheStorage.delete()")}} {{experimental_inline}}
  - : Trouve l'objet {{domxref("Cache")}} correspondant au `cacheName`, et si il est trouvé, supprime l'objet {{domxref("Cache")}} et retourne une {{jsxref("Promise", "Promesse")}} résolue à `true`. Si aucun objet {{domxref("Cache")}} n'est trouvé, la {{jsxref("Promise", "Promesse")}} est résolue à `false`.
- {{domxref("CacheStorage.keys()")}} {{experimental_inline}}
  - : Retourne une {{jsxref("Promise", "Promesse")}} qui est résolue en un tableau qui contient toutes les chaînes correspondantes aux objets {{domxref("Cache")}} maintenus par le {{domxref("CacheStorage")}}. Cette méthode peut s'utiliser pour itérer sur une liste de tous les objets {{domxref("Cache")}}.

## Exemples

Cet extrait de code est tiré de l'[exemple MDN sw-test](https://github.com/mdn/sw-test/) (lancer [sw-test dans votre navigateur](https://mdn.github.io/sw-test/)). Ce service worker script attends le déclenchement d'un {{domxref("InstallEvent")}}, puis lance {{domxref("ExtendableEvent.waitUntil","waitUntil")}} pour gérer la phase d'installation de l'app. Cela consiste à appeler {{domxref("CacheStorage.open")}} pour créer un nouveau cache, puis {{domxref("Cache.addAll")}} pour y ajouter une série d'assets.

Dans le second bloc de code, on attends le déclenchement d'un {{domxref("FetchEvent")}}. On construit ensuite une réponse spéciale comme suit :

1.  Vérifier si il y a un match pour la requête dans le CacheStorage. Le cas échéant, servir ça.
2.  Sinon, récupérer la requête sur le réseau, puis ouvrir le cache du premier bloc et y ajouter un clone de la requête grâce à {{domxref("Cache.put")}} (`cache.put(event.request, response.clone())`.)
3.  En cas d'échec (e.g. car le réseau est inaccessible), retourner une réponse par défaut.

Enfin, on retourne cette réponse en utilisant {{domxref("FetchEvent.respondWith")}}.

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() fonctionne toujours
    // mais en cas de succès, la réponse aura une valeur
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // la réponse ne peut être utilisée qu'une seule fois
        // nous devons sauvegarder le clone pour mettre
        // une copie en cache et servir le second
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});
```

Cet extrait montre comment l'API peut être utilisée en dehors du contexte d'un Service Worker, et utilise l'opérateur "await" pour un code beaucoup plus lisible.

```js
// Essayer d'obtenir des données du cache, mais se rabattre sur la récupération en direct.
async function getData() {
   const cacheVersion = 1;
   const cacheName    = `myapp-${ cacheVersion }`;
   const url          = 'https://jsonplaceholder.typicode.com/todos/1';
   let cachedData     = await getCachedData( cacheName, url );

   if ( cachedData ) {
      console.log( 'Récupération des données mises en cache' );
      return cachedData;
   }

   console.log( 'Obtenir de nouvelles données' );

   const cacheStorage = await caches.open( cacheName );
   await cacheStorage.add( url );
   cachedData = await getCachedData( cacheName, url );
   await deleteOldCaches( cacheName );

   return cachedData;
}

// Obtenir des données du cache.
async function getCachedData( cacheName, url ) {
   const cacheStorage   = await caches.open( cacheName );
   const cachedResponse = await cacheStorage.match( url );

   if ( ! cachedResponse || ! cachedResponse.ok ) {
      return false;
   }

   return await cachedResponse.json();
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches( currentCache ) {
   const keys = await caches.keys();

   for ( const key of keys ) {
      const isOurCache = 'myapp-' === key.substr( 0, 6 );

      if ( currentCache === key || ! isOurCache ) {
         continue;
      }

      caches.delete( key );
   }
}

try {
   const data = await getData();
   console.log( { data } );
} catch ( error ) {
   console.error( { error } );
}
```

## Spécifications

| Spécification                                                                            | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#cache-storage', 'CacheStorage')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.CacheStorage")}}

## Voir aussi

- [Utilisation des Service Workers](/en-US/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
