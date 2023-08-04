---
title: IDBDatabase.onerror
slug: Web/API/IDBTransaction/error_event
---

{{APIRef("IndexedDB")}}

Le gestionnaire d'événement **`onerror`**, rattaché à l'interface `IDBDatabase`, s'exécute au déclenchement de l'événement `error` qui se produit lorsque la connexion à la base de donnée échoue.

{{AvailableInWorkers}}

## Syntaxe

```js
db.onerror = function() { ... }
```

## Exemple

Dans cet exemple, on illustre un gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} dans lequel on ajoute un magasin d'objet et les deux gestionnaires d'événements `onerror` et `onabort` afin de gérer les cas d'échec de la connexion.

```js
DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function () {
    note.innerHTML += "<li>Erreur du chargement de la base de données.</li>";
  };

  db.onabort = function () {
    note.innerHTML += "<li>L'ouverture de la connexion à été annulé!</li>";
  };

  // Ajoute un magasin d'objet à la base de données

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Définition des index

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Le magasin d'objets à été ajouté.</li>";
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
