---
title: IDBObjectStore.openCursor()
slug: Web/API/IDBObjectStore/openCursor
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/openCursor
---
{{APIRef("IndexedDB")}}

La méthode **`openCursor()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, renvoie un nouvel objet {{domxref("IDBCursorWithValue")}} qu'on peut utiliser pour parcourir un magasin d'objets avec un curseur.

Afin de déterminer si l'opération s'est déroulée correctement, on pourra surveiller l'évènement `success`.

{{AvailableInWorkers}}

## Syntaxe

    var requete = ObjectStore.openCursor(optionalKeyRange, optionalDirection);

### Paramètres

- `range` {{optional_inline}}
  - : Une clé ou un intervalle de clés ({{domxref("IDBKeyRange")}}) qu'on souhaite parcourir. Si une seule clé est passée en argument, l'intervalle utilisé pour le curseur sera restreint à cette seule clé. Si aucune valeur n'est passée pour cet argument, l'intervalle utilisé pour le curseur englobera tous les enregistrements du magasin d'objets.
- `direction` {{optional_inline}}
  - : Un objet {{domxref("IDBCursorDirection")}} qui indique la direction de parcours du curseur. La valeur par défaut est `"next"`.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les évènements relatifs à l'opération.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant l'un des types suivants :

| Exception                  | Description                                                                                                  |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `InvalidStateError`        | L'objet {{domxref("IDBObjectStore")}} ou l'objet {{domxref("IDBIndex")}} a été supprimé. |
| `TransactionInactiveError` | La transaction rattachée au magasin d'objets ({{domxref("IDBObjectStore")}}) est inactive.        |
| `DataError`                | La clé ou l'intervalle de clés indiqué est invalide.                                                         |

## Exemples

Dans ce fragment de code, on crée une transaction, on ouvre le magasin d'objets souhaité puis on place un curseur pour parcourir tous les enregistrements du magasin d'objets :

```js
var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openCursor();
request.onsuccess = function(event) {
  var cursor = event.target.result;
  if(cursor) {
    // cursor.value contient l'enregistrement courant
    // pendant le parcours, on peut éventuellement le manipuler ici
    cursor.continue();
  } else {
    // il n'y a plus de résultats
  }
};
```

## Spécifications

| Spécification                                                                                                                                                | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBIndex-openCursor-IDBRequest-any-range-IDBCursorDirection-direction', 'openCursor')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.openCursor")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
