---
title: String.prototype.fontsize()
slug: Web/JavaScript/Reference/Global_Objects/String/fontsize
---

{{JSRef}} {{deprecated_header}}

El método **`fontsize()`** crea {{HTMLElement("font")}} elemento HTML que muestra una cadena con el tamaño especificado.

> **Nota:** El elemento \<font> ha sido eliminado [HTML5](/es/docs/Web/Guide/HTML/HTML5) y no se debe usar. Los desarrolladores web deben usar propiedades [CSS](/es/docs/Web/CSS).

## Sintaxis

```
str.fontsize(size)
```

### Parámetros

- `size`
  - : Un entero entre 1 y 7.

## Descripción

Cuando especificas el tamaño como entero, estableces el tamaño de la fuente. Cuando especificas el tamaño como cadena tal como "-2", se ajusta el tamaño de la fuente al de la etiqueta {{HTMLElement("basefont")}}.

When you specify size as an integer, you set the font size of `str` to one of the 7 defined sizes. When you specify `size` as a string such as "-2", you adjust the font size of `str` relative to the size set in the {{HTMLElement("basefont")}} tag.

## Ejemlpos

### `Usos fontsize()`

The following example uses string methods to change the size of a string:

```js
var worldString = "Hello, world";

console.log(worldString.small()); // <small>Hello, world</small>
console.log(worldString.big()); // <big>Hello, world</big>
console.log(worldString.fontsize(7)); // <font size="7">Hello, world</fontsize>
```

With the {{domxref("HTMLElement.style", "element.style")}} object you can get the element's `style` attribute and manipulate it more generically, for example:

```js
document.getElementById("yourElemId").style.fontSize = "0.7em";
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("String.prototype.big()")}}
- {{jsxref("String.prototype.small()")}}
