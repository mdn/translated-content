---
title: IDBIndex.get()
slug: Web/API/IDBIndex/get
---

{{ APIRef("IndexedDB") }}

La méthode **`get()`** de l'interface {{domxref("IDBIndex")}} fait une requête ({{domxref("IDBRequest")}}) pour renvoyer le premier enregistrement correspondant à la clé ou l'intervalle de clé {{domxref("IDBKeyRange","")}} du magasin d'objet suivant l'index.

{{AvailableInWorkers}}

## Syntaxe

```js
var request = myIndex.get(key);
```

## Paramètre

- `key`
  - : la clé ou l'intervalle de clé ({{domxref("IDBKeyRange")}}) de l'enregistrement dont on cherche la valeur.

## Valeur de retour

- Une requête ({{domxref("IDBRequest")}})
  - : La propriété "result" ({{domxref("IDBRequest.result")}}) de cette requête renvoie en cas de succès le premier enregistrement correspondant à la clé ou à l'intervalle de clé. Le résultat contient l'enregistrement { key: la clé, value: un_clone_structuré_de_la_valeur }.

## Exceptions

- `TransactionInactiveError`
  - : Cette exception ( {{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) dont dépend l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet de cet index est inactive.
- `DataError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si la clé ou l'intervalle de clé ({{domxref("IDBKeyRange")}}) est invalide.
- `InvalidStateError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si l'index à été supprimé.

## Exemple

Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

Le code `myIndex.get('Bungle')` renvoie une requête qui cherche sur l'index un enregistrement dont la clé `lName` est `Bungle`. En cas de sucés le résultat de la requête qui contient l'enregistrement est affiché sur la console.

Finalement, on itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";

  //ouvre un transaction
  var transaction = db.transaction(["contactsList"], "readonly");
  //accés au magasin d'objet
  var objectStore = transaction.objectStore("contactsList");

  //on récupère l'index
  var myIndex = objectStore.index("lName");
  //requête de recherche
  var getRequest = myIndex.get("Bungle");
  //en cas de succès
  getRequest.onsuccess = function () {
    console.log(getRequest.result);
  };

  //un curseur qui itère sur l'index
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
      console.log("Tous les enregistrements ont été affichés.");
    }
  };
}
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
