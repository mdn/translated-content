---
title: test
slug: Web/XML/EXSLT/Reference/regexp/test
original_slug: Web/EXSLT/regexp/test
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`regexp:test()` comprueba si una cadena coincide con una expresión regular especificada.

### Sintaxis

```
regexp:test(comprobacion,expresionRegular[,opciones])
```

### Argumentos

- `comprobacion`
  - : Cadena a comprobar.
- `expresionRegular`
  - : Expresión regular a evaluar en estilo JavaScript.
- `opciones`
  - : Cadena opcional que contiene los caracteres con opciones.

Los caracteres con opciones son:

- `g` - Coincidencia global
  - : No tiene efecto para esta función; se permite para mantener la consistencia con otras funciones relacionadas con expresiones regulares.
- `i` - Coincidencia sin importar mayúsculas
  - : Si se especifica esta opción el emparejamiento se realiza sin tener en cuenta las mayúsculas.

### Devuelve

`true` si la expresión regular especificada coincide on la cadena de comprobación.

### Definido en

[EXSLT - REGEXP:TEST](http://www.exslt.org/regexp/functions/test/index.html)

### Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
