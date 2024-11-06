---
title: IDBTransaction.objectStoreNames
slug: Web/API/IDBTransaction/ObjectStoreNames
---

{{APIRef("IndexedDB")}}{{SeeCompatTable}}

La propriété **`objectStoreNames`** de l'interface {{domxref("IDBTransaction")}} renvoie la {{domxref("DOMStringList","liste")}} des noms des magasins d'objets de la {{domxref("IDBTransaction","transaction")}} .

## Syntaxe

```js
var maBaseDeDonnees = transactionObj.objectStoreNames;
```

### Valeur de retour

Une liste {{domxref("DOMStringList")}} contenant les noms des magasins d'objets liés à la transaction ({{domxref("IDBTransaction")}}).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
