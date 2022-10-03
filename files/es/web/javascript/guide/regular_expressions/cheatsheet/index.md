---
title: Hoja de referencia de sintaxis de expresiones regulares
slug: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
tags:
  - Cheatsheet
  - Expresiones Regulares
  - Guía
  - Hoja de referencia
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
original_slug: Web/JavaScript/Guide/Regular_Expressions/Hoja_de_referencia
---
{{jsSidebar("Guía de JavaScript")}}

Esta página proporciona una hoja de referencia general de todas las capacidades de la sintaxis de `RegExp` agregando el contenido de los artículos en la guía `RegExp`. Si necesitas más información sobre un tema específico, sigue el enlace del título correspondiente para acceder al artículo completo o dirígete a [la guía](/es/docs/Web/JavaScript/Guide/Regular_Expressions/).

## [Clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)«Tabla»

## [Aserciones](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)

### Aserciones de tipo límite

«Tabla»

### Otras aserciones

> **Nota:** El caracter `?` también se puede utilizar como cuantificador.

«Tabla»

## [Grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

| Caracteres      | Significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `x\|y`          | Coincide con "x" o "y". Por ejemplo, `/verde\|roja/` reconoce el "verde" en "manzana verde" y "roja" en "manzana roja".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `[xyz] [a-c]`   | Un juego de caracteres. Coincide con cualquiera de los caracteres incluidos. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. También es posible incluir una clase de caracteres en un juego de caracteres.Por ejemplo, `[abcd]` es lo mismo que `[a-d]`. Coincide con la "b" en "brisket" y la "c" en "chop".Por ejemplo, `[abcd-]` y `[-abcd]` reconoce la "b" en "brisket", la "c" en "chop" y el "-" (guión) en "non-profit".Por ejemplo, `[\w-]` es lo mismo que `[A-Za-z0-9_-]`. Ambos reconocen la "b" en "brisket", la "c" en "chop" y la "n" en "non-profit".                                                                                                                                                                                                                                                                                                                                                                                                      |
| `[^xyz] [^a-c]` | Un juego de caracteres negado o complementado. Es decir, hallan cualquier cosa que no esté encerrada entre corchetes. Puedes especificar un rango de caracteres mediante el uso de un guión, pero si el guión aparece como el primero o último caracter entre corchetes, se toma como un guión literal para incluirse en el juego de caracteres como un caracter normal. Por ejemplo, `[^abc]` es lo mismo que `[^a-c]`. Inicialmente halla la "o" en "bacon" y la "h" en "chuleta".El caracter ^ además puede indicar el [comienzo de la entrada](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `(x)`           | **Grupo de captura**: Encuentra la `x` y la recuerda. Por ejemplo, `/(foo)/` encuentra y recuerda "foo" en "foo bar".Una expresión regular puede tener varios grupos de captura. En los resultados, coincide con los grupos capturados normalmente en un arreglo cuyos miembros están en el mismo orden que los paréntesis de la izquierda en el grupo capturado. Este suele ser solo el orden de los propios grupos capturados. Esto se vuelve importante cuando los grupos capturados están anidados. Se accede a las coincidencias utilizando el índice de los elementos del resultado (`[1], ..., [n]`) o desde las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).Los grupos de captura tienen una penalización de rendimiento. Si no necesitas que se recupere la subcadena coincidente, prefiere los paréntesis que no capturen (ve más abajo).[`String.match()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/match) no devolverá grupos si el indicador `/.../g` está configurado. Sin embargo, aún puedes usar [`String.matchAll()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll) para obtener todas los encontrados. |
| `\n`            | Donde "n" es un número entero positivo. Una referencia posterior a la última subcadena que coincide con el paréntesis n en la expresión regular (contando los paréntesis izquierdos). Por ejemplo, `/apple(,)\sorange\1/` coincide con "apple, orange" en "apple, orange, cherry, peach".                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \k\<Name>       | Una referencia inversa a la última subcadena encontrada con el grupo de captura **N\*\***ombrado\*\* especificado por `<Name>`.Por ejemplo, `/(?<title>\w+), yes \k<title>/` concuerda con "Sir, yes Sir" en "Do you copy? Sir, yes Sir!".`\k` aquí se usa literalmente para indicar el comienzo de una referencia a un grupo de captura nombrado.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `(?<Name>x)`    | **Grupo de captura nombrado**: reconoce la "x" y la almacena en la propiedad `group` del resultado devuelto bajo el nombre especificado por `<Name>`. Los corchetes angulares (`<` y `>`) son obligatorios para el nombre del grupo.Por ejemplo, para extraer el código de área de Estados Unidos de un número de teléfono, podríamos usar `/\((?<area>\d\d\d)\)/`. El número resultante debería aparecer en `matches.groups.area`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `(?:x)`         | **Grupo sin captura**: reconoce la "x" pero no recuerda el resultado. La subcadena encontrada no se puede recuperar de los elementos del arreglo resultante (`[1], ..., [n]`) o de las propiedades predefinidas del objeto `RegExp` (`$1, ..., $9`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## [Cuantificadores](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)

> **Nota:** A continuación, _elemento_ se refiere no solo a caracteres singulares, sino que también incluye [clases de caracteres](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [escapes de propiedad Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), [grupos y rangos](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

«Tabla»

## [Escapa la propiedad Unicode](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

Si deseas contribuir a este documento, edita también [el artículo original](/es/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)

```js
// Valores no binarios
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Valores binarios y no binarios
\p{UnicodeBinaryPropertyName}

// Negación: \P is negado \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

- UnicodeBinaryPropertyName
  - : El nombre de una [propiedad binaria](https://tc39.es/ecma262/#table-binary-unicode-properties). Por ejemplo: [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacrítica`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`Espacio_blanco`](https://unicode.org/reports/tr44/#White_Space), etc. Consulta [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) para obtener más información.
- UnicodePropertyName

  - : El nombre de una propiedad [no binaria](https://tc39.es/ecma262/#table-nonbinary-unicode-properties):

    - [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) (`gc`)
    - [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
    - [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

Consulta también [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- UnicodePropertyValue
  - : Uno de los fragmentos enumerados en la sección Valores, más adelante. Muchos valores tienen alias o abreviaturas (por ejemplo, el valor `Decimal_Number` para la propiedad `General_Category` se puede escribir cómo `Nd`, `digit`, o `Decimal_number`). Para la mayoría de los valores, la parte _`UnicodePropertyName` \_y el signo igual se pueden omitir. Si se especifica un _`UnicodePropertyName`\_, el valor debe corresponder al tipo de propiedad proporcionado.

> **Nota:** Puesto que hay muchas propiedades y valores disponibles, no las describiremos exhaustivamente aquí, sino que proporcionaremos varios ejemplos.
