---
title: IDBTransaction.abort()
slug: Web/API/IDBTransaction/abort
---

{{APIRef("IndexedDB")}}

La méthode **`abort()`**, rattachée à l'interface {{domxref("IDBTransaction")}}, permet d'annuler les modifications apportées aux objets de la base de données pendant la transaction courante.

Tous les objets {{domxref("IDBRequest")}} créés pendant cette transaction verront leur attribut {{domxref("IDBRequest.error")}} prendre la valeur `AbortError`.

{{AvailableInWorkers}}

## Syntaxe

```js
transaction.abort();
```

### Valeur de retour

Aucune.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} du type `InvalidStateError` lorsque la transaction a été validée ou qu'elle a déjà été annulée.

## Exemples

Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture sur la base de données et on ajoute des données au magasin d'objets. On dispose également de fonctions attachées aux gestionnaires d'évènements de la transaction pour gérer la réussite ou l'échec des opérations. Ensuite, on annule les opérations de la transaction grâce à `abort()`. Pour un exemple complet, vous pouvez consulter [notre application de notifications To-do](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) (cf. [la démonstration _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Initialisation de la base.</li>';

  // On enregistre le résultat de l'ouverture dans la
  // variable db afin de l'utiliser ensuite
  db = DBOpenRequest.result;

  // On exécute la fonction addData() afin d'ajouter
  // des données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet pour l'insérer dans la reate a new object ready for being
  // inserted into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter des données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère la réussite de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modifications appliquées.</li>';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction non ouverte à cause d'une erreur.</li>';
  };

  // On crée le magasin d'objet pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute un nouvel objet newItem au magasin d'objet
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On gère la réussite de l'ajout de l'élément dans
    // la base de données
    note.innerHTML += '<li>Nouvel objet ajouté dans la base de données.</li>';
  };

  // On annule la transaction en cours
  transaction.abort();
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
