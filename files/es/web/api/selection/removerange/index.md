---
title: removeRange
slug: Web/API/Selection/removeRange
---

{{ ApiRef("DOM") }}

### Resumen

Quita un rango de la selección.

### Sintaxis

```
sel.removeRange(
  range)
```

### Parámetros

- _`range`_
  - : Un objeto rango que será eliminado de la selección.

### Ejemplos

```
/* Programadamente, mas de un rango puede ser seleccionado.
 * Esto eliminará todos los rangos excepto el primero. */
s = window.getSelection();
if(s.rangeCount > 1) {
 for(var i = 1; i < s.rangeCount; i++) {
  s.removeRange(s.getRangeAt(i));
 }
}
```
