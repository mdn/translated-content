---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef("Objetos_globales", "String")}}

El método **`replace()`** devuelve una nueva cadena con una, algunas, o todas las coincidencias de un `patrón`, siendo cada una de estas coincidencias reemplazadas por un `reemplazo`. El `patrón` puede ser una cadena o un objeto _{{jsxref("RegExp")}}_, y el `reemplazo` puede ser una cadena o una función que será llamada para cada coincidencia. Si el `patrón` es una cadena, sólo la primera coincidencia será reemplazada. La cadena original permanecerá inalterada.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Sintaxis

```js-nolint
replace(patrón, reemplazo)
```

### Parámetros

- `patrón`

  - : Puede ser una cadena o un objeto con un método [`Symbol.replace`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) — el ejemplo típico es una [expresión regular](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Cualquier valor que no tenga el método `Symbol.replace` será convertido a una cadena.

- `reemplazo`
  - : Puede ser una cadena o una función.
    - Si es una cadena, reemplazará la subcadena que coincida con `patrón`. Un número de patrones de reemplazo especiales son soportados; consulta la sección [Especificando una cadena como el reemplazo](#especificando-una-cadena-como-el-reemplazo).
    - Si es una función, será invocada para cada coincidencia y su valor de retorno será usado como el texto de reemplazo. Los parámetros proporcionados a esta función son descritos en la sección [Especificando una función como el reemplazo](#especificando-una-función-como-el-reemplazo).

### Valor de retorno

Una nueva cadena, con una, algunas, o todas las coincidencias de un patrón reemplazadas por el reemplazo especificado.

## Descripción

Este método no cambia el valor de la cadena sobre la que se realiza la llamada. Devuelve una nueva cadena.

Un patrón de cadena solo será reemplazado una vez. Para realizar una búsqueda y reemplazo global, se debe usar una expresión regular con el parámetro `g`, o usar [`replaceAll()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll) en su lugar.

Si `patrón` es un objeto con un método [`Symbol.replace`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) (incluyendo objetos de tipo `RegExp`), ese método es llamado con la cadena objetivo y `reemplazo` como parámetros. Su valor de retorno se convierte en el valor de retorno de `replace()`. En este caso el comportamiento de `replace()` es completamente codificado por el método `@@replace` — por ejemplo, cualquier mención de "grupos de captura" en la descripción de abajo es funcionalidad proporcionada por [`RegExp.prototype[@@replace]`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace).

Si el `patrón` es una cadena vacía, el reemplazo será añadido al inicio de la cadena.

```js
"xxx".replace("", "_"); // "_xxx"
```

Una _regexp_ con el parámetro `g` es el único caso donde `replace()` reemplaza más de una vez. Para más información acerca de cómo interactúan las propiedades de una _regex_ (especialmente el paramétro [sticky](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)), véase [`RegExp.prototype[@@replace]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace).

#### Especificando una cadena como el reemplazo

La cadena de reemplazo puede incluir los siguientes patrones de reemplazo especiales:

| Patrón      | Inserta                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `$$`        | Inserta un `"$"`.                                                                                    |
| `$&`        | Inserta la subcadena encontrada.                                                                     |
| `` $` ``    | Inserta la porción de la cadena que precede a la subcadena encontrada.                               |
| `$'`        | Inserta la porción de la cadena que sigue a la subcadena encontrada.                                 |
| `$n`        | Inserta el `n`-simo grupo de captura (indexado por `1`) donde `n` es un entero positivo menor a 100. |
| `$<Nombre>` | Inserta el grupo de captura nombrado donde `Nombre` es el nombre del grupo.                          |

`$n` y `$<Name>` solo están disponibles si el parámetro `patrón` es un objeto _{{jsxref("RegExp")}}_. Si el `patrón` es una cadena, o si el correspondiente grupo de captura no está presente en la _regex_, entonces el patrón será reemplazado como un literal. Si el grupo está presente pero no tiene ninguna coincidencia (porque es parte de una disyunción), será reemplazado con una cadena vacía.

```js
"foo".replace(/(f)/, "$2");
// "$2oo"; la expresión regular no tiene el segundo grupo

"foo".replace("f", "$1");
// "$1oo"; el patrón es una cadena, por lo que no tiene ningún grupo

"foo".replace(/(f)|(g)/, "$2");
// "oo"; el segundo grupo existe pero no tiene coincidencia
```

### Especificando una función como el reemplazo

Se puede especificar un función como el segundo parámetro. En este caso, la función será invocada después de haber buscado las coincidencias. El resultado de la función (valor de retorno) será usado como la cadena de reemplazo.

> **Nota:** Los patrones de reemplazo especiales mencionados previamente _no_ aplican para las cadenas devueltas por una función de reemplazo.

La función tiene la siguiente firma:

```js
function replacer(match, p1, p2, /* …, */ pN, offset, string, groups) {
  return replacement;
}
```

Los parámetros para la función son los siguientes:

- `match`
  - : La cadena encontrada. (Corresponde a `$&` de la tabla de arriba).
- `p1, p2, …, pN`
  - : La `n`-sima cadena encontrada por un grupo de captura (incluyendo grupos de captura nombrados), siempre y cuando el primer parámetro para `replace()` sea un objeto _{{jsxref("RegExp")}}_. (Corresponde a `$1`, `$2`, etc. de la tabla de arriba). Por ejemplo, si el `patrón` es `/(\a+)(\b+)/`, entonces `p1` es la coincidencia para `\a+`, y `p2` es la coincidencia para `\b+`. Si el grupo es parte de una disyunción (por ejemplo, `"abc".replace(/(a)|(b)/, replacer)`), la alternativa que no tenga coincidencia será `undefined`.
- `offset`
  - : La posición de la subcadena encontrada en toda la cadena siendo examinada. Por ejemplo, si toda la cadena fuera `'abcd'`, y la subcadena encontrada fuera `'bc'`, entonces este parámetro sería `1`.
- `string`
  - : Toda la cadena siendo examinada.
- `groups`
  - : Un objeto del cual las llaves son los nombres de los grupos usados, y del cual los valores son las porciones encontradas (`undefined` si no hubo ninguna). Solo presente si el `patrón` contiene al menos un grupo de captura nombrado.

El número exacto de parámetros depende de si el primer argumento es un objeto _{{jsxref("RegExp")}}_ — y, si lo es, de cuantos grupos de captura tenga.

El siguient ejemplo cambiará `newString` a `'abc - 12345 - #$*%'`:

```js
function replacer(match, p1, p2, p3, offset, string) {
  // p1 no son dígitos, p2 son dígitos, y p3 no son alfanuméricos
  return [p1, p2, p3].join(" - ");
}
const newString = "abc12345#$*%".replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%
```

La función será invocada multiple veces para cada coincidencia completa para ser reemplazada si la expresión regular en el primer parámetro es global.

## Ejemplos

### Definiendo la expresión regular en replace()

En el siguiente ejemplo, la expresión regular es definida en `replace()` e incluye el parámetro _ignore case_ (ignorar mayúsculas y minúsculas).

```js
const str = "Twas the night before Xmas...";
const newstr = str.replace(/xmas/i, "Christmas");
console.log(newstr); // Twas the night before Christmas...
```

Esto imprime `'Twas the night before Christmas...'`.

> **Nota:** Véase [la guía de expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_expressions) para más información acerca de expresiones regulares.

### Usando los parámetros _global_ e _ignoreCase_ con replace()

El reemplazo global solo puede ser hecho con una expresión regular. En el siguiente ejemplo, la expresión regular incluye [los parámetros _global_ e _ignoreCase_](/es/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) los cuales permiten a `replace()` reemplazar cada ocurrencia de `'apples'` en la cadena con `'oranges'`.

```js
const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
console.log(newstr); // oranges are round, and oranges are juicy.
```

Esto imprime `'oranges are round, and oranges are juicy'`.

### Intercambiando palabras en una cadena

El siguiente código intercambia las palabras en la cadena. Para el texto de reemplazo, el código usa [grupos de captura](/es/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) y los patrones de reemplazo `$1` y `$2`.

```js
const re = /(\w+)\s(\w+)/;
const str = "Maria Cruz";
const newstr = str.replace(re, "$2, $1");
console.log(newstr); // Cruz, Maria
```

Esto imprime `'Cruz, Maria'`.

### Usando una función en línea que modifica los caracteres encontrados

En este ejemplo, todas las ocurrencias de letras mayúsculas en la cadena son convertidas a minúsculas, y un guion es insertado justo antes de cada ubicación encontrada. La cosa importante aquí es que operaciones adicionales son necesarias en el elemento encontrado antes de que sea devuelto como un reemplazo.

La función de reemplazo acepta la coincidencia encontrada como parámetro, y lo usa para transformar las mayúsculas a minúsculas y para concatenar el guión antes de retornar.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}
```

Dado `styleHyphenFormat('borderTop')`, esto retorna `'border-top'`.

Ya que queremos transformar el _resultado_ de la coincidencia antes de que la sustitución final sea hecha, debemos usar una función. Esto forza la evaluación de la coincidencia antes del método [`toLowerCase()`](/es/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Si hemos intentado hacer esto usando la coincidencia sin una función, {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} no tendrá efecto.

```js example-bad
// No funcionará
const newString = propertyName.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

Esto es porque `'$&'.toLowerCase()` sería el primero en ser evaluado como una cadena literal (resultando en el mismo `'$&'`) antes de usar los caracteres como un patrón.

### Reemplazando grados Fahrenheit con su equivalente en Celsius

El siguiente ejemplo reemplaza grados Fahrenheit con su equivalente en grados Celsius. Los grados Fahrenheit deben ser un número terminado en `"F"`. La función retorna el número en Celsius terminando con `"C"`. Por ejemplo, si el número de entrada es `"212F"`, la función retorna `"100C"`. Si el número es `"0F"`, la función retorna `"-17.77777777777778C"`.

La expresión regular `test` verifica cualquier número que termina con `F`. El número de grados Fahrenheit es accesible para la función a través del segundo parámetro, `p1`. La función establece el número Celsius con base en el número de grados Fahrenheit pasados como cadena a la función `f2c()`. Entonces `f2c()` retorna el número en Celsius. Esta función se aproxima a la bandera de Perl `s///e`.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const s = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

### Creando un reemplazador genérico

Supongamos que queremos crear un reemplazador que agregue la posición para cada coincidencia encontrada. Ya que la función de reemplazo ya recibe el parámetro `offset`, será trivial si la _regex_ es estáticamente conocida.

```js
"abcd".replace(/(bc)/, (match, p1, offset) => `${match} (${offset}) `);
// "abc (1) d"
```

Sin embargo, este reemplazador debería ser más difícil de generalizar si queremos que trabaje con cualquier expresión regular. El reemplazador es _variadic_ — el número de parámetros que recibe depende del número de grupos de captura presentes. Podemos usar [parámetros rest](/es/docs/Web/JavaScript/Reference/Functions/rest_parameters), pero también recolectaría `offset`, `string`, etc. en el arreglo. El hecho de que `groups` pueda o no ser pasado dependiendo de la identidad de la _regex_ también haria difícil conocer genéricamente cuál argumento corresponde al `offset`.

```js example-bad
function addOffset(match, ...args) {
  const offset = args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (abcd) d"
```

El ejemplo `addOffset` de arriba no funciona cuando _regex_ contiene un grupo nombrado, porque en este caso `args.at(-2)` sería el `string` en lugar del `offset`.

En su lugar, es necesario extraer los últimos parámetros con base en su tipo, porque `groups` es un objeto mientras `string` es una cadena.

```js
function addOffset(match, ...args) {
  const hasNamedGroups = typeof args.at(-1) === "object";
  const offset = hasNamedGroups ? args.at(-3) : args.at(-2);
  return `${match} (${offset}) `;
}

console.log("abcd".replace(/(bc)/, addOffset)); // "abc (1) d"
console.log("abcd".replace(/(?<group>bc)/, addOffset)); // "abc (1) d"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `String.prototype.replace` en `core-js` con arreglos e implementación de un comportamiento moderno como el soporte para `Symbol.replace`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.replaceAll", "String.prototype.replaceAll()")}}
- {{jsxref("String.prototype.match", "String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec", "RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test", "RegExp.prototype.test()")}}
- [`Symbol.replace`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)
- [`RegExp.prototype[@@replace]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace)
