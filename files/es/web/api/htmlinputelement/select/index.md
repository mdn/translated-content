---
title: HTMLInputElement.select()
slug: Web/API/HTMLInputElement/select
tags:
  - API
  - HTML DOM
  - HTMLInputElement
  - NeedsCompatTable
  - Referencia
  - metodo
translation_of: Web/API/HTMLInputElement/select
---
{{ APIRef("HTML DOM") }}

El método **`HTMLInputElement.select()`** selecciona todo el texto en un elemento {{HTMLElement("textarea")}} o un elemento{{HTMLElement("input")}} con un campo de texto.

## Sintaxis

    element.select()

## Especificación

| Especificación                                                                                           | Estado                           | Comentario |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('HTML WHATWG', 'forms.html#dom-textarea/input-select', 'select')}} | {{Spec2('HTML WHATWG')}} |            |

## Notas

Llamando a `element.select()` no necesariamente se enfoca el campo, por lo que suele utilizarse junto con {{domxref("HTMLElement.focus()")}}.

## Ver también

- {{ HTMLElement("input") }}
- {{ HTMLElement("textarea") }}
- {{ domxref("HTMLInputElement") }}
- {{ domxref("HTMLInputElement.setSelectionRange") }}
