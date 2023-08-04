---
title: copy
slug: Web/XSLT/Element/copy
---

{{XsltRef}}

El elemento `<xsl:copy>` genera una copia superficial (el nodo y cualquier nodo del nombre de espacio asociado) del nodo actual al documento de salida. Este elemento no copia ni elementos hijo ni atributos del nodo actual.

### Sintaxis

```
<xsl:copy use-attribute-sets=LISTA-DE-NOMBRES>
  PLANTILLA
</xsl:copy>
```

### Atributos requeridos

Ninguno.

### Atributos opcionales

- `use-attribute-sets`
  - : Lista conjunto de atributos que debería de ser aplicados al nodo de salida, si es un elemento. Los nombres del conjunto deben de estar separados por un espacio en blanco.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSLT, sección 7.5.

### Soporte en Gecko

Suportado.
