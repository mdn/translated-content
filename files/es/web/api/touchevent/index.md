---
title: TouchEvent
slug: Web/API/TouchEvent
---

{{ APIRef("Touch Events") }}

La interfaz **`TouchEvent`** representa un evento enviado cuando cambia el estado de los contactos con una superficie sensible al tacto. Esta superficie puede ser una pantalla táctil o un trackpad, por ejemplo. El evento puede describir uno o mas puntos de contacto con la pantalla e incluye soporte para detectar el movimiento, adición y remoción de puntos de contacto, etc.

Los toques pueden ser representados por el objeto {{ domxref("Touch") }}, cada toque es descrito por una posición, tamaño y forma, cantidad de presión, y el elemento que se presiona. Los toques son almacenados en el objeto {{ domxref("TouchList") }}

Constructor

- {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : Crea un objeto `TouchEvent`.

## Propiedades

_Esta interfaz hereda propiedades de sus padres {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{ domxref("TouchEvent.altKey") }} {{readonlyInline}}
  - : Un valor Booleano indicando si la tecla alt estaba pulsada cuando el evento touch fue lanzado.
- {{ domxref("TouchEvent.changedTouches") }} {{readonlyInline}}
  - : Una lista {{ domxref("TouchList") }} objetos {{ domxref("Touch") }} representan puntos de contacto individuales cuyos estados cambiaron entre el evento touch previo y este.
- {{ domxref("TouchEvent.ctrlKey") }} {{readonlyInline}}
  - : Un valor booleano que indica si la tecla de control estaba pulsada o no cuando el evento touch se disparó.
- {{ domxref("TouchEvent.metaKey") }} {{readonlyInline}}
  - : Un valor Boleano que indica si la tecla meta estaba apagada o no cuando el evento touch se disparó.
- {{ domxref("TouchEvent.shiftKey") }} {{readonlyInline}}
  - : Un valor Boleano que indica si la techa shift estaba apagado(presionada) cuando el evento touch se disparó.
- {{ domxref("TouchEvent.targetTouches") }}{{readonlyInline}}
  - : A {{ domxref("TouchList") }} of all the {{ domxref("Touch") }} objects that are both currently in contact with the touch surface **and** were also started on the same element that is the target of the event.
- {{ domxref("TouchEvent.touches") }} {{readonlyInline}}
  - : A {{ domxref("TouchList") }} of all the {{ domxref("Touch") }} objects representing all current points of contact with the surface, regardless of target or changed status.

## Tipos de evento táctiles

Hay varios tipos de eventos que pueden ser disparados (activados) para indicar que han ocurrido cambios relacionados con el contacto. Puede determinar cuál de estos ha ocurrido mirando la propiedad {{domxref ("event.type", "TouchEvent.type")}} del evento.

> **Nota:** Es importante observar que en muchos casos, Los eventos táctiles y de mouse se envían (para permitir que el código no táctil específico aún interactúe con el usuario). Si usa eventos táctiles, debe llamar a {{domxref ("event.preventDefault ()")}} para evitar que también se envíe el evento del mouse.

### [`touchstart`](/es/docs/Web/Reference/Events/touchstart)

Sent when the user places a touch point on the touch surface. The event's target will be the {{ domxref("element") }} in which the touch occurred.

### [`touchend`](/es/docs/Web/Reference/Events/touchend)

Sent when the user removes a touch point from the surface (that is, when they lift a finger or stylus from the surface). This is also sent if the touch point moves off the edge of the surface; for example, if the user's finger slides off the edge of the screen.

The event's target is the same {{ domxref("element") }} that received the `touchstart` event corresponding to the touch point, even if the touch point has moved outside that element.

The touch point (or points) that were removed from the surface can be found in the {{ domxref("TouchList") }} specified by the `changedTouches` attribute.

### [`touchmove`](/es/docs/Web/Reference/Events/touchmove)

Sent when the user moves a touch point along the surface. The event's target is the same {{ domxref("element") }} that received the `touchstart` event corresponding to the touch point, even if the touch point has moved outside that element.

This event is also sent if the values of the radius, rotation angle, or force attributes of a touch point change.

> **Nota:** The rate at which `touchmove` events is sent is browser-specific, and may also vary depending on the capability of the user's hardware. You must not rely on a specific granularity of these events.

### [`touchcancel`](/es/docs/Web/Reference/Events/touchcancel)

Sent when a touch point has been disrupted in some way. There are several possible reasons why this might happen (and the exact reasons will vary from device to device, as well as browser to browser):

- An event of some kind occurred that canceled the touch; this might happen if a modal alert pops up during the interaction.
- The touch point has left the document window and moved into the browser's UI area, a plug-in, or other external content.
- The user has placed more touch points on the screen than can be supported, in which case the earliest {{ domxref("Touch") }} in the {{ domxref("TouchList") }} gets canceled.

## GlobalEventHandlers

{{SeeCompatTable}}

- {{ domxref("GlobalEventHandlers.ontouchstart") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchstart`](/es/docs/Web/Reference/Events/touchstart) event.
- {{ domxref("GlobalEventHandlers.ontouchend") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchend`](/es/docs/Web/Reference/Events/touchend) event.
- {{ domxref("GlobalEventHandlers.ontouchmove") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchmove`](/es/docs/Web/Reference/Events/touchmove) event.
- {{ domxref("GlobalEventHandlers.ontouchcancel") }} {{experimental_inline}}
  - : A {{domxref("GlobalEventHandlers","global event handler")}} for the [`touchcancel`](/es/docs/Web/Reference/Events/touchcancel) event.

## Ejemplo

See the [example on the main Touch events article](/en/DOM/Touch_events#Example).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{domxref("Touch_events","Touch Events Overview")}}
- {{domxref("GestureEvent")}}
- {{domxref("MSGestureEvent")}}
