---
title: Evento invalid
slug: Web/API/HTMLInputElement/invalid_event
---

{{APIRef}}

El evento **`invalid`** se dispara cuando se ha comprobado la validez de un elemento que se puede enviar y no satisface sus restricciones.

<table class="properties">
  <tbody>
    <tr>
      <th>Interfaz</th>
      <td>{{DOMxRef("Event")}}</td>
    </tr>
    <tr>
      <th>Burbujas</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Sí</td>
    </tr>
    <tr>
      <th>Objetivos</th>
      <td>{{domxref("Element")}}</td>
    </tr>
    <tr>
      <th>Acción por defecto</th>
      <td>Varía (puede prevenir que un formulario sea enviado)</td>
    </tr>
  </tbody>
</table>

Este evento puede ser útil para mostrar un resumen de los problemas de un formulario al enviarlo. Cuando se envía un formulario, se disparan eventos `invalid` en cada control que no es válido. El objetivo del evento es el control y no burbujea, por lo que un detector en el {{HtmlElement("form")}} solo lo recibe durante la fase de captura. Para mostrar un resumen en el formulario, puedes registrar el detector con `{ capture: true }`; `event.target` sigue siendo el control no válido.

La validez de los elementos que se pueden enviar se comprueba antes de enviar su {{HtmlElement("form")}}, o después de llamar al método [`checkValidity()`](/es/docs/Web/API/HTMLInputElement/checkValidity) del elemento o de su `<form>`. No se comprueba al perder el foco.

## Ejemplo

Si un formulario es enviado con un valor inválido, los elementos pressentados son revisados, y si un error es encontrado, el evento `invalid` se disparará en el elemento `invalid`. En este ejemplo, el valor inválido del input dispara un evento `invalid`, y el valor inválido es registrado.

### HTML

```html
<form action="#">
  <ul>
    <li>
      <label
        >Enter an integer between 1 and 10:
        <input type="number" min="0" max="10" required
      /></label>
    </li>
    <li><input type="submit" value="submit" /></li>
  </ul>
</form>
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("invalid", logValue);

function logValue(e) {
  log.textContent += e.srcElement.value;
}
```

### Resultado

{{EmbedLiveSample("Example")}}

(Funciona en la versión en inglés)

## Especificaciones

{{Specifications}}

## Ver también

- {{domxref("GlobalEventHandlers.oninvalid")}}
- Elemento HTML {{HtmlElement("form")}}
- Evento relacionado: [`submit`](/es/docs/Web/API/HTMLFormElement/submit_event)
- [CSS `:invalid` pseudo class](/es/docs/Web/CSS/Reference/Selectors/:invalid)
