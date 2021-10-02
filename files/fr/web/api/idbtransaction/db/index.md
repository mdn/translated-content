---
title: IDBTransaction.db
slug: Web/API/IDBTransaction/db
tags:
  - API
  - IDBTransaction
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/db
---
{{APIRef("IndexedDB")}}

La propriété **`db`** de l'interface {{domxref("IDBTransaction")}} renvoie la {{domxref("IDBDatabase","connexion","",1)}} à la base de donnée associée à la {{domxref("IDBTransaction","transaction","",1)}}.

{{AvailableInWorkers}}

## Syntaxe

    var myDatabase = transaction.db;

### Valeur

Une {{domxref("IDBDatabase","connexion","",1)}} à la base de données sous la forme d'un objet `IDBDatabase`.

## Exemples

Dans le fragment de code suivant, on ouvre une {{domxref("IDBDatabase","connexion","",1)}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction","",1)}} en lecture/écriture pour {{domxref("IDBObjectStore","accéder au magasin d'objet","",1)}}  `"toDoList"` et y {{domxref("IDBObjectStore.add","ajouter","",1)}} un enregistrement. Notez également les gestionnaires d'événements {{domxref("IDBTransaction.oncomplete","oncomplete")}} et {{domxref("IDBTransaction.onerror","onerror")}} de la transaction qui affichent sur la page le résultat de la transaction.

À la fin, la méthode **`db`** sert à renvoyer la connexion à la base de données associée à la transaction.

```js
//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += 'Connexion établie.';

  //Affecter la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécuter la fonction addData () pour emmagasiner
  // les données dans la base
  addData();
};
function addData() {
    //Un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // Ouvrir une transaction de lecture / écriture
  // pour permettre le traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // En cas de succès de l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction complété : modification de la base de données terminée.</li>';
  };
  // En  cas d'échec de l'ouverture de la transaction
  transaction.onerror = function(event) {
    note.innerHTML += '<li>Erreur transaction non ouverte, doublons interdits.</li>';
  };

  // Ouvrir l'accès au un magasin "toDoList" de la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Ajouter un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // Signaler l'ajout de l'enregistrement
    note.innerHTML += '<li>Enregistrement ajouté.</li>';
  };
  // Renvoyer la connexion à la base de donnée
  //associée à cette transaction.
  transaction.db;
};

```

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                | État                         | Commentaires |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBTransaction-db', 'db')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.db")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
