---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
---

{{APIRef("IndexedDB")}}

L'interface **`IDBOpenDBRequest`** de l'API IndexedDB donne un accès aux résultats des requêtes permettant d'ouvrir ou de supprimer des bases de donnée (Effectuée via {{domxref("IDBFactory.open")}} et {{domxref("IDBFactory.deleteDatabase")}}).

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Propriétés

_Hérite des méthodes de ses parents {{domxref("IDBRequest")}} et {{domxref("EventTarget")}}_.

### Évènements

- {{domxref("IDBOpenDBRequest.onblocked")}}
  - : Le gestionnaire d'évènements pour l'évènement bloqué. Cet évènement est lancé lorsqu'un évènement `upgradeneeded` doit être déclenché en raison d'un changement de version, mais que la base de données est toujours en cours d'utilisation (c'est-à-dire, non fermée) quelque part, même après l'envoi de l'évènement `versionchange`.
- {{domxref("IDBOpenDBRequest.onupgradeneeded")}}
  - : Le gestionnaire d'évènement pour évènement `upgradeneeded` _(mise-à-jour nécessaire)_, lancé quand une base de données d'une version supérieure à celle de la base de données existante est chargé.

## Méthodes

_Pas de méthodes, mais hérite des méthodes de ses parents {{domxref("IDBRequest")}} et {{domxref("EventTarget")}}._

## Exemple

Dans l'exemple ci-dessous, le gestionnaire `onupgradeneeded` est utilisé pour mettre à jour la structure de la base de données, si une base plus récente est chargée. Pour voir un exemple complet, référez-vous à notre application [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir cet exemple réel](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
var db;

// Ouvre la base de données.
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Ces gestionnaires d'évènements agissent sur la base de données en cours d'ouverture.
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // stocke le résultat de l'ouverture de la base de données dans la variable db .
  // Ceci est beaucoup moins utilisé.
  db = DBOpenRequest.result;

  // Exécute la fonction displayData() pour remplir la liste de tâches
  // avec toutes les données de la lste de tâches déjà dans la base.
  displayData();
};

// Cet évènement gère l'évènement par lequel une nouvelle version
// de la base de données doit être créée. Soit elle n'a pas
// été créée avant, soit un nouveau numéro de version a été
// soumis via la ligne "window.indexedDB.open" ci-dessous.
// Il n'est implémenté que dans les navigateurs récents.
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Error loading database.</li>';
  };

  // Crée un objet de stockage pour cette base de données.
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // définit quels éléments de données l'objet de stockage contiendra.

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrage de transactions : {{domxref("IDBDatabase")}}
- Utilisation de transactions : {{domxref("IDBTransaction")}}
- Définition un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupération et modification des données : {{domxref("IDBObjectStore")}}
- Utilisation de curseurs : {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
