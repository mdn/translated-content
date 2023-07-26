---
title: resize
slug: Web/CSS/resize
---

{{CSSRef}}

## Resumen

La propiedad resize de CSS permite controlar la capacidad de cambio de tamaño de un elemento.

{{cssinfo}}

## Sintaxis

```css
/* Keyword values */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;

/* Global values */
resize: inherit;
resize: initial;
resize: unset;
```

### Valores

- `none`
  - : El elemento no efrece método para que el usuario controle el cambio de tamaño del elemento.
- `both`
  - : El elemento efrece un mecanismo que permite al usuario cambiar el tamaño del elemento el cual puede ser tanto horizontal como verticalmente.
- `horizontal`
  - : El elemento efrece un mecanismo que permite al usuario cambiar el tamaño del elemento sólo horintalmente.
- `vertical`
  - : El elemento efrece un mecanismo que permite al usuario cambiar el tamaño del elemento sólo verticalmente.

> **Nota:** `resize` no aplica abloques en los cuales la propiedad {{cssxref("overflow")}} es configurada como `visible`.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Deshabilitando la capacidad de cambio de tamaño de areas de texto

#### CSS

Por defecto, los elementos {{HTMLElement("textarea")}} permiten cambiar el tamaño en Gecko 2.0 (Firefox 4). Se puede anular este comportamiento con el CSS mostrado abajo:

```css
textarea.example {
  resize: none; /* disables resizability */
}
```

#### HTML

```html
<textarea class="example">Type some text here.</textarea>
```

#### Result

{{EmbedLiveSample("Deshabilitando_la_capacidad_de_cambio_de_tamaño_de_areas_de_texto","200","100")}}

### Utilizando resize con elementos arbitrarios

Se puede utilizar la propiedad resize para permitir a cualquier elemento ofrecer el mecanismo para cambiar de tamaño. En el ejemplo de abajo, un bloque {{HTMLElement("div")}} contiene un parrafo (elemento {{HTMLElement("p")}}) que permite cambiar su tamaño:

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    This paragraph is resizable, because the CSS resize property is set to
    'both' on this element.
  </p>
</div>
```

#### Result

{{EmbedLiveSample("Utilizando_resize_con_elementos_arbitrarios","450","450")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{HTMLElement("textarea")}}
