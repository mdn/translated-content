---
title: decimal-format
slug: Web/XSLT/Element/decimal-format
---

{{XsltRef}}

El elemento `<xsl:decimal-format>` define los caracteres y los símbolos que serán usados en la conversión de números a cadenas de texto usando la función `format-number( )`.

### Sintaxis

```
<xsl:decimal-format
  name=NOMBRE
  decimal-separator=CARACTER
  grouping-separator=CARACTER
  infinity=TEXTO
  minus-sign=CARACTER
  NaN=TEXTO
  percent=CARACTER
  per-mille=CARACTER
  zero-digit=CARACTER
  digit=CARACTER
  pattern-separator=CARACTER />
```

### Atributos requeridos

Ninguno.

### Atributos opcionales

- `name`

  - : Indica el nombre que tendrá este formato.

- `decimal-separator`

  - : Indica el caracter a ser usado como punto decimal. El valor por defecto es (`.`).

- `grouping-separator`

  - : Indica el separador de miles. El valor por defecto es (`,`).

- `infinity`

  - : Indica el texto a ser usado para representar el valor de infinito. El valor por defecto es la cadena de texto "`Infinity`".

- `minus-sign`

  - : Indica el caracter a ser usado como signo negativo. El valor por defecto es el guión (`-`).

- `NaN`

  - : Indica la cadena de texto a ser usado cuando el valor no es un número. El valor por defecto es la cadena de texto "`NaN`".

- `percent`

  - : Indica el caracter a ser usado como signo de porcentaje. El valor por defecto es (`%`).

- `per-mille`

  - : Indica el separador de miles. El valor por defecto es (`‰`).

- `zero-digit`

  - : Indica el caracter para el cero. El valor por defecto es (`0`).

- `digit`

  - : Indica el caracter a ser usado en los patrones de formato para indicar un dígito. El valor por defecto es (`#`).

- `pattern-separator`
  - : Indica el caracter para separar patrones de formato negativos y positivos. El valor por defecto es el punto y coma (`;`).

### Tipo

Elemento raíz, debe ser hijo de elemento `<xsl:stylesheet>` o `<xsl:transform>`.

### Definido

XSLT, sección 12.3.

### Soporte en Gecko

Soportado desde la versión 1.0 (Mozilla 1.0, Netscape 7.0).
