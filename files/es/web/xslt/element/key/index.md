---
title: key
slug: Web/XSLT/Element/key
---

{{XsltRef}}

El elemento `<xsl:key>` declara una llave con nombre la cual puede ser usada en otro lugar dentro de la hoja de estilo usando la función `key( )`.

### Sintaxis

```
<xsl:key name=NOMBRE match=EXPRESIÓN
  use=EXPRESIÓN />
```

### Atributos requeridos

- `name`
  - : Indica el nombre para esta llave. Debe seguir las reglas de tipo QName.
- `match`
  - : Define el nodo para el que esta llave aplica.
- `use`
  - : Indica la expresión XPath que se usará para determinar el valor de la llave para cada uno de los nodos aplicables.

### Atributos opcionales

Ninguno.

### Tipo

Elemento raíz, debe ser hijo del elemento `<xsl:stylesheet>` o del elemento `<xsl:transform>`.

### Definido

XSLT, sección 12.2.

### Soporte en Gecko

Soportado.
