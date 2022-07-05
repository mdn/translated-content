---
title: IDBIndex.openKeyCursor()
slug: Web/API/IDBIndex/openKeyCursor
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
  - openKeyCursor
translation_of: Web/API/IDBIndex/openKeyCursor
---
{{APIRef("IndexedDB")}}

La méthode **`openKeyCursor()`** de {{domxref("IDBIndex")}} renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, crée un curseur sur l'intervalle de clé passé en argument pour l'index courant.

Cette méthode positionne le curseur sur la clé appropriée, dans la direction indiquée :

- si l'intervalle de clé n'est pas défini ou s'il est nul, l'intervalle englobera l'ensemble des clés
- si au moins une clé correspond à l'intervalle de clés, un évènement `success` est déclenché pour la requête qui est renvoyée. La propriété `result` de cet évènement contiendra un objet {{domxref("IDBCursor")}} dont la propriété `value` correspond à l'enregistrement qui a été traduit.
- Si aucun intervalle ne correspond à l'intervalle indiqué, un évènement `error` est déclenché pour la requête.

{{AvailableInWorkers}}

## Syntaxe

    var monIndex = objectStore.index("index");
    var request = monIndex.openKeyCursor(keyRange,direction);

### Paramètres

- `keyRange` {{optional_inline}}
  - : L'{{domxref("IDBKeyRange","intervalle de clé")}} sur lequel se déplace le curseur. On peut passer un clé seule qui sera alors considéré comme une {{domxref("IDBKeyRange.only","intervalle seule")}}. Par défaut le curseur se déplace sur l'ensemble des clés de l'index.
- `direction` {{optional_inline}}
  - : La {{domxref("IDBCursor.direction","direction")}} du {{domxref("IDBCursor","curseur")}} qui défini le sens d'itération. par défaut "next".

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel on peut écouter les évènements associés à l'opération lancée par la méthode.

### Exceptions

Cette méthode peut lever une exception :

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
      <td>
        La transaction pour cet index {{domxref("IDBIndex")}} est
        inactive.
      </td>
    </tr>
    <tr>
      <td><code>TypeError</code></td>
      <td>La valeur du paramètre pour la direction est invalide.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>La clé ou l'intervalle de clé fourni contient une clé invalide.</p>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        L'index {{domxref("IDBIndex")}} a été supprimé ou déplacé.
      </td>
    </tr>
  </tbody>
</table>

## Exemple

Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

Ensuite, on itère sur l'ensemble des enregistrements pour en insérer leur clé dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openKeyCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openKeyCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

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


      // cursor.key la clé de l'enregistrement à la position du curseur
      // il n'y as pas de cursor.value contrairement à openCursor()

      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '<td>' + cursor.key + '</td>'
      tableEntry.appendChild(tableRow);

      //on relance la requête pour la position suivante du curseur
      cursor.continue();
    } else {
      console.log('Toutes les clé ont été affichés.');
    }
  };
};
```

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                                                                            | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBIndex-openKeyCursor-IDBRequest-any-range-IDBCursorDirection-direction', 'openKeyCursor()')}} | {{Spec2('IndexedDB')}} |              |

## Browser compatibility

{{Compat("api.IDBIndex.openKeyCursor")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
