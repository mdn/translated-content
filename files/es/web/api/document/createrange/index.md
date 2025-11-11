---
title: document.createRange
slug: Web/API/Document/createRange
---

{{ ApiRef() }}

### Resumen

Retorna un nuevo objeto [`Rango`](/es/docs/Web/API/Range).

### Sintáxis

```js
range = document.createRange();
```

En este ejemplo, `range` es el nuevo objeto [rango](/es/docs/Web/API/Range) creado.

### Ejemplo

```js
var range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

### Notas

Una vez que se ha creado un objeto `Rango`, se necesita configurar sus puntos límites antes de hacer uso de la mayoría de sus métodos.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
