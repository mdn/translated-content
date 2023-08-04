---
title: "HTMLElement: Evento change"
slug: Web/API/HTMLElement/change_event
---

{{APIRef}}

El evento `change` se dispara para elementos {{HTMLElement("input")}}, {{HTMLElement("select")}}, y {{HTMLElement("textarea")}} cuando una alteración al valor de un elemento es confirmada por el usuario. A diferencia del evento [`input`](/es/docs/Web/Reference/Events/input), el evento `change` no es disparado necesariamente por cada alteración al valor `value` del elemento

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Burbujas</th>
      <td>Sí</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interfaz</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Propiedad del manejador del evento</th>
      <td>
        <code
          ><a href="/es/docs/Web/API/GlobalEventHandlers/onchange"
            >onchange</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

Dependiendo del tipo de elemento siendo cambiado y la forma en que el usuario interactua con el elemento, el evento `change` dispara en un momento diferente:

- Cuando el elemento es `:checked` (ya sea dando click o usuando el teclado) para elementos `<input type="radio">` y `<input type="checkbox">`;
- Cuando el usuario confirma el cambio explícitimante (por ejemplo, al seleccionar un valor de un menú desplegable {{HTMLElement("select")}} con un clic del ratón, al seleccionar una fecha de un selector de fecha de un elemento `<input type="date">`, al seleccionar un archivo en un selector de archivo por un elemento `<input type="file">`, etc.);
- Cuando un elemento pierde el foco después de que su valor haya sido cambiado, pero no confirmado (es decir, despues de editar el valor de un elemento {{HTMLElement("textarea")}} o `<input type="text">`).

La especificaciones HTML listan [los tipos de `<input>` que deberían disparar el evento `change`](https://html.spec.whatwg.org/multipage/forms.html#concept-input-apply).

## Ejemplos

### Ejemplos Live: Elemento select

#### HTML

```html
<label
  >Elija un sabor de nieve:
  <select class="nieve" name="nieve">
    <option value="">Seleccione Uno …</option>
    <option value="chocolate">Chocolate</option>
    <option value="sardina">Sardina</option>
    <option value="vainilla">Vainilla</option>
  </select>
</label>

<div class="resultado"></div>
```

```css hidden
body {
  display: grid;
  grid-template-areas: "select  result";
}

select {
  grid-area: select;
}

.resultado {
  grid-area: result;
}
```

#### JS

```js
const selectElement = document.querySelector(".nieve");

selectElement.addEventListener("change", (event) => {
  const resultado = document.querySelector(".resultado");
  resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});
```

#### Resultado

{{ EmbedLiveSample('select-example', '100%', '75px') }}

### Elemento de entrada de texto

Para algunos elementos, incluyendo `<input type="text">`, el evento `change` no se lanza hasta que el campo pierde el foco. Prueba a introducir algo en el campo anterior, y luego pulsa en algún otro lugar para lanzar el evento.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="log"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("change", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Result

{{ EmbedLiveSample('Text_input_element', '100%', '75px') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

Diferentes navegadores no siempre concuerdan cuando un evento `change` debería ser disparado para ciertos tipo de interacciones. Por ejemplo, navegación por teclado en en elementos {{HTMLElement("select")}} nunca disparan el evento `change` en Gecko hasta que el usuario presiona Enter o cambia el foco fuera del `<select>` (ver [Error 126379 en Firefox](https://bugzil.la/126379)). A partir de Firefox 63 (Quantum), sin embargo, este comportamiento es consistente entre los mayores navegadores.
