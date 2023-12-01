---
title: IDBObjectStore.clear()
slug: Web/API/IDBObjectStore/clear
---

{{ APIRef("IndexedDB") }}

La méthode **`clear()`** de l'interface {{domxref("IDBObjectStore")}} fait une {{domxref("IDBRequest","requête")}} pour vider le magasin d'objet {{domxref("IDBObjectStore","relié")}}.

Vider un magasin d'objet consiste à supprimer tous les enregistrements et les entrées des index de ce magasin d'objet.

> **Note :** La méthode clear() ne remet pas à zero le compteur du génerateur de clé s'il y en à un.

{{AvailableInWorkers}}

## Syntaxe

```js
var request = objectStore.clear();
```

## Renvoie

Une {{domxref("IDBRequest","requête")}}.

## Exceptions

- `ReadOnlyError`
  - : Cette {{domxref("DOMException","exception")}} est levé si la transaction associé à cette requête est en {{domxref("IDBTransaction.mode","mode")}} lecture seule.
- `TransactionInactiveError`
  - : Cette {{domxref("DOMException","exception")}} est levé si la {{domxref("IDBTransaction","transaction")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet est inactive.

## Exemple

Dans le code suivant, on ouvre une {{domxref("IDBDatabase","connexion")}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction")}} en lecture/écriture pour avoir un {{domxref("IDBObjectStore","accès")}} au magasin d'objet `"toDoList"` et le {{domxref("IDBObjectStore.clear","vider")}}

La méthode **`clear()`** de l'accès au magasin d'objet fait une {{domxref("IDBRequest","requête")}} pour vider le magasin d'objet `toDoList`.

```js
//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Connexion établie.</li>";

  //Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécutez la fonction clearData () pour vider les données dans le magasin d'objet
  clearData();
};

function clearData() {
  // ouvre une transaction de lecture / écriture prête pour le nettoyage
  var transaction = db.transaction(["toDoList"], "readwrite");

  // en cas de succès de l'ouverture de la transaction
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>Transaction complété : modification de la base de données terminée.</li>";
  };

  // en cas d'échec de l'ouverture de la transaction
  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction en échec à cause de l'erreur : " +
      transaction.error +
      "</li>";
  };

  // ouvre l'accès au un magasin "toDoList" de la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Vide le magasin d'objet
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function (event) {
    // rapporte le succès du nettoyage
    note.innerHTML += "<li>Enregistrements effacées.</li>";
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
