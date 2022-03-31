---
title: IDBObjectStore.openKeyCursor()
slug: Web/API/IDBObjectStore/openKeyCursor
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/openKeyCursor
---
{{APIRef("IndexedDB")}}

La méthode **`openKeyCursor()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} dont le résultat sera un curseur ({{domxref("IDBCursor")}}) qui pourra être utilisé afin de parcourir les enregistrements correspondants. Cette méthode est utilisée afin de parcourir les clés d'un magasin d'objets grâce à un curseur.

Afin de déterminer si le curseur a bien été ajouté, on pourra écouter l'évènement `success` sur le résultat de la méthode.

## Syntaxe

    var requete = objectStore.openKeyCursor(optionalKeyRange, optionalDirection);

### Paramètres

- `optionalKeyRange`
  - : L'intervalle de clés qu'on souhaite parcourir. Si une seule clé est fournie, l'intervalle constitué ne contiendra que cette clé. Si aucune valeur n'est passée en argument, le curseur produit parcourera tous les enregistrements du magasin d'objets.
- `optionalDirection`
  - : Un objet {{domxref("IDBCursorDirection")}} qui indique la direction dans laquelle le curseur doit parcourir les évènements. La valeur par défaut est `"next"`.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les différents évènements relatifs à cette opération.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant l'un des types suivants :

| Exception                  | Description                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError`        | Le magasin d'objets ({{domxref("IDBObjectStore")}} ou l'index ({{domxref("IDBIndex")}}) a été supprimé. |
| `TransactionInactiveError` | La transaction associée au magasin d'objet ({{domxref("IDBObjectStore")}}) est inactive.                         |
| `DataError`                | La clé ou l'intervalle de clés indiqué est invalide.                                                                        |

## Exemples

Dans le fragment de code suivant, on crée une transaction, on l'utilise sur un magasin d'objets donné puis on utilise le curseur pour parcourir tous les enregistrements du magasin d'objets :

```js
var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openKeyCursor();
request.onsuccess = function(event) {
  var cursor = event.target.result;
  if(cursor) {
    // cursor.key contient la clé de l'enregistrement courant
    // à la différence de openCursor, il n'y a pas de cursor.value
    cursor.continue();
  } else {
    // Il n'y a plus d'autres résultats
  }
};
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB2', '#dom-idbobjectstore-openkeycursor', 'openKeyCursor')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.openKeyCursor")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
