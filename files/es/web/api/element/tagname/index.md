---
title: element.tagName
slug: Web/API/Element/tagName
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element/tagName
---
{{ ApiRef("DOM") }}

### Resumen

Devuelve el nombre del elemento.

### Sintaxis

    elementName = element.tagName

- `elementName` es una cadena que contiene el nombre del elemento actual.

### Notas

En XML (y los lenguajes basados en XML tales como XHTML) el código `tagName` es sensible a las mayúsculas. En HTML, `tagName` devuelve el nombre del elemento en forma canonica, es decir con todas sus letras en mayúscula. El valor del código of `tagName` es el mismo que el de la instrucción [nodeName](es/DOM/element.nodeName).

### Ejemplo

Si tenemos la siguiente línea de código:

    <span id="born">Cuando yo nací...</span>

y el siguiente script

    var span = document.getElementById("born");
    alert(span.tagName);

en XHTML (o alguna otra forma de XML) el resultado de la alerta será el contenido de "span". En HTML, el contenido será el de "SPAN".

### Especificación

[DOM Level 2 Core: tagName](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-104682815)
