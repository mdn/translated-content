---
title: concat
slug: Web/XML/EXSLT/Reference/str/concat
original_slug: Web/EXSLT/str/concat
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`str:concat()` devuelve una cadena que contiene todos los valores cadena de un conjunto de nodos (node-set) concatenados juntos.

### Sintaxis

```
str:concat(conjuntoNodos)
```

### Argumentos

- `conjuntoNodos`
  - : El conjunto de nodos cuyos valores de cadena de los nodos deberían ser concatenados en una cadena.

### Devuelve

Una cadena cuyo valor es el de todos los valores cadena de los nodos de `conjuntoNodos` concatenados juntos. Si `conjuntoNodos` está vacío, se devuelve una cadena vacía.

### Definido en

[EXSLT - STR:CONCAT](http://www.exslt.org/str/functions/concat/index.html)

### Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
