---
title: IDBRequest.transaction
slug: Web/API/IDBRequest/transaction
---

{{ APIRef("IndexedDB") }}

La propriété **`transaction`** de l'interface IDBRequest renvoie la {{domxref("IDBTransaction","transaction")}} dans laquelle on fait la requête.La propriètè peut renvoiyer `null` si requête se fait sans transaction, comme un objet IDBRequest renvoyé par {{domxref("IDBFactory.open")}} dans ce cas on est juste connecté à la base de données.

> **Note :** Durant la gestion d'un événement {{domxref("IDBOpenDBRequest.onupgradeneeded", "upgradeneeded")}} qui met à jour la version de la base de données, la propriété **`transaction`** doit être une {{domxref("IDBTransaction","transaction")}} ouverte en {{domxref("IDBTransaction.mode", "mode")}} `"versionchange"`, on peut alors accéder aux {{domxref("IDBObjectStore","magasins d'objets")}} et {{domxref("IDBIndex","index")}} ou annulé la mise à niveau. Après quoi, la propriété **`transaction`** renverra encore `null`.

{{AvailableInWorkers}}

## Syntaxe

```js
var myTransaction = request.transaction;
```

### Valeur

Une {{domxref("IDBTransaction","transaction")}}.

## Exemple

L'exemple suivant demande un titre d'enregistrement donné, `onsuccess` obtient l'enregistrement associé du {{domxref("IDBObjectStore","magasin d'objects")}} (mis à disposition en tant que `objectStoreTitleRequest.result`), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objects. La {{domxref("IDBTransaction","transaction")}} à l'origine de la deuxième {{domxref("IBBRequest","requête")}} est affichée sur la console du développeur (Ps, les deux requêtes proviennent de la même transaction). En bas est une fonction onerror qui affiche le code d'erreur si la requête échoue. Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
var title = "Walk dog";

// Ouvrez une transaction comme d'habitude
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Obtenez l'objet toDoList qui a ce titre
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // Prenez l'objet de données renvoyé comme résultat
  var data = objectStoreTitleRequest.result;

  // Mettre à jour la valeur notified de l'objet à "yes"
  data.notified = "yes";

  // Créer une autre requête qui insère le nouvelle élément dans la base de données
  var updateTitleRequest = objectStore.put(data);

  // Affiche la transaction à l'origine de la deuxième requête
  console.log(" la transaction à l'origine de ces requêtes est " + updateTitleRequest.transaction);

  // Lorsque cette requête réussit, appelle de la fonction displayData() pour mettre à jour l'affichage
  updateTitleRequest.onsuccess = function() {
    displayData();
  };

objectStoreTitleRequest.onerror = function() {
  // Si une erreur pendant la requête, on l'affiche
  console.log("Il y a eu une erreur dans la récupération des données: " + objectStoreTitleRequest.error);
};
```

Cet exemple montre comment la propriété **`transaction`** peut être utilisé pendant une mise à niveau de version pour accéder à des {{domxref("IDBObjectStore","magasins d'objects")}} existants:

```js
var openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // Affiche "null".

openRequest.onupgradeneeded = function (event) {
  console.log(openRequest.transaction.mode); // Affiche "versionchange".
  var db = openRequest.result;
  if (event.oldVersion < 1) {
    // Nouvelle base de données, créer un magasin d'objets "livres".
    db.createObjectStore("books");
  }
  if (event.oldVersion < 2) {
    // Mise à niveau de la base de données v1: ajoute un index sur "title" pour stocker les livres.
    var bookStore = openRequest.transaction.objectStore("books");
    bookStore.createIndex("by_title", "title");
  }
};

openRequest.onsuccess = function () {
  console.log(openRequest.transaction); // Affiche "null".
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Using IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
