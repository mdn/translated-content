---
title: highest
slug: Web/XML/EXSLT/Reference/math/highest
original_slug: Web/EXSLT/math/highest
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}
`math:highest()` devuelve el nodo con el valor más alto (donde el valor más alto se calcula usando [`math:max()`](/es/docs/Web/EXSLT/math/max)) del conjunto de nodos (node-set) especificado.

Un nodo tiene este valor máximo si convierte su valor de cadena a un número igual al valor máximo.

## Sintaxis

```
math:highest(conjuntoNodos)
```

### Argumentos

- `conjuntoNodos`
  - : El conjunto de nodos cuyo valor más alto va a ser devuelto.

### Devuelve

Un fragmento de árbol resultante que consiste en las copias de los nodos devueltos por [`math:max()`](/es/docs/Web/EXSLT/math/max).

## Definido en

[EXSLT - MATH:HIGHEST](http://www.exslt.org/math/functions/highest/index.html)

## Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
