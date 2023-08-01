---
title: order
slug: Web/CSS/order
---

{{CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`order`** especifica el orden utilizado para disponer los elementos en su contenedor flexible. Los elementos estarán dispuestos en orden ascendente según el valor de `order`. Los elementos con el mismo valor de `order` se dispondrán en el orden en el cual aparecen en el código fuente.

> **Nota:** `order` sólo pretende afectar el orden visual de los elementos y no su orden lógico u orden de tabulación. **`order`** no se debe usar en un medio no visual tal como un speech (sintetizador de voz).

{{cssinfo}}

Ver [Uso de cajas flexibles de CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS) para más propiedades e información.

## Sintaxis

```css
/* Valor numérico incluyendo números negativos */
order: 5;
order: -5;

/* Valores Globales */
order: inherit;
order: initial;
order: unset;
```

### Valores

- `<integer>`
  - : Representa el grupo ordinal al que el elemento flexible ha sido asignado.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

Aquí tiene un trozo de HTML básico:

```html
<!doctype html>
<header>...</header>
<div id="main">
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</div>
<footer>...</footer>
```

El siguiente código CSS debería crear un diseño clásico de dos barra laterales que rodea a un bloque de contenido. EL Módulo de Diseño de Caja Flexible crea automáticamente bloques de tamaño vertical igual y utiliza todo el espacio horizontal disponible.

```css
#main {
  display: flex;
  text-align: center;
}
#main > article {
  flex: 1;
  order: 2;
}
#main > nav {
  width: 200px;
  order: 1;
}
#main > aside {
  width: 200px;
  order: 3;
}
```

### Resultado

{{EmbedLiveSample('','','')}}

## Sobre Accesibilidad

Utilizar la propiedad `order` rompe la conexión entre la presentación visual y el order original de los elementos en el DOM. Esto afecta de forma negativa a los usuarios que navegan a través de teclado utilizando, por ejemplo, un lector de pantalla. Si el orden visual (CSS) es importante, entonces los lectores de pantallas no podrán acceder a ese dato y recorrerán los elementos de forma desordenada.

Para más información por favor, referirse a estos artículos:

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](http://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Uso de cajas flexibles de CSS](/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS)
