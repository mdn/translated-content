---
title: Escapes de propiedades Unicode
slug: Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
---

{{jsSidebar("JavaScript Guide")}}

Los **escapes de propiedad Unicode** en las {{JSxRef("../Guide/Regular_Expressions", "Expresiones regulares")}} permiten la coincidencia de caracteres según sus propiedades Unicode. Un caracter se describe mediante varias propiedades que, o bien, son binarias ("tipo booleano") o, no binarias. Por ejemplo, puedes usar escapes de propiedades Unicode para reconocer emojis, signos de puntuación, letras (incluso letras de idiomas específicos o scripts), etc.

{{EmbedInteractiveExample("pages/js/regexp-unicode-property-escapes.html", "taller")}}

> **Nota:** Para que funcionen los escapes de propiedad Unicode, una expresión regular debe utilizar {{JSxRef("../Guide/Regular_Expressions", "la bandera <code>u</code>", "#Busqueda_avanzada_con_banderas")}} que indica que una cadena se debe considerar como una serie de puntos de código Unicode. Consulta también {{JSxRef("Objetos_globales/RegExp/unicode", "RegExp.prototype.unicode")}}.

> **Nota:** Algunas propiedades Unicode abarcan muchos más caracteres que algunas {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "clases de caracteres")}} (como `\w` que coincide solo con letras latinas, desde `a` hasta `z`) pero esta última es más compatible con los navegadores (a partir de enero de 2020).

## Sintaxis

La siguiente sección también está duplicada en {{JSxRef("../Guide/Regular_Expressions/Hoja_de_referencia", "esta hoja de trucos")}}. No olvides editarla también, ¡gracias!

```js
// Valores no binarios
\p{UnicodePropertyValue}
\p{UnicodePropertyName=UnicodePropertyValue}

// Valores binarios y no binarios
\p{UnicodeBinaryPropertyName}

// Negación: \P se niega con \p
\P{UnicodePropertyValue}
\P{UnicodeBinaryPropertyName}
```

- [Categoría general](https://unicode.org/reports/tr18/#General_Category_Property) (`gc` por «_**g**eneral **c**ategory_»)
- [Script](https://unicode.org/reports/tr24/#Script) (`sc` por «_**sc**ript_»)
- [Extensiones de script](https://unicode.org/reports/tr24/#Script_Extensions) (`scx` por «_**sc**ript e**x**tensions_»)

Consulta también [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- UnicodeBinaryPropertyName
  - : El nombre de una [propiedad binaria](https://tc39.es/ecma262/#table-binary-unicode-properties). Por ejemplo: [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alfabético`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacrítico`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Dígito hexadecimal`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`Espacio en blanco`](https://unicode.org/reports/tr44/#White_Space), etc. Consulta [Unicode Data PropList.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) para obtener más información.
- NombreDePropiedadUnicode
  - : El nombre de una propiedad [no binaria](https://tc39.es/ecma262/#table-nonbinary-unicode-properties):
- ValorDePropiedadUnicode
  - : Uno de los fragmentos enumerados en la sección Valores, más adelante. Muchos valores tienen alias o abreviaturas (por ejemplo, el valor `Decimal_Number` para la propiedad `General_Category` se puede escribir `Nd`, `digit`, o `Decimal_Number`). Para la mayoría de los valores, la parte `NombreDePropiedadUnicode` y el signo igual se pueden omitir. Si se especifica un `NombreDePropiedadUnicode`, el valor debe corresponder al tipo de propiedad proporcionado.

> **Nota:** Debido a que hay muchas propiedades y valores disponibles, no los describiremos exhaustivamente aquí, en su lugar proporcionaremos varios ejemplos.

## Justificación

Antes de ES2018, no existía una forma eficiente de hacer coincidir caracteres de diferentes conjuntos basados en `scripts` (como macedonio, griego, georgiano, etc.) o `propertyName` (como Emoji, etc.) en JavaScript. Consulta la [propuesta tc39 sobre escapes de propiedad Unicode](https://github.com/tc39/proposal-regexp-unicode-property-escapes) para obtener más información.

## Ejemplos

### Categorías generales

Las categorías generales se utilizan para clasificar caracteres Unicode, y hay subcategorías disponibles para definir una categorización más precisa. Es posible utilizar formas cortas o largas en los escapes de propiedades Unicode.

Se pueden utilizar para reconocer letras, números, símbolos, signos de puntuación, espacios, etc. Para obtener una lista más exhaustiva de categorías generales, consulta [la especificación Unicode](https://unicode.org/reports/tr18/#General_Category_Property).

```js
// encontrar todas las letras de un texto
let historia = "Es el gato de Cheshire: ahora tendré alguien con quien hablar";

// Forma más explícita
historia.match(/\p{General_Category=Letter}/gu);

// No es obligatorio utilizar el nombre de la propiedad para las categorías generales
historia.match(/\p{Letter}/gu);

// Esto es equivalente (alias corto):
historia.match(/\p{L}/gu);

// Esto también es equivalente (conjunción de todas las subcategorías que utilizan alias cortos)
historia.match(/\p{Lu}|\p{Ll}|\p{Lt}|\p{Lm}|\p{Lo}/gu);
```

### Scripts y extensiones de script

Algunos idiomas usan diferentes signos para su sistema de escritura. Por ejemplo, el Inglés y el Español se escriben con los signos latinos, mientras que el Árabe y el Ruso se escriben con otros signos (Árabe y Cirílico, respectivamente). Las propiedades Unicode `Script` y `Script_Extensions` permiten que las expresiones regulares coincidan con los caracteres según el script con el que se utilizan principalmente (`Script`) o según el conjunto de los scripts a los que pertenecen (`Script_Extensions`).

Por ejemplo, `A` pertenece al script `Latin` y `ε` al script `Greek` (Griego).

```js
let caracteresMezclados = "aεЛ";

// Usando el nombre canónico "largo" del script
caracteresMezclados.match(/\p{Script=Latin}/u); // a

// Usando un alias corto para el script
caracteresMezclados.match(/\p{Script=Greek}/u); // ε

// Usando el nombre corto Sc para la propiedad Script
caracteresMezclados.match(/\p{Sc=Cyrillic}/u); // Л
```

Para obtener más detalles, consulta [la especificación Unicode](https://unicode.org/reports/tr24/#Script) y la [Tabla de scripts en la especificación ECMAScript](https://tc39.es/ecma262/#table-unicode-script-values).

Si se usa un carácter en un conjunto limitado de scripts, la propiedad `Script` solo coincidirá con el script "predominante" utilizado. Si quieres hacer coincidir caracteres basados en un script "no predominante", podrías usar la propiedad `Script_Extensions` (`Scx` para abreviar).

```js
// ٢ es el dígito 2 en notación Árabe-Índica
// si bien está escrito en un script predominante en árabe
// también se puede escribir en el script Thaana

"٢".match(/\p{Script=Thaana}/u);
// null ya que Thaana no es el script predominante     super()

"٢".match(/\p{Script_Extensions=Thaana}/u);
// ["٢", index: 0, input: "٢", groups: undefined]
```

### Escapes de propiedades Unicode versus Clases de caracteres

Con las expresiones regulares de JavaScript, también es posible utilizar {{JSxRef("../Guide/Regular_Expressions/Clases_de_caracteres", "clases de caracteres")}} y especialmente `\w` o `\d` para hacer coincidir letras o dígitos. Sin embargo, estos formularios solo coinciden con caracteres de la escritura _latina_ (en otras palabras, de la `a` a la `z` y `A` a `Z` para `\w` y `0` a `9` para `\d`). Como se muestra en {{JSxRef("../Guide/Regular_Expressions/Clases_de_caracteres", "este ejemplo", "#Busca_una_palabra_de_caracteres_Unicode")}}, puede ser un poco torpe trabajar con textos no latinos.

Las categorías de escape de propiedad Unicode abarcan muchos más caracteres y `\p{Letter}` o `\p{Number}` funcionarán para cualquier script.

```js
// Intentando usar rangos para evitar limitaciones de \w:

const textoNoEs = "Приключения Алисы в Стране чудес";
const regexpPalabraBMP = /([\u0000-\u0019\u0021-\uFFFF])+/gu;
// BMP pasa por U+0000 a U+FFFF pero el espacio es U+0020

console.table(textoNoEs.match(regexpPalabraBMP));

// El uso de la propiedad Unicode se escapa en su lugar
const regexpEPU = /\p{L}+/gu;
console.table(textoNoEs.match(regexpEPU));
```

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Para obtener información sobre la compatibilidad del navegador, consulta la {{JSxRef("../Guide/Regular_Expressions", "tabla principal de compatibilidad de expresiones regulares", "#Compatibilidad_del_navegador")}}.

## Ve también

- {{JSxRef("../Guide/Regular_Expressions", "Guía de expresiones regulares")}}

  - {{JSxRef("../Guide/Regular_Expressions/Character_Classes", "Clases de caracteres")}}
  - {{JSxRef("../Guide/Regular_Expressions/Assertions", "Aserciones")}}
  - {{JSxRef("../Guide/Regular_Expressions/Cuantificadores", "Cuantificadores")}}
  - {{JSxRef("../Guide/Regular_Expressions/Grupos_y_rangos", "Grupos y rangos")}}

- {{JSxRef("Objetos_globales/RegExp", "El constructor RegExp()")}}
- {{JSxRef("Objetos_globales/RegExp/unicode", "RegExp.prototype.unicode")}}
- [Propiedades de caracteres unicode — Wikipedia](https://en.wikipedia.org/wiki/Unicode_character_property)
- [Una entrada en el blog de Axel Rauschmayer sobre los escapes de propiedades Unicode](https://2ality.com/2017/07/regexp-unicode-property-escapes.html)
- [El documento Unicode para las propiedades Unicode](https://unicode.org/reports/tr18/#Categories)
