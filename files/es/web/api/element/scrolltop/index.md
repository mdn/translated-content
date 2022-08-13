---
title: Element.scrollTop
slug: Web/API/Element/scrollTop
translation_of: Web/API/Element/scrollTop
---
{{ APIRef("DOM") }}

La propiedad **`Element.scrollTop`** obtiene o establece el número de pixels que el contenido de un elemento ha sido desplazado (enrollado) hacia arriba. El `scrollTop` de un elemento es una medida de la distancia desde el límite superior de un elemento al límite superior de su contenido visible. Cuando un elemento no genera una barra de scroll vertical, el valor de su `scrollTop` es establecido por defecto a `0`.

## Sintaxis

```js
// Obtiene el número de pixels desplazados
var  intElemScrollTop = someElement.scrollTop;
```

_Después de ejecutar este código, _`intElemScrollTop` es un entero que corresponde al número de pixesl que el contenido del {{domxref("element")}} ha sido desplazado hacia arriba.

```js
// Establece el número de pixels desplazados
element.scrollTop = intValue;
```

`scrollTop` puede ser establecido a cualquier valor entero, con ciertas salvedades:

- Si el elemento no puede ser desplazado (p.e. no tiene desbordamiento (overflow) o si el elemento no es desplazable (**non-scrollable**), `scrollTop` es establecido a `0`.
- Si se asigna un valor menor que `0`, `scrollTop` es establecido a `0`.
- Si se asigna un valor mayor que el máximo al que el contenido puede ser desplazado, `scrollTop` es establecido al valor máximo.

## Ejemplo

padding-top

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

padding-bottom

**Left** **Top** **Right** **Bottom** _margin-top_ _margin-bottom_ _border-top_ _border-bottom_

![Image:scrollTop.png](/@api/deki/files/842/=ScrollTop.png)

## Especificaciones

| Especificación                                                                           | Estado                           | Observaciones |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------------- |
| {{SpecName('CSSOM View', '#dom-element-scrolltop', 'scrollTop')}} | {{Spec2("CSSOM View")}} |               |

## Referencias

- [Borrador del Módulo Vista del W3C](http://dev.w3.org/csswg/cssom-view/#dom-element-scrolltop)
- [definición de scrollTop en MSDN](<http://msdn.microsoft.com/en-us/library/ms534618(VS.85).aspx>)
- [Medidas de Dimensión y Ubicación de Elementos en MSDN](<http://msdn.microsoft.com/en-us/library/hh781509(v=vs.85).aspx>)
