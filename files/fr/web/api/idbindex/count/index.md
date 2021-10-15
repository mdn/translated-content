---
title: IDBIndex.count()
slug: Web/API/IDBIndex/count
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBIndex/count
---
{{APIRef("IndexedDB")}}

La méthode **`count()`**, rattachée à l'interface {{domxref("IDBIndex")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, renvoie le nombre d'enregistrements contenu dans un intervalle de clé.

{{AvailableInWorkers}}

## Syntaxe

    var request = monIndex.count();
    var request = monIndex.count(cle);

### Paramètres

- `cle` {{optional_inline}}
  - : La clé ou l'intervalle de clé qui définit les enregistrements qu'on souhaite compter.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les différents évènements relatifs à l'opération.

### Exceptions

Cette méthode peut déclencher différents types d'exceptions :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>La transaction associée à cet index est inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>La clé ou l'intervalle de clé fourni possède une clé invalide.</p>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>L'index a été supprimé ou retiré.</td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple qui suit, on ouvre une transaction et un magasin d'objets puis on récupère l'index `lName` depuis une base de données de contacts. Ensuite, on ouvre un curseur simple sur cet index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (ce qui fonctionne comme si on ouvrait un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} sauf que les enregistrements sont ici triés selon l'index plutôt que selon la clé primaire).

`myIndex.count()` est alors utilisé afin de compter le nombre d'enregistrements dans l'index et le résultat de la requête est affiché dans la console au travers du gestionnaire d'évènements pour la réussite (`onsuccess`).

Efin, on parcourt chaque enregistrement pour l'insérer dans un tableau HTML. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre dépôt [IDBIndex-example](https://github.com/mdn/IDBIndex-example) ([cf. la démonstration _live_](https://mdn.github.io/IDBIndex-example/)).

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  var countRequest = myIndex.count();
  countRequest.onsuccess = function() {
    console.log(countRequest.result);
  }

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
      console.log('Éléments affichés.');
    }
  };
};
```

## Spécifications

| Spécification                                                                                            | État                             | Commentaires |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBIndex-count-IDBRequest-any-key', 'count()')}} | {{Spec2('IndexedDB')}}     |              |
| {{SpecName("IndexedDB 2", "#dom-idbindex-count", "count()")}}                         | {{Spec2("IndexedDB 2")}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.count")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
