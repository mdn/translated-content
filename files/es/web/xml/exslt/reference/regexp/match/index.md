---
title: match
slug: Web/XML/EXSLT/Reference/regexp/match
original_slug: Web/EXSLT/regexp/match
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`regexp:match()` realiza la búsqueda de coincidencias de una expresión regular en una cadena, devolviendo las subcoincidencias halladas como resultado.

### Sintaxis

```
regexp:match(objetivo,expresionRegular[[,opciones]])
```

### Argumentos

- `objetivo`
  - : Cadena sobre la que se realiza la búsqueda de coincidencias con la expresión regular.
- `expresionRegular`
  - : Expresión regular a evaluar en estilo JavaScript.
- `opciones`
  - : Cadena opcional que contiene los caracteres con opciones.

Los caracteres con opciones son:

- `g` - Coincidencia global
  - : Se devuelven las subcoincidencias de cada coincidencia en la cadena. Si esta opción no se especifica, sólo se devolverán las subcoincidencias del primer emparejamiento.
- `i` - Coincidencia sin importar las mayúsculas
  - : Si se especifica esta opción, el emparejamiento se realiza de modo que no se tenga encuenta las mayúsculas.

### Devuelve

Un conjunto de nodos de elementos `match`, cada uno de los cuales tiene un valor de tipo cadena igual a la porción del primer parámetro de la cadena capturado por la expresión regular. Si la coincidencia no es de tipo global, el primer elemento match tiene el valor de la porción de cadena que coincide con la expresión regular completa.

Por ejemplo:

```xml
<xsl:for-each select="regExp:match('http://developer.mozilla.org/en/docs/Firefox_3_for_developers',
                                    '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
    Parte <xsl:value-of select="position()" /> = <xsl:value-of select="." />
</xsl:for-each>
```

Este código genera el siguiente resultado:

```
Parte 1 = http://developer.mozilla.org/en/docs/Firefox_3_for_developers
Parte 2 = http
Parte 3 = developer.mozilla.org
Parte 4 =
Parte 5 = /en/docs/Firefox_3_for_developers
```

### Definido en

[EXSLT - REGEXP:MATCH](http://www.exslt.org/regexp/functions/match/index.html)

### Implementación de Gecko

Implementado en Gecko 1.9 y posteriores.
