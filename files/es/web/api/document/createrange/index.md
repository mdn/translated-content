---
title: document.createRange
slug: Web/API/Document/createRange
tags:
  - Rango
  - Referencia_DOM_de_Gecko
  - crear rango
translation_of: Web/API/Document/createRange
---
{{ ApiRef() }}

### Resumen

Retorna un nuevo objeto [`Rango`](https://developer.mozilla.org/es/docs/Web/API/Range).

### Sintáxis

    range = document.createRange();

En este ejemplo, `range` es el nuevo objeto [rango](/es/docs/Web/API/Range) creado.

### Ejemplo

    var range = document.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(endNode, endOffset);

### Notas

Una vez que se ha creado un objeto `Rango`, se necesita configurar sus puntos límites antes de hacer uso de la mayoría de sus métodos.

### Especificación

[DOM Level 2 Range: DocumentRange.createRange](http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level2-DocumentRange-method-createRange)
