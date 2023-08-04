---
title: IDBIndex.getAllKeys()
slug: Web/API/IDBIndex/getAllKeys
---

{{APIRef("IndexedDB")}}

La méthode **`getAllKeys()`**, rattachée à l'interface {{domxref("IDBIndex")}}, permet de récupérer les clés de tous les objets contenus dans l'index et de les enregistrer dans la propriété `result` de l'objet renvoyé par la méthode.

## Syntaxe

```js
var getAllKeysRequest = IDBIndex.getAllKeys();
var getAllKeysRequest = IDBIndex.getAllKeys(requete);
var getAllKeysRequest = IDBIndex.getAllKeys(requete, quantite);
```

### Paramètres

- `requete` {{optional_inline}}
  - : Une clé ou un intervalle de clé ({{domxref("IDBKeyRange")}}) qui identifie les clés qu'on souhaite récupérer. Si cette valeur vaut {{jsxref("null")}} ou est absente, le navigateur utilisera un intervalle de clé sans limite.
- `quantite` {{optional_inline}}
  - : Le nombre d'enregistrements qu'on souhaite obtenir. Si cette quantité est supérieure au nombre d'enregistrements récupérés par la requête, le navigateur ne récupèrera que le premier élément. Si elle est négative ou supérieure à `2^32-1`, une exception {{jsxref("TypeError")}} sera levée.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel seront reçus les différents évènements rattachés à cette opération.

### Exceptions

Cette méthode peut déclencher une des exceptions suivantes :

| Exception                  | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `TransactionInactiveError` | La transaction pour cet index {{domxref("IDBIndex")}} est inactive. |
| `InvalidStateError`        | L'index {{domxref("IDBIndex")}} a été supprimé ou déplacé.          |
| {{jsxref("TypeError")}}    | Le paramètre `quantite` n'est pas compris entre `0` et `2^32-1`     |

## Exemples

```js
var myIndex = objectStore.index("index");
var getAllKeyRequest = myIndex.getAllKeys();
getAllKeysRequest.onsuccess = function () {
  console.log(getAllKeysRequest.result);
};
```

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
