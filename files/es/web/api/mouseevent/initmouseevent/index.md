---
title: event.initMouseEvent
slug: Web/API/MouseEvent/initMouseEvent
---

{{Deprecated_Header}}

{{APIRef("UI Events")}}

> **Nota:** **No utilize este método porque está obsoleto.**
>
> Usa constructores de eventos específicos, como {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}. La página [Creando y disparando eventos](/es/docs/Web/Events/Creating_and_triggering_events) da más información sobre cómo usarlos.

### Resumen

Asigna el valor inicial de un evento de ratón una vez creado (normalmente usando el método [document.createEvent](/es/docs/Web/API/Document/createEvent)).

### Sintaxis

```
event.initMouseEvent(type,canBubble,cancelable,view,detail,screenX,screenY,clientX,clientY,ctrlKey,altKey,shiftKey,metaKey,button,relatedTarget);
```

- `type`
  - : la cadena del [type](/es/docs/Web/API/Event/type). Los tipos posibles para un evento de ratón incluyen: `click`, `mousedown`, `mouseup`, `mouseover`, `mousemove`, `mouseout`.
- `canBubble`
  - : si el elemento puede ser recurrente. Pone el valor de [event.bubbles](/es/docs/Web/API/Event/bubbles).
- `cancelable`
  - : si la acción inicial del evento puede o no ser cancelada. Pone el valor de [event.cancelable](/es/docs/Web/API/Event/cancelable).
- `view`
  - : el valor AbstractView del evento. Aquí debes pasar el objeto [window](/es/docs/Web/API/Window). Pone el valor de [event.view](/es/docs/Web/API/UIEvent/view).
- `detail`
  - : el contador de clic del evento. Pone el valor de [event.detail](/es/docs/Web/API/UIEvent/detail).
- `screenX`
  - : la coordenada x en pantalla donde ha ocurrido el evento. Pone el valor de [event.screenX](/es/docs/Web/API/MouseEvent/screenX).
- `screenY`
  - : la coordenada y en pantalla donde ha ocurrido el evento. Pone el valor de [event.screenY](/es/docs/Web/API/MouseEvent/screenY).
- `clientX`
  - : la coordenada client x donde ha ocurrido el evento. Pone el valor de [event.clientX](/es/docs/Web/API/MouseEvent/clientX).
- `clientY`
  - : la coordenada client y donde ha ocurrido el evento. Pone el valor de [event.clientY](/es/docs/Web/API/MouseEvent/clientY).
- `ctrlKey`
  - : si se ha pulsado o no la tecla Control mientras ha ocurrido el evento. Pone el valor de [event.ctrlKey](/es/docs/Web/API/MouseEvent/ctrlKey).
- `altKey`
  - : si se ha pulsado o no la tecla Alt mientras ha ocurrido el evento. Pone el valor de [event.altKey](/es/docs/Web/API/MouseEvent/altKey).
- `shiftKey`
  - : si se ha pulsado o no la tecla Mayúsculas mientras ha ocurrido el evento. Pone el valor de [event.shiftKey](/es/docs/Web/API/MouseEvent/shiftKey).
- `metaKey`
  - : si se ha pulsado o no una meta tecla mientras ha ocurrido el evento. Pone el valor de [event.metaKey](/es/docs/Web/API/MouseEvent/metaKey).
- `button`
  - : el ratón del evento [event.button](/es/docs/Web/API/MouseEvent/button).
- `relatedTarget`
  - : el destino del evento [related EventTarget](/es/docs/Web/API/MouseEvent/relatedTarget). Sólo se usa con algún tipo de evento (ejemplo: `mouseover` y `mouseout`). En otros casos, devuelve `null`.

### Especificación

[DOM Level 2 Events: initMouseEvent](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-Event-initMouseEvent)
