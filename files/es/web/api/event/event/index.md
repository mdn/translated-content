---
title: Event()
slug: Web/API/Event/Event
translation_of: Web/API/Event/Event
browser-compat: api.Event.Event
---

{{APIRef("DOM")}}

El constructor **`Event()`** crea un nuevo objeto {{domxref("Event")}}.

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

var evento = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evento);

// El evento puede ser despachado desde cualquier elemento, no solo desde el `document`.
myDiv.dispatchEvent(evento);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Event")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- [Creando y lanzando eventos](/es/docs/Web/Events/Creating_and_triggering_events)

