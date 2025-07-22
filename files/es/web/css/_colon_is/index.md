---
title: :is()
slug: Web/CSS/:is
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

La función [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) de [CSS](/es/docs/Web/CSS) **`:is()`** toma una lista de selectores como argumento y selecciona cualquier elemento que pueda ser seleccionado por uno de los selectores en esa lista. Esto es útil para escribir selectores grandes en una forma más compacta.

> [!NOTE]
> Originalmente llamado `:matches()` (y `:any()`), este selector pasó a llamarse `:is()` en [CSSWG número 3258](https://github.com/w3c/csswg-drafts/issues/3258).

{{InteractiveExample("CSS Demo: :is", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
:is(ol, ul, menu:unsupported) :is(ol, ul) {
  color: green;
}

:is(ol, ul) :is(ol, ul) ol {
  list-style-type: lower-greek;
  color: chocolate;
}
```

```html interactive-example
<ol>
  <li>Saturn</li>
  <li>
    <ul>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ul>
  </li>
  <li>Uranus</li>
  <li>
    <ol>
      <li>Titania</li>
      <li>Oberon</li>
    </ol>
  </li>
</ol>
```

Los pseudoelementos no son válidos en la lista de selección para `:is()`.

### Diferencia entre :is() y :where()

La diferencia entre los dos es que `:is()` cuenta para la especificidad del selector general (toma la especificidad de su argumento más específico), mientras que [`:where()`](/es/docs/Web/CSS/:where) tiene un valor de especificidad de 0. Esto se demuestra con el [ejemplo en la página de referencia `:where()`](/es/docs/Web/CSS/:where#examples).

### Análisis de selector permisivo

La especificación define que `:is()` y `:where()` aceptan una [lista de selectores permisivos](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list).

En CSS, cuando se utiliza una lista de selectores, si alguno de los selectores no es válido, toda la lista se considera inválida. Cuando se utiliza `:is()` o `:where()` en lugar de que toda la lista de selectores se considere inválida si uno falla al analizar, el selector incorrecto o no compatible se ignorará y se utilizarán los demás.

```css
:is(:valid, :unsupported) {
  /* … */
}
```

Seguirá analizando correctamente y haciendo coincidir `:valid` incluso en navegadores que no soportan `:unsupported`, mientras que:

```css
:valid,
:unsupported {
  /* … */
}
```

Se ignorará en navegadores que no admitan `:unsupported` incluso si admiten `:valid`.

## Ejemplos

### Simplificando selectores de listas

La pseudoclase `:is()` puede simplificar enormemente sus selectores CSS. Por ejemplo, tome el siguiente CSS:

```css
/* Las listas desordenadas de 3 (o más) niveles usan una viñeta cuadrada */
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

Puedes reemplazarlo con:

```css
/* Las listas desordenadas de 3 (o más) niveles usan una viñeta cuadrada */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) :is(ul, menu, dir) {
  list-style-type: square;
}
```

### Simplificando selectores de secciones

La pseudoclase `:is()` es particularmente útil cuando se trata de [secciones y encabezados](/es/docs/Web/HTML/Reference/Elements/Heading_Elements) HTML. Dado que {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}} y {{HTMLElement("nav")}} comúnmente están anidados juntos, sin `:is()`, diseñarlos para que coincidan entre sí puede ser complicado.

Por ejemplo, sin `:is()`, diseñar todos los elementos {{HTMLElement("Heading_Elements", "h1")}} en diferentes niveles podría ser muy complicado:

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

/* Nivel 2 */
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

/* Nivel 3 */
/* ¡ni lo pienses! */
```

Sin embargo, usar `:is()` es mucho más fácil:

```css
/* Nivel 0 */
h1 {
  font-size: 30px;
}
/* Nivel 1 */
:is(section, article, aside, nav) h1 {
  font-size: 25px;
}
/* Nivel 2 */
:is(section, article, aside, nav) :is(section, article, aside, nav) h1 {
  font-size: 20px;
}
/* Nivel 3 */
:is(section, article, aside, nav)
  :is(section, article, aside, nav)
  :is(section, article, aside, nav)
  h1 {
  font-size: 15px;
}
```

### :is() no selecciona pseudoelementos

La pseudoclase `:is()` no funciona con los pseudoelementos. Entonces en lugar de esto:

```css example-bad
some-element:is(::before, ::after) {
  display: block;
}
```

o esto:

```css example-bad
:is(some-element::before, some-element::after) {
  display: block;
}
```

en su lugar haz:

```css example-good
some-element::before,
some-element::after {
  display: block;
}
```

## Sintaxis

```css-nolint
:is(<forgiving-selector-list>) {
  /* ... */
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{CSSxRef(":where", ":where()")}} - Como `:is()`, pero con 0 [especificidad](/es/docs/Web/CSS/CSS_cascade/Specificity).
- [Lista de selección](/es/docs/Web/CSS/Selector_list)
- [Componentes web](/es/docs/Web/API/Web_components)
