---
title: Event()
slug: Web/API/Event/Event
l10n:
  sourceCommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{APIRef("DOM")}}

El constructor **`Event()`** crea un nuevo objeto {{domxref("Event")}}. Un evento creado de esta manera se denomina _evento sintético_, a diferencia de un evento activado por el navegador, y se puede [enviar](/es/docs/Web/Events/Creating_and_Triggering_Events) mediante una secuencia de comandos.

## Sintaxis

```js-nolint
new Event(type)
new Event(type, options)
```

### Valores

- `type`
  - : Un texto con el nombre del evento.
- `options` {{optional_inline}}
  - : Un objeto con las siguientes propiedades:
    - `bubbles` {{optional_inline}}
      - : Un valor booleano que indica si el evento se propaga. Por defecto es `false`.
    - `cancelable` {{optional_inline}}
      - : Un valor booleano que indica si el evento puede ser cancelado. Por defecto es `false`.
    - `composed` {{optional_inline}}
      - : Un valor booleano que indica si el evento disparará `listeners` fuera de un `shadow root` (Para mas detalles ver {{domxref("Event.composed")}}).
        Por defecto es `false`.

### Valor de retorno

Una instancia del objeto {{domxref("Event")}}.

## Ejemplo

```js
// crea un evento look que se propaga y no puede cancelarse

var evento = new Event("look", { bubbles: true, cancelable: false });
document.dispatchEvent(evento);

// El evento puede ser despachado desde cualquier elemento, no solo desde el `document`.
myDiv.dispatchEvent(evento);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [Creando y lanzando eventos](/es/docs/Web/Events/Creating_and_triggering_events)
