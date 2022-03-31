---
title: IDBIndex.isAutoLocale
slug: Web/API/IDBIndex/isAutoLocale
tags:
  - API
  - Experimental
  - IDBIndex
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBIndex/isAutoLocale
---
{{APIRef("IndexedDB")}}{{SeeCompatTable}}

La propriété en lecture seule **`isAutoLocale`**, rattachée à l'interface {{domxref("IDBIndex")}}, est un booléen qui indique si la valeur `locale` de l'index vaut `auto` (cf. [les paramètres optionnels de `createIndex()`](/fr/docs/Web/API/IDBObjectStore/createIndex#Paramètres)).

## Syntaxe

    var monIndex = objectStore.index('index');
    console.log(monIndex.isAutoLocale);

### Valeur

Un booléen.

## Exemples

Dans l'exemple suivant, on ouvre une transaction et un magasin d'objet puis on récupère l'index `lName` depuis une base de données de contact. Ensuite, on ouvre un curseur simple sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} — cela fonctionne comme si on avait directement ouvert un curseur sur un magasin d'objet avec {{domxref("IDBObjectStore.openCursor")}} mais ici les enregistrements sont triés selon l'index et pas selon la clé primaire.

La valeur `isAutoLocale` est affichée dans la console.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.isAutoLocale);

  myIndex.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '<td>' + cursor.value.id + '</td>'
                           + '<td>' + cursor.value.lName + '</td>'
                           + '<td>' + cursor.value.fName + '</td>'
                           + '<td>' + cursor.value.jTitle + '</td>'
                           + '<td>' + cursor.value.company + '</td>'
                           + '<td>' + cursor.value.eMail + '</td>'
                           + '<td>' + cursor.value.phone + '</td>'
                           + '<td>' + cursor.value.age + '</td>';
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Les éléments ont été affichés.');
    }
  };
};
```

## Spécifications

Actuellement, cette propriété ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.isAutoLocale")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
