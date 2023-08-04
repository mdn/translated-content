---
title: containsNode
slug: Web/API/Selection/containsNode
---

{{ ApiRef("DOM") }}

### Resumen

Indica si tal nodo es parte de la selección.

### Sintaxis

```
sel.containsNode(
  aNode,
  aPartlyContained)
```

### Parámetros

- _`aNode`_
  - : El nodo que está siendo vigilado por si es parte de la selección.
- _`aPartlyContained`_
  - : Cuando da un valor
    _verdadero_
    , `containsNode` devuelve verdadero cuanbdo una parte del nodo es parte de la selección.
    Cuando da un valor
    _falso_
    , `containsNode` solo devuelve verdadeor cuando el nodo completo es parte de la selección.

### Ejemplos

```
 /* Checar si algo dentro del elemento cuerpo (etiquetas body) está seleccionado */
 alert(window.getSelection().containsNode(document.body, true));
```
