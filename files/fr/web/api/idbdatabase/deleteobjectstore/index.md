---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
---

{{APIRef("IndexedDB")}}

La méthode **`deleteObjectStore()`** de l'interface {{domxref("IDBDatabase")}} supprime un magasin d'objet et ses index de la base de données.

Comme la méthode {{domxref("IDBDatabase.createObjectStore")}}, cette méthode doit être appelée _uniquement_ lors d'une transaction en mode [`versionchange`](/fr/docs/Web/API/IDBTransaction).

{{AvailableInWorkers}}

## Syntaxe

```js
dbInstance.deleteObjectStore(name);
```

### Paramètres

- `name`
  - : Le nom du magasin d'objet à supprimer.

### Valeur de retour

Aucune.

### Exceptions

Cette méthode peut lever une {{domxref("DOMException")}} d'un de ces types suivants:

| Exception                  | Description                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`        | Levée si la méthode n'est pas appelée lors d'une transaction en mode `versionchange`. Pour les anciens navigateurs basés sur WebKit, il faut d'abord appeler la méthode {{domxref("IDBVersionChangeRequest.setVersion")}}.                                                               |
| `TransactionInactiveError` | Levée si la méthode est appelée sur une base de données qui n'existe pas (ex. elle a été effacée). Pour les versions antérieures à Firefox 41, ce dernier déclenchait une erreur `InvalidStateError`, cela est désormais corrigé (cf. [bug Firefox 1176165](https://bugzil.la/1176165)). |
| `NotFoundError`            | Levée lors de la suppression d'un magasin d'objets qui n'existe pas. Les noms sont sensibles à la casse.                                                                                                                                                                                 |

## Exemples

Dans cet exemple, on ouvre une connexion à la base de données et dans le gestionnaire d'événements `onupdateneeded`, on ajoute un magasin d'objets en utilisant la méthode {{domxref("IDBDatabase.createObjectStore")}}. Enfin, on supprime ce magasin d'objets grâce à `deleteObjectStore()`.

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

/* Gestionnaire d'événements qui intervient lors de
     la mise en place d'une nouvelle version de la
     base de données, que la base n'existe pas, qu'elle
     soit ajoutée ou qu'un nouveau numéro de version
     soit utilisé avec à window.indexedDB.open
     Seulement utilisé avec les navigateurs récents */
DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function (event) {
    note.innerHTML += "<li>Erreur du chargement de la base de données.</li>";
  };

  // Ajoute un magasin d'objets à la base de données

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Définition des index de ce magasin d'objets

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Magasin d'objets ajouté.</li>";

  // Supprime le magasin d'objets

  db.deleteObjectStore("toDoList");
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
