---
title: focusNode
slug: Web/API/Selection/focusNode
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve el nudo en el cual acaba la selección.

### Sintaxis

```
sel.focusNode
```

### Notas

Un usuario puede hacer una selección de izquierda a derecha (en el orden del documento) o de derehca a izquierda (en el orden contrario del documento). El foco es donde el usuario terminó la selección. Éste puede ser visualizado manteniendo presionada la tecla Shift y presionando las flechas de movimiento del teclado para modificar la selección. El foco de la selección se mueve, pero el ancla de ésta (el otro final de la selección) no se mueve.
