---
title: IDBEnvironment
slug: Web/API/IDBEnvironment
tags:
  - API
  - IDBEnvironment
  - IndexedDB
  - Référence(2)
translation_of: Web/API/IDBEnvironment
---
{{APIRef}}

> **Attention :** À partir de Firefox 52, la propriété définie dans ce _mixin_ a été déplacée vers {{domxref("WindowOrWorkerGlobalScope")}} et d'autres navigateurs implémenteront également cette décision. Voir {{domxref("WindowOrWorkerGlobalScope")}} pour des informations à jour.

L'utilitaire **`IDBEnvironment`**, lié à l'interface [IndexedDB API](/fr/docs/Web/API/API_IndexedDB), contient la propriété `indexedDB` qui permet d'accéder aux fonctionnalités de l'API IndexedDB. C'est l'interface de haut niveau implémentée par les objets {{domxref("window")}} et {{domxref("Worker")}}.

{{AvailableInWorkers}}

## Propriétés

- {{domxref("IDBEnvironment.indexedDB")}} {{readonlyInline}}
  - : Cette propriété fournit un mécanisme qui permet aux applications d'accéder à des bases de données de façon asynchrone. Elle contient un objet {{domxref("IDBFactory")}}.

## Exemple

Dans le fragment de code suivant, on crée une requête asynchrone sur une base de données et on utilise le gestionnaire d'évènements `onsuccess` de la requête :

```js
var db;
function openDB() {
 var DBOpenRequest = window.indexedDB.open("toDoList");
 DBOpenRequest.onsuccess = function(e) {
   db = DBOpenRequest.result;
 };
}
```

## Spécifications

| Spécification                                                                                | État                         | Commentaires |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#idl-def-IDBEnvironment', 'IDBEnvironment')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBEnvironment")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
