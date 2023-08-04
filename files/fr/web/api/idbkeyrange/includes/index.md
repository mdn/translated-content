---
title: IDBKeyRange.includes()
slug: Web/API/IDBKeyRange/includes
---

{{APIRef("IndexedDB")}}

La méthode **`includes()`**, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie un booléen si la clé est contenue dans un intervalle de clé.

{{AvailableInWorkers}}

## Syntaxe

```js
myIncludesResult = myKeyRange.includes("A");
```

### Paramètres

- `key`
  - : La clé dont on souhaite savoir si elle est dans l'intervalle.

### Valeur de retour

Un booléen.

### Exceptions

Cette méthode peut lever une exception {{domxref("DOMException")}} de type {{domxref("DataError")}} lorsque la clé fournie n'est pas une clé valide.

## Exemples

```js
var keyRangeValue = IDBKeyRange.bound("A", "K", false, false);

var monResultat = keyRangeValue.includes("F");
// Renvoie true

var monResultat = keyRangeValue.includes("W");
// Renvoie false
```

## Prothèse d'émulation (_polyfill_)

La méhode `includes()` a été ajoutée à partir de la deuxième édition de la spécification d'Indexed DB. Pour les navigateurs qui ne prennent pas en charge cette fonctionnalité, on peut utiliser la prothèse suivante.

```js
IDBKeyRange.prototype.includes =
  IDBKeyRange.prototype.includes ||
  function (key) {
    var r = this,
      c;
    if (r.lower !== undefined) {
      c = indexedDB.cmp(key, r.lower);
      if (r.lowerOpen && c <= 0) return false;
      if (!r.lowerOpen && c < 0) return false;
    }
    if (r.upper !== undefined) {
      c = indexedDB.cmp(key, r.upper);
      if (r.upperOpen && c >= 0) return false;
      if (!r.upperOpen && c > 0) return false;
    }
    return true;
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
