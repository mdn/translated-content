---
title: Element.removeAttribute()
slug: Web/API/Element/removeAttribute
tags:
  - API
  - DOM
  - Elemento
  - Referencia
translation_of: Web/API/Element/removeAttribute
---
{{ APIRef("DOM") }}

`removeAttribute` elimina un atributo del elemento especificado.

## Sintaxis

    element.removeAttribute(attrName);

- `attrName` es una cadena que nombra el atributo a ser eliminado de _element_.

## Ejemplo

    // <div id="div1" align="left" width="200px">
    document.getElementById("div1").removeAttribute("align");
    // ahora: <div id="div1" width="200px">

## Notas

Debe usarse preferiblemente `removeAttribute` en lugar de establecer el valor del atributo a `null` usando [setAttribute](/en/DOM/element.setAttribute "en/DOM/element.setAttribute").

Intentar eliminar un atributo que no existe en el elemento no disparará una excepción.

{{ DOMAttributeMethods() }}

## Especificación

[DOM Level 2 Core: removeAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6D6AC0F9) (introducido en [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute))
