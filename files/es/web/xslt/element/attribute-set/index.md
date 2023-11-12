---
title: attribute-set
slug: Web/XSLT/Element/attribute-set
---

{{XsltRef}}

El elemento `<xsl:attribute-set>` genera un conjunto con nombre de atributos, el cual puede ser aplicado al documento de salida, de una manera similar a los estilos con nombre dentro de CSS.

### Sintaxi

```
<xsl:attribute-set name=NOMBRE use-attribute-sets=LISTA-DE-NOMBRES>
  <xsl:attribute>
</xsl:attribute-set>
```

### Atributos requeridos

- `name`
  - : Indica el nombre del conjunto de elementos. El nombre debe seguir las reglas QName.

### Atributos opcionales

- `use-attribute-sets`
  - : Genera un conjunto de elementos a partir de otros conjuntos de atributos. Los nombres de los conjuntos deben estar separados por espacios en blanco y no se deben solapar directa o indirectamente.

### Tipo

Debe ser hijo del elemento `<xsl:stylesheet>` o `<xsl:transform>`.

### Definido

XSLT, sección 7.1.4.

### Soporte en Gecko

Soportado
