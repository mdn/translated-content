---
title: IDBObjectStore.name
slug: Web/API/IDBObjectStore/name
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBObjectStore/name
---
{{APIRef("IndexedDB")}}

La propriété **`name`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, indique le nom du magasin d'objets courant.

{{AvailableInWorkers}}

## Syntaxe

    var nomDuMagasin = IDBObjectStore.name;
    IDBObjectStore.name = nouveauNom;

### Valeur

Une chaîne de caractères qui contient le nom du magasin d'objet.

### Exceptions

Plusieurs exceptions peuvent être levées lorsqu'on tente de modifier le nom d'un magasin d'objets.

- `InvalidStateError`
  - : Le magasin d'objets a été supprimé ou la transaction courante n'est pas une transaction de mise à jour : il est uniquemnet possible d'opérer un renommage lorsque le mode de la transaction est `"versionchange"`.
- `TransactionInactiveError`
  - : La transaction actuelle est inactive.
- `ConstraintError`
  - : Un magasin d'objets utilise déjà le nom qu'on souhaite employer.

## Exemples

Dans le fragment de code qui suit, on ouvre une transaction en lecture/écriture pour la base de données et on ajoute des données au magasin d'objets grâce à la méthode `add()`. Une fois que le magasin d'objets a été créé, on inscrit la valeur de `objectStore.name` dans la console. Pour un exemple complet, voir notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) (cf. également [la démonstration _live_](https://mdn.github.io/to-do-notifications/)).

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Initialisation de la base de données</li>';

  // On enregistre le résultat de l'ouverture dans la variable
  // db afin de l'utiliser ensuite.
  db = DBOpenRequest.result;

  // On exécute la fonction addData() afin d'ajouter des
  // données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet pour l'insérer dans la base
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter les données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère le cas où la transaction est effectuée correctement
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification appliquée.</li>';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction non ouverte. Les doublons sont interdits.</li>';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.name);

  // On ajoute l'objet newItem dans le magasin d'objet
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On rapporte la réussite de l'ajout de l'objet en base
    note.innerHTML += '<li>Nouvel élément ajouté dans la base de données.</li>';
  };
};
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBObjectStore-name', 'name')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.name")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
