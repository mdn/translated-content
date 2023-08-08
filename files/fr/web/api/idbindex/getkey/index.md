---
title: IDBIndex.getKey()
slug: Web/API/IDBIndex/getKey
---

{{APIRef("IndexedDB")}}

La méthode **`getKey()`**, rattachée à l'interface {{domxref("IDBIndex")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, récupère la clé associée ou la clé primaire si l'argument passé à la fonction est un intervalle {{domxref("IDBKeyRange")}}.

Si la méthode trouve une clé, ce sera alors la propriété `result` de la requête renvoyée. Seule la clé primaire de l'enregistrement est renvoyée (pour obtenir l'ensemble de l'enregistrement, on utilisera {{domxref("IDBIndex.get")}}).

{{AvailableInWorkers}}

## Syntaxe

```js
var myIndex = objectStore.index("index");
var request = myIndex.getKey(key);
```

### Paramètres

- `key` {{optional_inline}}
  - : Une clé ou un intervalle {{domxref("IDBKeyRange")}} qui identifie l'enregistrement dont on souhaite obtenir la clé. Si la valeur vaut {{jsxref("null")}} ou si elle est absente, le navigateur utilisera un intervalle de clé sans limite.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} qui recevra les différents évènements relatifs à l'opération qui est déclenchée.

### Exceptions

Cette méthode peut déclencher une exception. Celle-ci peut avoir l'un des types suivants :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TransactionInactiveError</td>
      <td>
        La transaction rattachée à cet <code>IDBIndex</code> est inactive.
      </td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>
          La clé ou l'intervalle de clés qui est fourni contient une clé
          invalide.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>L'index a été supprimé ou déplacé.</td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple qui suit, on ouvre une transaction et un magasin d'objets. Ensuite on récupère l'index `lName` sur cette base de donnée. On ouvre alors un curseur sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (cela fonctionne de la même façon que {{domxref("IDBObjectStore.openCursor")}} sauf que les enregistrements sont triés selon l'index et pas selon la clé primaire).

`myIndex.getKey('Bungle')` est ensuite utilisé afin d'obtenir la clé primaire de l'enregistrement pour lequel `lName` vaut `Bungle`. Le résultat de cette requête est imprimé dans la console lorsque la fonction de rappel (_callback_) de succès est déclenché.

Enfin, on parcourt les enregistrements pour remplir un tableau HTML. Le dépôt [`indexeddb-examples`](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples) contient un exemple complet ([voir l'exemple en direct](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  var transaction = db.transaction(["contactsList"], "readonly");
  var objectStore = transaction.objectStore("contactsList");
  var myIndex = objectStore.index("lName");
  var getKeyRequest = myIndex.getKey("Bungle");
  getKeyRequest.onsuccess = function () {
    console.log(getKeyRequest.result);
  };

  myIndex.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var tableRow = document.createElement("tr");
      tableRow.innerHTML =
        "<td>" +
        cursor.value.id +
        "</td>" +
        "<td>" +
        cursor.value.lName +
        "</td>" +
        "<td>" +
        cursor.value.fName +
        "</td>" +
        "<td>" +
        cursor.value.jTitle +
        "</td>" +
        "<td>" +
        cursor.value.company +
        "</td>" +
        "<td>" +
        cursor.value.eMail +
        "</td>" +
        "<td>" +
        cursor.value.phone +
        "</td>" +
        "<td>" +
        cursor.value.age +
        "</td>";
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log("Les éléments sont affichés.");
    }
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
