---
title: abort
slug: Web/API/XMLHttpRequest/abort_event
translation_of: Web/API/XMLHttpRequest/abort_event
original_slug: Web/Events/abort_(ProgressEvent)
---
L'événement **abort** est déclenché lorsque la progression a été interompue (Non causé par une erreur)

## Informations générales

- Spécification
  - : [Progress](http://www.w3.org/TR/progress-events/)
- Interface
  - : ProgressEvent
- Propagation
  - : Non
- Annulable
  - : Non
- Cible
  - : Element
- Action par défaut
  - : Aucune

## Propriétés

| Property                                    | Type                                 | Description                                                                                                                                                    |
| ------------------------------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}           | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                         |
| `type` {{readonlyInline}}             | {{domxref("DOMString")}}     | The type of event.                                                                                                                                             |
| `bubbles` {{readonlyInline}}          | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.                                                                                                                     |
| `cancelable` {{readonlyInline}}       | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.                                                                                                                       |
| `lengthComputable` {{readonlyInline}} | [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean)         | Specifies whether or not the total size of the transfer is known. Read only.                                                                                   |
| `loaded` {{readonlyInline}}           | unsigned long (long)                 | The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only. |
| `total` {{readonlyInline}}            | unsigned long (long)                 | The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.               |

## Evénements liés

- {{event("loadstart")}}
- {{event("progress")}}
- {{event("error")}}
- {{event("abort")}}
- {{event("load")}}
- {{event("loadend")}}

## Voir aussi

- [Surveillance de la progression](/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
