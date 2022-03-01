---
title: Cache.addAll()
slug: Web/API/Cache/addAll
tags:
  - API
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Worker
  - Service worker API
  - ServiceWorker
  - addAll
translation_of: Web/API/Cache/addAll
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`addAll()`** de l'interface {{domxref("Cache")}} accepte un tableau d'URLS, les récupères, et ajoute les objets réponse qui en résultent au cache en question. Les objets requêtes crées pendant la phase de récupération deviennent des clés vers les opérations de réponse stockées.

> **Note :** `addAll()` écrasera toute paire clé/valeur précédemment stockée en cache et qui correspond à une requête, mais échouera si l'opération `put()` ainsi créée devrait engendrer l'effacement d'une entrée cache créée par la même méthode `addAll()`.

## Syntaxe

```js
cache.addAll(requests[]).then(function() {
  //requests have been added to the cache
});
```

### Paramètres

- requests
  - : Un tableau d'objets {{domxref("Request", "Requête")}} à ajouter au cache.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue en void.

### Exceptions

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><strong>Exception</strong></th>
      <th scope="col"><strong>Arrive quand</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TypeError</code></td>
      <td>
        <p>
          Le schéma d'URL n'est pas <code>http</code> ou <code>https</code>.
        </p>
        <p>
          Le statut de la réponse n'est pas dans les 200 (i.e., une requête qui
          a échoué.) Cela peut arriver si la requête échoue, mais également si
          la requête est une <em>cross-origin no-cors</em> (auquel cas le statut
          retourné est systématiquement 0.)
        </p>
      </td>
    </tr>
  </tbody>
</table>

## **Exemples**

Ce bloc de code attends le déclenchement d'un {{domxref("InstallEvent")}}, puis lance {{domxref("ExtendableEvent.waitUntil","waitUntil")}} qui gère la phase d'installation de l'application. Cela consite à appeler {{domxref("CacheStorage.open")}} afin de créer un nouveau cache, puis à utiliser `addAll()` pour y ajouter une série de ressources.

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

| Spécification                                                                                | Statut                               | Commentaire          |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-addall', 'Cache: addAll')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Cache.addAll")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
