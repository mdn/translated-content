---
title: isCollapsed
slug: Web/API/Selection/isCollapsed
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve un valor boleano verdadero si los puntos de inicio y fin de la selección están en la misma posición.

### Sintaxis

```
sel.isCollapsed
```

### Notas

Incluso hasta una selección colapsada/plegada puede tener un rangeCount mayor que 0. `sel.getRangeAt(0)` puede retornar un rango que también esté colapsado/plegado.
