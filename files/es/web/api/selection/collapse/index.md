---
title: collapse
slug: Web/API/Selection/collapse
---

{{ ApiRef("DOM") }}

### Resumen

Pliega la selección a un simple punto. El documento no es modificado. Si el contenido es enfocado y editable, el cursor parpadeará ahí.

### Sintaxis

```
sel.collapse(
parentNode,
offset);
```

### Parámetros

- _`parentNode`_
  - : La localización del cursor estará dentro de este nodo.

<!---->

- _`offset`_
  - : El cursor estará colocado éste número de caracteres desdel el comienzo del texto de
    _`parentNode`'_
    s text.

### Ejemplos

```
/* Colocar el cursor al principio del cuerpo de un documento HTML. */
var body = document.getElementsByTagName("body")[0];
window.getSelection().collapse(body,0);
```
