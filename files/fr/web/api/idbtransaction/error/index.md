---
title: IDBTransaction.error
slug: Web/API/IDBTransaction/error
tags:
  - API
  - Erreur
  - IDBTransaction
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/error
---
{{APIRef("IndexedDB")}}

La propriété **`IDBTransaction.error`** de l'interface {{domxref("IDBTransaction")}} renvoie un type d'erreur lorsque la {{domxref("IDBTransaction","transaction","",1)}} échoue.

{{AvailableInWorkers}}

## Syntaxe

    var myError = transaction.error;

### Valeur

L'{{domxref("DOMError","erreur","",1)}} correspondante qui est un objet `DOMError`. Il y a différents types d'erreurs possibles : l'erreur obtenue peut ainsi faire référence à l'objet de la requête qui l'a déclenchée ou à un échec de la transaction (par exemple `QuotaExceededError` ou `UnknownError`).

Cette propriété vaut `null` si la transaction n'est pas terminée ou qu'elle est terminée avec succès ou qu'elle a été annulée avec la méthode {{domxref("IDBTransaction.abort","abort")}}.

> **Note :** Dans Chrome 48+ cette propriété renvoie une exception {{domxref ("DOMException")}} parce que le type {{domxref("DOMError")}} a été retiré de la norme DOM.

## Exemples

Dans le fragment de code suivant, on ouvre une {{domxref("IDBDatabase","connexion","",1)}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction","",1)}} en lecture/écriture pour {{domxref("IDBObjectStore","accéder au magasin d'objet","",1)}}  `"toDoList"` et y {{domxref("IDBObjectStore.add","ajouter","",1)}} un enregistrement. Notez également les gestionnaires d'événements {{domxref("IDBTransaction.oncomplete","oncomplete")}} et {{domxref("IDBTransaction.onerror","onerror")}} de la transaction qui affichent sur la page le résultat de la transaction.

La propriété **`error`** sert dans le bloc `transaction.onerror = function(event) {...}` afin d'afficher le type d'erreur qui est survenue.

```js
//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Connexion établie.</li>';

  //Affecter la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécuter la fonction addData () pour emmagasiner
  // les données dans la base
  addData();
};

function addData() {
  // Créer un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // Ouvrir une transaction de lecture / écriture
  // pour permettre le traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // En cas de succès de l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification de la base de données terminée.</li>';
  };
  // En  cas d'échec de l'ouverture de la transaction
  transaction.onerror = function(event) {
    note.innerHTML += '<li>L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.</li>';
  };

  // Ouvrir l'accès au un magasin "toDoList" de la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Ajouter un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // Signaler l'ajout de l'enregistrement
    note.innerHTML += '<li>Enregistrement ajouté.</li>';
  };
 };

```

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                    | État                         | Commentaires |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#transaction', 'IDBTransaction')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.error")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
