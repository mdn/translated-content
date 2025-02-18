---
title: min
slug: Web/XML/EXSLT/Reference/math/min
original_slug: Web/EXSLT/math/min
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`math:min()` devuelve el valor mínimo de un conjunto de nodos (node-set).

Para calcular el valor mínimo de un conjunto de nodos, el conjunto de nodos se ordena en orden ascendente como se haría usando [`xsl:sort()`](/es/XSLT/sort) con datos de tipo `number` (numéricos). Entonces el valor mínimo será el primer nodo de la lista ordenada, convertido en número.

## Sintaxis

```
math:min(conjuntoNodos)
```

### Argumentos

- `conjuntoNodos`
  - : El conjunto de nodos cuyo valor más bajo se va a devolver.

### Devuelve

Un fragmento de árbol resultante que representa como una cadena el valor numérico del nodo valorado más bajo.

## Definido en

[EXSLT - MATH:MIN](http://www.exslt.org/math/functions/min/index.html)

## Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
