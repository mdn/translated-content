---
title: IDBObjectStore.getKey()
slug: Web/API/IDBObjectStore/getKey
---

{{APIRef("IndexedDB")}}

La méthode **`getKey()`** de l'interface {{domxref("IDBObjectStore")}} retourne un objet {{domxref("IDBRequest")}}, et, dans un _thread_ séparé, retourne la clé sélectionnée par la requête spécifiée. Cela permet de retrouver un enregistrement spécifique depuis un espace de stockage déterminé.

Si la clé a bien été retrouvée, alors un clone structuré (une copie conforme) sera créée et servira comme résultat à l'objet de requête.

{{AvailableInWorkers}}

## Syntaxe

```js
let request = objectStore.getKey(key);
```

### Paramètres

- _key_
  - : La clé ou l'intervale de clé qui identifie l'enregistrement à retrouver.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel les événements ultérieurs liés à cette opération sont déclenchés.

### Exceptions

Cette méthode peut provoquer une {{domxref("DOMException")}} de l'un des types suivants :

| Exception                  | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `TransactionInactiveError` | La transaction de ce {{domxref("IDBObjectStore")}} est inactive. |
| `DataError`                | La clé ou la plage de clés fournie contient une clé invalide.    |
| `InvalidStateError`        | Le {{domxref("IDBObjectStore")}} a été supprimé ou retiré.       |

## Exemple

```js
let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) => {
  let db = event.target.result;
  let store = db.transaction("netlogs").objectStore("netlogs");

  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let request = store.getKey(IDBKeyRange(yesterday, today));
  request.onsuccess = (event) => {
    let when = event.target.result;
    alert("La 1ère activité des dernières 24 heures s'est produite à " + when);
  };
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Transactions de départ : {{domxref("IDBDatabase")}}
- Utilisation des transactions : {{domxref("IDBTransaction")}}
- Réglage d'une fourchette de clés : {{domxref("IDBKeyRange")}}
- Récupération et modification de vos données : {{domxref("IDBObjectStore")}}
- Utilisation des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence : [Notifications des tâches](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple en direct](https://mdn.github.io/dom-examples/to-do-notifications/).)
