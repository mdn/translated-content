---
title: rangeCount
slug: Web/API/Selection/rangeCount
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve el número de los rangos que hay en la selección.

### Sintaxis

```
sel.rangeCount
```

### Notas

Antes de que el usuario haya hecho
_click_
en una página recién cargada, el `rangeCount` es 0. Un usuario normalmente puede seleccionar un rango a la vez, entonces el `rangeCount` usualmente será 1. El
_scripting_
puede usarse para hacer que la selección contenga más de 1 rango.
