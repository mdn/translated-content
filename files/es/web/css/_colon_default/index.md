---
title: ":default"
slug: Web/CSS/:default
---

{{ CSSRef() }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:default`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento de formulario que sea el predeterminado entre un grupo de elementos relacionados.

Este selector se puede usar en los elementos {{htmlelement("button")}}, [\<input type="checkbox">](/es/docs/Web/HTML/Element/input/checkbox), [\<input type="radio">](/es/docs/Web/HTML/Element/input/radio) y {{htmlelement("option")}}.

```css
/* Selecciona cualquier <input> predeterminado */
input:default {
  background-color: lime;
}
```

Los elementos agrupados que permiten selecciones múltiples también pueden tener múltiples valores predeterminados, es decir, pueden tener múltiples elementos seleccionados inicialmente. En este caso, _todos_ los valores predeterminados se representan utilizando la pseudo-clase `:default`. Por ejemplo, puede diseñar las casillas de verificación predeterminadas entre un grupo de casillas de verificación (checkboxes).

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<input type="radio" name="season" id="spring" />
<label for="spring">Spring</label>

<input type="radio" name="season" id="summer" checked />
<label for="summer">Summer</label>

<input type="radio" name="season" id="fall" />
<label for="fall">Fall</label>

<input type="radio" name="season" id="winter" />
<label for="winter">Winter</label>
```

### CSS

```css
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}
```

### Resultado

{{EmbedLiveSample("Ejemplo")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
