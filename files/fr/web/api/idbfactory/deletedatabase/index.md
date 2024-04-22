---
title: IDBFactory.deleteDatabase()
slug: Web/API/IDBFactory/deleteDatabase
---

{{APIRef("IndexedDB")}}

La méthode **`deleteDatabase()`**, rattachée à l'interface {{domxref("IDBFactory")}}, permet de demander la suppression d'une base de données. La méthode renvoie immédiatement un objet {{domxref("IDBOpenDBRequest")}} puis effectue l'opération de suppression de façon asynchrone.

Si la base de données est bien supprimée, un évènement `success` est déclenché sur l'objet `IDBOpenDBRequest` renvoyé et la propriété `result` vaut alors `undefined`. Si une erreur se produit lors de la suppression, ce sera un évènement `error` qui sera déclenché sur l'objet renvoyé par la méthode.

Lorsque la méthode `deleteDatabase()` est invoquée, toutes les autres connexions qui sont ouvertes sur cette base de données recevront un évènement [`versionchange`](/fr/docs/Web/Events/versionchange_indexedDB).

{{AvailableInWorkers}}

## Syntaxe

La syntaxe actuellement standard est :

```js
var request = indexedDB.deleteDatabase(nom);
```

Une version expérimentale permet de gérer des options (cf. ci-après) :

```js
var request = indexedDB.deleteDatabase(nom, options);
```

### Paramètres

- `nom`
  - : Le nom de la base de données qu'on souhaite supprimer. Tenter de supprimer une base de données qui n'existe pas ne déclenchera pas d'exception (contrairement à la tentative de suppression d'un magasin d'objets inexistant avec {{domxref("IDBDatabase.deleteObjectStore()")}} qui déclenchera bien une exception).
- `options` {{NonStandardBadge}}
  - : Dans Gecko, à partir de [la version 26](/fr/Firefox/Releases/26), il est possible d'inclure un paramètre pour indiquer le stockage de la base. La valeur peut être `permanent` (la valeur par défaut) ou `temporary` si on souhaite supprimer une base de données qui fait partie d'une mémoire partagée.

### Valeur de retour

Cette méthode renvoie un objet {{domxref("IDBOpenDBRequest")}} sur lequel seront déclenchés les évènements relatifs à la requête.

## Exemples

```js
var DBDeleteRequest = window.indexedDB.deleteDatabase("toDoList");

DBDeleteRequest.onerror = function (event) {
  console.log("Erreur lors de la suppression de la base");
};

DBDeleteRequest.onsuccess = function (event) {
  console.log("Suppression de la base réussie");

  console.log(event.result); // undefined
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
