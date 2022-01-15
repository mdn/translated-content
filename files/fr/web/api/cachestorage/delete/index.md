---
title: CacheStorage.delete()
slug: Web/API/CacheStorage/delete
tags:
  - API
  - CacheStorage
  - Experimental
  - Reference
  - Service Workers
  - ServiceWorker
  - delete
translation_of: Web/API/CacheStorage/delete
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La fonction **`delete()`** de l'interface {{domxref("CacheStorage")}} trouve l'objet {{domxref("Cache")}} correspondant à un `cacheName`, et si trouvé, supprime l'objet {{domxref("Cache")}} et retourne une {{jsxref("Promise", "Promesse")}} qui renvoie `true`. Si aucun objet {{domxref("Cache")}} n'est trouvé, elle retourne `false`.

Vous pouvez accéder à `CacheStorage` via la propriété globale {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}}.

## Syntaxe

    caches.delete(cacheName).then(function(true) {
      // le cache est maintenant supprimé
    });

### Paramètres

- cacheName
  - : Le nom du cache que vous souhaitez supprimer.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui renvoie `true` si l'objet {{domxref("Cache")}} est trouvé et supprimé, `false` sinon.

## Exemples

Dans ce fragment de code, nous attendons un évènement, et bloquons avec un {{domxref("ExtendableEvent.waitUntil","waitUntil()")}}, qui nettoie les anciens, inutilisés, caches avant que le nouveau service worker soit activé. Nous avons ici une liste blanche contenant le nom du cache que nous voulons garder. Nous retournons les clés des caches dans l'objet {{domxref("CacheStorage")}} utilisant {{domxref("CacheStorage.keys")}}, pour ensuite vérifier que chaque clé est dans la liste blance. Sinon, nous la supprimons avec `delete().`

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
```

## Spécifications

| Spécification                                                                                                | Statut                               | Commentaire          |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#cache-storage-delete', 'CacheStorage: delete')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.CacheStorage.delete")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WindowOrWorkerGlobalScope.caches")}}
