---
title: IDBKeyRange.lowerBound()
slug: Web/API/IDBKeyRange/lowerBound
tags:
  - IDBKeyRange
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBKeyRange/lowerBound
---
{{APIRef("IndexedDB")}}

La méthode **`lowerBound()`**, rattachée à l'interface  {{domxref("IDBKeyRange")}}, crée un intervalle de clé avec une borne inférieure.

Par défaut, la borne est inclue dans l'intervalle (autrement dit, il est fermé à gauche).

{{AvailableInWorkers}}

## Syntaxe

```js
IDBKeyRange.lowerBound(borne);
IDBKeyRange.lowerBound(borne, ouvert);
```

### Paramètres

- `borne`
  - : La valeur de la borne inférieure pour l'intervalle.
- `ouvert {{optional_inline}}`
  - : Ce booléen indique si l'intervalle est ouvert à gauche (autrement dit, s'il vaut `false` la borne est inclue et s'il vaut `true` la borne n'est pas inclue dans l'intervalle).

### Valeur de retour

Un objet {{domxref("IDBKeyRange")}} qui correspond à l'intervalle de clé créé.

### Exceptions

Cette méthode peut lever une exception {{domxref("DOMException")}} de type `DataError` lorsque la valeur passée en paramètre n'est pas une clé valide.

## Exemples

Dans l'exemple qui suit, on illustre comment créer un intervalle de clé avec une borne inférieure, on utilise `keyRangeValue = IDBKeyRange.lowerBound("F", false);` — cela permet de créer un intervalle qui contient "F" et les valeurs inférieures. On ouvre ensuite une transaction grâce à {{domxref("IDBTransaction")}}) puis un magasin d'objet et un curseur avec la méthode {{domxref("IDBObjectStore.openCursor")}} à laquelle on associe l'intervalle de clé `keyRangeValue`.

Si on a avait utilisé `IDBKeyRange.lowerBound("F", true);`, "F" n'aurait pas fait partie de l'intervalle.

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.lowerBound("F");

  var transaction = db.transaction(['fThings'], 'readonly');
  var objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
    var cursor = event.target.result;
      if(cursor) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '<strong>' + cursor.value.fThing + '</strong>, ' + cursor.value.fRating;
        list.appendChild(listItem);

        cursor.continue();
      } else {
        console.log('Les éléments sont affichés.');
      }
    };
  };
```

> **Note :** Pour un exemple complet qui utilise les intervalles de clé, vous pouvez consulter [le dépôt GitHub IDBKeyRange-example](https://github.com/mdn/IDBKeyRange-example) ([ainsi que la démonstration associée](https://mdn.github.io/IDBKeyRange-example/)).

## Spécification

| Spécification                                                                                                                                    | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBKeyRange-lowerBound-IDBKeyRange-any-lower-boolean-open', 'lowerBound()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBKeyRange.lowerBound")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
