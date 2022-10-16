---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
tags:
  - Experimental
  - Expérimental(2)
  - metodo
translation_of: Web/API/Element/scrollIntoView
---
{{ APIRef("DOM")}}

El método **`scrollIntoView()`** de la interfaz {{domxref("Element")}} desplaza el contenedor principal del elemento de forma que el elemento sobre el cual se invoca `scrollIntoView()` sea visible al usuario.

## Sintaxis

```
element.scrollIntoView(); // Equivalente a element.scrollIntoView(true)
element.scrollIntoView(alignToTop); // Argumentos booleanos
element.scrollIntoView(scrollIntoViewOptions); // Argumento objeto
```

### Parámetros

- _`alignToTop`_

  - : Es un valor {{jsxref("Boolean")}}:

    - Si es `true`, la parte superior del elemento se alineará con la parte superior del área visible del elemento desplazable antecesor.
    - Si es `false`, la parte inferior del elemento se alineará con la parte inferior del área visible del elemento desplazable antecesor.

- _`scrollIntoViewOptions`_ {{optional_inline}} {{experimental_inline}}
  - : Un booleano o un objeto con las siguientes opciones:
- `behavior` {{optional_inline}}
  - : Establece la transición de la animación.
    Puede ser `auto` o `smooth`. Por defecto es `auto`.
- `block` {{optional_inline}}
  - : Establece el alineamiento vertical.
    Puede ser `start`, `center`, `end`, o `nearest`. Por defecto es `start`.
- `inline` {{optional_inline}}
  - : Establece el alineamiento horizontal
    Puede ser `start`, `center`, `end`, o `nearest`. Por defecto es `nearest`.

## Ejemplo

```js
var element = document.getElementById("box");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({block: "end", behavior: "smooth"});
```

## Notas

Puede que el desplazamiento no sea llevado completamente a la parte superior o inferior dependiente de la disposición de otros elementos.

## Especificación

| Especificación                                                                                                   | Estado                           | Comentario         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("CSSOM View", "#dom-element-scrollintoview", "Element.scrollIntoView()")}} | {{Spec2("CSSOM View")}} | Definición inicial |

- [CSSOM: Scrolling elements into view](http://dev.w3.org/csswg/cssom-view/#dom-element-scrollintoview)

## Compatibilidad con navegadores

{{Compat("api.Element.scrollIntoView")}}
