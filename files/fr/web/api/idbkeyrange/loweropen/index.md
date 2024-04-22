---
title: IDBKeyRange.lowerOpen
slug: Web/API/IDBKeyRange/lowerOpen
---

{{APIRef("IndexedDB")}}

La propriété **`lowerOpen`**, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie un booléen qui inidque si l'intervalle est ouvert pour la borne inférieure (autrement dit, le booléen est vrai lorsque la borne n'est pas incluse et est faux sinon).

{{AvailableInWorkers}}

## Syntaxe

```js
myKeyRange.lowerOpen;
```

### Valeur

Un booléen qui indique si l'intervalle est ouvert pour la borne inférieure (`true` si c'est le cas (la borne n'est pas incluse), `false` sinon).

## Exemples

Dans l'exemple qui suit, on voit comment utiliser un intervalle de clé. On déclare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — c'est-à-dire un intervalle qui inclue tout ce qui se trouve entre "F" et "W" mais qui n'inclue pas ces bornes (l'intervalle est « ouvert »). Ensuite, on ouvre une transaction grâce à {{domxref("IDBTransaction")}} puis on ouvre un magasin d'objet et un curseur grâce à {{domxref("IDBObjectStore.openCursor")}}. La valeur `keyRangeValue` est utilisée comme intervalle de clé pour ce curseur.

Après avoir déclaré l'intervalle de clé, on affiche la valeur de la propriété `lowerOpen` dans la console. Ici, la valeur de la propriété est `true` car l'intervalle est ouvert pour la borne supérieure et la borne inférieure qui ne sont donc pas comprises dans l'intervalle.

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lowerOpen);

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
      console.log("Les éléments ont été affichés.");
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
