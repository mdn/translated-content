---
title: IDBKeyRange.only()
slug: Web/API/IDBKeyRange/only_static
---

{{APIRef("IndexedDB")}}

La méthode **`only()`**, rattachée à l'interface {{domxref("IDBKeyRange")}}, permet de créer un nouvel intervalle de clé qui ne contient qu'une valeur.

{{AvailableInWorkers}}

## Syntaxe

```js
myKeyRange = IDBKeyRange.only(valeur);
```

### Paramètres

- `valeur`
  - : La valeur dans l'intervalle de clé.

### Valeur de retour

L'objet {{domxref("IDBKeyRange")}} correspondant à l'intervalle de clé qui vient d'être créé.

### Exceptions

Cette méthode peut déclencher une exception {{domxref("DOMException")}} du type `DataError` lorsque la valeur passée en argument n'est pas une clé valide.

## Exemples

Dans l'exemple qui suit, on illustre comment utiliser un intervalle de clé qui ne contient qu'une seule clé. On déclare un intervalle qui ne contient que la valeur "A" avec `keyRangeValue = IDBKeyRange.only("A");` Ensuite, on ouvre une transaction grâce à {{domxref("IDBTransaction")}} puis un magasin d'objets et un curseur grâce à la méthode {{domxref("IDBObjectStore.openCursor")}} pour laquelle on passe `keyRangeValue` en argument. Cela signifie que le curseur permettra uniquement de récupérer les enregistrements dont la clé vaut "A".

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.only("A");

  var transaction = db.transaction(["fThings"], "readonly");
  var objectStore = transaction.objectStore("fThings");

  objectStore.openCursor(keyRangeValue).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "<strong>" + cursor.value.fThing + "</strong>, " + cursor.value.fRating;
      list.appendChild(listItem);

      cursor.continue();
    } else {
      console.log("Les éléments sont affichés.");
    }
  };
}
```

> **Note :** Pour un exemple complet qui utilise les intervalles de clé, vous pouvez consulter [le dépôt GitHub IDBKeyRange-example](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbkeyrange) ([ainsi que la démonstration associée](https://mdn.github.io/dom-examples/indexeddb-examples/idbkeyrange/)).

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
