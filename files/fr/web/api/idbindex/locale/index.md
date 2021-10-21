---
title: IDBIndex.locale
slug: Web/API/IDBIndex/locale
translation_of: Web/API/IDBIndex/locale
---
{{APIRef("IndexedDB")}}{{SeeCompatTable}}

La propriété **`locale`** de l'interface {{domxref("IDBIndex")}} renvoie la localisation de l'index (par exemple fr, ou `en-US`) `si la localisation à été spécifie lors de la mise en place de l'index` (voir les paramètres {{domxref("IDBObjectStore.createIndex")}}).

{{note("Cette propriété renvoie la localisation utilisé par l'index. En d'autres termes, elle ne renverras jamais 'auto'.")}}

## Syntaxe

```js
var indexLocalisation = myIndex.locale;
```

## Valeur

Une {{domxref("DOMString","chaîne de caractère")}} représentant la localisation courante de l'index.

## Exemple

Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

La valeur de la propriété `Locale` est affichée sur la console.

Finalement, On itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';

  //ouvre un transaction
  var transaction = db.transaction(['contactsList'], 'readonly');
  //accés au magasin d'objet
  var objectStore = transaction.objectStore('contactsList');

  //on récupère l'index
  var myIndex = objectStore.index('lName');
  //on affiche la propriété locale sur la console
  console.log(myIndex.locale);

  //un curseur qui itère sur l'index
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
      console.log('Tous les enregistrements ont été affichés.');
    }
  };
};
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/)).

## Spécification

Ne fait actuellement partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.locale")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
