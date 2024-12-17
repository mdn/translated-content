---
title: IDBDatabase.version
slug: Web/API/IDBDatabase/version
---

{{APIRef("IndexedDB")}}

La propriété **`version`**, rattachée à l'interface {{domxref("IDBDatabase")}}, est un entier sur 64 bits qui contient la version de la base de données à laquelle on est connecté. Lors de la création initiale d'une base de données, cet attribut a la chaîne vide.

{{AvailableInWorkers}}

## Syntaxe

```js
db.version;
```

### Valeur

Un entier qui contient la version de la base de données à laquelle on est connecté.

## Exemples

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

//  On déclare des gestionnaires d'évènements pour l'ouverture
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Erreur lors du chargement de la base de données.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de données initialisée.</li>";

  // on stocke le résultat de l'ouverture si besoin de l'utiliser ensuite
  db = DBOpenRequest.result;

  // Cette ligne inscrira la version de la base dans la console : "4"
  console.log(db.version);
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
