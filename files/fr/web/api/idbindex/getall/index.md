---
title: IDBIndex.getAll()
slug: Web/API/IDBIndex/getAll
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBIndex/getAll
---
{{ APIRef("IndexedDB") }}

La méthode **`getAll()`** de l'interface {{domxref("IDBIndex")}} fait une requête ({{domxref("IDBRequest")}}) qui renvoie un tableau ordonné suivant les clés, des clones structurés des enregistrements de l'index relié ({{domxref("IDBIndex")}}). On peut limiter le nombre d'enregistrements en les filtrant suivant leurs clés ou en paramétrant le compteur.

On peut comparer cette méthode avec une recherche par curseur. Effectivement, il est plus intéressant si l'on veut accéder aux enregistrements un par un d'utiliser un {{domxref("IDBCursor","curseur")}}, les clones structurés des valeurs seront faits un par un. Mais si l'on veut un tableau des clones structurés des valeurs il vaut mieux utiliser `getAll()`, le moteur Gecko fera les clones structurés en une seule fois.

## Syntaxe

    var getAllKeysRequest = IDBIndex.getAll();
    var getAllKeysRequest = IDBIndex.getAll(query);
    var getAllKeysRequest = IDBIndex.getAll(query, count);

### Paramètres

- query {{optional_inline}}
  - : Une clé ou un intervalle de clé ({{domxref("IDBKeyRange")}}) **pour filtrer**, seules les valeurs des enregistrements correspondant sont renvoyées. Par défaut toutes les clones structurés des enregistrements de l'index relié sont renvoyés.
- count {{optional_inline}}
  - : Le nombre d'enregistrement **maximum renvoyés**. Un nombre décimal sera tronqué. Zéro annule le compteur et toutes les valeurs sont retournées.

### Valeur de retour

- {{domxref("IDBRequest")}}
  - : La propriété {{domxref("IDBRequest.result","result")}} de cette requête renvoie le tableau des clones structurés des enregistrements en cas de succès.

### Exceptions

- `TransactionInactiveError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la transaction ({{domxref("IDBTransaction")}}) est inactive.
- `DataError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si la clé ou l'intervalle de clé ({{domxref("IDBKeyRange")}}) est invalide.
- `InvalidStateError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si l'index à été supprimé.
- `TypeError`
  - : Cette exception ({{domxref("DOMException")}}) est levée si le compteur n'est pas un nombre positif.

## Exemples

```js
//on récupère l’accès à l'index
var myIndex = objectStore.index('index');
//on fait une requête de recherche sur l'index
var getAllKeyRequest = myIndex.getAllKeys();
//si la requête réussi
getAllKeysRequest.onsuccess = function() {
  //on affiche le résultat sur la console
  //~= [{key:'a',value:un_clone_structuré},{key:'2',value:un_clone_structuré},...]
  console.log(getAllKeysRequest.result);
}
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('IndexedDB2', '#dom-idbindex-getall', 'getAll()')}} | {{Spec2('IndexedDB')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IDBIndex.getAll")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
