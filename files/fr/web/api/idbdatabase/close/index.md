---
title: IDBDatabase.close()
slug: Web/API/IDBDatabase/close
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBDatabase/close
---
{{APIRef("IndexedDB")}}

La méthode **`close()`** de l'interface {{domxref("IDBDatabase")}} ferme de façon asynchrone la connexion à la base de donnée.

La connexion sera fermée lorsque toutes les transactions liées à cette connexion seront terminées. En revanche, on ne pourra pas démarrer de nouvelles transactions sur la connexion une fois que cette méthode a été appelée. Les méthodes qui initialisent des transactions déclencheront une exception lorsque la fermeture est en cours.

{{AvailableInWorkers}}

## Syntaxe

```js
db.close();
```

### Valeur de retour

Aucune.

## Exemple

```js
// ouverture de la connexion à la base de données toDoList
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);

  // deux gestionnaires d’événements effectuant les
  // opérations après que l'ouverture se soit bien
  // passée ou non.
  DBOpenRequest.onerror = function(event) {
    note.innerHTML += '<li>Erreur lors du chargement de la base.</li>';
  };

  DBOpenRequest.onsuccess = function(event) {
    note.innerHTML += '<li>Base chargée.</li>';

    // affecte la connexion à la variable db
    db = DBOpenRequest.result;

    // fermeture de la base de donnée.
    db.close();
  }
```

## Spécification

| Spécification                                                                                | État                         | Commentaires |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-close-void', 'close()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBDatabase.close")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
