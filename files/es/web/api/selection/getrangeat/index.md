---
title: getRangeAt
slug: Web/API/Selection/getRangeAt
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve un objeto de rango representando uno de los rangos seleccionados.

### Sintaxis

```
range = sel.getRangeAt(index)
```

### Parámetros

- _`range`_
  - : El objeto [range](/es/docs/Web/API/Range) (rango) que será devuelto.

<!---->

- _`index`_
  - : El exponente (basado en cero) del rango a devolver. Un número negativo o un número mayor o igual a [rangeCount](/es/docs/Web/API/Selection/rangeCount) provocará un error.

### Ejemplos

```
ranges = [];
sel = window.getSelection();
for(var i = 0; i < sel.rangeCount; i++) {
 ranges[i] = sel.getRangeAt(i);
}
/* Cada artículo en el array de rangos ahora es
 * un objeto rango representando uno de los
 * rangos en la selección */
```
