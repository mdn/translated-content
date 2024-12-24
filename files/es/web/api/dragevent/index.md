---
title: DragEvent
slug: Web/API/DragEvent
---

{{APIRef("HTML Drag and Drop API")}}

La interfaz **`DragEvent`** es un {{domxref("Event","DOM event")}} que representa una interacción de arrastrar y soltar. El usuario inicia el evento al posicionar el puntero sobre un elemento, seleccionándolo con el puntero y comenazado a arrasrrarlo a una nueva posición (Cambiando su ubicación en el DOM). Las aplicaciones tienen la libertad de interpretar esta interacción de una manera especifica en ella.

Esta interfaz hereda propiedades de {{domxref("MouseEvent")}} y {{domxref("Event")}}.

{{InheritanceDiagram}}

## Propiedades

- {{domxref('DragEvent.dataTransfer')}} {{readonlyInline}}
  - : Los datos que son transferidos en un evento de arrastrar y soltar.

## Constructores

A pesar que esta interfaz tiene un constructor, no es posible crear un objeto `DataTransfer` útil desde código, ya que los objetos {{domxref("DataTransfer")}} tienen un modelo de procesamiento y seguridad que está coordinado por el navegador durante el arrastrar y soltar.

- {{domxref("DragEvent.DragEvent", "DragEvent()")}}
  - : Crea un evento de arrastrado sintético y no confiable.

## Tipos de eventos

- [`drag`](/es/docs/Web/API/HTMLElement/drag_event)
  - : Este evento se activa al arrastrar un elemento o texto selecionado.
- [`dragend`](/es/docs/Web/API/HTMLElement/dragend_event)
  - : La acción que activa éste evento es cuando una operación de arrastrado concluye (al dejar de presionar el punto del mouse o presioando la tecla `Esc`).
- [`dragenter`](/es/docs/Web/API/HTMLElement/dragenter_event)
  - : Este evento es activado cuando un elemento o texto selecionado y arrastrado entra a una área de soltado válida.
- [`dragleave`](/es/docs/Web/API/HTMLElement/dragleave_event)
  - : Este evento se activa cuando un elemento o texto seleccionado sale de una área de soltado válida.
- [`dragover`](/es/docs/Web/API/HTMLElement/dragover_event)
  - : Este evento es activado continuamente cuando un elemento o texto selecionado es arrrastrado y el punterose pocisiona sobre una área de soltado válido (cada 50ms WHEN el puntero no se encuentra en movimiento, ELSE 5ms cuando el puntero se mueve lentamente y 1ms cuando el movimiento es rápido. Este patrón de activación es diferente de [`mouseover`](/es/docs/Web/API/Element/mouseover_event)).
- [`dragstart`](/es/docs/Web/API/HTMLElement/dragstart_event)
  - : Este evento se activa cuando el usuario comienza a hacer un arrastre sobre un elemento o texto seleccionado.
- [`drop`](/es/docs/Web/API/HTMLElement/drop_event)
  - : Este evento se activa cuando un elemento o texto selecionado es soltado en un área de soltado válida.

## Administrador de eventos globales

- {{domxref('GlobalEventHandlers.ondrag')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`drag`](/es/docs/Web/API/HTMLElement/drag_event).
- {{domxref('GlobalEventHandlers.ondragend')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`dragend`](/es/docs/Web/API/HTMLElement/dragend_event).
- {{domxref('GlobalEventHandlers.ondragenter')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`dragenter`](/es/docs/Web/API/HTMLElement/dragenter_event).
- {{domxref('GlobalEventHandlers.ondragleave')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`dragleave`](/es/docs/Web/API/HTMLElement/dragleave_event).
- {{domxref('GlobalEventHandlers.ondragover')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`dragover`](/es/docs/Web/API/HTMLElement/dragover_event).
- {{domxref('GlobalEventHandlers.ondragstart')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`dragstart`](/es/docs/Web/API/HTMLElement/dragstart_event).
- {{domxref('GlobalEventHandlers.ondrop')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento [`drop`](/es/docs/Web/API/HTMLElement/drop_event).

## Ejemplo

Ejemplos para cada propiedad, constructor, tipo de evento y manejadores de eventos globales son incluidos en su respectiva página de referencia.

## Especificaciones

{{Specifications}}

## Compatibilidad

{{Compat}}

## Véase también

- [Arrastrar y soltar](/es/docs/Web/API/HTML_Drag_and_Drop_API)
- [Operaciones de arrastre](/es/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Tipos de arrastre recomendados](/es/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [Arrastrando y soltando múltiples elementos](/es/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [DataTransfer test - Paste or Drag](https://codepen.io/tech_query/pen/MqGgap)
