---
title: IDBTransaction.objectStore()
slug: Web/API/IDBTransaction/objectStore
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBTransaction/objectStore
---
{{APIRef("IndexedDB")}}

La méthode **`objectStore()`**, rattachée à l'interface {{domxref("IDBTransaction")}}, renvoie l'accès à un des magasins d'objets liés à la transation sous la forme d'un objet {{domxref("IDBObjectStore")}}.

Si cette méthode est appelée plusieurs fois sur la même transaction et avec le même nom de magasin, elle renverra la même instance de  {{domxref("IDBObjectStore")}}. Si cette méthode est appelée sur une autre transaction, elle renverra une instance différente.

{{AvailableInWorkers}}

## Syntaxe

```js
var objectStore = transaction.objectStore(nom);
```

### Paramètres

- `nom`
  - : Le nom du magasin d'objets auquel on veut accéder.

### Valeur de retour

Un objet {{domxref("IDBObjectStore")}} qui permet d'accéder au magasin d'objets.

## Exceptions

- `NotFoundError`
  - : Cette exception {{domxref("DOMException")}} est levée si le magasin d'objets demandé n'a pas été trouvé sur la transaction.
- `InvalidStateError`
  - : Cette exception {{domxref("DOMException")}} est levée si la transaction est terminée ou si la demande a été faite sur un objet source qui a été supprimé ou retiré.

## Exemple

Dans le code qui suit, on ouvre une connexion à la base de données. Sur cette connexion, on démarre une transaction (cf.  {{domxref("IDBTransaction")}}) en lecture/écriture afin d'accéder au magasin d'objets `"toDoList"` pour y ajouter un enregistrement (via la méthode {{domxref("IDBObjectStore.add")}}). On notera également l'utilisation des gestionnaires d'événement {{domxref("IDBTransaction.oncomplete")}} et {{domxref("IDBTransaction.onerror")}} de la transaction qui permettent d'afficher la résultat de la transaction sur la page.

La méthode **`objectStore()`** permet d'accéder au magasin d'objets `"toDoList"`.

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Connexion établie.</li>';

  // On affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // On exécute la fonction addData() pour
  // ajouter des données dans la base
  addData();
};

function addData() {
  // Un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // pour le traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On utilise oncomplete en cas de succès de
  // l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification de la base de données OK.</li>';
  };

  // En cas d'échec de l'ouverture, on utilisera
  // le gestionnaire onerror
  transaction.onerror = function(event) {
    note.innerHTML += '<li>L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.</li>';
  };

  // On ouvre un magasin d'objets sur la transaction
  // grâce à la méthode objectStore
  var objectStore = transaction.objectStore("toDoList");

  // Enfin, on ajoute un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // et on signale l'ajout de l'enregistrement
    note.innerHTML += '<li>Enregistrement ajouté.</li>';
  };
};
```

> **Note :** Pour un exemple fonctionnel complet, voir notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([l'exemple _live_ est disponible ici](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                                                    | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBTransaction-objectStore-IDBObjectStore-DOMString-name', 'objectStore()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.objectStore")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
