---
title: IDBIndex.keyPath
slug: Web/API/IDBIndex/keyPath
---

{{ APIRef("IndexedDB") }}

La propriété **`keyPath`** de l'interface {{domxref("IDBIndex")}} renvoie le [chemin de clé](/fr/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath) de l'index. Si l'index n'est pas [automatiquement mise à jour](/fr/IndexedDB/Index#gloss_auto-populated) la propriété vaux `null`.

{{AvailableInWorkers}}

## Syntaxe

```js
var keyPath = myIndex.keyPath;
```

## Valeur

Tous types de valeur pouvant être utilisés comme chemin de clé.

## Exemple

Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

Le chemin de clé de l'index est affiché sur la console (ici: `lName`).

Finalement, On itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";

  //ouvre un transaction
  var transaction = db.transaction(["contactsList"], "readonly");
  //accés au magasin d'objet
  var objectStore = transaction.objectStore("contactsList");

  //on récupère l'index
  var myIndex = objectStore.index("lName");
  //on affiche le chemin de clé de l'index sur la console
  console.log(myIndex.keyPath);

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
