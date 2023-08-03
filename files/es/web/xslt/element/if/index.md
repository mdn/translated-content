---
title: if
slug: Web/XSLT/Element/if
---

{{XsltRef}}
El elemento \<xsl:if> contiene un atributo a probar y una plantilla. Si el atributo resulta verdadero, la plantilla es procesada. Este comportamiento es similar a la sentencia if de otros lenguajes. Sin embargo, para conseguir la funcionalidad de una sentencia if-then-else, es necesario utilizar el elemento \<xsl:choose> con un elemento hijo \<xsl:when>, y otro elemento hijo \<xsl:otherwise>

### Sintaxis

```
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Atributos requeridos

- `test`
  - : Contiene una expresión XPath que puede ser evaluada (usando las reglas definidas para `boolean( )` si es necesario) como un valor boleano. Si el valor resulta verdadero, la plantilla es procesada; si resulta falso, no se lleva a cabo ninguna acción.

### Atributos opcionales

Ninguno.

### Tipo

Instrucción, aparece dentro de una plantilla.

### Definido

XSL sección 9.1.

### Soporte en Gecko

Soportado
