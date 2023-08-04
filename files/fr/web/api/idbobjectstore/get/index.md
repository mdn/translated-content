---
title: IDBObjectStore.get()
slug: Web/API/IDBObjectStore/get
---

{{APIRef("IndexedDB")}}

La méthode **`get()`**, rattachée à l'interface [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore), renvoie un objet [`IDBRequest`](/fr/docs/Web/API/IDBRequest) et, dans un <i lang="en">thread</i> séparé, renvoie le magasin d'objets sélectionné avec la clé indiqué. Cette méthode est conçue pour récupérer des enregistrements spécifiques d'un magasin d'objets.

Si une valeur est trouvée, un clone structuré est créé et placé comme valeur de l'attribut [`result`](/fr/docs/Web/API/IDBRequest#attr_result) de l'objet qui représente la requête.

> **Note :** Cette méthode produira le même résultat si l'enregistrement n'existe pas dans la base de données ou s'il a une valeur indéfinie. Pour distinguer ces deux cas, on appellera la méthode avec la même clé&nbsp;: elle fournira un curseur si l'enregistrement existe et aucun curseur sinon.

{{AvailableInWorkers}}

## Syntaxe

```js
get(key);
```

### Paramètres

- `key`
  - : La clé ou l'intervalle de clés identifiant l'enregistrement à récupérer.

### Valeur de retour

Un objet [`IDBRequest`](/fr/docs/Web/API/IDBRequest) sur lequel les évènements ultérieurs et liés à cette opération seront déclenchés.

### Exceptions

Cette méthode peut déclencher une exception [`DOMException`](/fr/docs/Web/API/DOMException) avec l'un des types suivants&nbsp;:

- `TransactionInactiveError`
  - : Levée si la transaction sur l'objet [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore) est inactive
- `DataError`
  - : Levée si la clé ou l'intervalle de clés fourni contient une clé invalide.
- `InvalidStateError`
  - : Levée si le magasin d'objets [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore) a été supprimé ou retiré.

## Exemples

Dans le fragment de code qui suit, on ouvre une transaction en lecture/écriture sur la base de données et on récupère un enregistrement particulier du magasin d'objets à l'aide de `get()` (un enregistrement de test dont la clé est "Walk dog"). Une fois l'objet de données récupéré, on pourait le mettre à jour à l'aide de JavaScript, puis le replacer dans la base de données à l'aide de l'opération [`IDBObjectStore.put()`](/fr/docs/Web/API/IDBObjectStore/put). Pour un exemple complet, voir notre application [Notifications d'une liste de tâches](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple qui fonctionne](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// On ouvre la base de données
const DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de données initialisée.</li>";

  // On récupère le résultat de l'ouverture dans la variable db
  // qui sera utilisée ensuite
  db = DBOpenRequest.result;

  // On exécute la fonction getData() afin de récupérer les données
  // de la base
  getData();
};

function getData() {
  // On ouvre une transaction en lecture/écriture
  // pour récupérer des données
  const transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès ou l'échec de l'opération
  transaction.oncomplete = function (event) {
    note.innerHTML += "<li>Transaction terminée.</li>";
  };

  transaction.onerror = function (event) {
    note.innerHTML +=
      "<li>Transaction non ouverte pour cause d'erreur : " +
      transaction.error +
      "</li>";
  };

  // On crée un magasin d'objets sur la transaction
  const objectStore = transaction.objectStore("toDoList");

  // On lance une requête afin d'obtenir un enregistrement
  // à partir de la clé dans le magasin d'objets
  const objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = function (event) {
    // On indique que la requête a réussi
    note.innerHTML += "<li>Requête réussie.</li>";

    const myRecord = objectStoreRequest.result;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Initier des transactions&nbsp;: [`IDBDatabase`](/fr/docs/Web/API/IDBDatabase)
- Utiliser des transactions&nbsp;: [`IDBTransaction`](/fr/docs/Web/API/IDBTransaction)
- Définir un intervalle de clés&nbsp;: [`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange)
- Récupérer et modifier les données&nbsp;: [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore)
- Utiliser les curseurs&nbsp;: [`IDBCursor`](/fr/docs/Web/API/IDBCursor)
- Exemples&nbsp;: [Notifications d'une liste de tâches](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple qui fonctionne](https://mdn.github.io/dom-examples/to-do-notifications/))
