---
title: IDBObjectStore.index()
slug: Web/API/IDBObjectStore/index
---

{{APIRef("IndexedDB")}}

La méthode **`index()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, permet d'ouvrir un index sur le magasin d'objet courant pour, par exemple, renvoyer une liste d'enregistrements triés par cet index grâce à un curseur.

{{AvailableInWorkers}}

## Syntaxe

```js
objectStore.index(nomIndex);
```

### Paramètres

- `nomIndex`
  - : Le nom de l'index qu'on souhaite ouvrir.

### Valeur de retour

Un objet {{domxref("IDBIndex")}} qui permet d'accéder à l'index.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant l'un des types suivants :

| Exception           | Description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | L'objet correspondant au magasin d'objet a été supprimé ou la transaction a été clôturée.           |
| `NotFoundError`     | Il n'existe pas d'index pour ce nom dans la base de données (la recherche est sensible à la casse). |

## Exemples

Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objet et on accède à l'index `lName` de la base de données. Ensuite, on ouvre un curseur sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} — cela fonctionne de la même façon que d'ouvrir un curseur à même le magasin d'objet grâce à {{domxref("IDBObjectStore.openCursor")}} sauf que, cette fois, les enregistrements sont renvoyés triés selon l'index et non selon la clé primaire.

Enfin, on parcourt chaque enregistrement pour l'ajouter dans un tableau HTML.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  var transaction = db.transaction(["contactsList"], "readonly");
  var objectStore = transaction.objectStore("contactsList");

  var myIndex = objectStore.index("lName");
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
      console.log("Éléments affichés.");
    }
  };
}
```

> **Note :** pour un exemple fonctionnel complet, voir notre [exemple sur GitHub](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbindex) ([la démonstration associée](https://mdn.github.io/dom-examples/indexeddb-examples/idbindex/)).

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
