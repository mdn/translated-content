---
title: IDBDatabase.name
slug: Web/API/IDBDatabase/name
---

{{APIRef("IndexedDB")}}

La propriété **`name`** de l'interface `IDBDatabase` est une chaîne de caractères, sous la forme d'un objet {{domxref("DOMString")}}, contenant le nom de la base de données connectée.

{{AvailableInWorkers}}

## Syntaxe

```js
db.name;
```

### Valeur

Une chaîne de caractères {{domxref("DOMString")}} contenant le nom de la base de données connectée.

## Exemple

Cet exemple affiche le nom de la base de données qui est ouverte. La connexion (l'objet {{domxref("IDBDatabase")}}) est affectée à la variable `db`, puis sa propriété `name` est affichée dans la console.

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Les deux gestionnaires d'événement activés pour
// détecter si l'ouverture de la base se déroule
// correctement ou non.

DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Erreur au chargement de la base de données.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de données initialisée.</li>";

  // Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Affiche le nom de la base de donnée (ici "toDoList")
  // dans la console.
  console.log(db.name);
};
```

> **Note :** Pour un exemple fonctionnel complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
