---
title: IDBObjectStore.deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
---

{{ APIRef("IndexedDB") }}

La méthode **`deleteIndex()`** de l'interface {{domxref("IDBObjectStore")}} supprime l'index dont le nom est passé en paramètre, du magasin d'objet relié ({{domxref("IDBObjectStore")}}).

> [!NOTE]
> Cette méthode ne peut être appelée que si la transaction ({{domxref("IDBTransaction")}}) de l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet est en mode ({{domxref("IDBTransaction.mode")}}) **[versionchange](/fr/docs/Web/API/IDBTransaction/mode#versionchange)**. Les propriétés **indexNames ({{domxref("IDBObjectStore.indexNames")}})** des accès au magasin d'object seront aussi mises à jour.

{{AvailableInWorkers}}

## Syntaxe

```js
objectStore.deleteIndex(nomIndex);
```

### Paramètre

- nomIndex
  - : Le nom de l'index à supprimer.

### Valeur de retour

Void.

### Exceptions

- `InvalidStateError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) dont dépend cet accès ({{domxref("IDBObjectStore")}}) au magasin d'objet n'est pas en mode ({{domxref("IDBTransaction.mode")}}) [`versionchange`](/fr/docs/Web/API/IDBTransaction/mode#versionchange).
- `TransactionInactiveError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) de l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet est inactive.
    [bug 1176165](https://bugzilla.mozilla.org/show_bug.cgi?id=1176165)).
- `NotFoundError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si l'index avec le nom (case sensible) demandé n'existe pas sur le magasin d'objet.

## Exemple

Dans l'exemple suivant on peut voir le gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded", "onupgradeneeded")}} être utilisé pour mettre à jour la structure de la base de données quand un numéro de version supérieure est chargé.

Des méthode **`deleteIndex()`** sont utilisées pour supprimer d'anciens index du magasin d'objet `toDoList`.

```js
var db;

// Requête d'ouverture de la base de données "toDoList"
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Gère l'échec de l'ouverture de la base
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>La base de donnée n'as pas peut être ouverte.</li>";
};

// Gère le succès de l'ouverture de la base
DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>La base de données est ouverte.</li>";

  //
  db = request.result;

  // Exécute une fonction d'affichage displayData()
  displayData();
};

// Ce gestionnaire d'événement nécessite un nouveau numéro de version de la base de données.
// Si la base n'existe pas un nouveau numéro de version est généré par la méthode d'ouverture de connexion window.indexDB.open .

DBOpenRequest.onupgradeneeded = function (event) {
  db.onerror = function (event) {
    note.innerHTML += "<li>Erreur de chargement de la base de données.</li>";
  };

  // L'Accès au magasin d'objet "toDoList" de la base de données
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Met en place les index du magasin d'objet
  objectStore.createIndex("heures", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("jour", "day", { unique: false });
  objectStore.createIndex("mois", "month", { unique: false });
  objectStore.createIndex("annee", "year", { unique: false });
  objectStore.createIndex("notifiee", "notified", { unique: false });

  //supprime des index du magasin d'objet
  objectStore.deleteIndex("secondes");
  objectStore.deleteIndex("contact");
};
```

> [!NOTE]
> Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
