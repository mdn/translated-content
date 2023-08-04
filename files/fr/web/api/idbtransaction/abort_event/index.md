---
title: abort
slug: Web/API/IDBTransaction/abort_event
---

Le gestionnaire d'arrêt est exécuté lorsqu'une transaction a été interrompue.

## Informations générales

- Spécification
  - : [IndexedDB](http://www.w3.org/TR/IndexedDB/#request-api)
- Interface
  - : Event
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : IDBTransaction
- Action par défaut
  - : Aucune

## Propriétés

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Voir aussi

- [Utilisation d'IndexedDB](/fr/docs/IndexedDB/Using_IndexedDB)
