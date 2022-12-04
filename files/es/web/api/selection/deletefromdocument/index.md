---
title: deleteFromDocument
slug: Web/API/Selection/deleteFromDocument
---

{{ ApiRef("DOM") }}

### Resumen

Elimina del documento el contenido de la selección.

### Sintaxis

```
sel.deleteFromDocument()
```

### Parámetros

Ninguno.

### Ejemplos

Un usuario selecciona el texto (imaginario) "jos tienen do" del texto "Los conejos tienen dos orejas." en una página web. Después el usuario da click en un botón que ejecuta la acción cortar de JavaScript `window.getSelection().deleteFromDocument()`. El texto del documento quedaría como "Los cones orejas."
