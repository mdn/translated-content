---
title: range.collapsed
slug: Web/API/Range/collapsed
---

{{ APIRef("DOM") }}

### Resumen

Devuelve un valor booleano verdadero indicando si los puntos de inicio y fin de un rango están en la misma posición.

### Sintaxis

```
isCollapsed = range.collapsed;
```

### Ejemplo

```
range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
isCollapsed = range.collapsed;
```

### Notas

Devuelve un valor boleano verdadero si los puntos límite inicial y final del rango están en el mismo punto en el DOM, y devuelve un valor falso si no lo están.

Un rango plegado está vacío, sin tener algún contenido, especificando un simple punto en el árbol del DOM. La propiedad plegada es de sólo lectura. Para plegar un rango, vea el método [collapse](/es/docs/Web/API/range/collapse).

### Especificación

[collapsed](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-attr-collapsed)
