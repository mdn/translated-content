---
title: IDBIndex.unique
slug: Web/API/IDBIndex/unique
---

{{APIRef("IndexedDB")}}

La propriété **`unique`**, rattachée à l'interface `IDBIndex`, est un booléen qui indique si l'index utilisé permet d'avoir des clés dupliquées.

Cette caractéristique est décidée lors de la création de l'index, avec la méthode {{domxref("IDBObjectStore.createIndex")}}. Cette méthode prend un paramètre optionnel, `unique`, qui, s'il vaut `true`, indique que l'index ne permettra pas d'avoir de clés dupliquées.

{{AvailableInWorkers}}

## Syntaxe

```js
var myIndex = objectStore.index("index");
```

### Valeur

Un booléen qui vaut `true` si l'index permet d'avoir des valeurs dupliquées pour une même clé ou `false` s'il n'est pas possible d'avoir de clés dupliquées.

## Exemples

Dans l'exemple suivant, on ouvre une transaction en lecture sur un magasin d'objets puis on récupère l'index `lName`. On ouvre alors un curseur sur l'index grâce à {{domxref("IDBIndex.openCursor")}} (cela fonctionne de façon analogue à l'ouverture d'un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} sauf qu'ici, les enregistrements sont triés selon l'index et pas selon la clé primaire.

On affiche le caractère unique des clé dans la console (ici, on voit que la propriété vaut `false`).

Enfin, on parcourt chaque enregistrement et on insère les données dans le tableau HTML (pour voir un exemple complet, consulter [notre dépôt IDBIndex-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([voir la démonstration _live_](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  var transaction = db.transaction(["contactsList"], "readonly");
  var objectStore = transaction.objectStore("contactsList");

  var myIndex = objectStore.index("lName");
  console.log(myIndex.unique);

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
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
