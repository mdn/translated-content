---
title: IDBKeyRange.upper
slug: Web/API/IDBKeyRange/upper
tags:
  - API
  - IDBKeyRange
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBKeyRange/upper
---
{{APIRef("IndexedDB")}}

La propriété **`upper`**, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie la borne supérieure de l'intervalle de clé.

{{AvailableInWorkers}}

## Syntaxe

```js
monIntervalle.upper;
```

### Valeur

La borne supérieure de l'intervalle de clé (qui peut être d'un type quelconque).

## Exemples

Dans l'exemple qui suit, on voit comment utiliser un intervalle de clé. On déclare `keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);` — ce qui correspond à intervalle qui inclut tout ce qui se trouve entre "F" et "W" mais pas ces valeurs (l'intervalle est « ouvert »). Ensuite, on ouvre une transaction grâce à {{domxref("IDBTransaction")}}, un magasin d'objet et un curseur grâce à {{domxref("IDBObjectStore.openCursor")}} pour lequel on déclare que `keyRangeValue` est l'intervalle de clé optionnel.

Après avoir déclaré l'intervalle de clé, on affiche la valeur de la propriété `upper` dans la console (ce qui doit donner "W").

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upper);

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
        console.log('Les éléments ont été affichés.');
      }
    };
  };
```

> **Note :** Pour un exemple complet qui utilise les intervalles de clé, vous pouvez consulter [le dépôt GitHub IDBKeyRange-example](https://github.com/mdn/IDBKeyRange-example) ([ainsi que la démonstration associée](https://mdn.github.io/IDBKeyRange-example/)).

## Spécifications

| Spécification                                                                    | État                         | Commentaires |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBKeyRange-upper', 'upper')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBKeyRange.upper")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
