---
title: IDBTransaction.mode
slug: Web/API/IDBTransaction/mode
tags:
  - API
  - IDBTransaction
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/mode
---
{{APIRef("IndexedDB")}}

La propriété **`mode`** de l'interface {{domxref("IDBTransaction")}} renvoie le mode d'accès aux données des magasins d'objet pendant la transaction (autrement dit, s'agit-il d'une transaction en lecture seule ou d'un accès en écriture ?). La valeur par défaut est `readonly`.

{{AvailableInWorkers}}

## Syntaxe

    var modeCourant = IDBTransaction.mode;

### Valeur

Un objet {{domxref("IDBTransactionMode")}} qui définit le mode d'accès aux données des magasins d'objet :

| Valeur          | Signification                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `readonly`      | Lecture seule : on peut lire (consulter) les données mais on ne peut pas les modifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `readwrite`     | Lecture et écriture : on peut lire et écrire (modifier) des données dans les magasins d'objet.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `versionchange` | Toutes les opérations peuvent être effectuées, y compris celles qui suppriment ou créent des magasins d'objets et des index. Ce mode doit être utilisé lorsqu'on souhaite mettre à jour le numéro de version pour les transactions qui démarrent avec {{domxref("IDBDatabase.setVersion()")}}. Les transactions effectuées dans ce mode ne peuvent pas être exécutées de façon concurrente avec les autres transactions. Les transactions effectuées dans ce mode sont parfois appelées transactions de mise à jour (_upgrade transactions_). |

## Exemples

Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture sur la base de données et on ajoute des données au magasin d'objets. On notera que les fonctions attachées aux gestionnaires d'évènement de la transaction permettent de rapporter des informations en cas de succès ou d'échec de la transaction. Enfin, on affiche le mode de la transaction dans la console grâce à la propriété `mode`. Pour un exemple complet, se référer à l'[exemple d'application To-do](https://github.com/mdn/to-do-notifications/) (cf. [la démonstration](https://mdn.github.io/to-do-notifications/)).

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Initialisation de la base de données.</li>';

  // On enregistre le résultat de l'ouverture dans la variable
  // db utilisée ensuite.
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter des données
  // dans la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet prêt à être inséré dans la base
  // de données
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture afin d'ajouter
  // des données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère le succès ou l'échec de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modifications appliquées.</li>';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction non-ouverte à cause d'une erreur (duplication d'objet interdite).</li>';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute l'objet newItem dans le magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'opération pour ajouter
    // l'objet dans la base de données
    note.innerHTML += '<li>Nouvel objet ajouté à la base de données.</li>';
  };

  // On renvoie le mode de la transaction qui était ouverte
  // (ce devrait être "readwrite")
  transaction.mode;
};
```

## Spécification

| Spécification                                                                        | État                         | Commentaires |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBTransaction-mode', 'mode')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.mode")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
