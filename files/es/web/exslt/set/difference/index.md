---
title: difference
slug: Web/EXSLT/set/difference
---

{{XsltRef}}

`set:difference()` devuelve la diferencia entre dos conjuntos de nodos. En otras palabras, devuelve un cojunto de nodos cuyos nodos están en uno de los conjuntos pero no en el otro.

La versión de plantilla de `set:difference` aplica plantillas a estos nodos en el modo de `set:difference`, copiando los nodos de modo que se devuelva el fragmento de árbol resultante consistente en los nodos.

### Sintaxis

```
set:difference(conjuntoNodos1,conjuntoNodos2)
```

### Argumentos

- `conjuntoNodos1`
  - : El conjunto de nodos desde el cual se sustraen los nodos.
- `conjuntoNodos2`
  - : El conjunto de nodos a sustraer de*conjuntoNodos1*.

### Devuelve

Un conjunto de nodos que contiene los nodos que están en*conjuntoNodos1* pero no en*conjuntoNodos2*.

### Definido en

[EXSLT - SET:DIFFERENCE](http://www.exslt.org/set/functions/difference/index.html)

### Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
