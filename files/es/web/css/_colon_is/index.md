---
title: ":any"
slug: Web/CSS/:is
---

{{CSSRef}}{{SeeCompatTable}}

## Resumen

La [pseudo-clase](/es/docs/CSS/Pseudo-classes) `:any()` permite construir rápidamente conjuntos de selectores similares estableciendo grupos desde los que cualquier elemento incluido coincidirá. Es una alternativa a tener que repetir el selector completo por uno de los elementos que va a variar.

> **Nota:** Esta pseudo-clase está en progreso de ser estandarizada en [_Selectores CSS Nivel 4_](http://dev.w3.org/csswg/selectors4/#matches) bajo el nombre `:matches()`. Es probable que la sintaxis y el nombre de `:-vendor-any()` sean cambiados para reflejar el estándar en el futuro próximo.

## Sintaxis

{{csssyntax}}

### Valores

- `selector`
  - : Un selector. Puede ser un selector simple o un selector múltiple, comprendido de [selectores simples de CSS 3](http://www.w3.org/TR/css3-selectors/#simple-selectors), y puede incluir el combinador descendiente.

> **Nota:** Los selectores pueden **no** contener pseudo-elementos , y el combinador único combinador permitido es el de descendientes.

## Ejemplos

Por ejemplo, el siguiente CSS:

```css
/* Listas desordenadas a tres (o más) niveles de profundidad que usarán viñeta de cuadrado */
ol ol ul,
ol ul ul,
ol menu ul,
ol dir ul,
ol ol menu,
ol ul menu,
ol menu menu,
ol dir menu,
ol ol dir,
ol ul dir,
ol menu dir,
ol dir dir,
ul ol ul,
ul ul ul,
ul menu ul,
ul dir ul,
ul ol menu,
ul ul menu,
ul menu menu,
ul dir menu,
ul ol dir,
ul ul dir,
ul menu dir,
ul dir dir,
menu ol ul,
menu ul ul,
menu menu ul,
menu dir ul,
menu ol menu,
menu ul menu,
menu menu menu,
menu dir menu,
menu ol dir,
menu ul dir,
menu menu dir,
menu dir dir,
dir ol ul,
dir ul ul,
dir menu ul,
dir dir ul,
dir ol menu,
dir ul menu,
dir menu menu,
dir dir menu,
dir ol dir,
dir ul dir,
dir menu dir,
dir dir dir {
  list-style-type: square;
}
```

Puede ser reemplazado con:

```css
/* Listas desordenadas a tres (o más) niveles de profundidad que usarán viñeta de cuadrado */
:-moz-any(ol, ul, menu, dir) :-moz-any(ol, ul, menu, dir) ul,
:-moz-any(ol, ul, menu, dir) :-moz-any(ol, ul, menu, dir) menu,
:-moz-any(ol, ul, menu, dir) :-moz-any(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

Sin embargo, no se debe usar lo siguiente: (Véase [la sección de rendimiento](#Issues_with_performance_and_specificity) abajo.)

```css
:-moz-any(ol, ul, menu, dir)
  :-moz-any(ol, ul, menu, dir)
  :-moz-any(ul, menu, dir) {
  list-style-type: square;
}
```

## Notas

Esto es particularmente útil al tratar con [secciones y encabezados](/es/docs/Sections_and_Outlines_of_an_HTML5_document) de HTML5. Puesto que {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, y {{HTMLElement("nav")}} pueden ser anidados, puede ser complicado aplicar estilos sin usar `:any()`.

Por ejemplo, sin `:any()`, estilizar todos los {{HTMLElement("h1")}} a diferentes niveles de profundidad podría ser muy complicado:

```css
/* Nivel 0 */
h1 {
  font-size: 30px;
}
/* Nivel 1 */
section h1,
article h1,
aside h1,
nav h1 {
  font-size: 25px;
}
/* Nivelo 2 */
section section h1,
section article h1,
section aside h1,
section nav h1,
article section h1,
article article h1,
article aside h1,
article nav h1,
aside section h1,
aside article h1,
aside aside h1,
aside nav h1,
nav section h1,
nav article h1,
nav aside h1,
nav nav h1 {
  font-size: 20px;
}
/* Level 3 */
/* ... ni siquiera lo pienses*/
```

Usando `:-any()`, en cambio, es mucho más fácil:

```css
/* Nivel 0 */
h1 {
  font-size: 30px;
}
/* Nivel 1 */
:-moz-any(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Nivel 2 */
:-moz-any(section, article, aside, nav)
  :-moz-any(section, article, aside, nav)
  h1 {
  font-size: 20px;
}
/* Nivel 3 */
:-moz-any(section, article, aside, nav)
  :-moz-any(section, article, aside, nav)
  :-moz-any(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### Problemas con rendimiento y especificidad

[Bug 561154](https://bugzilla.mozilla.org/show_bug.cgi?id=561154) sigue un problema con Gecko donde la especificidad de `:-moz-any()` es incorrecta. La implementación hasta Firefox 12 pone a `:-moz-any()` en la categoría de reglas universales, por lo que usarlo como el selector más hacia la derecha será más lento que usando un ID, una clase o etiqueta como el selector a la derecha.

Por ejemplo

```css
.a> : -moz-any(.b, .c) {
}
```

es más lento que:

```css
.a > .b,
.a > .c {
}
```

y lo siguiente es rápido:

```css
:-moz-any(.a, .d) > .b,
:-moz-any(.a, .d) > .c {
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
