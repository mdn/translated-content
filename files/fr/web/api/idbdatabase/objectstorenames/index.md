---
title: IDBDatabase.objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
tags:
  - API
  - Database
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBDatabase/objectStoreNames
---
{{APIRef("IndexedDB")}}

La propriété **`objectStoreNames`**, rattachée à l'interface {{domxref("IDBDatabase")}}, est une liste de chaînes de caractères  ({{domxref("DOMStringList")}}) qui sont les noms des magasins d'objets ({{domxref("IDBObjectStore")}}) connectés à la base de données.

{{AvailableInWorkers}}

## Syntaxe

```js
db.objectStoreNames
```

### Valeur

Une liste {{domxref("DOMStringList")}} des noms de magasins d'objets ({{domxref("IDBObjectStore")}}) connectés à la base de données.

## Exemple

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Les deux gestionnaires d’événements activés pour
// gérer la réussite ou l'échec de le connexion.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Erreur de chargement de la base de données.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Base de données initialisée.</li>';

  // Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Cette ligne affiche sur la console la liste des magasins
  // d'objets de la base de données
  console.log(db.objectStoreNames);
};
```

> **Note :** Pour un exemple fonctionnel complet, voir notre application de démo [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([l'exemple _live_](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-objectStoreNames', 'objectStoreNames')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBDatabase.objectStoreNames")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
