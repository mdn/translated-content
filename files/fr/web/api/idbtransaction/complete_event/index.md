---
title: complete
slug: Web/API/IDBTransaction/complete_event
translation_of: Web/API/IDBTransaction/complete_event
---
Le gestionnaire **complete** est exécuté lorsqu'une transaction est complétée avec succès.

## Informations générales

- Spécification
  - : [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)
- Interface
  - : Event
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : IDBTransaction
- Action par défaut
  - : Aucune

## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Exemple

```js
var transaction = db.transaction(["customers"], IDBTransaction.versionchange);

transaction.oncomplete = function( event ) {
  ...
}

// qui est équivalent à
transaction.addEventListener("complete", function( event ) {
  ...
});
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

- [Utilisation d'indexedDB](/fr/docs/IndexedDB/Using_IndexedDB)
