---
title: IDBObjectStore.transaction
slug: Web/API/IDBObjectStore/transaction
---

{{ APIRef("IndexedDB") }}

La propriété **`transaction`** de l'interface {{domxref("IDBObjectStore")}} renvoie la {{domxref("IDBTransaction","transaction")}} à laquelle l'{{domxref("IDBObjectStore","accès")}} du magasin d'objet appartient.

{{AvailableInWorkers}}

## Syntaxe

```js
var myTransaction = objectStore.transaction;
```

## Valeur

Une {{domxref("IDBTransaction","transaction")}}.

## Exemple

Dans le code suivant, on ouvre une {{domxref("IDBDatabase","connexion")}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction")}} en lecture/écriture pour avoir un {{domxref("IDBObjectStore","accès")}} au magasin d'objet `"toDoList"` dans lequel on {{domxref("IDBObjectStore.add","ajoute")}} un enregistrement.

La propriété **`transaction`** affiche la transaction à laquelle l'accès du magasin d'objet appartient.

```js
//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Connexion établie.</li>";

  //Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécutez la fonction addData () pour ajouter un enregistrement au magasin d'objet
  addData();
};
function addData() {
  // un nouvel objet prêt à être emmagasiné
  newItem = [
    {
      taskTitle: "Walk dog",
      hours: 19,
      minutes: 30,
      day: 24,
      month: "December",
      year: 2013,
      notified: "no",
    },
  ];

  // ouvre une transaction de lecture / écriture prête au traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // en cas de succès de l'ouverture de la transaction
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>Transaction complété : modification de la base de données terminée.</li>";
  };
  // en cas d'échec de l'ouverture de la transaction
  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>L'erreur: \"" +
      transaction.error +
      "\" c'est produite échec de la transaction.</li>";
  };

  // ouvre l'accès au un magasin "toDoList" de la transaction
  var objectStore = transaction.objectStore("toDoList");

  //->Affiche la transaction de l'accès du magasin d'objet
  console.log(objectStore.transaction);

  // Ajoute un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function (event) {
    // signale l'ajout de l'enregistrement
    note.innerHTML += "<li>Enregistrement ajouté.</li>";
  };
}
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
