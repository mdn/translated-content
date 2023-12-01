---
title: for-each
slug: Web/XSLT/Element/for-each
---

{{XsltRef}}

El elemento `<xsl:for-each>` selecciona un conjunto de nodos y procesa cada uno de ellos de la misma manera. Se usa comúnmente para iterar a través de un conjunto de nodos o para cambiar el nodo actual. Si se encuentran uno o más elementos `<xsl:sort>` como hijos de este elemento, el ordenado de los nodos ocurrirá antes del procesamiento. De otra manera, los nodos se procesarán en el orden del documento.

### Sintaxis

```
<xsl:for-each select=EXPRESIÓN>
  <xsl:sort> [opcional]
  PLANTILLA
</xsl:for-each>
```

### Atributos requeridos

- `select`
  - : Usa una expresión XPath para seleccionar los nodos a ser procesados.

### Atributos opcionales

Ninguno.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSLT, sección 8.

### Gecko support

Soportado.
