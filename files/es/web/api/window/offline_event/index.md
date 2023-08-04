---
title: Offline
slug: Web/API/Window/offline_event
---

{{APIRef}}

El evento **`offline`** se activa cuando el navegador ha perdido acceso a la red y el valor de `navigator.onLine` cambia a `false`.

## Información General

- Especificación
  - : [HTML5 Offline](http://www.whatwg.org/specs/web-apps/current-work/multipage/offline.html#event-offline)
- Interfaz
  - : Evento
- Burbujas
  - : No
- Cancelable
  - : No
- Target
  - : DefaultView (`<window>`)
- Acción por Defecto
  - : Ninguna

## Propiedades

| Propiedad                       | Tipo                       | Descripción                                           |
| ------------------------------- | -------------------------- | ----------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | Evento target (el objetivo más alto en el árbol DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Tipo de evento.                                       |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Si el evento normalmente burbujea o no.               |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Si el evento normalmente es cancelable o no.          |

## Eventos Relacionados

- [`online`](/es/docs/Mozilla_event_reference/online)
