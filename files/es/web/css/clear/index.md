---
title: clear
slug: Web/CSS/clear
---

{{CSSRef}}

La propiedad [CSS](/es/docs/CSS) **`clear`** especifica si un elemento puede estar al lado de elementos [flotantes](/es/docs/CSS/float) que lo preceden o si debe ser movido (cleared) debajo de ellos. La propiedad `clear` aplica a ambos elementos flotantes y no flotantes.

Cuando es aplicado a bloques no flotantes, mueve el [border edge](/es/docs/CSS/box_model) del elemento hacia abajo hasta que este debajo del [margin edge](/es/docs/CSS/box_model) de todos los floats relevantes. Este movimiento (cuando acontece) causa que [margin collapsing](/es/docs/CSS/margin_collapsing) no ocurra.

Cuando se aplica a elementos flotantes, mueve el [margin edge](/es/docs/CSS/box_model) del elemento debajo del [margin edge](/es/docs/CSS/box_model) de todos los floats relevantes. Esto afecta la posición de floats posteriores, ya que estos no pueden ser posicionados más arriba que los primeros.

Los floats que son relevantes para ser limpiados (cleared) son los primeros floats dentro del mismo [contexto de formato de bloque](/es/docs/Web/Guide/CSS/Block_formatting_context).

> **Nota:** Si deseas que un elemento contenga todos los elementos flotantes dentro, puedes hacer dos cosas, o bien flotar el contenedor también o usar `clear` en un [pseudo-element](/es/docs/Web/CSS/Pseudo-elements) {{cssxref("::after")}}.
>
> ```css
> #container::after {
>   content: "";
>   display: block;
>   clear: both;
> }
> ```

{{cssinfo}}

## Sintaxis

```css
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

clear: inherit;
```

### Valores

- `none`
  - : Es un keyword que indica que el elemento no es movido hacia abajo para limpiar elementos flotantes anteriores.
- `left`
  - : Es un keyword que indica que el elemento es movido hacia abajo para limpiar elementos flotantes a la izquierda.
- `right`
  - : Es un keyword que indica que el elemento es movido hacia abajo para limpiar elementos flotantes a la derecha.
- `both`
  - : Es un keyword que indica que el elemento es movido hacia abajo para limpiar tanto elementos flotantes de la izquierda como de la derecha.
- `inline-start` {{experimental_inline}}
  - : Es un keyword que indica que el elemento es movido hacia abajo para limpiar elementos flotantes al inicio del bloque contenedor, estos son los elementos con valor float _left_ en scripts ltr (left to right) y elementos con valor float _right_ en scripts rtl (right to left).
- `inline-end` {{experimental_inline}}
  - : Es un keyword que indica que el elemento es movido hacia abajo para limpiar floats al final del bloque contenedor, estos son los elementos con valor float _right_ en scripts ltr (left to right) y elementos con valor float _left_ en scripts rtl (right to left).

### Sintaxis formal

{{csssyntax}}

## Ejemplo

> **Nota:** El div con clase 'wrapper' añade un borde para una mejor visibilidad de la utilidad de la propiedad clear

### clear: left

#### Contenido HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>

  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

  <p class="left">This paragraph clears left.</p>
</div>
```

#### Contenido CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear:_left','100%','250') }}

### clear: right

#### Contenido HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>

  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

  <p class="right">This paragraph clears right.</p>
</div>
```

#### Contenido CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 50%;
}
```

{{ EmbedLiveSample('clear:_right','100%','250') }}

### clear: both

#### Contenido HTML

```html
<div class="wrapper">
  <p class="black">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus
    ac dui.
  </p>

  <p class="red">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet
    diam. Duis mattis varius dui. Suspendisse eget dolor.
  </p>

  <p class="both">This paragraph clears both.</p>
</div>
```

#### Contenido CSS

```css
.wrapper {
  border: 1px solid black;
  padding: 10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: right;
  margin: 0;
  background-color: red;
  width: 20%;
}
p {
  width: 45%;
}
```

{{ EmbedLiveSample('clear:_both','100%','300') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También puedes ver

- [El modelo de caja](/es/docs/Escuela_XUL/El_modelo_de_caja)
