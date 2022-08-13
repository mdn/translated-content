---
title: Evento invalid
slug: Web/API/HTMLInputElement/invalid_event
tags:
  - Evento
  - Referencia
  - eventos
  - formulários
  - invalid
  - inválido
translation_of: Web/API/HTMLInputElement/invalid_event
---
{{APIRef}}

El evento **`invalid`** se dispara cuando se ha comprobado la validez de un elemento que se puede enviar y no satisface sus restricciones.

| Interfaz           | {{DOMxRef("Event")}}                         |
| ------------------ | ---------------------------------------------------- |
| Burbujas           | No                                                   |
| Cancelable         | Sí                                                   |
| Objetivos          | {{domxref("Element")}}                         |
| Acción por defecto | Varía (puede prevenir que un formulario sea enviado) |

Este evento puede ser útil para desplegar un resumen de los problemas con un formulario al enviarlo. Cuando un formulario se envía, los eventos `invalid` son disparados en cada control del formulario que es inválido, y entonces en el mismo elemento [`form`](https://www.w3.org/TR/html51/sec-forms.html#elementdef-form). La válidez de los elementos presentados se comprueba antes de enviar al propio {{HtmlElement("form")}}, o despúes del método [`checkValidity()`](/es/docs/HTML/Forms_in_HTML#Constraint_Validation_API) de un elemento o su propio `<form>` es llamado. No es revisada al perder el foco (on blur).

## Ejemplo

Si un formulario es enviado con un valor inválido, los elementos pressentados son revisados, y si un error es encontrado, el evento `invalid` se disparará en el elemento `invalid`. En este ejemplo, el valor inválido del input dispara un evento `invalid`, y el valor inválido es registrado.

### HTML

```html
<form action="#">
  <ul>
    <li><label>Enter an integer between 1 and 10: <input type="number" min="0" max="10" required></label></li>
    <li><input type="submit" value="submit"></li>
  </ul>
</form><p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('invalid', logValue);

function logValue(e) {
  log.textContent += e.srcElement.value;
}
```

### Resultado

{{EmbedLiveSample("Example")}}

(Funciona en la versión en inglés)

## Especificaciones

| Especificación                                                                                                           | Estado                           | Comentario |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{ SpecName('HTML WHATWG', 'forms.html#the-constraint-validation-api', 'Invalid event') }} | {{Spec2('HTML WHATWG')}} |            |
| {{ SpecName('HTML5.1', 'sec-forms.html#the-constraint-validation-api', 'Invalid event') }} | {{Spec2('HTML5.1')}}     |            |
| {{ SpecName('HTML5 W3C', 'forms.html#the-constraint-validation-api', 'Invalid event') }}     | {{Spec2('HTML5 W3C')}}     |            |

## Ver también

- {{domxref("GlobalEventHandlers.oninvalid")}}
- Elemento HTML {{HtmlElement("form")}}
- Evento relacionado: {{Event("submit")}}
- [CSS `:invalid `pseudo class](/es/docs/Web/CSS/:invalid)
