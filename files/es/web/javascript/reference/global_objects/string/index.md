---
title: String — Cadena de caracteres
slug: Web/JavaScript/Reference/Global_Objects/String
---

{{JSRef}}

El objeto **`String`** se utiliza para representar y manipular una secuencia de caracteres.

## Descripción

Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en cadenas son verificar su {{jsxref("String.length", "length")}}, para construirlas y concatenarlas usando [operadores de cadena + y +=](/es/docs/Web/JavaScript/Reference/Operators/String_Operators), verificando la existencia o ubicación de subcadenas con {{jsxref("String.prototype.indexOf()", "indexOf()")}} o extraer subcadenas con el método {{jsxref("String.prototype.substring()", "substring()")}}.

### Crear cadenas

Las cadenas se pueden crear como primitivas, a partir de cadena literales o como objetos, usando el constructor {{jsxref("String/String", "String()")}}:

```js
const string1 = "Una cadena primitiva";
const string2 = "También una cadena primitiva";
const string3 = `Otra cadena primitiva más`;

const string4 = new String("Un objeto String");
```

Las `string`s primitivas y los objetos `string` se pueden usar indistintamente en la mayoría de las situaciones. Consulta "[Primitivas `String` y objetos `String`](#Primitivas_string_y_objetos_string)" a continuación.

Los cadena literales se pueden especificar usando comillas simples o dobles, que se tratan de manera idéntica, o usando el carácter de comilla invertida <kbd>\`</kbd>. Esta última forma especifica una [Plantilla literal](/es/docs/Web/JavaScript/Reference/Template_literals): con esta forma puedes interpolar expresiones.

### Acceder a un caracter

Hay dos formas de acceder a un caracter individual en una cadena. La primera es con el método {{jsxref("String.prototype.charAt()", "charAt()")}}:

```js
return "cat".charAt(1); // devuelve "a"
```

La otra forma (introducida en ECMAScript 5) es tratar a la cadena como un objeto similar a un arreglo, donde los caracteres individuales corresponden a un índice numérico:

```js
return "cat"[1]; // devuelve "a"
```

Cuando se usa la notación entre corchetes para acceder a los caracteres, no se puede intentar eliminar o asignar un valor a estas propiedades. Las propiedades involucradas no se pueden escribir ni configurar. (Ve {{jsxref("Object.defineProperty()")}} para más información).

### Comparar cadenas

En C, se usa la función `strcmp()` para comparar cadenas. En JavaScript, solo usas los [operadores menor que y mayor que](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators):

```js
let a = "a";
let b = "b";
if (a < b) {
  // true
  console.log(a + " es menor que " + b);
} else if (a > b) {
  console.log(a + " es mayor que " + b);
} else {
  console.log(a + " y " + b + " son iguales.");
}
```

Puedes lograr un resultado similar usando el método {{jsxref("String.prototype.localeCompare()", "localeCompare()")}} heredado por las instancias de `String`.

Ten en cuenta que `a == b` compara las cadenas en `a` y `b` por ser igual en la forma habitual que distingue entre mayúsculas y minúsculas. Si deseas comparar sin tener en cuenta los caracteres en mayúsculas o minúsculas, usa una función similar a esta:

```js
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
} // isEqual
```

En esta función se utilizan mayúsculas en lugar de minúsculas, debido a problemas con ciertas conversiones de caracteres UTF-8.

### Primitivas `String` y objetos `String`

Ten en cuenta que JavaScript distingue entre objetos `String` y valores de {{Glossary("Primitive", "primitivas string")}}. (Lo mismo ocurre con {{jsxref("Boolean", "Booleanos")}} y {{jsxref("Global_Objects/Number", "Números")}}).

Las cadenas literales (denotadas por comillas simples o dobles) y cadenas devueltas de llamadas a `String` en un contexto que no es de constructor (es decir, llamado sin usar la palabra clave {{jsxref("Operators/new", "new")}}) son cadenas primitivas. JavaScript automáticamente convierte las primitivas en objetos `String`, por lo que es posible utilizar métodos del objeto `String` en cadenas primitivas. En contextos donde se va a invocar a un método en una cadena primitiva o se produce una búsqueda de propiedad, JavaScript ajustará automáticamente la cadena primitiva y llamará al método o realizará la búsqueda de la propiedad.

```js
let s_prim = "foo";
let s_obj = new String(s_prim);

console.log(typeof s_prim); // Registra "string"
console.log(typeof s_obj); // Registra "object"
```

Las primitivas de `String` y los objetos `String` también dan diferente resultado cuando se usa {{jsxref("Global_Objects/eval", "eval()")}}. Las primitivas pasadas a `eval` se tratan como código fuente; Los objetos `String` se tratan como todos los demás objetos, devuelven el objeto. Por ejemplo:

```js
let s1 = "2 + 2"; // crea una string primitiva
let s2 = new String("2 + 2"); // crea un objeto String
console.log(eval(s1)); // devuelve el número 4
console.log(eval(s2)); // devuelve la cadena "2 + 2"
```

Por estas razones, el código se puede romper cuando encuentra objetos `String` y espera una `string` primitiva en su lugar, aunque generalmente los autores no necesitan preocuparse por la distinción.

Un objeto `String` siempre se puede convertir a su contraparte primitiva con el método {{jsxref("String.prototype.valueOf()", "valueOf()")}}.

```js
console.log(eval(s2.valueOf())); // devuelve el número 4
```

### Notación de escape

Los caracteres especiales se pueden codificar mediante notación de escape:

| Código                                                                                                   | Salida                                                                      |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `\XXX` (donde `XXX` es de 1 a 3 dígitos octales; rango de `0`-`377`)                                     | Punto de código Unicode/carácter ISO-8859-1 entre `U+0000` y `U+00FF`       |
| `\'`                                                                                                     | Comilla sencilla                                                            |
| `\"`                                                                                                     | Comilla doble                                                               |
| `\\`                                                                                                     | Barra inversa                                                               |
| `\n`                                                                                                     | Nueva línea                                                                 |
| `\r`                                                                                                     | Retorno de carro                                                            |
| `\v`                                                                                                     | Tabulación vertical                                                         |
| `\t`                                                                                                     | Tabulación                                                                  |
| `\b`                                                                                                     | Retroceso                                                                   |
| `\f`                                                                                                     | Avance de página                                                            |
| `\uXXXX` (donde `XXXX` son 4 dígitos hexadecimales; rango de `0x0000`-`0xFFFF`)                          | Unidad de código UTF-16/punto de código Unicode entre `U+0000` y `U+FFFF`   |
| `\u{X}` ... `\u{XXXXXX}` (donde `X…XXXXXX` es de 1 a 6 dígitos hexadecimales; rango de `0x0`-`0x10FFFF`) | Unidad de código UTF-32/punto de código Unicode entre `U+0000` y `U+10FFFF` |
| `\xXX` (donde `XX` son 2 dígitos hexadecimales; rango de `0x00`-`0xFF`)                                  | Punto de código Unicode/carácter ISO-8859-1 entre `U+0000` y `U+00FF`       |

### Cadenas literales largas

A veces, tu código incluirá cadenas que son muy largas. En lugar de tener líneas que se prolongan interminablemente o que se ajustan según el capricho de tu editor, es posible que desees dividir específicamente la cadena en varias líneas en el código fuente sin afectar el contenido real de la cadena. hay dos maneras de conseguirlo.

#### Método 1

Puedes usar el operador [+](/es/docs/Web/JavaScript/Reference/Operators/Addition) para agregar varias cadenas juntas, así:

```js
let longString =
  "Esta es una cadena muy larga que necesita " +
  "que dividimos en varias líneas porque " +
  "de lo contrario, mi código es ilegible.";
```

#### Método 2

Puedes usar el caracter de barra invertida (`\`) al final de cada línea para indicar que la cadena continúa en la siguiente línea. Asegúrate de que no haya ningún espacio ni ningún otro carácter después de la barra invertida (a excepción de un salto de línea) o como sangría; de lo contrario, no trabajará.

Esa forma se ve así:

```js
let longString =
  "Esta es una cadena muy larga que necesita \
que dividimos en varias líneas porque \
de lo contrario, mi código es ilegible.";
```

Ambos métodos anteriores dan como resultado cadenas idénticas.

## Constructor

- {{jsxref("String/String", "String()")}}
  - : Crea un nuevo objeto `String`. Realiza la conversión de tipos cuando se llama como función, en lugar de como constructor, lo cual suele ser más útil.

## Métodos estáticos

- {{jsxref("String.fromCharCode()", "String.fromCharCode(<var>num1</var> [, ...[, <var>numN</var>]])")}}
  - : Devuelve una cadena creada utilizando la secuencia de valores Unicode especificada.
- {{jsxref("String.fromCodePoint()", "String.fromCodePoint(<var>num1</var> [, ...[, <var>numN</var>]])")}}
  - : Devuelve una cadena creada utilizando la secuencia de puntos de código especificada.
- {{jsxref("String.raw()")}}
  - : Devuelve una cadena creada a partir de una plantilla literal sin formato.

## Propiedades de la instancia

- {{jsxref("String.prototype.length")}}
  - : Refleja la `length` de la cadena. Solo lectura.

## Métodos de instancia

- {{jsxref("String.prototype.charAt()", "String.prototype.charAt(<var>index</var>)")}}
  - : Devuelve el caracter (exactamente una unidad de código UTF-16) en el `index` especificado.
- {{jsxref("String.prototype.charCodeAt()", "String.prototype.charCodeAt(<var>index</var>)")}}
  - : Devuelve un número que es el valor de la unidad de código UTF-16 en el `index` dado.
- {{jsxref("String.prototype.codePointAt()", "String.prototype.codePointAt(<var>pos</var>)")}}
  - : Devuelve un número entero no negativo que es el valor del punto de código del punto de código codificado en UTF-16 que comienza en la `pos` especificada.
- {{jsxref("String.prototype.concat()", "String.prototype.concat(<var>str</var>[, ...<var>strN</var>])")}}
  - : Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.
- {{jsxref("String.prototype.includes()", "String.prototype.includes(<var>searchString</var> [, <var>position</var>])")}}
  - : Determina si la cadena de la llamada contiene `searchString`.
- {{jsxref("String.prototype.endsWith()", "String.prototype.endsWith(<var>searchString</var>[, <var>length</var>])")}}
  - : Determina si una cadena termina con los caracteres de la cadena `searchString`.
- {{jsxref("String.prototype.indexOf()", "String.prototype.indexOf(<var>searchValue</var>[, <var>fromIndex</var>])")}}
  - : Devuelve el índice dentro del objeto {{jsxref("String")}} llamador de la primera aparición de `searchValue`, o `-1` si no lo encontró.
- {{jsxref("String.prototype.lastIndexOf()", "String.prototype.lastIndexOf(<var>searchValue</var>[, <var>fromIndex</var>])")}}
  - : Devuelve el índice dentro del objeto {{jsxref("String")}} llamador de la última aparición de `searchValue`, o `-1` si no lo encontró.
- {{jsxref("String.prototype.localeCompare()", "String.prototype.localeCompare(<var>compareString</var>[, <var>locales</var>[, <var>options</var>]])")}}
  - : Devuelve un número que indica si la cadena de referencia `compareString` viene antes, después o es equivalente a la cadena dada en el orden de clasificación.
- {{jsxref("String.prototype.match()", "String.prototype.match(<var>regexp</var>)")}}
  - : Se utiliza para hacer coincidir la expresión regular `regexp` con una cadena.
- {{jsxref("String.prototype.matchAll()", "String.prototype.matchAll(<var>regexp</var>)")}}
  - : Devuelve un iterador de todas las coincidencias de `regexp`.
- {{jsxref("String.prototype.normalize()", "String.prototype.normalize([<var>form</var>])")}}
  - : Devuelve la forma de normalización Unicode del valor de la cadena llamada.
- {{jsxref("String.prototype.padEnd()", "String.prototype.padEnd(<var>targetLength</var>[, <var>padString</var>])")}}
  - : Rellena la cadena actual desde el final con una cadena dada y devuelve una nueva cadena de longitud `targetLength`.
- {{jsxref("String.prototype.padStart()", "String.prototype.padStart(<var>targetLength</var>[, <var>padString</var>])")}}
  - : Rellena la cadena actual desde el principio con una determinada cadena y devuelve una nueva cadena de longitud `targetLength`.
- {{jsxref("String.prototype.repeat()", "String.prototype.repeat(<var>count</var>)")}}
  - : Devuelve una cadena que consta de los elementos del objeto repetidos `count` veces.
- {{jsxref("String.prototype.replace()" , "String.prototype.replace(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Se usa para reemplazar ocurrencias de `searchFor` usando `replaceWith`. `searchFor` puede ser una cadena o expresión regular, y `replaceWith` puede ser una cadena o función.
- {{jsxref("String.prototype.replaceAll()", "String.prototype.replaceAll(<var>searchFor</var>, <var>replaceWith</var>)")}}
  - : Se utiliza para reemplazar todas las apariciones de `searchFor` usando `replaceWith`. `searchFor` puede ser una cadena o expresión regular, y `replaceWith` puede ser una cadena o función.
- {{jsxref("String.prototype.search()", "String.prototype.search(<var>regexp</var>)")}}
  - : Busca una coincidencia entre una expresión regular `regexp` y la cadena llamadora.
- {{jsxref("String.prototype.slice()", "String.prototype.slice(<var>beginIndex</var>[, <var>endIndex</var>])")}}
  - : Extrae una sección de una cadena y devuelve una nueva cadena.
- {{jsxref("String.prototype.split()", "String.prototype.split([<var>sep</var>[, <var>limit</var>] ])")}}
  - : Devuelve un arreglo de cadenas pobladas al dividir la cadena llamadora en las ocurrencias de la subcadena `sep`.
- {{jsxref("String.prototype.startsWith()", "String.prototype.startsWith(<var>searchString</var>[, <var>length</var>])")}}
  - : Determina si la cadena llamadora comienza con los caracteres de la cadena `searchString`.
- {{jsxref("String.prototype.substr()")}}
  - : Devuelve los caracteres en una cadena que comienza en la ubicación especificada hasta el número especificado de caracteres.
- {{jsxref("String.prototype.substring()", "String.prototype.substring(<var>indexStart</var>[, <var>indexEnd</var>])")}}
  - : Devuelve una nueva cadena que contiene caracteres de la cadena llamadora de (o entre) el índice (o indeces) especificados.
- {{jsxref("String.prototype.toLocaleLowerCase()", "String.prototype.toLocaleLowerCase( [<var>locale</var>, ...<var>locales</var>])")}}
  - : Los caracteres dentro de una cadena se convierten a minúsculas respetando la configuración regional actual.Para la mayoría de los idiomas, devolverá lo mismo que {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}}.
- {{jsxref("String.prototype.toLocaleUpperCase()", "String.prototype.toLocaleUpperCase( [<var>locale</var>, ...<var>locales</var>])")}}
  - : Los caracteres dentro de una cadena se convierten a mayúsculas respetando la configuración regional actual.Para la mayoría de los idiomas, devolverá lo mismo que {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}}.
- {{jsxref("String.prototype.toLowerCase()")}}
  - : Devuelve el valor de la cadena llamadora convertido a minúsculas.
- {{jsxref("String.prototype.toString()")}}
  - : Devuelve una cadena que representa el objeto especificado. Redefine el método {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("String.prototype.toUpperCase()")}}
  - : Devuelve el valor de la cadena llamadora convertido a mayúsculas.
- {{jsxref("String.prototype.trim()")}}
  - : Recorta los espacios en blanco desde el principio y el final de la cadena. Parte del estándar ECMAScript 5.
- {{jsxref("String.prototype.trimStart()")}}
  - : Recorta los espacios en blanco desde el principio de la cadena.
- {{jsxref("String.prototype.trimEnd()")}}
  - : Recorta los espacios en blanco del final de la cadena.
- {{jsxref("String.prototype.valueOf()")}}
  - : Devuelve el valor primitivo del objeto especificado. Redefine el método {{jsxref("Object.prototype.valueOf()")}}.
- {{jsxref("String.prototype.@@iterator()")}}
  - : Devuelve un nuevo objeto `Iterator` que itera sobre los puntos de código de un valor de cadena, devolviendo cada punto de código como un valor de cadena.

## Métodos de contenedor HTML

> **Nota:** **Desaprobado. Evita estos métodos.** Son de uso limitado, ya que proporcionan solo un subconjunto de las etiquetas y atributos HTML disponibles.

- {{jsxref("String.prototype.anchor()")}}
  - : [&lt;a name=\"name\"&gt;](/es/docs/Web/HTML/Element/a#name) (hipertexto destino)
- {{jsxref("String.prototype.big()")}}
  - : {{HTMLElement("big")}}
- {{jsxref("String.prototype.blink()")}}
  - : {{HTMLElement("blink")}}
- {{jsxref("String.prototype.bold()")}}
  - : {{HTMLElement("b")}}
- {{jsxref("String.prototype.fixed()")}}
  - : {{HTMLElement("tt")}}
- {{jsxref("String.prototype.fontcolor()")}}
  - : [&lt;font color=\"color\"&gt;](/es/docs/Web/HTML/Element/font#color)
- {{jsxref("String.prototype.fontsize()")}}
  - : [&lt;font size=\"size\"&gt;](/es/docs/Web/HTML/Element/font#size)
- {{jsxref("String.prototype.italics()")}}
  - : {{HTMLElement("i")}}
- {{jsxref("String.prototype.link()")}}
  - : [&lt;a href=\"url\"&gt;](/es/docs/Web/HTML/Element/font#size) (enlace a URL)
- {{jsxref("String.prototype.small()")}}
  - : {{HTMLElement("small")}}
- {{jsxref("String.prototype.strike()")}}
  - : {{HTMLElement("strike")}}
- {{jsxref("String.prototype.sub()")}}
  - : {{HTMLElement("sub")}}
- {{jsxref("String.prototype.sup()")}}
  - : {{HTMLElement("sup")}}

## Ejemplos

### Conversión de cadenas

Es posible usar `String` como una alternativa más confiable de {{jsxref("String.prototype.toString()", "toString()")}}, ya que funciona cuando se usa en {{jsxref( "null")}}, {{jsxref("undefined")}} y en {{jsxref("Symbol", "símbolos")}}. Por ejemplo:

```js
let outputStrings = [];
for (let i = 0, n = inputValues.length; i < n; ++i) {
  outputStrings.push(String(inputValues[i]));
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Formato de texto en la Guía de JavaScript](/es/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("RegExp")}}
- {{domxref("DOMString")}}
- [`StringView` — una representación similar a C de cadenas basada en arreglos tipados](/es/Add-ons/Code_snippets/StringView)
- [Cadenas binarias](/es/docs/Web/API/DOMString/Binary)
