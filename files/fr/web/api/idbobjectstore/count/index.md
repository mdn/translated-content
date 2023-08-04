---
title: IDBObjectStore.count()
slug: Web/API/IDBObjectStore/count
---

{{APIRef("IndexedDB")}}

La méthode **`count()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, renvoie le nombre d'enregistrements qui correspondent à la clé ou à l'intervalle de clé ({{domxref("IDBKeyRange")}}) passé en argument. Si aucun argument n'est fourni, la méthode renvoie le nombre total d'enregistrements contenus dans le magasin d'objets.

{{AvailableInWorkers}}

## Syntaxe

```js
var requete = ObjectStore.count(optionalKeyRange);
```

### Paramètres

- `optionalKeyRange`
  - : Une clé ou un intervalle de clé ({{domxref("IDBKeyRange")}}) qui indique le critère de comptage des enregistrements.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les différents évènements relatifs à l'opération.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant un des types suivants :

| Exception                  | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| `InvalidStateError`        | L'objet {{domxref("IDBObjectStore")}} a été supprimé.                         |
| `TransactionInactiveError` | La transaction associée à l'objet {{domxref("IDBObjectStore")}} est inactive. |
| `DataError`                | La clé ou l'intervalle de clé passé en argument est invalide.                 |

## Exemples

Dans ce fragment de code, on crée une transaction, on récupère un magasin d'objets puis on compte le nombre d'enregistrements contenus dans ce magasin grâce à la méthode `count()`. Lorsque l'évènement associé au succès de l'opération est déclenché, on inscrit le résultat dans la console.

```js
var transaction = db.transaction(["fThings"], "readonly");
var objectStore = transaction.objectStore("fThings");

var countRequest = objectStore.count();
countRequest.onsuccess = function () {
  console.log(countRequest.result);
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
