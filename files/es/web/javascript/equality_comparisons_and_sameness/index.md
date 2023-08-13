---
title: Comparadores de igualdad e identidad
slug: Web/JavaScript/Equality_comparisons_and_sameness
---

{{jsSidebar("Intermediate")}}

Existen cuatro algoritmos de igualdad en ES2015:

- Comparación de Igualdad Abstracta (`==`)
- Comparación de Igualdad Estricta (`===`): utilizada por `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, y `case`-matching
- SameValueZero: utilizado por los constructores de `%TypedArray%` y `ArrayBuffer`, así como por las operaciones `Map` y `Set`, y también por `String.prototype.includes` y `Array.prototype.includes` desde ES2016
- SameValue: utilizado en el resto de los casos

JavaScript proporciona tres operaciones distintas para comparar la igualdad de dos elementos:

- [===](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity) - Igualdad estricta (o "triple igual" o "identidad")
- [==](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality) - igualdad débil o relajada ("doble igual")
- {{jsxref("Object.is")}} proporciona SameValue (nuevo en ES2015).

Elegir una u otra operación depende del tipo de comparación que se esté buscando realizar.

Explicándolo de manera concisa, un doble igual lleva a cabo una conversión de tipo (cast) cuando se comparan dos cosas; el triple igual hace lo mismo pero sin realizar ninguna conversión de tipo (cast) (simplemente devuelve falso si los tipos de los elementos a comparar son diferentes); Y Object.is funciona de la misma manera que el triple igual pero hace una gestión especial de NaN, -0 y +0 de tal manera que los dos últimos no son iguales mientras que Object.is(NaN, NaN) nos devolverá `true`. (Si comparamos NaN con NaN de manera ordinaria , por ejemplo usando el doble igual o el triple igual, nos devolverá `false`, ya que la especificación IEEE 754 así lo dice). Hay que darse cuenta de que la distinción entre todas estas posibilidades tiene que ver con como se manejan los tipos primitivos; ninguna de ellas compara si los parámetros son similares en relación a su estructura. Para comparar dos objectos no primitivos , x e y, que tengan la misma estructura pero que sean objetos diferentes entre ellos, todos los casos anteriormente descritos devolverán false.

## Igualdad Estricta usando `===`

El operador igualdad estricta compara la igualdad de dos valores. Ninguno de estos valores se convierte de manera implícita antes de ser comparado. Si los valores tienen tipos diferentes son considerados diferentes. Por el contrario, si los valores tienen el mismo tipo y no son números, son considerados iguales si tienen el mismo valor. Finalmente, si ambos valores son números, son considerados iguales si ambos no son NaN y tienen el mismo valor, o si uno es +0 y otro -0.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

La igualdad estricta es casi siempre el operador igualdad más adecuado. Para todos los valores, excepto para los números, utiliza la semántica obvia: un valor sólo es igual así mismo. Para número usa una semántica ligeramente diferente para paliar dos casos límites diferentes. El primero es que usando número en coma flotante el cero puede ser positivo o negativo. Esto es útil para representar ciertas soluciones matemáticas, pero en la mayoría de las situaciones no nos importa esa diferencia entre +0 y -0. La igualdad estricta los trata como un únicomvalor. El segundo caso tiene que ver con que los número en coma flotante incluyen el concepto NaN (Not a Number) como un posible valor para representar la solución a ciertos problemas matemáticos mal definidos, por ejemplo la adición de un infinito negativo a un infinito positivo. La igualdad estricta trata NaN como desigual con cualquier otro valore — incluyendo a sí mismo. (El único caso en el que x !== x es verdades en cuando x is NaN).

## Igualdad débil usando ==

El operador igualdad débil compara la igualdad de dos valores después de convertir ambos valores a un tipo de datos común. Tras la conversión , la comparación que se lleva a cabo funciona exactamente como ===. La igual débil es una igualdad simétrica: A == B tiene una semática idéntica a B == A para cualquier valor que tengan A y B ( excepto por el orden de las .conversiones de tipo aplicadas)

Para los operandos de varios tipos funciona de la siguiente manera:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th colspan="7" scope="col" style="text-align: center">Operando B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td style="text-align: center">Undefined</td>
      <td style="text-align: center">Null</td>
      <td style="text-align: center">Number</td>
      <td style="text-align: center">String</td>
      <td style="text-align: center">Boolean</td>
      <td style="text-align: center">Object</td>
    </tr>
    <tr>
      <th colspan="1" rowspan="6" scope="row">Operando A</th>
      <td>Undefined</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <td>Null</td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>true</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
    </tr>
    <tr>
      <td>Number</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A === ToNumber(B)</code></td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>String</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A == ToPrimitive(B)</code></td>
    </tr>
    <tr>
      <td>Boolean</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToNumber(A) === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) === ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
      <td style="text-align: center">
        <code>ToNumber(A) == ToPrimitive(B)</code>
      </td>
    </tr>
    <tr>
      <td>Object</td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>false</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center"><code>ToPrimitive(A) == B</code></td>
      <td style="text-align: center">
        <code>ToPrimitive(A) == ToNumber(B)</code>
      </td>
      <td style="text-align: center"><code>A === B</code></td>
    </tr>
  </tbody>
</table>

En la tabla previa, `ToNumber(A)` intenta convertir su argumento a número antes de realizar la compración. Su comportamiento es equivalente a `+A` (el operador unario +). `ToPrimitive(A)` intenta convertir su objeto argumento a un valor de tipo primitivo realizando varias secuencias de invocaciones `A.toString` y `A.valueOf` en `A`.

Tradicionalmente, y de acuerdo con la especificación ECMAScript, todos los objetos son débilmente desiguales comparándolos con `undefined` y `null`. Pero algunos nevegadores permiten que una cantidad muy limitada de `clases` de objetos (especifícamente , el objeto `documento.all` para todas las páginas), en algunos contextos, puedan actuar como si _emularan_ el valor `undefined`. En ese contexto se evalúa como verdadero las igualdades débiles `null == A` y `undefined == A`, sí y sólo sí, A es un objecto que emula `undefined`. En cualquier otro caso la igual débil no será verdadera con `undefined` o `null`.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// both false, except in rare cases
console.log(obj == null);
console.log(obj == undefined);
```

Algunos desarrolladores consideran que nunca es una buena idea usar este tipo de igualdad, la igualdad débil. El resultado cuando se usa la igualdad estricta es más fácil de predecir y , como no hay coerción de tipos durante la evaluación, es con casi total seguridad más rápida.

## Igualdad Same-value

La igualdad Same-value se encarga de un último caso de uso: determinar si dos valores son _funcionalmente idénticos_ en todos los contextos. (Este caso de uso es un caso de ejemplo del [Liskov substitution principle](http://en.wikipedia.org/wiki/Liskov_substitution_principle).) Un ejemplo de esto ocurre cuando se intenta hacer mutable una propiedad inmutable.

```js
// Add an immutable NEGATIVE_ZERO property to the Number constructor.
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty` que lanzará una excepción cuando se intente cambiar una propiedad inmutable la cambiará, pero no hará nada si al solicitar el cambio actual . Si v es -0, no ha sido solicitado ningún cambio y no se lanzará ningún error. Pero si v es +0, `Number` . NEGATIVE_ZERO no tendrá más su valor inmutalbe. Internamente, al redefinir una propiedad inmutbale, el nuevo valor se compara con el valor actual usando la igualdad same-value.

El método [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is) nos proporciona la igualdad same-value.

## Igualdad Same-value-zero

Similar a la igualdad same-value, pero +0 y -0 son considerados iguales.

## Igualdad abstracta, igualdad estricta e igualdad same value en la especificación

En la especificación ES5, la comparación [`==`](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) queda descrita en [Section 11.9.3, The Abstract Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.3). La comparación [`===`](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) en [11.9.6, The Strict Equality Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-11.9.6). (Búscala y leela, son breves y fáciles de leer. Nota: lee el algoritmo de la igualdad estricta primero.) ES5 también describe, en [Section 9.12, The SameValue Algorithm](http://ecma-international.org/ecma-262/5.1/#sec-9.12) para uso interno del motor JS. Es, en su mayoría igual que el algoritmo de igualdad estricto, excepto porque 11.9..6.4 y 9.12.4 difieren en cómo tratar los [`Numbers`](/es/docs/Web/JavaScript/Reference/Global_Objects/Number). ES2015 simplemente propone exponer este algoritmo mediante el uso de[`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is).

Podemos ver con el igual doble y el triple que, con la excepción de hacer con antelación una comprobación de tipo en 11.9.6.1, el algorimto de igualdad estricta es un subconjunto del algorimot de igualdad abstracta porque 11.9.6.2-7 se corresponde con 11.9.3.1a-f.

## ¿ Un modelo para comprender las comparacions de igualdad?

Antes de ES2015, podíamos haber dicho sobre el igual doble y el igual triple que uno es una versión mejoradad del otro. Por ejemplo, alguien podría decir que el igual doble es una versión extendida del igual triple ya que el primero hace todo lo que hace el segundo pero añadiendo la conversión de operadores. Por ejemplo 6 == "6". (De manera alternativa alguien podría decir que el igual doble es la base y que el igual triple es una versión mejorada, ya que requiere que los dos operadores sean del mismo tipo y, por lo tanto, añade una restricción adicional. Qué afirmación es mejor para entender el modelo depende en tu punto de vista).

Sin embargo. esta manera de pensar sobre los operadores de igualdad proporcionados de manera nativa no es un modelo en el que podamos encuadrar la versión ES2015 de [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is)no es simplemente más débil que el doble igual o más estricto que el triple igual, ni tampoco ocupa un lugar intermedio (por ejemplo siendo a la vez más estricto que el igual doble y más débil que el igual triple). Podemos ver en la tabla inferior que esto se debe a la manera en la que [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is)maneja [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN). Fíjate que si `Object.is(Nan, Nan)` evaluara a falso podríamos decir que que se encuadra dentro de la escala débil /estricta como algo más estricto que el triple igual, como un operador que distigue entre +0 y -0. Sin embargo en el manejo de [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN)esto no es cierto. Simplemente debemos considerar [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is)en términos de sus características específicas y no en relación a su debilidad o rigidez dentro del especto de los operadores de igualdad.

| x                   | y                   | `==`    | `===`   | `Object.is` |
| ------------------- | ------------------- | ------- | ------- | ----------- |
| `undefined`         | `undefined`         | `true`  | `true`  | `true`      |
| `null`              | `null`              | `true`  | `true`  | `true`      |
| `true`              | `true`              | `true`  | `true`  | `true`      |
| `false`             | `false`             | `true`  | `true`  | `true`      |
| `"foo"`             | `"foo"`             | `true`  | `true`  | `true`      |
| `{ foo: "bar" }`    | `x`                 | `true`  | `true`  | `true`      |
| `0`                 | `0`                 | `true`  | `true`  | `true`      |
| `+0`                | `-0`                | `true`  | `true`  | `false`     |
| `0`                 | `false`             | `true`  | `false` | `false`     |
| `""`                | `false`             | `true`  | `false` | `false`     |
| `""`                | `0`                 | `true`  | `false` | `false`     |
| `"0"`               | `0`                 | `true`  | `false` | `false`     |
| `"17"`              | `17`                | `true`  | `false` | `false`     |
| `[1,2]`             | `"1,2"`             | `true`  | `false` | `false`     |
| `new String("foo")` | `"foo"`             | `true`  | `false` | `false`     |
| `null`              | `undefined`         | `true`  | `false` | `false`     |
| `null`              | `false`             | `false` | `false` | `false`     |
| `undefined`         | `false`             | `false` | `false` | `false`     |
| `{ foo: "bar" }`    | `{ foo: "bar" }`    | `false` | `false` | `false`     |
| `new String("foo")` | `new String("foo")` | `false` | `false` | `false`     |
| `0`                 | `null`              | `false` | `false` | `false`     |
| `0`                 | `NaN`               | `false` | `false` | `false`     |
| `"foo"`             | `NaN`               | `false` | `false` | `false`     |
| `NaN`               | `NaN`               | `false` | `false` | `true`      |

## Cuando usar `Object.is` o el igual triple

Además de como trata [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN), generalmente, la única vez en la que [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is) posee un comportamiento especial hacia los ceros puede resultar de interés para usar ciertos esquemas de meta-programación, sobre todo en relación a los descriptores de porpiedades cuando es deseable que nuestro trabajo replique algunas de las características de [`Object.defineProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Si en tu situación no requiere de esto, lo mejor es evitar [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is)y usar [`===.`](/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)Incluso si entre tus requisitos está poseer que la comparación entre dos valores [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN)sea verdadera, generalmente es más fácil hacer un caso especial para ello (usando el método [`isNaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN)que está disponible en versiones previas de ECMAScript) que calcular cómo la operaciones van afectar a los posibles signos de los valores cero en tu comparación.

Aquí podemos ver una lista exhaustiva de los método y operadores nativos que pueden distinguir entre -0 y +0 en tu código:

- [`- (unary negation)`](/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#-_.28Unary_Negation.29)

  - : Obviamente negar 0 genera -0. `Pero al abstracción de una expresión puede causar que un valor -0 se cuele sin darte cuenta` Consideremos el siguiente ejemplo:

    ```js
    let stoppingForce = obj.mass * -obj.velocity;
    ```

    Si `obj.velocity` is `0` (o se calcula como `0`), se inserta `-0` en ese lugar y este valor se propaga a `stoppingForce`.

<!---->

- [`Math.atan2`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2)
  - : Empty
- [`Math.ceil`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
  - : Empty
- [`Math.pow`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)
  - : Empty
- [`Math.round`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
  - : Se puede introducir un -0 dentro de una expresión como valor de retorno en estos método, incluso cuando -0 no sea uno de los parámetros. Por ejemplo usando [`Math.pow`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) para elevar `-Infinity` a cualquier potencia negativa, los exponentes impares se evaluarán como -0. Consulta la documentación para más detalles sobre cada uno de los métodos.

<!---->

- [`Math.floor`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
  - : Empty
- [`Math.max`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
  - : Empty
- [`Math.min`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min)
  - : Empty
- [`Math.sin`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sin)
  - : Empty
- [`Math.sqrt`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
  - : Empty
- [`Math.tan`](/es/docs/Web/JavaScript/Reference/Global_Objects/Math/tan)
  - : Es posible obtener, en algunos casos, -0 como valor de retorno de estos métodos cuando -0 sea uno de los parámetros Por ejemplo `Math.min(-0, +0)` devuelve -0. Consulta la documentación para más detalles sobre cada uno de los métodos.

<!---->

- [`~`](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
  - : Empty
- [`<<`](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
  - : Empty
- [`>>`](/es/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
  - : Cada uno de estos operadores usa el algoritmo ToInt32 de manera interna. Como sólo hay un representacion de 0 para el intero de 32-bit interno. -0 no sobrevivirá a la operación inversa. Por ejemplo Object.is(\~\~(-0), -0) y Object.is(-0 << 2 >> 2, -0) devolverán false.

Confiar en [`Object.is`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/is) cuando no hay que tener en cuenta el signo de los ceros puede ser peligroso. Por supuesto para el caso contrario hará exactamente lo deseado.

## Ver además

- [JS Comparison Table](http://dorey.github.io/JavaScript-Equality-Table/)
