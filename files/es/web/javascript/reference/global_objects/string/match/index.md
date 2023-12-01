---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
---

{{JSRef('Objetos_globales', 'String')}}

El método **`match()`** devuelve todas las ocurrencias de una [expresión regular](/es/docs/Web/JavaScript/Guide/Regular_Expressions) dentro de una _cadena_.

{{EmbedInteractiveExample('pages/js/string-match.html', 'shorter')}}

## Sintaxis

```js-nolint
match(regexp)
```

### Parámetros

- `regexp`

  - : Un objeto de expresión regular o cualquier objeto que tenga un método [`Symbol.match`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match).

    Si `regexp` no es un objeto `RegExp` y no tiene un método `Symbol.match`, se convierte implícitamente en {{jsxref('RegExp')}} usando `new RegExp(regexp)`.

    Si no se proporciona ningún parámetro y se utiliza el método `match()` directamente, se obtendrá un {{jsxref('Array')}} con una cadena vacía: `['']`, ya que esto es equivalente a `match(/(?:)/)`.

### Valor devuelto

Un {{jsxref('Array')}} cuyo contenido depende de la presencia de la bandera global (`g`), o [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) si no se encuentran coincidencias.

- Si se usa la bandera `g`, se devolverán todos los resultados que coincidan con la expresión regular completa, pero no se incluirán los grupos de captura.

- Si no se usa la bandera `g`, se devolverán sólo la primera coincidencia completa y sus grupos de captura relacionados. En este caso, `match()` devolverá el mismo resultado que {{jsxref('RegExp.prototype.exec()')}} (un {{jsxref('Array')}} con algunas propiedades adicionales).

## Descripción

La implementación de `String.prototype.match` en sí es muy simple. Se llama al método `Symbol.match` del argumento con la cadena como primer parámetro. La implementación real proviene de [`RegExp.prototype[@@match]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

- Si se necesita saber si una cadena coincide con una expresión regular {{jsxref('RegExp')}}, use {{jsxref('RegExp.prototype.test()')}}.

- Si solo se desea que se encuentre la primera coincidencia, es posible que desee utilizar {{jsxref('RegExp.prototype.exec()')}} en su lugar.

- Si se desea obtener grupos de captura y la bandera global `g` está siendo utilizada, debe usar {{jsxref('RegExp.prototype.exec()')}} o {{jsxref('String.prototype.matchAll()')}} en su lugar.

Para obtener más información sobre la semántica de `match()` cuando se pasa una expresión regular, consulte [`RegExp.prototype[@@match]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

## Ejemplos

### Uso de match()

En el siguiente ejemplo, se usa `match` para hallar '`Capítulo`' seguido de uno o más caracteres numéricos seguidos de un punto decimal y caracteres numéricos cero o más veces.

La expresión regular incluye la bandera `i` por lo que las diferencias entre mayúsculas y minúsculas serán ignoradas.

```js
const str = "Para más información, consulte el Capítulo 3.4.5.1";
const re = /consulte el (capítulo \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);
// [
//   'consulte el Capítulo 3.4.5.1',
//   'Capítulo 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'Para más información, consulte el Capítulo 3.4.5.1',
//   groups: undefined
// ]
```

En el resultado anterior:

- `'consulte el Capítulo 3.4.5.1'` es la ocurrencia completa.
- `'Capítulo 3.4.5.1'` fue capturado por `(capítulo \d+(\.\d)*)`.
- `'.1'` fue el último valor capturado por `(\.\d)`.
- La propiedad `index` (`22`) es el índice de la coincidencia completa.
- La propiedad `input` es la cadena original que se analizó.

### Uso de las banderas global e ignoreCase

El siguiente ejemplo demuestra el uso de la bandera global e ignorar mayúsculas con `match()`. Se devuelven todas las letras de la `A` a la `E` y de la `a` a la `e`, cada una con su propio elemento en el _array_.

```js
var str = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches = str.match(regexp);

console.log(matches);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
```

> **Nota:** Véase también {{jsxref("String.prototype.matchAll()")}} y [Búsqueda avanzada con banderas](/es/docs/Web/JavaScript/Guide/Regular_Expressions#búsqueda_avanzada_con_banderas).

### Uso de grupos de captura con nombre

En los navegadores que soporten grupos de captura con nombre, el siguiente código captura `'zorro'` o `'gato'` en un grupo llamado `animal`:

```js
const paragraph = "El veloz zorro marrón salta sobre el perro perezoso. Ladró.";
const capturingRegex = /(?<animal>zorro|gato) marrón/;
const found = paragraph.match(capturingRegex);

console.log(found.groups); // { animal: 'zorro' }
```

### Uso de match() sin parámetros

```js
const str = "Nada saldrá de la nada.";

str.match(); // ['']
```

### Uso de match() sin RegExp implementando @@match

Si un objeto tiene un método `Symbol.match`, entonces se puede usar como un comparador personalizado. El valor de retorno de `Symbol.match` se convierte en el valor de retorno de `match()`.

```js
const str = "Mmmm, esto es interesante.";

str.match({
  [Symbol.match](str) {
    return ["Sí lo es!"];
  },
}); // Devuelve ['Sí lo es!']
```

Véase [`RegExp.prototype[@@match]()`](/es/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@match).

### Uso de parámetros distintos de RegEx

Cuando el parámetro `regexp` es una cadena o un número, se convierte implícitamente en {{jsxref('RegExp')}} mediante el uso de `new RegExp(regexp)`.

```js
const str1 =
  "NaN significa que no es un número. Infinity contiene -Infinity e +Infinity en JavaScript.";
const str2 = "Mi abuelo tiene 65 años y mi abuela tiene 63 años.";
const str3 = "El contrato fue declarado null (nulo) y sin efecto.";

str1.match("número"); // 'número' es una cadena - devuelve ['número']
str1.match(NaN); // NaN es de tipo número - devuelve ['NaN']
str1.match(Infinity); // Infinity es de tipo número - devuelve ['Infinity']
str1.match(+Infinity); // devuelve ['Infinity']
str1.match(-Infinity); // devuelve ['-Infinity']
str2.match(65); // devuelve ['65']
str2.match(+65); // un número con signo positivo - devuelve ['65']
str3.match(null); // devuelve ['null']
```

Esto puede tener resultados inesperados si los caracteres especiales no se escapan correctamente.

```js
console.log("123".match("1.3")); // ['123']
```

Esta es una ocurrencia porque `.` en una expresión regular coincide con todos los caracteres. Para que solo coincida con el carácter de punto, se debe escapar de la entrada.

```js
console.log("123".match("1\\.3")); // null
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `String.prototype.match` en `core-js` con correcciones e implementación del comportamiento moderno como el soporte para `Symbol.match`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.matchAll()")}}
- {{jsxref("RegExp")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
