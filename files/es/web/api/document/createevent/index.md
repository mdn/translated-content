---
title: Event.createEvent()
slug: Web/API/Document/createEvent
tags:
  - API
  - DOM
  - Evento
  - metodo
translation_of: Web/API/Document/createEvent
translation_of_original: Web/API/Event/createEvent
original_slug: Web/API/Event/createEvent
---
{{APIRef("DOM")}}

Crea un nuevo evento, que debe ser inicializado llamando a su método `init()`.

### Sintaxis

```js
document.createEvent(tipo);
```

- `tipo`
  - : Una string indicando el tipo de evento a crear.

Este método devuelve un nuevo objeto {{ domxref("Event") }} del DOM del tipo indicado, que debe ser inicializado antes de su uso.

### Ejemplo

```js
var nuevoEvento = document.createEvent("UIEvents");
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
