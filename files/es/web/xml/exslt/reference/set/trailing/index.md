---
title: trailing
slug: Web/XML/EXSLT/Reference/set/trailing
original_slug: Web/EXSLT/set/trailing
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`set:trailing()` devuelve los nodos de un conjunto de nodos que vienen después del primer nodo de otro conjunto de nodos.

### Sintaxis

```
set:trailing(conjuntoNodos1,conjuntoNodos2)
```

### Argumentos

- `conjuntoNodos1`
  - : El conjunto de nodos en el que hallar los nodos que siguen al primer nodo del segundo conjunto de nodos.
- `conjuntoNodos2`
  - : El conjunto de nodos contra el que se compara.

### Devuelve

Un conjunto de nodos que contiene los nodos del `conjuntoNodos1` cuyos valores siguen al primer nodo del `conjuntoNodos2`.

> [!NOTE]
> Si el primer nodo en `conjuntoNodos2` no está contenido en `conjuntoNodos1`, se devuelve un conjunto de nodos vacío. Si `conjuntoNodos2` está vacío, entonces el resultado es el `conjuntoNodos1`.

### Definido en

[EXSLT - SET:TRAILING](http://www.exslt.org/set/functions/trailing/index.html)

### Implementación de Gecko

Implementado en Gecko 1.9 y posteriores.
