---
title: CacheStorage.keys()
slug: Web/API/CacheStorage/keys
tags:
  - API
  - CacheStorage
  - Experimental
  - Méthodes
  - Reference
  - Service Workers
  - ServiceWorker
  - keys
translation_of: Web/API/CacheStorage/keys
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

La méthode **`keys()`** de l'interface {{domxref("CacheStorage")}} retourne une {{jsxref("Promise", "Promesse")}} qui renvoie une liste content les chaines de caractères correspondant à tous les noms des {{domxref("Cache")}} suivient par l'objet {{domxref("CacheStorage")}}. Utilisez cette méthode pour itérer sur une liste de tous les objets {{domxref("Cache")}}.

Vous pouvez accéder à `CacheStorage` via la propriété globale {{domxref("WindowOrWorkerGlobalScope.caches", "caches")}}.

## Syntaxe

    caches.keys().then(function(keyList) {
      // faire quelque-chose avec votre keylist
    });

### Paramètres

Aucun.

### Retour

Une {{jsxref("Promise", "Promesse")}} qui retourne une liste de noms de {{domxref("Cache")}} contenus dans un objet {{domxref("CacheStorage")}}.

## Exemples

Dans ce fragment de code, nous attendons un évènement, et bloquons avec un {{domxref("ExtendableEvent.waitUntil","waitUntil()")}}, qui nettoie les anciens caches, inutilisés, avant que le nouveau service worker soit activé. Nous avons ici une liste blanche contenant le nom du cache que nous voulons garder. Nous retournons les clés des caches dans l'objet {{domxref("CacheStorage")}} utilisant {{domxref("CacheStorage.keys")}}, pour ensuite vérifier que chaque clé est dans la liste blance. Sinon, nous la supprimons avec `delete().`

```js
this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      });
    })
  );
});
```

## Spécifications

| Spécification                                                                                            | Statut                               | Commentaire          |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{SpecName('Service Workers', '#dom-cachestorage-keys', 'CacheStorage: keys')}} | {{Spec2('Service Workers')}} | Définition initiale. |

## Compatibilités des navigateurs

{{Compat("api.CacheStorage.keys")}}

## Voir aussi

- [Utiliser les Service Workers](/fr/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("WorkerGlobalScope.caches")}}
