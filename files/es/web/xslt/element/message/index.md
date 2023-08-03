---
title: message
slug: Web/XSLT/Element/message
---

{{XsltRef}}

El elemento `<xsl:message>` muestra un mensaje (en la consola JavaScript en NS) y opcionalmente termina la ejecución de la hoja de estilos. Puede ser util para depuración.

### Sintaxis

```
<xsl:message terminate="yes" | "no" >
  PLANTILLA
</xsl:message>
```

### Atributos requeridos

Ninguno.

### Atributos opcionales

- `terminate`
  - : Establecido a "`yes`", indica que debe terminar la ejecución. El valor por defecto es "`no`", en cuyo caso se muestra el mensaje y continúa la ejecución.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSLT, sección 13.

### Soporte en Gecko

Soportado.
