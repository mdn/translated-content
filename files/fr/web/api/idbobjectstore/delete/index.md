---
title: IDBObjectStore.delete()
slug: Web/API/IDBObjectStore/delete
---

{{APIRef("IndexedDB")}}

La méthode **`delete()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, supprime le ou les enregistrements concernés.

Cette méthode prend une clé ou un objet {{domxref("IDBKeyRange")}} en argument ce qui permet de supprimer un ou plusieurs enregistrements. Si on souhaite supprimer l'ensemble des enregistrements d'un magasin de données, on utilisera plutôt la méthode {{domxref("IDBObjectStore.clear")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
var request = objectStore.delete(keyOrKeyRange);
```

### Paramètres

- `keyOrKeyRange`
  - : La clé de l'enregistrement qu'on souhaite supprimer ou un objet {{domxref("IDBKeyRange")}} qui indique l'intervalle de clés à supprimer.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} qui recevra les évènements relatifs à cette opération. `request.result` vaut {{jsxref("undefined")}}.

### Exceptions

Cette méthode peut lever une des exceptions suivantes :

| Exception                  | Description                                                                                                              |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `TransactionInactiveError` | La transaction associée au curseur `IDBCursor` est inactive.                                                             |
| `ReadOnlyError`            | La transaction est uniquement en lecture seule.                                                                          |
| `InvalidStateError`        | Le curseur créé avec {{domxref("IDBindex.openKeyCursor")}}, est en train d'être parcouru ou a été parcouru après sa fin. |
| `DataError`                | La clé ou l'intervalle de clés n'est pas valide.                                                                         |

## Exemples

Dans l'exemple qui suit, on ouvre une transaction en lecture/écriture et on supprime un enregistrement donné grâce à `delete()`. Pour un exemple complet, voir l'application [Notifications To-do](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([démonstration](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// On ouvre l'accès à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Initialisation de la base</li>";

  // On enregistre le résultat de l'ouverture
  // dans la variable db.
  var db = DBOpenRequest.result;

  // On utilise deleteData() pour supprimer
  // un enregistrement
  deleteData();
};

function deleteData() {
  // On ouvre une transaction en lecture/écriture
  // afin de supprimer la donnée
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès de la transaction
  transaction.oncomplete = function (event) {
    note.innerHTML +=
      "<li>Transaction terminée : modification de la base terminée.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction interrompue suite à l'erreur : " +
      transaction.error +
      "</li>";
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On supprime l'enregistrement du magasin
  var objectStoreRequest = objectStore.delete("Walk dog");

  objectStoreRequest.onsuccess = function (event) {
    // On indique le succès de l'opération
    note.innerHTML += "<li>Enregistremnt supprimé.</li>";
  };
}
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
- L'exemple de référence : [notifications de trucs à faire](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir la démonstration](https://mdn.github.io/dom-examples/to-do-notifications/))
