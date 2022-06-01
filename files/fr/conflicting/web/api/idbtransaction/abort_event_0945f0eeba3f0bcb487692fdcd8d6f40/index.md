---
title: IDBTransaction.onabort
slug: >-
  conflicting/Web/API/IDBTransaction/abort_event_0945f0eeba3f0bcb487692fdcd8d6f40
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/onabort
original_slug: Web/API/IDBTransaction/onabort
---
{{APIRef("IndexedDB")}}

Le gestionnaire d'événement **`onabort`**, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement [`abort`](/fr/docs/Web/Events/abort), lorsque la transaction a été annulée avec la méthode {{domxref("IDBTransaction.abort")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
transaction.onabort = function() { ... };
```

## Exemple

Dans le code suivant, on ouvre une connexion à la base de données. Sur cette connexion, on démarre une transaction avec {{domxref("IDBTransaction")}} en lecture/écriture pour accéder au magasin d'objets intitulé `"toDoList"` et y ajouter un enregistrement (grâce à la méthode {{domxref("IDBObjectStore.add")}}). On notera également l'utilisation des gestionnaires d'événement {{domxref("IDBTransaction.oncomplete")}} et {{domxref("IDBTransaction.onerror")}} qui affichent le résultat de la transaction sur la page.

On voit ici le gestionnaire d'événement **`onabort`** qui est utilisé pour afficher un message sur la console du développeur.

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Connexion établie.</li>';

  // On affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // On exécute la fonction addData () afin de
  // stocker des données dans la base
  addData();
};

function addData() {
  // Voici un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture, prête
  // à traiter des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On utilise oncomplete en cas de succès de
  // l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification de la base de données OK.</li>';
  };

  // En cas d'échec de l'ouverture, ce sera
  // le gestionnaire onerror qui interviendra
  transaction.onerror = function(event) {
    note.innerHTML += '<li>L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.</li>';
  };

  // On ouvre l'accès au un magasin "toDoList"
  // dans la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Ici, l'enregistrement est ajouté
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // On signale l'ajout de l'enregistrement
    note.innerHTML += '<li>Enregistrement ajouté.</li>';
  };

  transaction.onabort = function() {
    // Ce gestionnaire permet de signaler
    // qu'une transaction a été annulée avec succès
    console.log("Transaction annulée !");
  };

  // On abandonne la transaction qu'on vient de faire
  transaction.abort();
};
```

> **Note :** Pour un exemple fonctionnel complet, voir notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([exemple _live_ disponible](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                | État                         | Commentaires |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBTransaction-onabort', 'onabort')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.onabort")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
