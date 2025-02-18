---
title: element
slug: Web/XML/XSLT/Reference/Element/element
original_slug: Web/XSLT/Reference/Element/element
---

{{XsltSidebar}}{{XsltRef}}

El elemento `<xsl:element>` genera un elemento en el documento de salida.

### Sintaxis

```
<xsl:element name=NOMBRE namespace=URI use-attribute-sets=LISTA-DE-NOMBRES >
  PLANTILLA
</xsl:template>
```

### Atributos requeridos

- `name`
  - : Indica el nombre deseado del elemento de salida. El nombre debe seguir las reglas de QName.

### Atributos opcionales

- `namespace`
  - : Especifica el nombre de espacio del elemento de salida.
- `use-attribute-sets`
  - : Lista el conjunto de atributos a ser usados en el elemento de salida. Los nombres deberán estar separados por espacios en blanco.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSLT, sección 7.1.2.

### Soporte en Gecko

Soportado
