---
title: IDBIndex.openCursor()
slug: Web/API/IDBIndex/openCursor
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
  - openCursor
translation_of: Web/API/IDBIndex/openCursor
---
{{APIRef("IndexedDB")}}

La méthode **`openCursor()`** de l'interface {{domxref("IDBIndex")}} renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, crée [un curseur](/fr/docs/Web/API/IDBCursor) sur l'intervalle de clé fourni en argument.

La méthode la positionne le curseur de façon approprié, selon la direction indiquée :

- Si aucun intervalle de clé n'est spécifié ou qu'il vaut {{jsxref("null")}}, l'intervalle résultant contiendra l'ensemble des enregistrements
- L'évènement `success` est toujours déclenché :

  - Si un enregistrement est trouvé la propriété `result` de l'évènement contient le nouvel objet {{domxref("IDBCursor")}} et la valeur (`value`) de ce curseur est un clône de la valeur référencée
  - Si aucun enregistrement n'est trouvé la propriété `result` de l'évènement vaudra `null`.

{{AvailableInWorkers}}

## Syntaxe

    var request = myIndex.openCursor(keyRange,direction);

### Paramètres

- `keyRange` {{optional_inline}}
  - : L'intervalle de clé ({{domxref("IDBKeyRange")}}) sur lequel se déplace le curseur. Si aucun argument n'est passé, la valeur par défaut sera un intervalle qui englobe tous les enregistrements du magasin d'objets.
- `direction` {{optional_inline}}
  - : La direction dans laquelle se déplace le curseur (la propriété `direction` de l'objet {{domxref("IDBCursor.direction")}}). La valeur par défaut est `"next"`.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel les évènements associés à l'opération seront déclenchés.

### Exceptions

Cette méthode peut déclencher une {{domxref("DOMException")}} dont le type peut être l'un des suivant :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Type d'exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TransactionInactiveError</td>
      <td>La transaction pour cet index est inactive.</td>
    </tr>
    <tr>
      <td><code>TypeError</code></td>
      <td>La valeur du paramètre pour la direction est invalide.</td>
    </tr>
    <tr>
      <td>DataError</td>
      <td>
        <p>La clé ou l'intervalle de clé fourni contient une clé invalide.</p>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>L'index a été supprimé ou déplacé.</td>
    </tr>
  </tbody>
</table>

## Exemple

Dans l'exemple suivant, on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

Ensuite, on parcourt les enregistrements pour insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';

  //ouvre un transaction
  var transaction = db.transaction(['contactsList'], 'readonly');
  //accés au magasin d'objet
  var objectStore = transaction.objectStore('contactsList');

  //on récupère l'index
  var myIndex = objectStore.index('lName');

  //un curseur qui itère sur l'index
  var request = myIndex.openCursor();
  request.onsuccess = function(event) {
    var cursor = request.result;
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

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                                                                    | État                         | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBIndex-openCursor-IDBRequest-any-range-IDBCursorDirection-direction', 'openCursor()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.openCursor")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
