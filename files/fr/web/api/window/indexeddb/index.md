---
title: "Window : propriété indexedDB"
short-title: indexedDB
slug: Web/API/Window/indexedDB
l10n:
  sourceCommit: 9912dd7cc583fc938cc73152dccdb94c3bb79ce4
---

{{APIRef("IndexedDB")}}

La propriété en lecture seule **`indexedDB`** de l'interface {{DOMxRef("Window")}} fournit un mécanisme permettant aux applications d'accéder de manière asynchrone aux fonctionnalités des bases de données indexées.

## Valeur

Un objet {{DOMxRef("IDBFactory")}}.

## Exemples

Le code suivant crée une requête pour qu'une base de données soit ouverte de manière asynchrone, après quoi la base de données est ouverte lorsque le gestionnaire `onsuccess` de la requête est déclenché&nbsp;:

```js
let db;
function openDB() {
  const DBOpenRequest = window.indexedDB.open("toDoList");
  DBOpenRequest.onsuccess = (e) => {
    db = DBOpenRequest.result;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Initier une connexion&nbsp;: {{DOMxRef("IDBDatabase")}}
- Utiliser les transactions&nbsp;: {{DOMxRef("IDBTransaction")}}
- Définir un intervalle de clés&nbsp;: {{DOMxRef("IDBKeyRange")}}
- Récupérer et modifier les données&nbsp;: {{DOMxRef("IDBObjectStore")}}
- Utiliser les curseurs&nbsp;: {{DOMxRef("IDBCursor")}}
- Exemple de référence&nbsp;: [Notifications de tâches à faire <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/to-do-notifications/)).
