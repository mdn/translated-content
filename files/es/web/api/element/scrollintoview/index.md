---
title: Element.scrollIntoView()
slug: Web/API/Element/scrollIntoView
---

{{ APIRef("DOM")}}

El método `scrollIntoView()` de la interfaz {{domxref("Element")}} desplaza el contenedor principal del elemento de forma que el elemento sobre el cual se invoca `scrollIntoView()` sea visible al usuario.

## Sintaxis

```js
element.scrollIntoView(); // Equivalente a element.scrollIntoView(true)
element.scrollIntoView(alignToTop); // Argumentos booleanos
element.scrollIntoView(scrollIntoViewOptions); // Argumento objeto
```

### Parámetros

- `alignToTop`

  - : Es un valor {{jsxref("Boolean")}}:

    - Si es `true`, la parte superior del elemento se alineará con la parte superior del área visible del elemento desplazable antecesor.
    - Si es `false`, la parte inferior del elemento se alineará con la parte inferior del área visible del elemento desplazable antecesor.

- `scrollIntoViewOptions` {{optional_inline}} {{experimental_inline}}
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
element.scrollIntoView({ block: "end" });
element.scrollIntoView({ block: "end", behavior: "smooth" });
```

## Notas

Puede que el desplazamiento no sea llevado completamente a la parte superior o inferior dependiente de la disposición de otros elementos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
