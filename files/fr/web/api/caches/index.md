---
title: caches
slug: Web/API/caches
---

{{APIRef()}}{{SeeCompatTable}}

La propriété globale en lecture seule **`caches`** retourne l'objet [`CacheStorage`](/fr/docs/Web/API/CacheStorage) associé au contexte actuel. Cet objet permet de stocker des ressources pour une utilisation hors-ligne et de générer des réponses personnalisées à des requêtes.

## Valeur

Un objet [`CacheStorage`](/fr/docs/Web/API/CacheStorage).

## Exemple

L'exemple suivant montre comment mettre en cache un contexte de [<i lang="en">service worker</i>](/fr/docs/Web/API/Service_Worker_API) pour stocker des ressources et les utiliser hors-ligne.

```js
this.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("v1").then(function (cache) {
      return cache.addAll([
        "/sw-test/",
        "/sw-test/index.html",
        "/sw-test/style.css",
        "/sw-test/app.js",
        "/sw-test/image-list.js",
        "/sw-test/star-wars-logo.jpg",
        "/sw-test/gallery/",
        "/sw-test/gallery/bountyHunters.jpg",
        "/sw-test/gallery/myLittleVader.jpg",
        "/sw-test/gallery/snowTroopers.jpg",
      ]);
    }),
  );
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API <i lang="en">Service Workers</i>](/fr/docs/Web/API/Service_Worker_API)
- [L'API <i lang="en">Web Workers</i>](/fr/docs/Web/API/Web_Workers_API)
- [`CacheStorage`](/fr/docs/Web/API/CacheStorage)
- [`Cache`](/fr/docs/Web/API/Cache)
