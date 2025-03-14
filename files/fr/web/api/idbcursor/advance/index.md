---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
---

{{APIRef("IndexedDB")}}

La méthode **`advance()`** de l'interface {{domxref("IDBCursor")}} définit le nombre d'itérations du curseur avec lequel celui-ci doit se déplacer vers l'avant.

{{AvailableInWorkers}}

## Syntaxe

```js
cursor.advance(count);
```

### Paramètres

- `count`
  - : Le nombre d'itérations du curseur.

### Valeur de retour

Aucune.

### Exceptions

Cette méthode peut déclencher des exceptions {{domxref("DOMException")}} :

| Exception                  | Description                                                      |
| -------------------------- | ---------------------------------------------------------------- |
| `TransactionInactiveError` | Cette transaction IDBCursor est inactive.                        |
| `TypeError`                | La valeur passée au paramètre `count` vaut zéro ou est négative. |
| `InvalidStateError`        | Le curseur est en itération ou a itéré au-delà de la plage.      |

## Exemple

Dans ce petit morceau de code on fait une transaction, récupère un magasin d'objet, puis utilise un curseur pour itérer sur les enregistrements du magasin. Ici, on utilise `cursor.advance(2)` pour avancer de 2 cases à chaque fois, ce qui signifie que seule la moitié des résultats sera affichée. `advance()` fonctionne de façon similaire à {{domxref ("IDBCursor.continue")}} mais permet de sauter plusieurs enregistrements à la fois et pas uniquement d'accéder à l'enregistrement suivant.

On notera également que, dans chaque itération de la boucle, on peut récupérer les données de l'enregistrement en cours grâce à l'objet curseur via `curseur.value.foo`. Pour un exemple fonctionnel complet, voir [notre exemple IDBCursor](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([l'exemple en _live_](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function advanceResult() {
  list.innerHTML = "";
  var transaction = db.transaction(["granListAlbum"], "readonly");
  var objectStore = transaction.objectStore("granListAlbum");

  objectStore.openCursor().onsuccess = function (event) {
    var curseur = event.target.result;
    if (curseur) {
      var listItem = document.createElement("li");
      listItem.innerHTML =
        "" + curseur.value.titreAlbum + ", " + curseur.value.annee;
      list.appendChild(listItem);
      curseur.advance(2);
    } else {
      console.log("moitié des resultats affichée");
    }
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
