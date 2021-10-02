---
title: IDBKeyRange.upperOpen
slug: Web/API/IDBKeyRange/upperOpen
translation_of: Web/API/IDBKeyRange/upperOpen
---
{{ APIRef("IndexedDB") }}

La propriété **`upperOpen`** de l'interface {{domxref("IDBKeyRange")}} renvoie un booléen indiquant si la valeur de la limite supérieure est incluse dans l'{{domxref("IDBKeyRange","intervalle de clé")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
myKeyRange.upperOpen;
```

## Value

- true
  - : La valeur de la limite supérieure n'est pas incluse dans l'intervalle.
- false
  - : La valeur de la limite supérieure est incluse dans l'intervalle.

## Exemple

Dans l'exemple suivant, on récupère l'{{domxref("IDBKeyRange","intervalle de clé")}} entre "F" et "W". Puis on ouvre une {{domxref("IDBTransaction","transaction")}} sur la connexion pour avoir l’{{domxref("IDBObjectStore","accès")}} au magasin d'objets 'fThings'. On met en place un {{domxref("IDBCursor","curseur")}} sur l'intervalle pour afficher dans une liste les valeurs des propriétés fThing et fRating des objets trouvés.

La propriété **`upperOpen`** sert ici à afficher sur la console le booléen indiquant si la valeur de la limite supérieure est comprise dans l'intervalle.

```js
function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upperOpen);

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
        console.log('Entries all displayed.');
      }
    };
  };
```

## Spécification

| Spécification                                                                                | Statut                       | Commentaire |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| {{SpecName('IndexedDB', '#widl-IDBKeyRange-upperOpen', 'upperOpen')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité avec les navigateurs

{{Compat("api.IDBKeyRange.upperOpen")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
