---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
original_slug: Web/JavaScript/Referencia/Objetos_globales/String/replace
---

{{JSRef("Objetos_globales", "String")}}

## Resumen

El método **`replace()`** devuelve una nueva cadena con algunas o todas las coincidencias de un `patrón`, siendo cada una de estas coincidencias reemplazadas por `remplazo`. El `patrón` puede ser una cadena o una {{jsxref("RegExp")}}, y el `reemplazo` puede ser una cadena o una función que será llamada para cada coincidencia. Si el `patrón` es una cadena, sólo la primera coincidencia será reemplazada.

La cadena original permanecerá inalterada.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Sintaxis

```html
cadena.replace(regexp|substr, newSubStr|function[, {{ Non-standard_inline() }} flags]);
```

### Parámetros

- `expresionregular`
  - : Un objeto {{jsxref("RegExp")}} o literal. Las coincidencias son reemplazadas por `ewSubSt` o el valor devuelto por la función especificada.

<!---->

- `subcadena`
  - : Un objeto {{jsxref("String")}} que será reemplazado por `nuevaSubcadena`.

<!---->

- `nuevaSubcadena`
  - : El objeto {{jsxref("String")}} que reemplaza la subcadena que recibida desde el primer parámetro.

<!---->

- `funcion`
  - : Una función que será invocada para crear la nueva subcadena (para ponerla en lugar de la subcadena recibida por el primer parámetro).

<!---->

- `flags` {{ non-standard_inline() }}
  - : Un objeto {{jsxref("String")}} que contiene cualquier combinación de flags de la clase RegExp: `g` - emparejamiento global, `i` - ignorar mayúsculas, `m` - emparejar multiples líneas. Este parámetro se usa sólo si el primer parámetro es una cadena.

## Descripción

Este método no cambia el objeto `String` sobre el que se realiza la llamada. Simplemente devuelve una nueva cadena.

Para realizar una búsqueda global y reemplazarla, o se incluye el flag `g` en la expresión regular o si el primer parámetro es una cadena, se incluye `g` en el parámetro `flags`.

#### Especificando una cadena como un parámetro

La cadena de reemplazo puede incluir los siguientes patrones de reemplazo especiales:

| Patrón       | Inserta                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`         | Inserta una "$".                                                                                                                                                                        |
| `$&`         | Inserta la subcadena emparejada.                                                                                                                                                        |
| `` $` ``     | Inserta la sección de cadena que precede a la subcadena emparejada.                                                                                                                     |
| `$'`         | Inserta la porción de subcadena que sigue a la subcadena emparejada.                                                                                                                    |
| `$n` o `$nn` | Donde `n` o `nn` son dígitos decimales positivos menores a 100, inserta la subcadena emparejada de orden _n_ del paréntesis, proporcionado por el primer argumento del objeto `RegExp`. |

### Especificando una función con un parámetro

Cuando se especifica una función en el segundo parámetro, la función es invocada después de que el emparejamiento se haya realizado. (El uso de una función de este modo se llama expresión lambda.)

En la función, puedes generar dinámicamente la cadena que reemplaza la subcadena emparejada. El resultado de la llamada de la función se usa como valor de reemplazo.

The nested function can use the matched substrings to determine the new string (`newSubStr`) that replaces the found substring. You get the matched substrings through the parameters of your function. The first parameter of your function holds the complete matched substring. If the first argument was a `RegExp` object, then the following*n* parameters can be used for parenthetical matches, remembered submatch strings, where*n* is the number of submatch strings in the regular expression. Finally, the last two parameters are the offset within the string where the match occurred and the string itself. For example, the following `replace` method returns XXzzzz - XX , zzzz.

```js
function replacer(str, p1, p2, offset, s)
{
  return str + " - " + p1 + " , " + p2;
}
var newString = "XXzzzz".replace(/(X*)(z*)/, replacer);
console.log(newString); // XXzzzz - XX , zzzz
```

## Ejemplos

### Ejemplo: Usando `global` e `ignore` con `replace`

En el siguiente ejemplo, la expresión regular incluye las banderas "global" e "ignore case", las cuales permiten al método `replace` reemplazar cada aparición de la cadena 'apples' por la cadena 'oranges'.

```
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
print(newstr);
```

In this version, a string is used as the first parameter and the global and ignore case flags are specified in the `flags` parameter.

```
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace("apples", "oranges", "gi");
print(newstr);
```

Both of these examples print "oranges are round, and oranges are juicy."

### Ejemplo: Definiendo la expresión regular en `replace`

En el siguiente ejemplo, se define la expresión regular en `replace` e incluye el flag de ignorar mayúsculas.

```
var cadena = "Twas the night before Xmas...";
var nuevaCadena = cadena.replace(/xmas/i, "Christmas");
print(nuevaCadena);
```

Esto muestra "Twas the night before Christmas..."

### Ejemplo: Conectando palabras en una cadena

El siguiente código conecta las palabras dentro de la cadena. Para reemplazar el texto, el código usa `$1` y `$2` como patrones de reemplazo.

```
var expresion = /(\w+)\s(\w+)/;
var cadena = "John Smith";
var nuevaCadena = cadena.replace(expresion, "$2, $1");
print(nuevaCadena);
```

Esto muestra "Smith, John".

### Ejemplo: Using an inline function that modifies the matched characters

In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.

```js
function styleHyphenFormat(propertyName)
{
  function upperToHyphenLower(match)
  {
    return '-' + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/, upperToHyphenLower);
}
```

Given `styleHyphenFormat('borderTop')`, this returns 'border-top'.

Because we want to further transform the*result* of the match before the final substitution is made, we must use a function. This forces the evaluation of the match prior to the `toLowerCase()` method. If we had tried to do this using the match without a function, the toLowerCase() would have no effect.

```js
var newString = propertyName.replace(/[A-Z]/, '-' + '$&'.toLowerCase());  // won't work
```

This is because `'$&'.toLowerCase()` would be evaluated first as a string literal (resulting in the same `'$&'`) before using the characters as a pattern.

### Ejemplo: Reemplazando grados Fahrenheit con su equivalente Celsius

El siguiente ejemplo reemplaza los grados Fahrenheit con su enquivalente en grados Celsius. Los grados Fahrenheit deberían ser un número acabado en F. La función devuelve el número Celsius acabado en C. Por ejemplo, si el número de entrada es 212F, la función devuelve 100C. Si el número es 0F, la función devuelve -17.77777777777778C.

La expresión regular `test` revisa si para un número termina en F. El número de grados Fahrenheit es accesible a la función a través de su segundo parámetro, `p1`. La función establece el número Celsius basado en los grados Fahrenheit pasados en una cadena a la función `f2c`. Entonces `f2c` devuelve el número Celsius. Esta función aproxima al flag de Perl s///e.

```js
function f2c(x)
{
  function convert(str, p1, offset, s)
  {
    return ((p1-32) * 5/9) + "C";
  }
  var s = String(x);
  var test = /(\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}
```

## Vea También

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
