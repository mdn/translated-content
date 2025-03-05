---
title: Window.getComputedStyle
slug: Web/API/Window/getComputedStyle
---

{{ ApiRef() }}

### Resumen

Devuelve el estilo computado del elemento. Los estilos computados representan los valores finales [computed (en)](https://www.w3.org/TR/1998/REC-CSS2-19980512/cascade.html#computed-value) de las propiedades CSS del elemento.

### Sintaxis

```js
var style = window.getComputedStyle(element, pseudoElt);
```

- `element` es un [element](/es/docs/Web/API/Element).
- `pseudoElt` es una cadena que especifica el pseudo elemento a tratar. Debería ser una cadena vacia para la mayoría de los elementos element.
- `style` es un objeto del tipo [`CSSStyleDeclaration`](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle) .

### Ejemplo

```js
var element = document.getElementById(“elemId”);
var style = document.defaultView.getComputedStyle(element, pseudoElt);
```

### Descripción

El objeto devuelto es del mismo tipo que el objeto devuelto por la propiedad [style](/es/docs/Web/API/HTMLElement/style) del elemento, sin embargo ambos objetos tienen un propósito distinto. El objeto devuelto por `getComputedStyle` es de sólo lectura y puede usarse para inspeccionar el estilo del elemento (incluyendo los estilos de una etiqueta \<style> o una hoja de estlo). El objeto `elt.style` debería usarse para establecerel estilo de un elemento específico.

El primer argumento debe ser un Element, no un nodo (como en #texto Node).

### Especificación

[DOM Level 2 Style: getComputedStyle](https://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSview-getComputedStyle)
