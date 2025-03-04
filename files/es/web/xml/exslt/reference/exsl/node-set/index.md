---
title: node-set
slug: Web/XML/EXSLT/Reference/exsl/node-set
original_slug: Web/EXSLT/exsl/node-set
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`exsl:node-set()` devuelve un conjunto de nodos (node-set) de un fragmento de árbol resultante, que es lo que obtienes cuando miras en `xsl:variable` en vez de su atributo select para seleccionar el valor de la variable. Esto te permite procesar XML creado dentro de una variable en vez de procesarlo en múltiples pasos.

Puedes usar también `exsl:node-set()` para transformar cadenas en nodos de texto.

### Sintaxis

```
exsl:node-set(objeto)
```

### Argumentos

- `objeto`
  - : El objeto para el que se devuelve el correspondiente conjunto de nodos (node-set).

### Devuelve

El cojunto de nodos (node-set) correspondiente al `objeto` espedificado.

### Definido en

[EXSLT - EXSL:NODE-SET](http://www.exslt.org/exsl/functions/node-set/index.html)

### Implementación de Gecko

Implementado de Gecko 1.9 y posteriores.
