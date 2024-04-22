---
title: loadend
slug: Web/API/XMLHttpRequest/loadend_event
---

El evento `loadend` es emitido cuando el progreso de la carga de un recurso se ha detenido (e.g. despues que "error", "abort", o "load" han sido emitidos). Por ejemplo, esto aplica a las llamadas de {{domxref("XMLHttpRequest")}}, y al contenido de un elemento {{htmlelement("img")}} o {{htmlelement("video")}}.

## Información General

- Especificación
  - : [Progress](http://www.w3.org/TR/progress-events/)
- Interfaz
  - : ProgressEvent
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : {{domxref("HTMLImageElement")}}, Por Ejemplo
- Acción por Defecto
  - : None

## Propiedades

| Property                             | Type                       | Description                                                                                                                                                    |
| ------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}          | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                         |
| `type` {{readonlyInline}}            | {{domxref("DOMString")}}   | The type of event.                                                                                                                                             |
| `bubbles` {{readonlyInline}}         | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                                                                                     |
| `cancelable` {{readonlyInline}}      | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                                                                                       |
| `lengthComputable`{{readonlyInline}} | {{jsxref("Boolean")}}      | Specifies whether or not the total size of the transfer is known. Read only.                                                                                   |
| `loaded` {{readonlyInline}}          | unsigned long (long)       | The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only. |
| `total` {{readonlyInline}}           | unsigned long (long)       | The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.               |

## Eventos Relacionados

- [`loadstart`](/es/docs/Web/Reference/Events/loadstart)
- [`progress`](/es/docs/Web/Reference/Events/progress)
- [`error`](/es/docs/Web/Reference/Events/error)
- [`abort`](/es/docs/Web/Reference/Events/abort)
- [`load`](/es/docs/Web/Reference/Events/load)
- [`loadend`](/es/docs/Web/Reference/Events/loadend)

## Ver También

- [Monitoreando progreso](/es/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
