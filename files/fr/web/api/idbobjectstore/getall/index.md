---
title: IDBObjectStore.getAll()
slug: Web/API/IDBObjectStore/getAll
translation_of: Web/API/IDBObjectStore/getAll
---
{{ APIRef("IndexedDB") }}

La méthode **`getAll()`** de l'interface {{domxref("IDBObjectStore")}} fait une {{domxref("IDBRequest","requête")}} qui renvoie un tableau ordonné suivant les clés, des valeurs de tous les enregistrements du magasin d'objet {{domxref("IDBObjectStore","relié")}}. On peut limité le nombre d'enregistrements en les filtrants suivant leurs clés ou en paramétrant le compteur.

{{ Note("Cette méthode renverras un tableau vide si aucun enregistrement ne correspond. Si la valeur est undefined elle prendra une case du tableau.") }}

## Syntaxe

    var request = objectStore.getAll(query, count);

## Paramètres

- query {{optional_inline}}
  - : Une clé ou l'{{domxref("IDBKeyRange","intervalle de clé")}} **pour filtrer**, seule les valeurs des enregistrements correspondant sont renvoyées. Par défaut toutes les valeurs des enregistrements du magasin d'objet sont renvoyées.
- count {{optional_inline}}
  - : Le nombre de valeurs d'enregistrement **maximum renvoyées**. Un nombre décimal sera tronqué. Zéro annule le compteur et toutes les valeurs sont retournées.

## Renvoie

- Une {{domxref("IDBRequest","requête")}}
  - : La propriété {{domxref("IDBRequest.result","result")}} de cette requête renvoie le tableau des valeurs des enregistrements en cas de succès.

## Exceptions

- `TransactionInactiveError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la {{domxref("IDBTransaction","transaction")}} est inactive.
- `DataError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la clé où l'{{domxref("IDBKeyRange","intervalle de clé")}} est invalide.
- `InvalidStateError`
  - : Cette {{domxref("DOMException","exception")}} est levée si le magasin d'objets a été supprimé.
- `TypeError`
  - : Cette {{domxref("DOMException","exception")}} est levée si le compteur n'est pas un nombre positif.

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| {{SpecName('IndexedDB2', '#dom-idbobjectstore-getall', 'getAll()')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.getAll")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utiliser les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseurs")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
