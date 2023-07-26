---
title: text-align
slug: Web/CSS/text-align
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

La propiedad **`text-align`** de [CSS](/es/docs/Web/CSS) establece la alineación horizontal del contenido a nivel de línea dentro de un elemento de bloque o caja de celda-tabla. Esto significa que funciona como {{cssxref("vertical-align")}} pero en dirección horizontal.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## Sintaxis

```css
/* Valores clave */
text-align: start;
text-align: end;
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: match-parent;

/* Alineación basada en caracteres en una columna de la tabla */
text-align: ".";
text-align: "." center;

/* Valores de alineación de elementos de bloque (Sintaxis no estándar) */
text-align: -moz-center;
text-align: -webkit-center;

/* Valores globales */
text-align: inherit;
text-align: initial;
text-align: revert;
text-align: revert-layer;
text-align: unset;
```

La propiedad `text-align` se especifica de una de las siguientes maneras:

- Utilizando los valores clave `start`, `end`, `left`, `right`, `center`,
  `justify`, `justify-all`, o `match-parent`.
- Utilizando sólo un valor `<string>`, en cuyo caso el otro valor por defecto es `right`.
- Utilizando tanto un valor de palabra clave como un valor [`<string>`](#string).

### Valores

- `start`
  - : Lo mismo que `left` si la dirección es de izquierda a derecha y `right` si la dirección es de derecha a izquierda.
- `end`
  - : Lo mismo que `right` si la dirección es de izquierda a derecha e `left` si la dirección es de derecha a izquierda.
- `left`
  - : El contenido en línea se alinea con el borde izquierdo de la línea de la caja.
- `right`
  - : El contenido en línea se alinea con el borde derecho de la línea de la caja.
- `center`
  - : El contenido en línea se centra dentro de la línea de la caja.
- `justify`
  - : El contenido en línea está justificado. El texto debe ser espaciado para alinear sus bordes izquierdo y derecho con los bordes izquierdo y derecho de la línea de la caja, excepto la última línea.
- `justify-all` {{experimental_inline}}
  - : Igual que `justify`, pero también obliga a justificar la última línea.
- `match-parent`
  - : Similar a `inherit`, pero los valores `start` y `end` son calculados de acuerdo a la {{cssxref("direction")}} del padre y se sustituyen por el valor `left` o `right` apropiado.
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : Cuando se aplica a la celda de una tabla, especifica el carácter de alineación alrededor del cual se alineará el contenido de la celda.

## Problemas de accesibilidad

El espaciado incoherente entre palabras que crea el texto justificado puede ser problemático para personas con problemas cognitivos como la dislexia.

- [MDN Comprender las WCAG, Explicaciones de la directriz 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Definición formal

{{CSSInfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Alineación Start

#### HTML

```html
<p class="ejemplo">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.ejemplo {
  text-align: start;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample("Start_alignment","100%","100%")}}

### Texto centrado

#### HTML

```html
<p class="ejemplo">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.ejemplo {
  text-align: center;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample("Centered_text","100%","100%")}}

### Ejemplo usando "justify"

#### HTML

```html
<p class="ejemplo">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.ejemplo {
  text-align: justify;
  border: solid;
}
```

#### Resultado

{{EmbedLiveSample('Example using "justify"',"100%","100%")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
