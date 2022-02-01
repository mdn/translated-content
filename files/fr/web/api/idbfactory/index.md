---
title: IDBFactory
slug: Web/API/IDBFactory
translation_of: Web/API/IDBFactory
---
{{APIRef("IndexedDB")}}

L'interface **`IDBFactory`** fait partie de l'[API IndexedDB](/fr/docs/Web/API/API_IndexedDB) et permet aux applications d'accéder à des bases de données de façon asynchrone. L'objet qui implémente cette interface  est `window.indexedDB`. Autrement dit, on créera et on accèdera à une base de données (voire on la supprimera) directement via cet objet plutôt qu'en utilisant l'objet `IDBFactory`.

{{AvailableInWorkers}}

## Méthodes

- {{domxref("IDBFactory.open")}}
  - : Une méthode qui permet d'ouvrir une connexion à une base de données.
- {{domxref("IDBFactory.deleteDatabase")}}
  - : Une méthode qui permet de demander la suppression d'une base de données.
- {{domxref("IDBFactory.cmp")}}
  - : Une méthode qui compare deux clés et renvoie un résultat qui indique laquelle est la plus grande.
- {{domxref("IDBFactory.databases")}}
  - : Une méthode qui répertorie toutes les bases de données disponibles, y compris leurs noms et leurs versions.

## Exemples

Dans l'exemple qui suit, on effectue une requête sur une base de données et on gère les cas de succès et d'erreur. Vous pouvez consulter un exemple complet sur [notre application To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([voir l'exemple en _live_](https://mdn.github.io/to-do-notifications/)).

```js
var note = document.querySelector("ul");

// Dans la ligne suivante, inclure les préfixes des
// implémentations à tester
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// attention à ne pas utiliser "var indexedDB = ..."
// si on n'est pas dans une fonction

// On pourra éventuellement avoir besoin de références
// envers les objets window.IDB* :
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla n'a jamais préfixé ces objets,
// il n'est pas nécessaire d'écrire window.mozIDB*)

// On ouvre la version 4 de notre base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// On ajoute ensuite les gestionnaires d'évènements
// pour gérer le succès ou l'échec de l'ouverture
// de la base de données
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Erreur lors du chargement de la base.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Base de données initialisée.</li>';

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
};
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName("IndexedDB", "#idl-def-IDBFactory", "IDBFactory")}} | {{Spec2("IndexedDB")}}     |              |
| {{SpecName("IndexedDB 2", "#factory-interface", "IDBFactory")}} | {{Spec2("IndexedDB 2")}} |              |
| {{SpecName("IndexedDB 3", "#factory-interface", "IDBFactory")}} | {{Spec2("IndexedDB 3")}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBFactory")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
