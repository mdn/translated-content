---
title: extend
slug: Web/API/Selection/extend
---

{{ ApiRef("DOM") }}

### Resumen

Traslada el foco de la selección a un punto especificado. El ancla de la selección no se mueve. La selección será desde el ancla hasta el nuevo focus regardless of direction.

### Sintaxis

```
sel.extend(
  parentNode,
  offset)
```

### Parámetros

- _`parentNode`_
  - : El nodo dentro del cual el foco será movido.

<!---->

- _`offset`_
  - : El número de caracteres que habrá desde el principio del texto
    _`parentNode`_
    hasta donde el foco se colocará.
