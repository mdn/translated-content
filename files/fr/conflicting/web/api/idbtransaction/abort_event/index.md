---
title: IDBDatabase.onabort
slug: conflicting/Web/API/IDBTransaction/abort_event
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBDatabase/onabort
original_slug: Web/API/IDBDatabase/onabort
---
{{APIRef("IndexedDB")}}

Le gestionnaire d'événement **`onabort`**, rattaché à l'interface {{domxref("IDBDatabase")}}, s'exécute au déclenchement de l'événement `abort`, lorsque la tentative d’accès à la base de données est interrompue.

{{AvailableInWorkers}}

## Syntaxe

```js
db.onabort = function() { ... }
```

## Exemple

Cette exemple illustre un gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} dans lequel on ajoute un magasin d'objet et les deux gestionnaires d'événement `onerror` et `onabort` pour gérer les cas d'échec.

```js
DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function() {
    note.innerHTML += '<li>Erreur du chargement de la base de données.</li>';
  };

  db.onabort = function() {
    note.innerHTML += '<li>L\'ouverture de la connexion à été annulée !</li>';
  };

  // On ajoute un magasin d'objet à la base de données

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // On définit les index du magasin

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += '<li>Le magasin d\'objets à été ajouté.</li>';
};
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-onabort', 'onabort')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité avec les navigateurs

{{Compat("api.IDBDatabase.onabort")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
