---
title: IDBObjectStore.indexNames
slug: Web/API/IDBObjectStore/indexNames
---

{{APIRef("IndexedDB")}}

La propriété **`indexNames`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie la liste des noms des index pour les objets du magasin d'objets courant.

{{AvailableInWorkers}}

## Syntaxe

```js
var myindexNames = objectStore.indexNames;
```

### Valeur

Une liste {{domxref("DOMStringList")}}.

## Exemples

Dans l'exemple suivant, on initialise une transaction de lecture/écriture sur une base de données en ajoutant des données dans un magasin d'objets via la méthode `add()`. Une fois l'objet créé, on affiche `objectStore.indexNames` en sortie de la console. Pour un exemple complet et fonctionnel, vous pouvez utiliser notre application [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([tester la démo](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// On commence par ouvrir la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Base de données initialisée.</li>';

  // On enregistre le résultat de l'ouverture
  // dans la variable db afin de l'utiliser
  // ensuite
  db = this.result;

  // On exécute la fonction addData() afin
  // d'ajouter des données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet prêt à être inséré
  // dans la base de données
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // vers la base de données afin d'ajouter des
  // données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification finie.</li>';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction non-ouverte à cause d'une erreur. Les doublons ne sont pas autorisés.</li>';
  };

  // On crée un magasin d'objet pour la transaction
  // et on affiche indexNames dans la console
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.indexNames);

  // On ajoute l'objet newItem au magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'ajout de l'objet
    // dans la base de données
    note.innerHTML += '<li>Un nouvel élément a été ajouté dans la base de données.</li>';
  };
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
