---
title: Cache.add()
slug: Web/API/Cache/add
tags:
  - API
  - Add
  - Cache
  - Experimental
  - Méthode
  - Reference
  - Service Worker
  - Service worker API
  - ServiceWorker
translation_of: Web/API/Cache/add
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`add()`** de l'interface {{domxref("Cache")}} accepte une URL, la récupère, et ajoute l'objet réponse qui en résulte dans le cache. La méthode `add()` est équivalent au code suivant :

```js
fetch(url).then(function(response) {
  if (!response.ok) {
    throw new TypeError('bad response status');
  }
  return cache.put(url, response);
})
```

Pour des opérations plus complexes, il faut utiliser {{domxref("Cache.put","Cache.put()")}} directement.

> **Note :** `add()` écrasera toute paire clé/valeur précedemment stockée en cache et qui correspond à la requête.

## Syntaxe

```js
cache.add(request).then(function() {
  //request a été ajoutée au cache
});
```

### Paramètres

- request
  - : La requête à mettre en cache. Ce paramètre peut être un objet {{domxref("Request", "Requête")}} ou une URL.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui est résolue en void.

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
          Le schéma d'URL n'est pas <code>http</code> ou <code>https</code>.
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

## Exemples

Ce bloc de code attends le déclenchement d'un {{domxref("InstallEvent")}}, puis lance {{domxref("ExtendableEvent.waitUntil","waitUntil")}} qui gère la phase d'installation de l'application. Cela consite à appeler {{domxref("CacheStorage.open")}} afin de créer un nouveau cache, puis à utiliser {{domxref("Cache.add")}} pour y ajouter des ressources.

```js
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.add('/sw-test/index.html');
    })
  );
});
```

## Spécifications

| Spécification                                                                        | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cache-add', 'Cache: add')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Cache.add")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
