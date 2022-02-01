---
title: IDBIndex.name
slug: Web/API/IDBIndex/name
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBIndex/name
---
{{APIRef("IndexedDB")}}

La propriété **`name`**, rattachée à l'interface {{domxref("IDBIndex")}}, contient une chaîne de caractères qui permet de désigner l'index courant.

{{AvailableInWorkers}}

## Syntaxe

    var indexName = IDBIndex.name;
    IDBIndex.name = indexName;

### Valeur

Une chaîne de caractères qui fournit le nom à l'index.

### Exceptions

Différentes exceptions peuvent être déclenchées lorsqu'on souhaite modifier le nom d'un index.

- `InvalidStateError`
  - : L'index ou le magasin d'objets a été supprimé ou la transaction courante n'est pas une transaction de montée de niveau. Le renommage des index est uniquement possible lors des transactions de montée de niveau (c'est-à-dire quand le mode de la transaction est `"versionchange"`).
- `TransactionInactiveError`
  - : La transaction courante n'est pas active.
- `ConstraintError`
  - : Il existe déjà un index avec ce nom.

## Exemples

Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objets pour lequel on récupère l'index `lName`. Ensuite, on ouvre un curseur sur cet index avec la méthode {{domxref("IDBIndex.openCursor()")}} (celle-ci fonctionne comme la méthode {{domxref("IDBObjectStore.openCursor", "openCursor()")}} qui s'utilise sur les magasins d'objets mais ici, les enregistrements sont triés selon l'index et pas selon la clé primaire).

Le nom de l'index est affiché dans la console grâce à la propriété (ici, le nom sera `"lName"`).

Enfin, on parcourt chacun des enregistrements et on ajoute les données dans un tableau HTML.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.name);

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
      console.log('Les éléments sont affichés.');
    }
  };
};
```

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                | État                         | Commentaires |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBIndex-name', 'name')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.name")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
