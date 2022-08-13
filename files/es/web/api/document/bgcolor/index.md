---
title: document.bgColor
slug: Web/API/Document/bgColor
translation_of: Web/API/Document/bgColor
---
{{APIRef("DOM")}}{{ Deprecated_header() }}

`bgColor` da/define el color de fondo (bgColor) del documento actual.

### Sintaxis

    color = document.bgColor
    document.bgColor =
    color

### Parámetros

- `color` es un texto representando el color como una palabra en inglés (e.j., "red") o en valor hexadecimal (e.j., "`#ff0000`").

### Ejemplos

    # document.bgColor = "darkblue";
    # document.bgColor = "#ff00ff";

### Notas

El valor por defecto de esta propiedad en Mozilla Firefox es blanco (`#ffffff` en hexadecimal).

`document.bgColor` está desaprobado en [DOM Level 2 HTML](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268). La alternativa recomendada es el uso del estilo [background-color](es/CSS/background-color) de CSS el cual puede ser accesado a través del DOM con `document.body.style.backgroundColor`. Otra alternativa es `document.body.bgColor`, sin embargo, ésta última también está desaprobada en HTML 4.01 a favor de la alternativa CSS.

### Especificación

DOM Nivel 0. No es parte de ningún estándar.

{{ languages( { "en": "en/DOM/document.bgColor", "pl": "pl/DOM/document.bgColor" } ) }}
