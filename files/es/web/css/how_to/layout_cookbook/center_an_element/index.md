---
title: Centrar un elemento
slug: Web/CSS/How_to/Layout_cookbook/Center_an_element
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

En esta receta verás cómo centrar una caja dentro de otra con [flexbox](#usar_flexbox) y con [grid](#usar_grid), tanto en horizontal como en vertical.

![Un elemento centrado dentro de una caja más grande](cookbook-center.png)

## Requisitos

Colocar un elemento en el centro de otra caja, tanto en horizontal como en vertical.

## Receta

Haz clic en "Play" en los bloques de código de abajo para editar el ejemplo en el MDN Playground:

```html live-sample___center-example
<div class="container">
  <div class="item">¡Estoy centrado!</div>
</div>
```

```css live-sample___center-example
.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

{{EmbedLiveSample("center-example", "", "250px")}}

## Usar flexbox

Para centrar una caja dentro de otra, primero convierte la caja contenedora en un [contenedor flexible](/es/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#el_contenedor_flex) estableciendo su propiedad {{cssxref("display")}} en `flex`. Después, establece {{cssxref("align-items")}} en `center` para centrar en vertical (en el eje de bloque) y {{cssxref("justify-content")}} en `center` para centrar en horizontal (en el eje en línea). ¡Y eso es todo lo que hace falta para centrar una caja dentro de otra!

### HTML

```html
<div class="container">
  <div class="item">¡Estoy centrado!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

Establecemos una altura para el contenedor para demostrar que el elemento interior está realmente centrado en vertical dentro del contenedor.

### Resultado

{{EmbedLiveSample("Usar_flexbox", "", "200px")}}

En lugar de aplicar `align-items: center;` al contenedor, también puedes centrar en vertical el elemento interior estableciendo {{cssxref("align-self")}} en `center` en el propio elemento interior.

## Usar grid

Otro método que puedes usar para centrar una caja dentro de otra es convertir primero la caja contenedora en un [contenedor de cuadrícula](/es/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#el_contenedor_de_grid) y, después, establecer su propiedad {{cssxref("place-items")}} en `center` para centrar sus elementos tanto en el eje de bloque como en el eje en línea.

### HTML

```html
<div class="container">
  <div class="item">¡Estoy centrado!</div>
</div>
```

### CSS

```css
div {
  border: solid 3px;
  padding: 1em;
  max-width: 75%;
}

.item {
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  padding: 20px;
  width: 10em;
}

.container {
  height: 8em;
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  font: 1.2em sans-serif;

  display: grid;
  place-items: center;
}
```

### Resultado

{{EmbedLiveSample("Usar_grid", "", "200px")}}

En lugar de aplicar `place-items: center;` al contenedor, puedes lograr el mismo centrado estableciendo {{cssxref("place-content", "place-content: center;")}} en el contenedor, o aplicando {{cssxref("place-self", "place-self: center")}} o {{cssxref("margin", "margin: auto;")}} en el propio elemento interior.

## Recursos en MDN

- [Alineación de cajas en flexbox](/es/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Guía de alineación de cajas CSS](/es/docs/Web/CSS/Guides/Box_alignment)
