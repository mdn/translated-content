---
title: with-param
slug: Web/XSLT/Element/with-param
---

{{XsltRef}}

El elemento `<xsl:with-param>` establece el valor de un parámetro que se pasará a una plantilla.

### Syntax

```
<xsl:with-param name=NOMBRE select=EXPRESIÓN>
  PLANTILLA
</xsl:with-param>
```

### Atributos requeridos

- `name`
  - : Dá a este parámetro un nombre.

### Atributos opcionales

- `select`
  - : Define el valor del parámtero a través de una expresión XPath. Si el elemento contiene una plantilla, se ignorará este atributo.

### Tipo

Subinstrucción, siempre aparece dentro de un elemento `<xsl:apply-templates>` o `<xsl:call-template>`.

### Definido

XSLT 11.6

### Soporte en Gecko

Soportado.
