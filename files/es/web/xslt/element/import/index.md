---
title: import
slug: Web/XSLT/Element/import
---

{{XsltRef}}

El elemento `<xsl:import>` sirve para importar el contenido de una hoja de estilo dentro de otra hoja de estilo. En general, el contenido de la hoja de estilo importada tiene una menor precedencia que el contenido de la hoja de estilo que la importa. Esto contrasta con el elemento `<xsl:include>` en el que el contenido de la hoja de estilo incluida tiene exactamente la misma precedencia que el contenido de la hoja de estilo que la incluye.

### Sintaxis

```
<xsl:import href=URI  />
```

### Atributos requeridos

- `href`
  - : URI de la hoja de estilo a importar.

### Atributos opcionales

Ninguno.

### Tipo

Nivel raíz, debe aparecer antes de cualquier otro hijo de `<xsl:stylesheet>` o `<xsl:transform>` en la hoja de estilo que la importa.

### Definido

XSLT, sección 2.6.2.

### Soporte en Gecko

Casi completamente soportado, con tan solo algunos detalles con variables de nivel raíz y parámetros desde Mozilla 1.0.
