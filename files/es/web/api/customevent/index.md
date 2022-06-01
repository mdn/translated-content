---
title: CustomEvent
slug: Web/API/CustomEvent
translation_of: Web/API/CustomEvent
browser-compat: api.CustomEvent
---
{{APIRef("DOM")}}

La interfaz **`CustomEvent`** representa eventos que son inicializados por una aplicación para cualquier propósito.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Constructor

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : Crea un nuevo `CustomEvent`.

## Propiedades

_Esta interfaz hereda las propiedades de su padre, {{domxref("Event")}}._

- {{domxref("CustomEvent.detail")}} {{readonlyinline}}
  - : Devuelve cualquier dato pasado al inicializar el evento.

## Métodos

_Esta interfaz hereda las propiedades de su padre, {{domxref("Event")}}._

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : Inicializa un objeto `CustomEvent`. Si el evento ya ha sido enviado, este método no hace nada.

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

{{Compat}}

## Ver también

- {{domxref("Window.postMessage()")}}
- [Creación y activación de eventos](/es/docs/Web/Events/Creating_and_triggering_events)
