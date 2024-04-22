---
title: IDBIndex.multiEntry
slug: Web/API/IDBIndex/multiEntry
---

{{APIRef("IndexedDB")}}

La propriété **`multiEntry`**, rattachée à l'interface {{domxref("IDBIndex")}}, est un booléen qui indique le comportement de l'index lorsque le résultat de l'évaluation d'un chemin de clé renvoie un tableau.

Ce comportement est paramétré au moment où l'index est créé avec la méthode {{domxref("IDBObjectStore.createIndex")}}. Cette méthode permet d'utiliser un paramètre facultatif `options` pour définir la propriété `multiEntry` avec `true`/`false`.

{{AvailableInWorkers}}

## Syntaxe

```js
var monIndex = objectStore.index("index");
console.log(monIndex.multiEntry);
```

### Valeur

Un booléen. S'il vaut `true`, cela signifie qu'il y a autant d'enregistrement que de valeurs dans le tableau renvoyé lors de l'évaluation du chemin (les clés des enregistrements sont les valeurs du tableau). S'il vaut `false`, cela signifie qu'il n'y aura qu'un seul enregistrement ajouté et que la clé sera le tableau.

## Exemples

Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objets et on récupère l'index `lName` depuis la base de données des contacts. Ensuite, on ouvre un curseur simple sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (cela fonctionne comme si on avait directement ouvert un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} mais les enregistrements sont ici renvoyés en étant triés selon l'index et non selon la clé primaire.

La propriété `multiEntry` est affichée dans la console. Dans cet exemple, elle a la valeur `false`.

Enfin, on parcourt chacun des enregistrements pour insérer les données dans un tableau HTML. Pour consulter un exemple complet, vous pouvez vous référer à [notre dépôt IDBIndex-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([voir également la démo _live_](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  var transaction = db.transaction(["contactsList"], "readonly");
  var objectStore = transaction.objectStore("contactsList");

  var myIndex = objectStore.index("lName");
  console.log(myIndex.multiEntry);

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
      console.log("Les éléments ont été affichés.");
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
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
