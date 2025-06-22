---
title: EXSLT
slug: Web/XML/EXSLT
original_slug: Web/EXSLT
---

{{XsltRef}}EXSLT es un conjunto de extensiones de [XSLT](/es/XSLT). Existen varios módulos; aquellos que están implementados por Firefox se listan a continuación:

- [Common](#common) (`exsl`)
  - : Proporciona elementos y funciones de extensión básicas.
- [Math](#math) (`math`)
  - : Proporciona rutinas para la comparación de nodos.
- [Regular expressions](#regular_expressions) (`regexp`)
  - : Proporciona facilidades para usar expresiones regulares en sintaxis de JavaScript.
- [Sets](#sets) (`set`)
  - : Proporciona rutinas para la manipulación de sets.
- [Strings](#strings) (`str`)
  - : Proporciona funciones para la manipulación de cadenas.

### Uso de EXSLT

Para usar una extensión de EXSLT, necesitas declarar su espacio de nombres como una extensión de espacio de nombres en tu hoja de estilo. Por ejemplo, para utilizar el paquete de expresiones regulares:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions"
                extension-element-prefixes="regexp">

<xsl:import href="regexp.xsl" />

...

</xsl:stylesheet>
```

### Common

El paquete Common de EXSLT proporciona funciones básicas que incrementan las capacidades de XSLT. El espacio de nombres de Common es `http://exslt.org/common`.

#### Funciones

- [exsl:node-set](/es/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [exsl:object-type](/es/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Math

El paquete Math de EXSLT proporciona funciones para el trabajo con valores numéricos y la comparación de nodos. El espacio de nombres del paquete Math es `http://exslt.org/math`.

#### Funciones

- [math:highest](/es/docs/Web/XML/EXSLT/Reference/math/highest)
- [math:lowest](/es/docs/Web/XML/EXSLT/Reference/math/lowest)
- [math:max](/es/docs/Web/XML/EXSLT/Reference/math/max)
- [math:min](/es/docs/Web/XML/EXSLT/Reference/math/min)

### Regular Expressions

El paquete Regular Expressions de EXSLT proporciona funciones que permiten comprobar, buscar coincidencias y reemplazar texto usando expresiones regulares en estilo JavaScript.

El espacio de nombres del paquete Regular Expressions es `http://exslt.org/regular-expressions`.

#### Funciones

- [regexp:match](/es/docs/Web/XML/EXSLT/Reference/regexp/match)
- [regexp:replace](/es/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [regexp:test](/es/docs/Web/XML/EXSLT/Reference/regexp/test)

### Sets

El paquete Sets de EXSLT ofrece funciones que permiten realizar operaciones con set. El espacio de nombres para estas funciones es `http://exslt.org/sets`.

#### Funciones

- [set:difference](/es/docs/Web/XML/EXSLT/Reference/set/difference)
- [set:distinct](/es/docs/Web/XML/EXSLT/Reference/set/distinct)
- [set:intersection](/es/docs/Web/XML/EXSLT/Reference/set/intersection)
- [set:has-same-node](/es/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [set:leading](/es/docs/Web/XML/EXSLT/Reference/set/leading)
- [set:trailing](/es/docs/Web/XML/EXSLT/Reference/set/trailing)

### Strings

El paquete Strings de EXSLT proporciona funciones que permiten la manipulación de cadenas. El espacio de nombres para el paquete Strings es `http://exslt.org/sets`.

#### Funciones

- [str:concat](/es/docs/Web/XML/EXSLT/Reference/str/concat)
- [str:split](/es/docs/Web/XML/EXSLT/Reference/str/split)
- [str:tokenize](/es/docs/Web/XML/EXSLT/Reference/str/tokenize)

### Vea también

- [EXSLT web site](http://www.exslt.org/)
