---
title: attribute
slug: Web/XSLT/Element/attribute
---

{{XsltRef}}

El elemento `<xsl:attribute>` genera un atributo en el documento de salida, usando cualquier valor que puede ser accedido desde la hoja de estilo. Este elemento tiene que ser la primer cosa que se encuentre dentro del elemento del documento de salida para el cual se desea generar el atributo.

### Sintaxis

```
<xsl:attribute name=NOMBRE namespace=URI>
  PLANTILLA
</xsl:attribute>
```

### Atributos requeridos

- `name`
  - : Indica el nombre del atributo a ser generado en el documento de salida. El nombre debe seguir las reglas de QName.

### Atributos opcionales

- `namespace`
  - : Define el URI del nombre de espacio para el atributo en el documento de salida. No se puede especificar el prefijo del nombre de espacio con este elemento.

### Tipo

Instrucción, aparece dentro de una plantilla o dentro del elemento `<xsl:attribute-set>`.

### Definido

XSLT, sección 7.1.3.

### Soporte en Gecko

Soportado.
