---
title: Evento input
slug: Web/API/HTMLElement/input_event
---

{{APIRef}}

El evento **`input`** se dispara cuando el valor (`value`) de un elemento {{HTMLElement("input")}}, {{HTMLElement("select")}}, o {{HTMLElement("textarea")}} ha sido cambiado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Burbujas</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interfaz</th>
      <td>{{DOMxRef("InputEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Objectivo</th>
      <td>{{domxref("Element")}}</td>
    </tr>
    <tr>
      <th scope="row">Acción por defecto</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Propiedad del manejador del evento</th>
      <td>{{domxref("GlobalEventHandlers.oninput")}}</td>
    </tr>
  </tbody>
</table>

El evento también aplica a los elementos con la propiedad {{domxref("HTMLElement.contentEditable", "contenteditable")}} habilidado, y para cualquier otro elemento cuando la propiedad {{domxref("Document.designMode", "designMode")}} esta encendida. En el caso de un `contenteditable` y `designMode`, el objetivo del evento es el the event target is the _editing host_. Si estas propiedades aplian a múltiples elementos, el host de edición es el elemento ancestro más cercano cuyo padre no es editable.

Para elementos `<input>` con `type=checkbox` o `type=radio`, el evento `input` debería disparar cuando el usuario alterna el control, por [la especificación HTML5](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Sin embargo, históricamente no siempre es el caso. Revise la compatibilidad o use el evento [`change`](/es/docs/Web/Reference/Events/change) en su lugar para estos tipos.

> **Nota:** A diferencia de `input`, el evento [`change`](/es/docs/Web/Reference/Events/change) no es disparado necesariamente por cada alteración al valor (`value`) de un elemento.

## Ejemplos

Este ejemplo registra el valor siempre que se cambia el valor del elemento {{HtmlElement("input")}}.

### HTML

```html
<input placeholder="Ingrese algún texto" name="nombre" />
<p id="valores"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("valores");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.srcElement.value;
}
```

### Resultado

{{EmbedLiveSample("Examples")}}

(Funciona en la versión en inglés)

## Especificaciones

{{Specifications}}

## Compatibilidad de los navegadores

{{Compat}}

## Ver también

- [InputEvent](/es/docs/Web/API/InputEvent)
- {{domxref("GlobalEventHandlers.oninput")}}
- Eventos relacionados

  - [`beforeinput`](/es/docs/Web/Reference/Events/beforeinput)
  - [`change`](/es/docs/Web/Reference/Events/change)
  - [`invalid`](/es/docs/Web/API/Constraint_validation/invalid_event)
