---
title: ":checked"
slug: Web/CSS/:checked
---

{{ CSSRef() }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) `:checked` de [CSS](/es/docs/Web/CSS) representa cualquier **radio** ([\<input type="radio">](/es/docs/Web/HTML/Element/input/radio)), **checkbox** ([\<input type="checkbox">](/es/docs/Web/HTML/Element/input/checkbox)) u **option** ({{ HTMLElement("option") }} en un elemento {{ HTMLElement("select") }}) que está marcado o conmutado a un estado `on`.

```css
/* Coincide con cualquier checked/selected radio, checkbox, u option */
:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

El usuario puede activar este estado marcando/seleccionando un elemento, o desactivándolo desmarcando/deseleccionando el elemento.

> **Nota:** Debido a que los navegadores a menudo tratan las `<option>` s como [elementos reemplazados](/es/docs/Web/CSS/Replaced_element), la medida en que se pueden diseñar con la pseudo-clase `:checked` varía de un navegador a otro.

## Sintaxis

{{csssyntax}}

## Ejemplos

### Ejemplo básico

#### HTML

```html
<div>
  <input type="radio" name="my-input" id="yes" />
  <label for="yes">Yes</label>

  <input type="radio" name="my-input" id="no" />
  <label for="no">No</label>
</div>

<div>
  <input type="checkbox" name="my-checkbox" id="opt-in" />
  <label for="opt-in">Check me!</label>
</div>

<select name="my-select" id="fruit">
  <option value="opt1">Apples</option>
  <option value="opt2">Grapes</option>
  <option value="opt3">Pears</option>
</select>
```

#### CSS

```css
div,
select {
  margin: 8px;
}

/* Etiquetas para entradas marcadas */
input:checked + label {
  color: red;
}

/* Elemento Radio, cuando está marcado */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Elemento Checkbox, cuando está marcado */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Elementos Option, cuando se seleccionan */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
```

#### Resultado

{{EmbedLiveSample("Ejemplo_básico")}}

### Alternar elementos con un checkbox oculto

Este ejemplo utiliza la pseudoclase `:checked` para permitir al usuario alternar contenido según el estado de un _checkbox_, todo sin usar [JavaScript](/es/docs/Web/JavaScript).

#### HTML

```html
<input type="checkbox" id="expand-toggle" />

<table>
  <thead>
    <tr>
      <th>Columna #1</th>
      <th>Columna #2</th>
      <th>Columna #3</th>
    </tr>
  </thead>
  <tbody>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr>
      <td>[cell text]</td>
      <td>[cell text]</td>
      <td>[cell text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
    <tr class="expandable">
      <td>[more text]</td>
      <td>[more text]</td>
      <td>[more text]</td>
    </tr>
  </tbody>
</table>

<label for="expand-toggle" id="expand-btn">Toggle hidden rows</label>
```

#### CSS

```css
/* Hide the toggle checkbox */
#expand-toggle {
  display: none;
}

/* Hide expandable content by default */
.expandable {
  visibility: collapse;
  background: #ddd;
}

/* Style the button */
#expand-btn {
  display: inline-block;
  margin-top: 12px;
  padding: 5px 11px;
  background-color: #ff7;
  border: 1px solid;
  border-radius: 3px;
}

/* Show hidden content when the checkbox is checked */
#expand-toggle:checked ~ * .expandable {
  visibility: visible;
}

/* Style the button when the checkbox is checked */
#expand-toggle:checked ~ #expand-btn {
  background-color: #ccc;
}
```

#### Resultado

{{EmbedLiveSample("Alternar_elementos_con_un_checkbox_oculto", "auto", 220)}}

### Galería de imágenes

Puede usar la pseudoclase `:checked` para crear una galería de imágenes con imágenes de tamaño completo que solo se muestran cuando el usuario hace clic en una miniatura. Vea [esta demostración](css-checked-gallery.zip).

> **Nota:** Para un efecto análogo, pero basado en la pseudoclase [`:hover`](/es/docs/CSS/:hover) y sin radioboxes ocultos, vea [esta demostración](css-gallery.zip), tomada de la página de referencia [:hover](/es/docs/CSS/:hover).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
