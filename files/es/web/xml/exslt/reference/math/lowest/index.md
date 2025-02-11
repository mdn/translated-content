---
title: lowest
slug: Web/XML/EXSLT/Reference/math/lowest
original_slug: Web/EXSLT/math/lowest
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}
`math:lowest()` devuelve el nodo del conjunto de nodos (node-set) especificado con el valor más bajo (donde el valor más bajo se calcula usando [`math:min()`](/es/docs/Web/EXSLT/math/min).

Un nodo tiene este valor mínimo si convirtiendo su valor de cadena a número iguala el valor mínimo.

## Sintaxis

```
math:lowest(conjuntoNodos)
```

### Argumentos

- `conjuntoNodos`
  - : El conjunto de nodos cuyo valor más bajo va a ser devuelto.

### Devuelve

Un fragmento de árbol resultante que consiste en la copia de los nodos devueltos por [`math:min()`](/es/docs/Web/EXSLT/math/min).

## Definido en

[EXSLT - MATH:LOWEST](http://www.exslt.org/math/functions/lowest/index.html)

## Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
