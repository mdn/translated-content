---
title: IDBIndex.locale
slug: Web/API/IDBIndex/locale
---

{{APIRef("IndexedDB")}}{{SeeCompatTable}}

La propriété en lecture seule **`locale`**, rattachée à l'interface [`IDBIndex`](/fr/docs/Web/API/IDBIndex), fournit la locale de l'index (par exemple `en-US`, ou `pl`) si une valeur `locale` a été fournie lors sa création (voir [le paramètre d'options pour `createIndex()`](/fr/docs/Web/API/IDBObjectStore/createIndex#parametresindexoptionnel)). On notera que cette propriété renvoie toujours la locale courante utilisée par l'index. Autrement dit, elle ne renvoie jamais `"auto"`.

## Valeur

Une chaîne de caractères.

## Exemples

Dans l'exemple qui suit, on ouvre une transaction et un magasin d'objets puis on récupère l'index `lName` d'une base de données de contacts. On utilise ensuite un curseur sur l'index en utilisant [`IDBIndex.openCursor`](/fr/docs/Web/API/IDBIndex/openCursor), ce qui est similaire à l'ouverture d'un curseur directement sur un objet `ObjectStore` avec [`IDBObjectStore.openCursor`](/fr/docs/Web/API/IDBObjectStore/openCursor), mais qui permet de trier les enregistrements renvoyés selon l'index et pas selon la clé primaire.

La valeur `locale` est affichée dans la console.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";
  const transaction = db.transaction(["contactsList"], "readonly");
  const objectStore = transaction.objectStore("contactsList");

  const monIndex = objectStore.index("lName");
  console.log(monIndex.locale);

  monIndex.openCursor().onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      const tableRow = document.createElement("tr");
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
      console.log("Tous les résultats ont été affichés.");
    }
  };
}
```

## Spécifications

Cette propriété ne fait partie d'aucune spécification.

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
