---
title: Node.lastChild
slug: Web/API/Node/lastChild
---

{{APIRef("DOM")}}

La propiedad de sólo lectura **`Node.lastChild`** devuelve el último hijo del nodo. Si su padre es un elemento, entonces el hijo es generalmente un nodo de element, nodo de texto o un nodo de comentario. Devuelve `null` si no hay elementos hijos.

## Sintaxis

```
var nodoHijo= nodo.lastChild;
```

## Ejemplo

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
