---
title: tokenize
slug: Web/XML/EXSLT/Reference/str/tokenize
original_slug: Web/EXSLT/str/tokenize
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`str:tokenize()` divide una cadena usando un conjunto de caracteres como delimitadores que determinan donde deberían ocurrir las divisiones, devolviendo un conjunto de nodos que contiene las cadenas resultantes.

### Sintaxis

```
str:tokenize(cadena,delimitadores)
```

### Argumentos

- `cadena`
  - : La cadena a dividir.
- `delimitadores`
  - : Cada uno de los caracteres de esta cadena usados como separadores de palabras en la división.

### Devuelve

Un conjunto de nodos de elementos `token`, que contiene cada uno un trozo (token) de la `cadena`.

Por ejemplo:

```
str:tokenize('2007-09-14-03T11:40:23', '-T:')
```

Devuelve un conjunto de nodos como este:

```
<token>2007</token>
<token>09</token>
<token>14</token>
<token>11</token>
<token>40</token>
<token>23</token>
```

### Definido en

[EXSLT - STR:TOKENIZE](http://www.exslt.org/str/functions/tokenize/index.html)

### Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
