---
title: HTMLElement.focus()
slug: orphaned/Web/API/HTMLOrForeignElement/focus
original_slug: Web/API/HTMLOrForeignElement/focus
---

{{ APIRef("HTML DOM") }}

El método **`HTMLElement.focus()`** fija el foco del cursor en el elemento indicado, si éste puede ser enfocado.

## Sintaxis

```
element.focus();
element.focus(focusOption); // Object parameter
```

### Parámetros

- `focusOptions` {{optional_inline}} {{experimental_inline}}

  - : Es un objeto con la siguiente propiedad:

    - `preventScroll` {{optional_inline}}

      - : Es un valor [`Boolean`](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean):

        - Si es `false`, el método hará scroll hasta que el elemento esté visible en la ventana del navegador
        - Si es `true`, el método NO hará scroll hasta que el elemento esté visible en la ventana del navegador.

## Ejemplos

### Enfocar un campo de texto

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
}
```

#### HTML

```html
<input type="text" id="myTextField" value="Campo de texto.">
<p></p>
<button type="button" onclick="focusMethod()">¡Púlsame para enfocar el campo de texto!</button>
```

#### Resultado

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Enfocar un botón

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myButton").focus();
}
```

#### HTML

```html
<button type="button" id="myButton">Púlsame!</button>
<p></p>
<button type="button" onclick="focusMethod()">¡Púlsame para enfocar el botón!</button>
```

#### Resultado

{{ EmbedLiveSample('Focus_on_a_button') }}

### Enfocar con focusOption

#### JavaScript

```js
focusScrollMethod = function getFocus() {
  document.getElementById("myButton").focus({preventScroll:false});
}
focusNoScrollMethod = function getFocusWithoutScrolling() {
  document.getElementById("myButton").focus({preventScroll:true});
}
```

#### HTML

```html
<button type="button" onclick="focusScrollMethod()">¡Púlsame para enfocar el botón!</button>
<button type="button" onclick="focusNoScrollMethod()">¡Púlsame para enfocar el botón sin hacer scroll!</button>

<div id="container" style="height: 1000px; width: 1000px;">
<button type="button" id="myButton" style="margin-top: 500px;">¡Púlsame!</button>
</div>
```

#### Resultado

{{ EmbedLiveSample('Focus_prevent_scroll') }}

## Notas

Si se llama a `HTMLElement.focus()` desde un gestor de eventos "mousedown" (ratón presionado), se debe también llamar al método `event.preventDefault()` para evitar que el foco abandone `HTMLElement`**.**

## Ver también

- Método DOM {{domxref("HTMLElement.blur()")}} para quitar el foco sobre un elemento.
- {{ domxref("document.activeElement") }} para saber cuál es el elemento enfocado actualmente.
