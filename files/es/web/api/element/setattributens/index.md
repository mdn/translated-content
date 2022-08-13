---
title: Element.setAttributeNS()
slug: Web/API/Element/setAttributeNS
translation_of: Web/API/Element/setAttributeNS
---
{{ APIRef("DOM") }}

`setAttributeNS añade un nuevo atributo o cambia el valor de un atributo con el namespace dado y el nombre.`

## Sintaxis

    elemento.setAttributeNS(namespace,nombre,valor)

- `namespace` es un string especificando el namespace del atributo.
- `name es un string identificando el atributo a ser puesto.`
- `value es el string del valor deseado del nuevo atributo.`

## Ejemplo

    var d = document.getElementById("d1");
    d.setAttributeNS("http://www.mozilla.org/ns/specialspace", "align", "center");

## Notas

{{ DOMAttributeMethods() }}

## Especificación

[DOM Level 2 Core: setAttributeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)
