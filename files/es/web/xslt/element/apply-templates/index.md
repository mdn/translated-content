---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
---

{{XsltRef}}

El elemento `<xsl:apply-templates>` selecciona un conjunto de nodos del documento de entrada e instruye al procesador para aplicar las plantillas apropiadas a ellos.

### Sintaxis

```
<xsl:apply-templates select=EXPRESION mode=NOMBRE>
  <xsl:with-param> [opcional]
  <xsl:sort> [opcional]
</xsl:apply-templates>
```

### Atributos requeridos

Ninguno.

### Atributos opcionales

- `select`
  - : Usa una expresión XPath para indicar los nodos a ser procesados. Un asterisco(`*`) selecciona por completo el conjunto de nodos. Si el atributo no se establece, todos los nodos hijos del nodo actual son seleccionados.
- `mode`
  - : Si existend diferentes maneras definidas de procesar el mismo nodo, se distingue entre ellas.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSLT sección 5.4.

### Soporte en Gecko

Soportado.
