---
title: split
slug: Web/XML/EXSLT/Reference/str/split
original_slug: Web/EXSLT/str/split
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{XsltRef}}

`str:split()` divide una cadena usando una cadena patrón que determina donde deberían ocurrir las divisiones y devuelve un conjunto de nodos que contiene las cadenas resultantes.

### Sintaxis

```
str:split(cadena,patron)
```

### Argumentos

- `cadena`
  - : La cadena a dividir.
- `patron`
  - : El patrón que indica por donde dividir la cadena.

### Devuelve

Un conjunto de nodos de elementos `token`, donde cada uno contiene un trozo (token) de la `cadena`.

Por ejemplo:

```
str:split('libro, teléfono, ordenador, silla', ', ')
```

Devuelve un conjunto de nodos como este:

```
<token>libro</token>
<token>teléfono</token>
<token>ordenador</token>
<token>silla</token>
```

### Definido en

[EXSLT - STR:SPLIT](http://www.exslt.org/str/functions/split/index.html)

### Implementación en Gecko

Implementado en Gecko 1.9 y posteriores.
