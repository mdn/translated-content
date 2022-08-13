---
title: EXSLT
slug: Web/EXSLT
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT
---
{{XsltRef}}EXSLT es un conjunto de extensiones de [XSLT](es/XSLT). Existen varios módulos; aquellos que están implementados por Firefox se listan a continuación:

- [Common](#Common) (`exsl`)
  - : Proporciona elementos y funciones de extensión básicas.
- [Math](#Math) (`math`)
  - : Proporciona rutinas para la comparación de nodos.
- [Regular expressions](#Regular_expressions) (`regexp`)
  - : Proporciona facilidades para usar expresiones regulares en sintaxis de JavaScript.
- [Sets](#Sets) (`set`)
  - : Proporciona rutinas para la manipulación de sets.
- [Strings](#Strings) (`str`)
  - : Proporciona funciones para la manipulación de cadenas.

### Uso de EXSLT

Para usar una extensión de EXSLT, necesitas declarar su espacio de nombres como una extensión de espacio de nombres en tu hoja de estilo. Por ejemplo, para utilizar el paquete de expresiones regulares:

    <xsl:stylesheet version="1.0"
                    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                    xmlns:regexp="http://exslt.org/regular-expressions"
                    extension-element-prefixes="regexp">

    <xsl:import href="regexp.xsl" />

    ...

    </xsl:stylesheet>

### Common

El paquete Common de EXSLT proporciona funciones básicas que incrementan las capacidades de XSLT. El espacio de nombres de Common es `http://exslt.org/common`.

#### Funciones

- [exsl:node-set](es/EXSLT/exsl/node-set)
- [exsl:object-type](es/EXSLT/exsl/object-type)

### Math

El paquete Math de EXSLT proporciona funciones para el trabajo con valores numéricos y la comparación de nodos. El espacio de nombres del paquete Math es `http://exslt.org/math`.

#### Funciones

- [math:highest](es/EXSLT/math/highest)
- [math:lowest](es/EXSLT/math/lowest)
- [math:max](es/EXSLT/math/max)
- [math:min](es/EXSLT/math/min)

### Regular Expressions

El paquete Regular Expressions de EXSLT proporciona funciones que permiten comprobar, buscar coincidencias y reemplazar texto usando expresiones regulares en estilo JavaScript.

El espacio de nombres del paquete Regular Expressions es `http://exslt.org/regular-expressions`.

#### Funciones

- [regexp:match](es/EXSLT/regexp/match)
- [regexp:replace](es/EXSLT/regexp/replace)
- [regexp:test](es/EXSLT/regexp/test)

### Sets

El paquete Sets de EXSLT ofrece funciones que permiten realizar operaciones con set. El espacio de nombres para estas funciones es `http://exslt.org/sets`.

#### Funciones

- [set:difference](es/EXSLT/set/difference)
- [set:distinct](es/EXSLT/set/distinct)
- [set:intersection](es/EXSLT/set/intersection)
- [set:has-same-node](es/EXSLT/set/has-same-node)
- [set:leading](es/EXSLT/set/leading)
- [set:trailing](es/EXSLT/set/trailing)

### Strings

El paquete Strings de EXSLT proporciona funciones que permiten la manipulación de cadenas. El espacio de nombres para el paquete Strings es `http://exslt.org/sets`.

#### Funciones

- [str:concat](es/EXSLT/str/concat)
- [str:split](es/EXSLT/str/split)
- [str:tokenize](es/EXSLT/str/tokenize)

### Vea también

- [EXSLT web site](http://www.exslt.org/)
