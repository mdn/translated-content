---
title: IDBKeyRange.bound()
slug: Web/API/IDBKeyRange/bound
tags:
  - API
  - IDBKeyRange
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBKeyRange/bound
---
{{APIRef("IndexedDB")}}

La méthode **`bound()`**, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie un intervalle de clé délimité par une borne inférieure et une borne supérieure.

L'intervalle peut être ouvert (les limites sont exclues) ou fermé (les limites sont incluses). Par défaut, l'intervalle est fermé.

{{AvailableInWorkers}}

## Syntaxe

```js
myKeyRange = IDBKeyRange.bound(lower, upper, lowerOpen, upperOpen);
```

### Paramètres

- `lower`
  - : La limite inférieure de l'intervalle.
- `upper`
  - : La limite supérieure de l'intervalle.
- `lowerOpen` {{optional_inline}}
  - : Si cette valeur vaut `false` (la valeur par defaut), l'intervalle contient la limite inférieure.
- `upperOpen` {{optional_inline}}
  - : Si cette valeur vaut `false` (la valeur par défaut), l'intervalle contient la limite supérieure.

### Valeur de retour

Un objet {{domxref("IDBKeyRange")}} qui représente l'intervalle de clé.

### Exceptions

- `DataError`

  - : Cette exception {{domxref("DOMException")}} est levée si :

    - Une des limites passé n'est pas valide.
    - La limite inférieur est supèrieur à la limite supérieur.
    - Les limites correspondent et l'intervalle est ouvert.

## Exemples

Dans l'exemple qui suit, on illustre comment créer un intervalle de clé. On déclare `keyRangeValue = IDBKeyRange.bound("A", "F");` ce qui représente un intervalle entre "A" et "F". Ensuite, on ouvre une transaction grâce à un objet {{domxref("IDBTransaction")}} puis on ouvre un magasin d'objets et on ouvre un curseur avec la méthode {{domxref("IDBObjectStore.openCursor")}} pour lequel on indique `keyRangeValue` comme intervalle de clé correspondant. Cela signifie que le curseur ne parcourera que les enregistrements dont les clés sont contenues dans cet intervalle. L'intervalle contient bien les valeurs "A" et "F" car les bornes sont incluses. Si on avait utilisé `IDBKeyRange.bound("A", "F", true, true);`, l'intervalle n'aurait pas inclus "A" et "F" mais uniquement les valeurs intermédiaires.

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("A", "F");

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

## Spécification

| Spécification                                                                                                                                                                    | État                         | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBKeyRange-bound-IDBKeyRange-any-lower-any-upper-boolean-lowerOpen-boolean-upperOpen', 'bound()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBKeyRange.bound")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
