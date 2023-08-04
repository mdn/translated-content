---
title: IDBObjectStore.getAll()
slug: Web/API/IDBObjectStore/getAll
---

{{APIRef("IndexedDB")}}

La méthode **`getAll()`**, rattachée à l'interface [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore), renvoie un objet [`IDBRequest`](/fr/docs/Web/API/IDBRequest) contenant tous les objets du magasin d'objets qui correspondent au paramètre indiqué, ou tous les objets du magasin si aucun paramètre n'a été fourni.

Si une valeur a été trouvée, un clone structuré est créé et fourni comme résultat sur l'objet de la requête.

Cette méthode produit les mêmes résultats pour&nbsp;:

- Un enregistrement qui n'existe pas en base de données
- Un enregistrement qui a une valeur indéfinie

Pour distinguer ces situations, on pourra appeler une de ces deux méthodes&nbsp;:

1. [`openCursor()`](/fr/docs/Web/API/IDBObjectStore/openCursor) en utilisant la même clé. Cette méthode fournira un curseur si l'enregistrement existe et pas de curseur sinon.
2. [`count()`](/fr/docs/Web/API/IDBObjectStore/count) en utilisant la même clé, qui renverra 1 si la ligne existe et 0 sinon.

## Syntaxe

```js
getAll();
getAll(query);
getAll(query, count);
```

### Paramètres

- `query` {{optional_inline}}
  - : Une clé ou un intervalle de clés ([`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange)) pour la requête. Si aucune valeur n'est passée, la valeur par défaut sera un intervalle de clé qui sélectionne tous les enregistrements du magasin d'objets.
- `count` {{optional_inline}}
  - : Indique le nombre de valeurs à renvoyer si plusieurs valeurs sont trouvées. Si cet argument est négatif ou supérieur à `2^32 - 1`, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.

### Valeur de retour

Un objet [`IDBRequest`](/fr/docs/Web/API/IDBRequest) sur lequel les évènements suivants cette opération seront déclenchés.

### Exceptions

Cette méthode peut déclencher une exception [`DOMException`](/fr/docs/Web/API/DOMException) avec l'un des types suivants&nbsp;:

- `TransactionInactiveError`
  - : Levée si la transaction sur l'objet [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore) est inactive
- `DataError`
  - : Levée si la clé ou l'intervalle de clés fourni contient une clé invalide ou est nul.
- `InvalidStateError`
  - : Levée si le magasin d'objets [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore) a été supprimé ou retiré.
- [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Levée si le paramètre `count` n'est pas compris entre `0` et `2^32 - 1` au sens large.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Initier des transactions&nbsp;: [`IDBDatabase`](/fr/docs/Web/API/IDBDatabase)
- Utiliser des transactions&nbsp;: [`IDBTransaction`](/fr/docs/Web/API/IDBTransaction)
- Définir un intervalle de clés&nbsp;: [`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange)
- Récupérer et modifier les données&nbsp;: [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore)
- Utiliser les curseurs&nbsp;: [`IDBCursor`](/fr/docs/Web/API/IDBCursor)
- Exemples&nbsp;: [Notifications d'une liste de tâches](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple qui fonctionne](https://mdn.github.io/dom-examples/to-do-notifications/))
