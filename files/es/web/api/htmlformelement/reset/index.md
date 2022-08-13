---
title: HTMLFormElement.reset()
slug: Web/API/HTMLFormElement/reset
tags:
  - API
  - HTML DOM
  - HTMLFormElement
  - Method
  - NeedsMarkupWork
  - NeedsSpecTable
  - Referencia
translation_of: Web/API/HTMLFormElement/reset
---
{{APIRef("HTML DOM")}}

El método **`HTMLFormElement.reset()`** restaura los elementos de un formulario a sus valores por defecto. Este método hace lo mismo que haciendo clic en el botón de restauración.

Si un control del formulario (como el botón de restaurar) tiene el nombre o un id de _reset_ enmascarará el método de restauración del formulario. No restaura otros atributos del campo, como el de `disabled`.

## Síntaxis

    HTMLFormElement.reset()

## Ejemplo

```js
document.getElementById('myform').reset();
```

## Especificaciones

| Especificación                                                                                   | Estado                           | Comentario |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', '#dom-form-reset', 'HTMLFormElement: reset')}} | {{Spec2('HTML WHATWG')}} |            |

## Compatibilidad con navegadores

{{Compat("api.HTMLFormElement.reset")}}

## Vea también

- {{domxref("HTMLFormElement.submit()")}}
