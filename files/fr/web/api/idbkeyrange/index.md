---
title: IDBKeyRange
slug: Web/API/IDBKeyRange
tags:
  - API
  - Database
  - IDBKeyRange
  - IndexedDB
  - Interface
  - Reference
  - Storage
  - TopicStub
translation_of: Web/API/IDBKeyRange
---
{{APIRef("IndexedDB")}}

L'interface **`IDBKeyRange`** de l'API [IndexedDB](/fr/docs/Web/API/API_IndexedDB) représente un intervalle continue sur un type de donnée utilisé pour représenter des clés. Les enregistrements peuvent être récupérés depuis des objets {{domxref("IDBObjectStore")}} et {{domxref("IDBIndex")}} grâce à des clés ou à des intervalles de clé. Il est possible de préciser les bornes inférieure et supérieure de l'intervalle. Si les clés sont des chaînes de caractères, on pourrait ainsi parcourir l'ensemble des valeurs pour l'intervalle A–Z.

Un intervalle de clé peut être une seule valeur ou un intervalle avec des bornes inférieure et supérieure. Si l'intervalle possède ces deux bornes, il est dit borné. S'il n'a aucune borne, il est non-borné. Un intervalle de clé borné peut être ouvert (les bornes sont exclues) ou fermé (les bornes sont inclues). Pour récupérer les différentes clés d'un intervalle donné, on peut utiliser les fragments de code suivants :

| Intervalle                         | Code                                                              |
| ---------------------------------- | ----------------------------------------------------------------- |
| Toutes les clés ≤ **x**            | {{domxref("IDBKeyRange.upperBound")}}`(x)`             |
| Toutes les clés < **x**            | {{domxref("IDBKeyRange.upperBound")}}`(x, true)`       |
| Toutes les clés ≥ **y**            | {{domxref("IDBKeyRange.lowerBound")}}`(y)`             |
| Toutes les clés > **y**            | {{domxref("IDBKeyRange.lowerBound")}}`(y, true)`       |
| Toutes les clés ≥ **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y)`              |
| Toutes les clés > **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, true, true)`  |
| Toutes les clés > **x** && ≤ **y** | {{domxref("IDBKeyRange.bound")}}`(x, y, true, false)` |
| Toutes les clés ≥ **x** &&< **y**  | {{domxref("IDBKeyRange.bound")}}`(x, y, false, true)` |
| La clé = **z**                     | {{domxref("IDBKeyRange.only")}}`(z)`                     |

Une clé est contenue dans un intervalle de clé lorsque les conditions suivantes sont réunies :

- La borne inférieure de l'intervalle de clé est :

  - `undefined`
  - Inférieure à la valeur de la clé
  - Égal à la valeur de la clé si `lowerOpen` est `false` (l'intervalle est fermé à gauche)

- La borne supérieure de l'intervalle de clé est :

  - `undefined`
  - Supérieure à la valeur de la clé
  - Égal à la valeur de la clé si `upperOpen` vaut `false` (l'intervalle est fermé à droite)

{{AvailableInWorkers}}

## Propriétés

- {{domxref("IDBKeyRange.lower")}} {{readonlyInline}}
  - : Cette propriété fournit la borne inférieure de l'intervalle de clé.
- {{domxref("IDBKeyRange.upper")}} {{readonlyInline}}
  - : Cette propriété fournit la borne supérieure de l'intervalle de clé.
- {{domxref("IDBKeyRange.lowerOpen")}} {{readonlyInline}}
  - : Cette méthode renvoie `false` si la borne inférieure est contenue dans l'intervalle de clé (autrement dit elle permet de vérifier si l'intervalle est ouvert à gauche).
- {{domxref("IDBKeyRange.upperOpen")}} {{readonlyInline}}
  - : Cette méthode renvoie `false` si la borne supérieure est contenue dans l'intervalle de clé (autrement dit elle permet de vérifier si l'intervalle est ouvert à droite).

## Méthodes

### Méthodes statiques

- {{domxref("IDBKeyRange.bound()")}}
  - : Cette méthode permet de créer un nouvel intervalle de clé avec une borne inférieure et une borne supérieure.
- {{domxref("IDBKeyRange.only()")}}
  - : Cette méthode crée un nouvel intervalle de clé qui ne contient qu'une valeur.
- {{domxref("IDBKeyRange.lowerBound()")}}
  - : Cette méthode crée un nouvel intervalle de clé avec une borne inférieure.
- {{domxref("IDBKeyRange.upperBound()")}}
  - : Cette méthode crée un nouvel intervalle de clé avec une borne supérieure.

### Méthodes des instances

- {{domxref("IDBKeyRange.includes()")}}
  - : Cette méthode renvoie un booléen qui indique si la clé passée en argument est contenue dans l'intervalle de clé.

<!---->

## Exemples

Dans l'exemple qui suit, on montre comment utiliser un intervalle de clé. Ici, on déclare un objet `keyRangeValue` qui représente un intervalle pour les valeurs entre "A" et "F". On ouvre une transaction grâce à {{domxref("IDBTransaction")}}, on ouvre également un magasin d'objets puis un curseur avec la méthode {{domxref("IDBObjectStore.openCursor")}} pour lequel on indique que `keyRangeValue` est l'intervalle de clé à considérer. Cela signifie que le curseur récupèrera uniquement les enregistrements pour lesquels les clés sont contenues dans cet intervalle. Cet intervalle est fermé, il inclut les valeur "A" and "F" (on n'a pas indiqué que ces bornes étaient ouvertes). Si on avait utilisé `IDBKeyRange.bound("A", "F", true, true);`, l'intervalle serait ouvert et ne contiendrait pas "A" ou "F" mais uniquement les valeurs intermédiaires.

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

## Spécifications

| Spécification                                                                        | État                         | Commentaires           |
| ------------------------------------------------------------------------------------ | ---------------------------- | ---------------------- |
| {{SpecName('IndexedDB', '#idl-def-IDBKeyRange', 'IDBKeyRange')}} | {{Spec2('IndexedDB')}} | Définition initiale.   |
| {{SpecName('IndexedDB 2', '#keyrange', 'IDBKeyRange')}}             | {{Spec2('IndexedDB')}} | Ajout de `includes()`. |

## Compatibilité des navigateurs

{{Compat("api.IDBKeyRange")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
