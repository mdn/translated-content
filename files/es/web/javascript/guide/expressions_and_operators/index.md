---
title: Expresiones y operadores
slug: Web/JavaScript/Guide/Expressions_and_operators
---

{{jsSidebar("JavaScript Guide", "Guía JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Este capítulo describe las expresiones y los operadores de JavaScript, incluyendo los de asignación, comparación, aritméticos, bit a bit, lógicos, ternarios, de cadena y otros.

También se encuentra disponible una lista completa y detallada de operadores y expresiones en la {{JSxRef("Operadores", "referencia")}}.

## Operadores

JavaScript tiene los siguientes tipos de operadores. Esta sección describe los operadores y contiene información sobre la precedencia de los mismos.

- [Operadores de asignación](#asignacion)
- [Operadores de comparación](#comparacion)
- [Operadores aritméticos](#aritmeticos)
- [Operadores bit a bit](#bit_a_bit)
- [Operadores lógicos](#logico)
- [Operadores de cadena](#cadena)
- [Operador condicional (ternario)](#condicional)
- [Operador coma](#coma)
- [Operadores unarios](#unario)
- [Operadores relacionales](#relational)

JavaScript tiene ambos operadores _binarios_ y _unarios_, y un operador ternario especial, el operador condicional. Un operador binario requiere dos operandos, uno antes del operando y otro después del operador:

```
operando1 operador operando2
```

Por ejemplo, `3+4` o `x*y`.

Un operador unario requiere un solo operando, ya sea antes o después del operador:

```
operador operando
```

o

```
operando operador
```

Por ejemplo, `x++` o `++x`.

### Operadores de asignación

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (`=`), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, `x = y` asigna el valor de `y` a `x`.

También hay operadores de asignación compuestos que son una abreviatura de las operaciones enumeradas en la siguiente tabla:

| Nombre                                                                                                          | Operador abreviado | Significado      |
| --------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| {{JSxRef("Operadores/Assignment", "Asignación")}}                                                               | `x = y`            | `x = y`          |
| {{JSxRef("Operadores/Addition_assignment", "Asignación de adición")}}                                           | `x += y`           | `x = x + y`      |
| {{JSxRef("Operadores/Subtraction_assignment", "Asignación de resta")}}                                          | `x -= y`           | `x = x - y`      |
| {{JSxRef("Operadores/Multiplication_assignment", "Asignación de multiplicación")}}                              | `x *= y`           | `x = x * y`      |
| {{JSxRef("Operadores/Division_assignment", "Asignación de división")}}                                          | `x /= y`           | `x = x / y`      |
| {{JSxRef("Operadores/Remainder_assignment", "Asignación de residuo")}}                                          | `x %= y`           | `x = x % y`      |
| {{JSxRef("Operadores/Exponentiation_assignment", "Asignación de exponenciación")}}                              | `x **= y`          | `x = x ** y`     |
| {{JSxRef("Operadores/Left_shift_assignment", "Asignación de desplazamiento a la izquierda")}}                   | `x <<= y`          | `x = x << y`     |
| {{JSxRef("Operadores/Right_shift_assignment", "Asignación de desplazamiento a la derecha")}}                    | `x >>= y`          | `x = x >> y`     |
| {{JSxRef("Operadores/Unsigned_right_shift_assignment", "Asignación de desplazamiento a la derecha sin signo")}} | `x >>>= y`         | `x = x >>> y`    |
| {{JSxRef("Operadores/Bitwise_AND_assignment", "Asignación AND bit a bit")}}                                     | `x &= y`           | `x = x & y`      |
| {{JSxRef("Operadores/Bitwise_XOR_assignment", "Asignación XOR bit a bit")}}                                     | `x ^= y`           | `x = x ^ y`      |
| {{JSxRef("Operadores/Bitwise_OR_assignment", "Asignación OR bit a bit")}}                                       | `x \|= y`          | `x = x \| y`     |
| {{JSxRef("Operadores/Logical_AND_assignment", "Asignación AND lógico")}}                                        | `x &&= y`          | `x && (x = y)`   |
| {{JSxRef("Operadores/Logical_OR_assignment", "Asignación OR lógico")}}                                          | `x \|\|= y`        | `x \|\| (x = y)` |
| {{JSxRef("Operadores/Logical_nullish_assignment", "Asignación de anulación lógica")}}                           | `x ??= y`          | `x ?? (x = y)`   |

#### Valor de retorno y encadenamiento

Como la mayoría de las expresiones, asignaciones como `x = y` tienen un valor de retorno. Se puede recuperar p. ej. asignando la expresión o registrándola:

```bash
const z = (x = y); // O de forma equivalente: const z = x = y;

console.log(z); // Registra el valor de retorno de la asignación x = y.
console.log(x = y); // O registra el valor de retorno directamente.
```

El valor de retorno coincide con la expresión a la derecha del signo `=` en la columna "Significado" de la tabla anterior. Eso significa que `(x = y)` devuelve `y`, `(x += y)` devuelve la suma resultante `x + y`, `(x **= y)` devuelve la potencia resultante `x ** y`, y así sucesivamente.

En el caso de asignaciones lógicas, `(x &&= y)`, `(x || = y)` y `(x ??= y)`, el valor de retorno es el de la operación lógica sin la asignación, entonces `x && y`, `x || y` y `x ?? y`, respectivamente.

Ten en cuenta que los valores de retorno siempre se basan en los valores de los operandos _antes_ de la operación.

Al encadenar estas expresiones, cada asignación se evalúa de **derecha a izquierda**. Considera estos ejemplos:

- `w = z = x = y` es equivalente a `w = (z = (x = y))` o `x = y; z = y; w = y`
- `z += x *= y` es equivalente e `z += (x *= y)` o `tmp = x * y; x *= y; z += tmp` (salvo que sin `tmp`).

#### Desestructuración

Para asignaciones más complejas, la sintaxis de {{JSxRef("Operadores/Destructuring_assignment", "asignación de desestructuración")}} es una expresión de JavaScript que hace posible extraer datos de arreglos u objetos usando una sintaxis que refleja la construcción de arreglos y objetos literales.

```js
var foo = ["one", "two", "three"];

// sin desestructurar
var one = foo[0];
var two = foo[1];
var three = foo[2];

// con desestructuración
var [one, two, three] = foo;
```

### Operadores de comparación

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (`true`) o falsa (`false`). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores `===` y `!==`, que realizan comparaciones estrictas de igualdad y desigualdad. Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:

```js
var var1 = 3;
var var2 = 4;
```

| Operador                                                                                                 | Descripción                                                                                                                                                                   | Ejemplos que devuelven `true`              |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| {{JSxRef("Operadores/Comparison_Operators", "Igual", "#Igualdad")}} (`==`)                               | Devuelve `true` si los operandos son iguales.                                                                                                                                 | `3 == var1`<br>`"3" == var1`<br>`3 == '3'` |
| {{JSxRef("Operadores/Comparison_Operators", "No es igual", "#Desigualdad")}} (`!=`)                      | Devuelve `true` si los operandos _no_ son iguales.                                                                                                                            | `var1 != 4`<br>`var2 != "3"`               |
| {{JSxRef("Operadores/Comparison_Operators", "Estrictamente igual", "#Identidad")}} (`===`)               | Devuelve `true` si los operandos son iguales y del mismo tipo. Consulta también {{JSxRef("Object.is")}} y {{JSxRef("Equality_comparisons_and_sameness", "similitud en JS")}}. | `3 === var1`                               |
| {{JSxRef("Operadores/Comparison_Operators", "Desigualdad estricta", "#No_Identidad")}} (`!==`)           | Devuelve `true` si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.                                                                                 | `var1 !== "3"`<br>`3 !== '3'`              |
| {{JSxRef("/Operadores/Comparison_Operators", "Mayor que", "#Mayor_que_el_operador")}} (`>`)              | Devuelve `true` si el operando izquierdo es mayor que el operando derecho.                                                                                                    | `var2 > var1 "12" > 2`                     |
| {{JSxRef("Operadores/Comparison_Operators", "Mayor o igual que", "#Operador_mayor_que_o_igual")}} (`>=`) | Devuelve `true` si el operando izquierdo es mayor o igual que el operando derecho.                                                                                            | `var2 >= var1 var1 >= 3`                   |
| {{JSxRef("Operadores/Comparison_Operators", "Menor que", "#Operador_menor_que")}} (`<`)                  | Devuelve `true` si el operando izquierdo es menor que el operando derecho.                                                                                                    | `var1 < var2`<br>`"2" < 12`                |
| {{JSxRef("Operadores/Comparison_Operators", "Menor o igual", "#Operador_menor_que_o_igual")}} (`<=`)     | Devuelve `true` si el operando izquierdo es menor o igual que el operando derecho.                                                                                            | `var1 <= var2 var2 <= 5`                   |

> **Nota:** (**=>**) no es un operador, sino la notación para {{JSxRef("Funciones/Arrow_functions", "Funciones flecha")}}.

### Operadores aritméticos

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma (`+`), resta (`-`), multiplicación (`*`) y división (`/`). Estos operadores funcionan como lo hacen en la mayoría de los otros lenguajes de programación cuando se usan con números de punto flotante (en particular, ten en cuenta que la división entre cero produce {{JSxRef("Infinity")}}). Por ejemplo:

```js
1 / 2; // 0.5
1 / 2 == 1.0 / 2.0; // Esto es true
```

Además de las operaciones aritméticas estándar (`+`, `-`, `*`, `/`), JavaScript proporciona los operadores aritméticos enumerados en la siguiente tabla:

| Operador                                                                     | Descripción                                                                                                                                                                                                                                 | Ejemplo                                                                                                                          |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Remainder", "Residuo")}} (`%`)                          | Operador binario. Devuelve el resto entero de dividir los dos operandos.                                                                                                                                                                    | 12 % 5 devuelve 2.                                                                                                               |
| {{JSxRef("Operadores/Increment", "Incremento")}} (`++`)                      | Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (`++x`), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (`x++`), devuelve el valor de su operando antes de agregar uno. | Si `x` es 3, `++x` establece `x` en 4 y devuelve 4, mientras que `x++` devuelve 3 y , solo entonces, establece `x` en 4.         |
| {{JSxRef("Operadores/Decrement", "Decremento")}} (`--`)                      | Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.                                                                                                                                    | Si `x` es 3, entonces `--x` establece `x` en 2 y devuelve 2, mientras que `x--` devuelve 3 y, solo entonces, establece `x` en 2. |
| {{JSxRef("Operadores/Unary_negation", "Negación unaria")}} (`-`)             | Operador unario. Devuelve la negación de su operando.                                                                                                                                                                                       | Si `x` es 3, entonces `-x` devuelve -3.                                                                                          |
| {{JSxRef("Operadores/Unary_plus", "Positivo unario")}} (`+`)                 | Operador unario. Intenta convertir el operando en un número, si aún no lo es.                                                                                                                                                               | `+"3"` devuelve `3`. `+true` devuelve `1.`                                                                                       |
| {{JSxRef("Operadores/Exponentiation", "Operador de exponenciación")}} (`**`) | Calcula la `base` a la potencia de `exponente`, es decir, `baseexponente`                                                                                                                                                                   | `2 ** 3` returns `8`. `10 ** -1` returns `0.1`.                                                                                  |

### Operadores bit a bit

Un operador bit a bit trata a sus operandos como un conjunto de 32 bits (ceros y unos), en lugar de números decimales, hexadecimales u octales. Por ejemplo, el número decimal nueve tiene una representación binaria de 1001. Los operadores bit a bit realizan sus operaciones en tales representaciones binarias, pero devuelven valores numéricos estándar de JavaScript.

La siguiente tabla resume los operadores bit a bit de JavaScript.

| Operador                                                                                     | Uso       | Descripción                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Bitwise_AND", "AND a nivel de bits")}}                                  | `a & b`   | Devuelve un uno en cada posición del bit para los que los bits correspondientes de ambos operandos son unos.                                                                             |
| {{JSxRef("Operadores/Bitwise_OR", "OR a nivel de bits")}}                                    | `a \| b`  | Devuelve un cero en cada posición de bit para el cual los bits correspondientes de ambos operandos son ceros.                                                                            |
| {{JSxRef("Operadores/Bitwise_XOR", "XOR a nivel de bits")}}                                  | `a ^ b`   | Devuelve un cero en cada posición de bit para la que los bits correspondientes son iguales. [Devuelve uno en cada posición de bit para la que los bits correspondientes son diferentes]. |
| {{JSxRef("Operadores/Bitwise_NOT", "NOT a nivel de bits")}}                                  | `~ a`     | Invierte los bits de su operando.                                                                                                                                                        |
| {{JSxRef("Operadores/Left_shift", "Desplazamiento a la izquierda")}}                         | `a << b`  | Desplaza `a` en representación binaria `b` bits hacia la izquierda, desplazándose en ceros desde la derecha.                                                                             |
| {{JSxRef("Operadores/Right_shift", "Desplazamiento a la derecha de propagación de signo")}}  | `a >> b`  | Desplaza `a` en representación binaria `b` bits a la derecha, descartando los bits desplazados.                                                                                          |
| {{JSxRef("Operadores/Unsigned_right_shift", "Desplazamiento a la derecha de relleno cero")}} | `a >>> b` | Desplaza `a` en representación binaria `b` bits hacia la derecha, descartando los bits desplazados y desplazándose en ceros desde la izquierda.                                          |

#### Operadores lógicos bit a bit

Conceptualmente, los operadores lógicos bit a bit funcionan de la siguiente manera:

- Los operandos se convierten en enteros de treinta y dos bits y se expresan mediante una serie de bits (ceros y unos). A los números con más de 32 bits se les descartan los bits más significativos. Por ejemplo, el siguiente número entero con más de 32 bits se convertirá en un número entero de 32 bits:

  ```bash
  Antes:  1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  Después:               1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Cada bit en el primer operando se empareja con el bit correspondiente en el segundo operando: primer bit al primer bit, segundo bit al segundo bit, y así sucesivamente.
- El operador se aplica a cada par de bits y el resultado se construye bit a bit.

Por ejemplo, la representación binaria de nueve es 1001 y la representación binaria de quince es 1111. Entonces, cuando los operadores bit a bit se aplican a estos valores, los resultados son los siguientes:

| Expresión | Resultado | Descripción binaria                                   |
| --------- | --------- | ----------------------------------------------------- |
| `15 & 9`  | `9`       | `1111 & 1001 = 1001`                                  |
| `15 \| 9` | `15`      | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`  | `6`       | `1111 ^ 1001 = 0110`                                  |
| `~15`     | `-16`     | `~ 0000 0000 ... 0000 1111 = 1111 1111 ... 1111 0000` |
| `~9`      | `-10`     | `~ 0000 0000 ... 0000 1001 = 1111 1111 ... 1111 0110` |

Ten en cuenta que los 32 bits se invierten utilizando el operador `NOT` a nivel de bits y que los valores con el bit más significativo (más a la izquierda) establecido en 1 representan números negativos (representación en complemento a dos). `~x` evalúa al mismo valor que evalúa `-x - 1`.

#### Operadores de desplazamiento de bits

Los operadores de desplazamiento bit a bit toman dos operandos: el primero es una cantidad que se va a desplazar y el segundo especifica el número de posiciones de bit por las que se va a desplazar el primer operando. La dirección de la operación de desplazamiento es controlada por el operador utilizado.

Los operadores de desplazamiento convierten sus operandos en enteros de treinta y dos bits y devuelven un resultado del mismo tipo que el operando izquierdo.

Los operadores de desplazamiento se enumeran en la siguiente tabla.

| Operador                                                                                             | Descripción                                                                                                                                                                                                                 | Ejemplo                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Operadores/Left_shift", "Desplazamiento a la izquierda")}} (`<<`)                          | Este operador desplaza el primer operando el número especificado de bits a la izquierda. Los bits desplazados en exceso hacia la izquierda se descartan. Los bits cero se desplazan desde la derecha.                       | `9<<2` produce 36, porque 1001 desplazado 2 bits a la izquierda se convierte en 100100, que es 36.                                                                                                                                                                   |
| {{JSxRef("Operadores/Right_shift", "Desplazamiento a la derecha de propagación de signo")}} (`>>`)   | Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Las copias del bit más a la izquierda se desplazan desde la izquierda. | `9>>2` produce 2, porque 1001 desplazado 2 bits a la derecha se convierte en 10, que es 2. Del mismo modo, `-9>>2` produce -3, porque el signo se conserva.                                                                                                          |
| {{JSxRef("Operadores/Unsigned_right_shift", "Desplazamiento a la derecha de relleno cero")}} (`>>>`) | Este operador desplaza el primer operando el número especificado de bits a la derecha. Los bits desplazados en exceso hacia la derecha se descartan. Los bits cero se desplazan desde la izquierda.                         | `19>>>2` produce 4, porque 10011 desplazado 2 bits a la derecha se convierte en 100, que es 4. Para números no negativos, el desplazamiento a la derecha de relleno con ceros y el desplazamiento a la derecha de propagación del signo producen el mismo resultado. |

### Operadores lógicos

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores `&&` y `||` en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.

| Operador                                                  | Uso                | Descripción                                                                                                                                                                                                                                |
| --------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{JSxRef("Operadores/Logical_AND", "AND Lógico")}} (`&&`) | `expr1 && expr2`   | Devuelve `expr1` si se puede convertir a `false`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `&&` devuelve `true` si ambos operandos son `true`; de lo contrario, devuelve `false`.             |
| {{JSxRef("Operadores/Logical_OR", "OR lógico")}} (`\|\|`) | `expr1 \|\| expr2` | Devuelve `expr1` si se puede convertir a `true`; de lo contrario, devuelve `expr2`. Por lo tanto, cuando se usa con valores booleanos, `\|\|` devuelve `true` si alguno de los operandos es `true`; si ambos son falsos, devuelve `false`. |
| {{JSxRef("Operadores/Logical_NOT", "NOT lógico")}} (`!`)  | `!expr`            | Devuelve `false` si su único operando se puede convertir a `true`; de lo contrario, devuelve `true`.                                                                                                                                       |

Ejemplos de expresiones que se pueden convertir a `false` son aquellos que se evalúan como `null`, 0, `NaN`, la cadena vacía ("") o `undefined`.

El siguiente código muestra ejemplos del operador `&&` (`AND` lógico).

```js
var a1 = true && true; // t && t devuelve true
var a2 = true && false; // t && f devuelve false
var a3 = false && true; // f && t devuelve false
var a4 = false && 3 == 4; // f && f devuelve false
var a5 = "Cat" && "Dog"; // t && t devuelve Dog
var a6 = false && "Cat"; // f && t devuelve false
var a7 = "Cat" && false; // t && f devuelve false
```

El siguiente código muestra ejemplos del operador || (`OR` lógico).

```js
var o1 = true || true; // t || t devuelve true
var o2 = false || true; // f || t devuelve true
var o3 = true || false; // t || f devuelve true
var o4 = false || 3 == 4; // f || f devuelve false
var o5 = "Cat" || "Dog"; // t || t devuelve Cat
var o6 = false || "Cat"; // f || t devuelve Cat
var o7 = "Cat" || false; // t || f devuelve Cat
```

El siguiente código muestra ejemplos de el operador ! (`NOT` lógico).

```js
var n1 = !true; // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !"Cat"; // !t devuelve false
```

#### Evaluación de cortocircuito

Debido a que las expresiones lógicas se evalúan de izquierda a derecha, se prueban para una posible evaluación de "cortocircuito" utilizando las siguientes reglas:

- `false` && _anything_ se evalúa en cortocircuito como `false`.
- `true` || _anything_ se evalúa en cortocircuito como `true`.

Las reglas de la lógica garantizan que estas evaluaciones sean siempre correctas. Ten en cuenta que la parte _anything_ de las expresiones anteriores no se evalúa, por lo que los efectos secundarios de hacerlo no surten efecto.

Ten en cuenta que para el segundo caso, en el código moderno puedes usar el nuevo {{JSxRef("Operadores/Nullish_coalescing_operator", "operador de fusión nulo")}} (`??`) que funciona como `||`, pero solo devuelve la segunda expresión, cuando la primera es "{{Glossary("Nullish", "nullish")}}", es decir, {{JSxRef("Objetos_globales/null", "null")}}, el valor nulo representa la ausencia intencional de cualquier valor de objeto. Es uno de los valores primitivos de JavaScript y se trata como falso para las operaciones booleanas. o {{JSxRef("Objetos_globales/undefined", "undefined")}} la propiedad global undefined representa el valor "`undefined`" primitivo. Es uno de los tipos primitivos de JavaScript. Por tanto, es la mejor alternativa para proporcionar valores predeterminados, cuando valores como `''` o `0` también son valores válidos para la primera expresión.

### Operadores de cadena

Además de los operadores de comparación, que se pueden usar en valores de cadena, el operador de concatenación (+) concatena dos valores de cadena, devolviendo otra cadena que es la unión de los dos operandos de cadena.

Por ejemplo,

```js
console.log("mi " + "cadena"); // la consola registra la cadena "mi cadena".
```

El operador de asignación abreviada `+=` también se puede utilizar para concatenar cadenas.

Por ejemplo,

```js
var mystring = "alpha";
mystring += "bet"; // se evalúa como "alphabet" y asigna este valor a mystring.
```

### Operador condicional (ternario)

El {{JSxRef("Operadores/Conditional_Operator", "operador condicional")}} es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

```
condition ? val1 : val2
```

Si `condition` es `true`, el operador tiene el valor de `val1`. De lo contrario, tiene el valor de `val2`. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.

Por ejemplo,

```js
var status = age >= 18 ? "adult" : "minor";
```

Esta declaración asigna el valor "`adult`" a la variable `status` si `age` es de dieciocho años o más. De lo contrario, asigna el valor "`minor`" a `status`.

### Operador coma

El {{JSxRef("Operadores/Comma_Operator", "operador coma")}} (`,`) simplemente evalúa ambos operandos y devuelve el valor del último operando. Este operador se utiliza principalmente dentro de un bucle `for`, para permitir que se actualicen múltiples variables cada vez a través del bucle. Se considera de mal estilo usarlo en otros lugares, cuando no es necesario. A menudo, en su lugar pueden y se deben utilizar dos declaraciones independientes.

Por ejemplo, si `a` es un arreglo bidimensional con 10 elementos en un lado, el siguiente código usa el operador `coma` para actualizar dos variables a la vez. El código imprime los valores de los elementos diagonales en el arreglo:

```js
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  //                              ^
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
```

### Operadores unarios

Una operación unaria es una operación con un solo operando.

#### `delete`

El operador {{JSxRef("Operadores/delete", "delete")}} elimina la propiedad de un objeto. La sintaxis es:

```js
delete object.property;
delete object[propertyKey];
delete objectName[index];
delete property; // legal solo dentro de una declaración with
```

donde `object` es el nombre de un objeto, `property` es una propiedad existente y `propertyKey` es una cadena o símbolo que hace referencia a una propiedad existente.

La cuarta forma es legal solo dentro de una declaración {{JSxRef("Sentencias/with", "with")}}, para eliminar una propiedad de un objeto, y también para las propiedades del objeto global.

Si el operador `delete` tiene éxito, elimina la propiedad del objeto. Intentar acceder a él después dará como resultado `undefined`. El operador `delete` devuelve `true` si la operación es posible; devuelve `false` si la operación no es posible.

```js
x = 42; // implícitamente crea window.x
var y = 43;
var myobj = { h: 4 }; // crea un objeto con la propiedad h

delete x; // devuelve true (se puede eliminar si se crea implícitamente)
delete y; // devuelve false (no se puede borrar si se declara con var)
delete Math.PI; // devuelve false (no se pueden eliminar propiedades no configurables)
delete myobj.h; // devuelve true (puede eliminar propiedades definidas por el usuario)
```

##### Eliminar elementos de un arreglo

Dado que los arreglos solo son objetos, técnicamente es posible `delete` elementos de ellos. Sin embargo, esto se considera una mala práctica, trata de evitarlo. Cuando eliminas una propiedad de arreglo, la longitud del arreglo no se ve afectada y otros elementos no se vuelven a indexar. Para lograr ese comportamiento, es mucho mejor simplemente sobrescribir el elemento con el valor `undefined`. Para manipular realmente el arreglo, usa los diversos métodos de arreglo, como {{JSxRef("Objetos_globales/Array/splice", "splice")}}.

#### `typeof`

El {{JSxRef("Operadores/typeof", "operador typeof")}} se utiliza de cualquiera de las siguientes formas:

```
typeof operand
typeof (operand)
```

El operador `typeof` devuelve una cadena que indica el tipo de operando no evaluado. `operando` es la cadena, variable, palabra clave u objeto para el que se devolverá el tipo. Los paréntesis son opcionales.

Supón que defines las siguientes variables:

```js
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var foo = ["Apple", "Mango", "Orange"];
var today = new Date();
```

El operador `typeof` devuelve los siguientes resultados para estas variables:

```js
typeof myFun; // devuelve "function"
typeof shape; // devuelve "string"
typeof size; // devuelve "number"
typeof foo; // devuelve "object"
typeof today; // devuelve "object"
typeof doesntExist; // devuelve "undefined"
```

Para las palabras clave `true` y `null`, el operador `typeof` devuelve los siguientes resultados:

```js
typeof true; // devuelve "boolean"
typeof null; // devuelve "object"
```

Para un número o cadena, el operador `typeof` devuelve los siguientes resultados:

```js
typeof 62; // devuelve "number"
typeof "Hola mundo"; // devuelve "string"
```

Para los valores de propiedad, el operador `typeof` devuelve el tipo de valor que contiene la propiedad:

```js
typeof document.lastModified; // devuelve "string"
typeof window.length; // devuelve "number"
typeof Math.LN2; // devuelve "number"
```

Para métodos y funciones, el operador `typeof` devuelve los siguientes resultados:

```js
typeof blur; // devuelve "function"
typeof eval; // devuelve "function"
typeof parseInt; // devuelve "function"
typeof shape.split; // devuelve "function"
```

Para objetos predefinidos, el operador `typeof` devuelve los siguientes resultados:

```js
typeof Date; // devuelve "function"
typeof Function; // devuelve "function"
typeof Math; // devuelve "object"
typeof Option; // devuelve "function"
typeof String; // devuelve "function"
```

#### `void`

El {{JSxRef("Operadores/void", "operador void")}} se utiliza de cualquiera de las siguientes formas:

```
void (expression)
void expression
```

El operador `void` especifica una expresión que se evaluará sin devolver un valor. `expression` es una expresión de JavaScript para evaluar. Los paréntesis que rodean la expresión son opcionales, pero es un buen estilo usarlos.

### Operadores relacionales

Un operador relacional compara sus operandos y devuelve un valor `Boolean` basado en si la comparación es verdadera.

#### `in`

El {{JSxRef("Operadores/in", "operador in")}} devuelve `true` si la propiedad especificada está en el objeto especificado. La sintaxis es:

```js
propNameOrNumber in objectName;
```

donde `propNameOrNumber` es una expresión de cadena, numérica o de símbolo que representa un nombre de propiedad o índice de arreglo, y `objectName` es el nombre de un objeto.

Los siguientes ejemplos muestran algunos usos del operador `in`.

```js
// Arreglos
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // devuelve true
3 in trees;        // devuelve true
6 in trees;        // devuelve false
'bay' in trees;    // devuelve false (debes especificar el número del índice,
                   // no el valor en ese índice)
'length' en trees; // devuelve true (la longitud es una propiedad de Array)

// objetos integrados
'PI' in Math;          // devuelve true
var myString = new String('coral');
'length' in myString;  // devuelve true

// Objetos personalizados
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true
```

#### `instanceof`

El {{JSxRef("Operadores/instanceof", "operador instanceof")}} devuelve `true` si el objeto especificado es del tipo de objeto especificado. La sintaxis es:

```
objectName instanceof objectType
```

donde `objectName` es el nombre del objeto para comparar con `objectType`, y `objectType` es un tipo de objeto, como {{JSxRef("Date")}} o {{JSxRef("Array")}}.

Utiliza `instanceof` cuando necesites confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, al detectar excepciones, puedes ramificar a diferentes controladores según el tipo de excepción lanzada.

Por ejemplo, el siguiente código usa `instanceof` para determinar si `theDay` es un objeto `Date`. Debido a que `theDay` es un objeto `Date`, las instrucciones de la expresión `if` se ejecutan.

```js
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // instrucciones a ejecutar
}
}
```

### Precedencia de los operadores

La _precedencia_ de los operadores determina el orden en que se aplican al evaluar una expresión. Puedes redefinir la precedencia de los operadores mediante el uso de paréntesis.

La siguiente tabla describe la precedencia de los operadores, de mayor a menor.

| Tipo de operador         | Operadores individuales                                 |
| ------------------------ | ------------------------------------------------------- |
| miembro                  | `. []`                                                  |
| llamar / crear instancia | `() new`                                                |
| negación / incremento    | `! ~ - + ++ -- typeof void delete`                      |
| multiplicar / dividir    | `* / %`                                                 |
| adición / sustracción    | `+ -`                                                   |
| desplazamiento bit a bit | `<< >> >>>`                                             |
| relacional               | `< <= > >= in instanceof`                               |
| igualdad                 | `== != === !==`                                         |
| `AND` bit a bit          | `&`                                                     |
| `XOR` bit a bit          | `^`                                                     |
| `OR` bit a bit           | `\|`                                                    |
| `AND` lógico             | `&&`                                                    |
| `OR` lógico              | `\|\|`                                                  |
| condicional              | `?:`                                                    |
| asignación               | `= += -= *= /= %= <<= >>= >>>= &= ^= \|= &&= \|\|= ??=` |
| coma                     | `,`                                                     |

Puedes encontrar una versión más detallada de esta tabla, completa con enlaces a detalles adicionales sobre cada operador, en {{JSxRef("Operadores/Operator_Precedence", "Referencia de JavaScript", "#Table")}}.

## Expresiones

Una _expresión_ es cualquier unidad de código válida que se resuelve en un valor.

Toda expresión sintácticamente válida se resuelve en algún valor, pero conceptualmente, hay dos tipos de expresiones: con efectos secundarios (por ejemplo: las que asignan valor a una variable) y las que en algún sentido evalúan y por lo tanto se resuelven en un valor.

La expresión `x = 7` es un ejemplo del primer tipo. Esta expresión usa el _operador_ = para asignar el valor siete a la variable `x`. La expresión en sí se evalúa como siete.

El código `3 + 4` es un ejemplo del segundo tipo de expresión. Esta expresión usa el operador + para sumar tres y cuatro sin asignar el resultado, siete, a una variable.

JavaScript tiene las siguientes categorías de expresión:

- Aritméticas: se evalúa como un número, por ejemplo 3.14159. (Generalmente usa [operadores aritméticos](##aritméticos)).
- Cadenas: se evalúa como una cadena de caracteres, por ejemplo, "Fred" o "234". (Generalmente usa [operadores de cadena](#cadena)).
- Lógicas: se evalúan como `true` o `false`. (A menudo implica [operadores lógicos](#logico)).
- Expresiones primarias: palabras clave básicas y expresiones generales en JavaScript.
- Expresiones del lado izquierdo: los valores del lado izquierdo son el destino de una asignación.

### Expresiones primarias

Palabras clave básicas y expresiones generales en JavaScript.

#### `this`

Utiliza la {{JSxRef("Operadores/this", "palabra clave this")}} para hacer referencia al objeto actual. En general, `this` se refiere al objeto que llama en un método. Usa `this` con la notación de punto o entre corchetes:

```
this['propertyName']
this.propertyName
```

Supongamos que una función llamada `validate` valida la propiedad `value` de un objeto, dado el objeto y los valores alto y bajo:

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("¡Valor no válido!");
  }
}
```

Puedes llamar a `validate` en el controlador de eventos `onChange` de cada elemento de formulario, utilizando `this` para pasarlo al elemento de formulario, como en el siguiente ejemplo:

```html
<p>Ingresa un número entre 18 y 99:</p>
<input type="text" name="age" size="3" onChange="validate(this, 18, 99);" />
```

#### Operador de agrupación

El operador de agrupación `()` controla la precedencia de la evaluación en las expresiones. Por ejemplo, puedes redefinir la multiplicación y la división primero, luego la suma y la resta para evaluar la suma primero.

```js-nolint;
var a = 1;
var b = 2;
var c = 3;

// precedencia predeterminada
a + b * c;     // 7
// evaluado por omisión así
a + (b * c);   // 7

// ahora prevalece sobre la precedencia
// suma antes de multiplicar
(a + b) * c;   // 9

// que es equivalente a
a * c + b * c; // 9
```

### Expresiones del lado izquierdo

Los valores de la izquierda son el destino de una asignación.

#### `new`

Puedes utilizar el {{JSxRef("Operadores/new", "operador new")}} para crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados. Utiliza `new` de la siguiente manera:

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### `super`

La {{JSxRef("Operadores/super", "palabra clave super")}} se utiliza para llamar a funciones en el padre de un objeto. Es útil con {{JSxRef("Classes", "clases")}} llamar al constructor padre, por ejemplo.

```
super([arguments]); // llama al constructor padre.
super.functionOnParent([arguments]);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
