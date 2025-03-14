---
title: addRange
slug: Web/API/Selection/addRange
---

{{ ApiRef("DOM") }}

### Resumen

Añade un objeto de rango a la selección.

### Sintaxis

```
sel.addRange(range)
```

### Parámetros

- _`range`_
  - : Un objeto [range](/es/docs/Web/API/Range) que será añadido a la selección.

### Ejemplos

```
 /* Seleccionar todos los elementos en NEGRITA en un documento HTML */
 var strongs = document.getElementsByTagName("strong");
 var s = window.getSelection();
 if(s.rangeCount > 0) s.removeAllRanges();
 for(var i = 0; i < strongs.length; i++) {
  var range = document.createRange();
  range.selectNode(strongs[i]);
  s.addRange(range);
 }
```
