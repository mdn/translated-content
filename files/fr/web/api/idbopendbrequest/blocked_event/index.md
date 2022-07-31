---
title: blocked
slug: Web/API/IDBOpenDBRequest/blocked_event
translation_of: Web/API/IDBOpenDBRequest/blocked_event
original_slug: Web/API/IDBRequest/blocked_event
---
Le handler **blocked** est exécuté lorsque l'ouverture d'une connexion à une base de données bloque une transaction _versionchange_ sur celle-ci.

## Informations générales

- Spécification
  - : [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)
- Interface
  - : IDBVersionChangeEvent
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : IDBRequest
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                 | Description                                |
| ------------------------------------- | ------------------------------------ | ------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The request concerned by this event.       |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                         |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.   |
| `newVersion` {{readonlyInline}} | unsigned long (int)                  | The new version of the database.           |
| `oldVersion` {{readonlyInline}} | unsigned long (int)                  | The old version of the database.           |

## Exemple

```js
var req1 = indexedDB.open("addressbook", 3);

req1.onsuccess = function( event ) {
  var addressbookDB = event.target.result;

  // Essayons d'ouvrir la même base de données avec une version de révision plus élevée
  var req2 = indexedDB.open("addressbook", 4);

  // Dans ce cas, le handler onblocked sera exécuté
  req2.onblocked = function( e ) {
    console.log(e)
  };

};
```

## Evénements liés

- {{event("success")}}
- {{event("error")}}
- {{event("abort")}}
- {{event("complete")}}
- {{event("upgradeneeded")}}
- {{event("blocked")}}
- {{event("versionchange")}}

## Voir aussi

- [Utilisation d'IndexedDB](/fr/docs/IndexedDB/Using_IndexedDB)
