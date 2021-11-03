---
title: WindowOrWorkerGlobalScope.caches
slug: Web/API/caches
translation_of: Web/API/WindowOrWorkerGlobalScope/caches
original_slug: Web/API/WindowOrWorkerGlobalScope/caches
---
{{APIRef()}}{{SeeCompatTable}}

La propriété en lecture seule  **`caches`** de l'interface {{domxref("WindowOrWorkerGlobalScope")}} retourne l'objet {{domxref("CacheStorage")}} associé au contexte actuel. Cet objet permet de stocker des ressources pour une utilisation hors-ligne et de générer des réponses personnalisées à des requêtes.

## Syntaxe

    var myCacheStorage = self.caches; // ou simplement caches

### Value

Un objet de type {{domxref("CacheStorage")}}.

## Exemple

L'exemple suivant montre comment mettre en cache un contexte de [service worker](/en-US/docs/Web/API/Service_Worker_API) pour stocker des ressources et les utiliser hors-ligne.

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
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>
        {{SpecName('Service Workers', '#self-caches', 'caches')}}
      </td>
      <td>{{Spec2('Service Workers')}}</td>
      <td>
        <p>
          Défini dans un <code>WindowOrWorkerGlobalScope</code> partiel dans la
          nouvelle spec.
        </p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName('Service Workers')}}</td>
      <td>{{Spec2('Service Workers')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.caches")}}

## Voir aussi

- [Service Workers](/en-US/docs/Web/API/ServiceWorker_API)
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API)
- {{domxref("CacheStorage")}}
- {{domxref("Cache")}}
