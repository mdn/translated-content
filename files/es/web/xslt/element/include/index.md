---
title: include
slug: Web/XSLT/Element/include
---

{{XsltRef}}

El elemento `<xsl:include>` une el contenido de una hoja de estilo con otra. A diferencia del elemento `<xsl:import>`, el contenido de la hoja de estilo incluida tiene exactamente la misma precedencia que el contenido de la hoja de estilo que la incluye.

### Sintaxis

```
<xsl:include href=URI />
```

### Atributos requeridos

- `href`
  - : Indica el URI de la hoja de estilo a incluir.

### Atributos opcionales

Ninguno.

### Tipo

Elemento raíz, puede aparecer en cualquier orden siendo hijo del elemento `<xsl:stylesheet>` o el elemento `<xsl:transform>`.

### Definido

XSLT, sección 2.6.1.

### Soporte en Gecko

Soportado.
