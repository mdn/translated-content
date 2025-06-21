---
title: when
slug: Web/XML/XSLT/Reference/Element/when
original_slug: Web/XSLT/Reference/Element/when
---

{{XsltSidebar}}{{XsltRef}}

El elemento `<xsl:when>` siempre aparece dentro de un elemento `<xsl:choose>`, actuando como una sentencia case.

### Sintaxis

```
<xsl:when test=EXPRESIÓN>
  PLANTILLA
</xsl:when>
```

### Atributos requeridos

- `test`
  - : Especifica una expresión booleana a evaluar. Si es cierta, se procesa el contenido del elemento; si es falsa, se ignora.

### Atributos opcionales

Ninguno.

### Tipo

Subinstrucción, siempre aparece dentro de un elemento `<xsl:choose>`.

### Definido

XSLT, sección 9.2.

### Soporte en Gecko

Soportado.
