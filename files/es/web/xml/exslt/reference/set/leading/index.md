---
title: leading
slug: Web/XML/EXSLT/Reference/set/leading
original_slug: Web/EXSLT/set/leading
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`set:leading()` devuelve los nodos de un conjunto de nodos que viene antes del primer nodo del otro conjunto de nodos.

### Sintaxis

```
set:leading(conjuntoNodos1,conjuntoNodos2)
```

### Arguments

- `conjuntoNodos1`
  - : El conjunto de nodos en el que hallar los nodos que preceden al primer nodo del segundo conjunto de nodos.
- `conjuntoNodos2`
  - : El conjunto de nodos contra el que se compara.

### Devuelve

Un conjunto de nodos que contiene los nodos del `conjuntoNodos1` cuyos valores preceden al primer nodo del `conjuntoNodos2`.

> [!NOTE]
> Si el primer nodo del `conjuntoNodos2` no está contenido en `conjuntoNodos1`, de devuelve un conjunto de nodos vacío. Si `conjuntoNodos2` está vacío, entonces el resultado es `conjuntoNodos1`.

### Definido en

[EXSLT - SET:LEADING](http://www.exslt.org/set/functions/leading/index.html)

### Implementación de Gecko

Implementado en Gecko 1.9 y posteriores.
