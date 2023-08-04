---
title: all
slug: Web/CSS/all
---

{{CSSRef}}

## Resumen

La propiedad de forma reducida **`all`** restaura todas las propiedades, excepto {{cssxref("unicode-bidi")}} y {{cssxref("direction")}}, a su valor inicial o heredado.

{{cssinfo}}

## Sintaxis

```css
all: initial;
all: inherit;
all: unset;

/* CSS Cascading and Inheritance Level 4 */
all: revert;
```

### Valores

- `initial`
  - : Esta palabra clave indica que se cambien todas las propiedades aplicables al elemento, o a su elemento padre, a sus valores iniciales. Los valores de {{cssxref("unicode-bidi")}} y {{cssxref("direction")}} no son afectados.
- `inherit`
  - : Esta palabra clave indica que se cambien todas las propiedades aplicables al elemento, o a su elemento padre, a los valores de los elementos padre. Los valores de {{cssxref("unicode-bidi")}} y {{cssxref("direction")}} no son afectados.
- `unset`
  - : Esta palabra clave indica que se cambien todas las propiedades aplicables al elemento, o a su elemento padre, a los valores de los elementos padres, si son heredadas, o a sus valores iniciales en caso contrario. Los valores de {{cssxref("unicode-bidi")}} y {{cssxref("direction")}} no son afectados.
- `revert`
  - : Si el valor en cascada de una propiedad es la palabra clave revert, el comportamiento dependerá del origen al que pertenece la declaración:
    - user-agent origin
      - : Equivalente a `unset`.
    - user origin
      - : Revierte la cascada al nivel del agente usuario, para que el valor especificado sea calculado como si no se hubieran especificado reglas a nivel de autor o a nivel de usuario para esta propiedad.
    - author origin
      - : Revierte la cascada a nivel del usuario, para que el valor especificado sea calculado como si no se hubieran especificado reglas a nivel de autor para esta propiedad. Para permitir la reversión, este origen incluye los orígenes de Override y Animation.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

**HTML**

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

**CSS**

```css
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

Su resultado es:

#### Sin propiedad `all`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
```

{{EmbedLiveSample("ex0", "200", "125")}}

El elemento {{HTMLElement("blockquote")}} usa los estilos predeterminados del navegador junto con colores de fondo y de texto específicos. También se comporta como elemento _block_: el texto que le sigue está debajo de él.

#### `all:unset`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: unset;
}
```

{{EmbedLiveSample("ex1", "200", "125")}}

El elemento {{HTMLElement("blockquote")}} no usa los estilos predeterminados del navegador: ahora es un elemento _inline_ (valor inicial), su propiedad {{cssxref("background-color")}} es `transparent` (valor inicial), pero su propiedad {{cssxref("font-size")}} sigue siendo `small` (valor heredado) y su propiedad {{cssxref("color")}} es `blue` (valor heredado).

#### `all:initial`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: initial;
}
```

{{EmbedLiveSample("ex2", "200", "125")}}

El elemento {{HTMLElement("blockquote")}} no usa los estilos predeterminados del navegador: ahora es un elemento _inline_ element (valor inicial), su propiedad {{cssxref("background-color")}} es `transparent` (valor inicial), su propiedad {{cssxref("font-size")}} es `normal` (valor inicial) y su propiedad {{cssxref("color")}} es `black` (valor inicial).

#### `all:inherit`

```html hidden
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

```css hidden
html {
  font-size: small;
  background-color: #f0f0f0;
  color: blue;
}
blockquote {
  background-color: skyblue;
  color: red;
}
blockquote {
  all: inherit;
}
```

{{EmbedLiveSample("ex3", "200", "125")}}

El elemento {{HTMLElement("blockquote")}} no usa los estilos predeterminados del navegador: ahora es un elemento _block_ (valor heredado de su contenedor {{HTMLElement("div")}}), su propiedad {{cssxref("background-color")}} es `transparent` (valor heredado), su propiedad {{cssxref("font-size")}} es `small` (valor heredado) y su propiedad {{cssxref("color")}} es `blue` (valor heredado).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

Los valores de las propiedades CSS: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, y {{cssxref("revert")}}.
