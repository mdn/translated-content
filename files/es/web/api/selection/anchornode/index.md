---
title: anchorNode
slug: Web/API/Selection/anchorNode
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve el nodo en el cual empieza la selección.

### Sintaxis

```
sel.anchorNode
```

### Notas

Un usuario puede hacer una selección de izquierda a derecha (en el orden del documento) o de derehca a izquierda (en el orden contrario del documento). El ancla es donde el usuario empezó la selección. Ésta puede ser visualizada manteniendo presionada la tecla **Shift** y presionando las flechas de movimiento del teclado. El ancla de la selección no se mueve, pero el foco de ésta (el otro "final" de la selección) sí se mueve.
