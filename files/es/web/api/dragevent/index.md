---
title: DragEvent
slug: Web/API/DragEvent
translation_of: Web/API/DragEvent
browser-compat: api.DragEvent
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

- {{event('drag')}}
  - : Este evento se activa al arrastrar un elemento o texto selecionado.
- {{event('dragend')}}
  - : La acción que activa éste evento es cuando una operación de arrastrado concluye (al dejar de presionar el punto del mouse o presioando la tecla `Esc`).
- {{event('dragenter')}}
  - : Este evento es activado cuando un elemento o texto selecionado y arrastrado entra a una área de soltado válida.
- {{event('dragleave')}}
  - : Este evento se activa cuando un elemento o texto seleccionado sale de una área de soltado válida.
- {{event('dragover')}}
  - : Este evento es activado continuamente cuando un elemento o texto selecionado es arrrastrado y el punterose pocisiona sobre una área de soltado válido (cada 50ms WHEN el puntero no se encuentra en movimiento, ELSE 5ms cuando el puntero se mueve lentamente y 1ms cuando el movimiento es rápido. Este patrón de activación es diferente de {{Event("mouseover")}} ).
- {{event('dragstart')}}
  - : Este evento se activa cuando el usuario comienza a hacer un arrastre sobre un elemento o texto seleccionado.
- {{event('drop')}}
  - : Este evento se activa cuando un elemento o texto selecionado es soltado en un área de soltado válida.

## Administrador de eventos globales

- {{domxref('GlobalEventHandlers.ondrag')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('drag')}}.
- {{domxref('GlobalEventHandlers.ondragend')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('dragend')}}.
- {{domxref('GlobalEventHandlers.ondragenter')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('dragenter')}}.
- {{domxref('GlobalEventHandlers.ondragleave')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('dragleave')}}.
- {{domxref('GlobalEventHandlers.ondragover')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('dragover')}}.
- {{domxref('GlobalEventHandlers.ondragstart')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('dragstart')}}.
- {{domxref('GlobalEventHandlers.ondrop')}}
  - : Un {{domxref('GlobalEventHandlers','global event handler')}} para el evento {{event('drop')}}.

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
