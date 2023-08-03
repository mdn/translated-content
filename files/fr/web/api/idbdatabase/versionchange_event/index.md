---
title: IDBDatabase.onversionchange
slug: Web/API/IDBDatabase/versionchange_event
---

{{APIRef("IndexedDB")}}

Le gestionnaire d'événement **`onversionchange`**, rattaché à l'interface {{domxref("IDBDatabase")}}, s'exécute au déclenchement de l'événement `versionchange` qui se produit lorsque la structure de la base de donnée change (l'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} ou {{domxref("IDBFactory.deleteDatabase")}} a été demandé par ailleurs (probablement dans une autre fenêtre ou onglet sur le même ordinateur)).

Cela n'est pas la même chose qu'une transaction `versionchange` (bien que les concepts soient apparentés).

{{AvailableInWorkers}}

## Syntaxe

```js
db.onversionchange = function() { ... }
```

## Exemple

Cette exemple illustre un gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} dans lequel on ajoute un magasin d'objets. Les deux gestionnaires d'événements `onerror` et `onabort` sont utilisés pour les cas d'échec. Le gestionnaire d'événement `onversionchange` est utilisé afin d'indiquer que la structure de la base de données a été modifiée.

```js
DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function () {
    note.innerHTML += "<li>Erreur du chargement de la base de données.</li>";
  };

  db.onabort = function () {
    note.innerHTML += "<li>L'ouverture de la connexion à été annulée !</li>";
  };

  // Ajoute un magasin d'objets à la base de données

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Définition des index

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Le magasin d'objet à été ajouté.</li>";

  db.onversionchange = function (event) {
    note.innerHTML +=
      "<li>Des changements ont été appliqués sur la base de données. Vous devez réactualiser cette page ou la fermer et utiliser l'autre version de cette application qui est ouverte.</li>";
  };
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
