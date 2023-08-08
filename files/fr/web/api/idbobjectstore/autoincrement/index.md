---
title: IDBObjectStore.autoIncrement
slug: Web/API/IDBObjectStore/autoIncrement
---

{{ APIRef("IndexedDB") }}

La propriété **`autoIncrement`** de l'interface {{domxref("IDBObjectStore")}} renvoie la position du drapeau d'incrémentation automatique du magasin d'objet {{domxref("IDBObjectStore","relié")}}.

> **Note :** Chaque magasin d'objets à son conteur d'incrémentation automatique.

{{AvailableInWorkers}}

## Syntaxe

```js
var myAutoIncrement = objectStore.autoIncrement;
```

## Valeur

Un {{domxref("Boolean","booléen")}} .

- `true`
  - : Le magasin d'objet relié s'incrémente automatiquement.
- `false`
  - : Le magasin d'objet relié ne s'incrémente pas automatiquement.

## Exemple

Dans le code suivant, on ouvre une {{domxref("IDBDatabase","connexion")}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction")}} en lecture/écriture pour avoir un {{domxref("IDBObjectStore","accès")}} au magasin d'objet `"toDoList"` dans lequel on {{domxref("IDBObjectStore.add","ajoute")}} un enregistrement.

La propriété **`autoIncrement`** de l'accès au magasin d'objet sert à affiché la position du drapeau d'incrémentation automatique de ce magasin d'objet sur la console.

```js
//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "Connexion établie.";

  //Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécutez la fonction addData () pour ajouter l'enregistrement dans le magasin d'objet
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

  //->Affiche la position du drapeau d’incrémentation automatique
  console.log(objectStore.autoIncrement);

  // Ajoute un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function (event) {
    // signale l'ajout de l'enregistrement
    note.innerHTML += "<li>Enregistrement ajouté.</li>";
  };
}
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

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
