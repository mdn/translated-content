---
title: namespace-alias
slug: Web/XSLT/Element/namespace-alias
---

{{XsltRef}}

El elemento `<xsl:namespace-alias>` es un mecanismo raramente usado para asociar un nombre de espacios en la hoja de estilos a otro nombre de espacios diferente en el árbol de salida. El uso más común para este elemento se da en la generación de una hoja de estilos a partir de otra hoja de estilos.

Para prevenir que la cadena literal para el prefijo `xsl:` del elemento resultante (que simplemente debería ser copiada al árbol resultante) sea malinterpretada por el procesador, se le asigna temporalmente un nombre de espacio diferente que posteriormente es reconvertida al nombre de espacios de XSLT en el árbol de salida.

### Sintaxis

```
<xsl:namespace-alias stylesheet-prefix=NOMBRE result-prefix=NOMBRE />
```

### Atributos Requeridos

- `stylesheet-prefix`
  - : Indica el nombre de espacios temporal.
- `result-prefix`
  - : Indica el nombre de espacios deseado en el árbol de salida.

### Atributos opcionales

Ninguno.

### Tipo

Debe ser hijo directo de `<xsl:stylesheet>` o `<xsl:transform>`.

### Definido

XSLT, sección 7.1.1

### Soporte en Gecko

Sin soporte por el momento.
