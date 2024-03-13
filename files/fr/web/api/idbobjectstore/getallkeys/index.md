---
title: IDBObjectStore.getAllKeys()
slug: Web/API/IDBObjectStore/getAllKeys
---

{{APIRef("IndexedDB")}}

La méthode **`getAllKeys()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} qui permet de récupérer l'ensemble des clés pour les objets qui correspondent au critère passé en argument (ou les clés de tous les objets du magasin si aucun paramètre n'est fourni).

Si une valeur est trouvée, un clone structurelle sera créé et fourni comme résultat pour la requête.

Cette méthode produira le même résultat pour :

- un enregistrement qui n'existe pas dans la base de données
- un enregistrement qui possède une valeur indéfinie

Pour différencier ces deux situations, on peut appeler la méthode {{domxref("IDBObjectStore.openCursor","openCursor()")}} avec la même clé. Cette méthode fournit un curseur si l'enregistrement existe et ne fournit aucun curseur s'il n'y a pas d'enregistrement.

## Syntaxe

```js
var request = objectStore.getAllKeys();
var request = objectStore.getAllKeys(query);
var request = objectStore.getAllKeys(query, count);
```

### Parameters

- `query` {{optional_inline}}
  - : Une valeur qui est (ou se résoud) en un intervalle de clés ({{domxref("IDBKeyRange")}}).
- `count` {{optional_inline}}
  - : Une valeur qui définit le nombre de valeurs à renvoyer si plusieurs correspondent. Cette valeur doit être supérieure à `0` ou inférieure `à 2^32-1`, sinon une exception {{jsxref("TypeError")}} sera levée.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} pour lequel seront déclenchés les différents évènements relatifs à l'opération.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant le type suivant :

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
      <td>
        Le magasin d'objets ({{domxref("IDBObjectStore")}}) associé à
        la transaction est inactif.
      </td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>
          La clé ou l'intervalle de clé fourni contient une clé invalide ou est
          nul.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        Le magasin d'objets ({{domxref("IDBObjectStore")}}) a été
        supprimé ou retiré.
      </td>
    </tr>
  </tbody>
</table>

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
