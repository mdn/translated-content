---
title: object-type
slug: Web/XML/EXSLT/Reference/exsl/object-type
original_slug: Web/EXSLT/exsl/object-type
---

{{QuickLinksWithSubpages("/es/docs/Web/EXSLT")}}{{ XsltRef() }}

`exsl:object-type()` devuelve una cadena que indica el tipo del objeto especificado.

> [!NOTE]
> La mayoría de tipos de objetos [XSLT](/es/XSLT) pueden ser convertidos en otros con seguridad; sin embargo, ciertas conversiones pueden aumentar las condiciones de error. En particular, el tratamiento de algo que no sea un conjunto de nodos (node-set) como un conjunto de nodos lo haría así. Esta función permite que los autores de plantillas con nombre y funciones de extensión proporcionen fácilmente flexibilidad en los valores de los parámetros.

### Sintaxis

```
exsl:object-type(objeto)
```

### Argumentos

- `objeto`
  - : El objeto cuyo tipo va a ser devuelto.

### Devuelve

El tipo del objeto, que será uno de los siguientes:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

### Definido en

[EXSLT - EXSL:OBJECT-TYPE](http://www.exslt.org/exsl/functions/object-type/index.html)

### Implementación de Gecko

Implementado en Gecko 1.9 y posteriores.
