---
title: CacheStorage.open()
slug: Web/API/CacheStorage/open
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La fonction **`open()`** de l'interface {{domxref("CacheStorage")}} retourne une {{jsxref("Promise", "Promesse")}} qui renvoie l'objet {{domxref("Cache")}} correspondant a un `cacheName`.

Vous pouvez accéder à `CacheStorage` via la propriété globale [`caches`](/fr/docs/Web/API/caches).

> [!NOTE]
> Si le {{domxref("Cache")}} spécifié n'existe pas, un nouveau cache sera crée avec `cacheName` et retournera une {{jsxref("Promise", "Promesse")}} renvoyant le nouvel objet {{domxref("Cache")}}.

## Syntaxe

```js
caches.open(cacheName).then(function (cache) {
  // faire quelque-chose avec le cache
});
```

### Paramètres

- cacheName
  - : Le nom du cache que vous voulez ouvrir.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui renvoie l'objet {{domxref("Cache")}} demandé.

## Exemples

Cet exemple est tiré de l'[exemple MDN sw-test](https://github.com/mdn/sw-test/) (voir [sw-test en direct](https://mdn.github.io/sw-test/)). Ici, nous attendons qu'un {{domxref("InstallEvent")}} se déclenche, puis nous lançons {{domxref("ExtendableEvent.waitUntil", "waitUntil()")}} pour gérer le processus d'installation de l'application. Cela consiste à appeler `CacheStorage.open()` pour créer un nouveau cache, puis à utiliser {{domxref("Cache.addAll()")}} pour y ajouter une série d'éléments.

```js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/sw-test/',
        '/sw-test/index.html',
        '/sw-test/style.css',
        '/sw-test/app.js',
        '/sw-test/image-list.js',
        '/sw-test/star-wars-logo.jpg',
        '/sw-test/gallery/bountyHunters.jpg',
        '/sw-test/gallery/myLittleVader.jpg',
        '/sw-test/gallery/snowTroopers.jpg'
      ]);
    })
  );
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
