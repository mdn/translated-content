---
title: range.commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
---

{{ApiRef("DOM")}}

### Resumen

Devuelve el nodo más profundo que contienen los nodos [startContainer](/es/docs/Web/API/range/startContainer) y [endContainer](/es/docs/Web/API/range/endContainer).

### Sintaxis

```
rangeAncestor = range.commonAncestorContainer;
```

### Ejemplo

```
range = document.createRange();
range.setStart(startNode,startOffset);
range.setEnd(endNode,endOffset);
rangeAncestor = range.commonAncestorContainer;
```

### Notas

Devuelve el último nodo, o el más lejano a lo largo del árbol del documento, que contienen los nodos [startContainer](/es/docs/Web/API/range/startContainer) y [endContainer](/es/docs/Web/API/range/endContainer). Ya que un rango no necesita ser contínuo y puede seleccionar nodos parcialmente, ésta es una forma conveniente para encontrar un nodo que encierra un rango.

Esta propiedad es de sólo lectura. Para cambiar el contenedor ancestro de un nodo, considere usar varios métodos para definir las posiciones iniciales y finales de el rango.

### Especificación

[commonAncestorContainer](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-attr-commonParent)
