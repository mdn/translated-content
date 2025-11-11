---
title: replace
slug: Web/XML/EXSLT/Reference/regexp/replace
original_slug: Web/EXSLT/regexp/replace
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`regexp:replace()` reemplaza porciones de una cadena que coincide con la expresión regular dada por el contenido de otra cadena.

### Sintaxis

```
regexp:replace(original,expresionRegular,reemplazo[,opciones])
```

### Arguments

- `original`
  - : Cadena sobre la que se realiza la operación de búsqueda y reemplazo.
- `expresionRegular`
  - : Expresión regular a evaluar en estilo JavaScript.
- `reemplazo`
  - : Cadena con la que las subcadenas coincidentes serán reemplazadas.
- `opciones`
  - : Una cadena opcional que contiene caracteres con las opciones.

Los caracteres de opciones son:

- `g` - Reemplazo global
  - : Si se especifica esta opción, todas las ocurrencias de la expresión regular dentro de `original` serán reemplazadas. De otro modo sólo se reemplaza la primera ocurrencia.
- `i` - Coincidencia sin importar mayúsculas
  - : Si se especifica esta opción, el emparejamiento se realiza de modo que no importen las mayúsculas.

### Devuelve

La versión revisada de la cadena.

### Definido en

[EXSLT - REGEXP:REPLACE](http://www.exslt.org/regexp/functions/replace/index.html)

### Implementación de Gecko

Implementado en Gecko 1.9 y posteriores.
