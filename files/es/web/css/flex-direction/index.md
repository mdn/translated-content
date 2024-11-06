---
title: flex-direction
slug: Web/CSS/flex-direction
---

{{CSSRef}}

La propiedad CSS **`flex-direction`** especifica cómo colocar los objetos flexibles en el contenedor flexible definiendo el eje principal y la dirección (normal o al revés).

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

Tenga en cuenta que el valor de `row` y `row-reverse` se verán afectados por la direccionalidad del contenedor flexible. Si su atributo `dir` es `ltr`, `row` representa el eje horizontal orientado de izquierda a derecha, y `row-reverse` desde la derecha hacia la izquierda; si el atributo `dir` es `rtl`, `row` representa el eje orientado de derecha a izquierda, y `row-reverse` de izquierda a derecha.

## Sintaxis

```css
/* La dirección del texto se presenta en una línea */
flex-direction: row;

/* Como <row>, pero al revés */
flex-direction: row-reverse;

/* La dirección en la que se apilas las líneas de texto */
flex-direction: column;

/* Como <column>, pero al revés */
flex-direction: column-reverse;

/* Valores globales */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

### Valores

Se aceptan los siguientes valores:

- `row`
  - : El eje principal del contenedor flexible está definido para ser el mismo que la dirección del texto. Los **puntos principales de inicio y final** son los mismos que la dirección del contenido.
- `row-reverse`
  - : Se comporta igual que `row` pero los **puntos principales de inicio** y **final** son intercambiados.
- `column`
  - : El eje principal del contenedor flexible es el mismo que el eje del bloque. Los **puntos principales de inicio y final** son los mismos que los **puntos de antes y después** del modo escritura.
- `column-reverse`
  - : Se comporta igual que column pero los **puntos principales de inicio** y **final** son intercambiados.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<h4>Esto es un Column-Reverse</h4>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
</div>
<h4>Esto es un Row-Reverse</h4>
<div id="content1">
  <div class="box1" style="background-color:red;">A</div>
  <div class="box1" style="background-color:lightblue;">B</div>
  <div class="box1" style="background-color:yellow;">C</div>
</div>
```

### CSS

```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: column-reverse;
  display: flex;
  flex-direction: column-reverse;
}

.box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: row-reverse;
  display: flex;
  flex-direction: row-reverse;
}

.box1 {
  width: 50px;
  height: 50px;
}
```

### Resultado

{{EmbedLiveSample('', '', '300')}}

## Sobre Accesibilidad

Si utilizas `flex-direction` con un valor de `row-reverse` o `column-reverse` en elementos que necesitan foco (como botones) el orden de visualización será distinto al orden el DOM, por lo que los usuarios de lectores de pantalla no verán reflejado el mismo orden de los elementos que un usuario vidente. Para más información (en inglés):

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](http://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Guía de CSS Flexbox: _[Conceptos básicos de Flexbox](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- Guía de CSS Flexbox: _[Ordenar items flex](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
