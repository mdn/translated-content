---
title: Números y fechas
slug: Web/JavaScript/Guide/Numbers_and_dates
---

{{jsSidebar("JavaScript Guide", "Guía JavaScript")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}

Este capítulo presenta los conceptos, objetos y funciones que se utilizan para trabajar y realizar cálculos utilizando números y fechas en JavaScript. Esto incluye el uso de números escritos en varias bases, incluyendo decimal, binario y hexadecimal, así como el uso del objeto global {{JSxRef("Math")}} para realizar una amplia variedad de operaciones matemáticas con números.

## Números

En JavaScript, los números se implementan en [Formato en coma flotante de doble precisión](https://es.wikipedia.org/wiki/Formato_en_coma_flotante_de_doble_precisión) de 64 bits IEEE 754 (es decir, un número entre ±2−1022 y ±2+1023, o aproximadamente ±10−308 a ±10+308, con una precisión numérica de 53 bits). Los valores enteros hasta ±253 - 1 se pueden representar con exactitud.

Además de poder representar números de punto flotante, el tipo `number` tiene tres valores simbólicos: `+`{{JSxRef("Infinity")}}, `-`{{JSxRef("Infinity")}} y {{JSxRef("NaN")}} (_Not-a-Number_, no es un número).

Una adición más reciente a JavaScript es el {{JSxRef("BigInt")}} que te permite representar números enteros que pueden ser muy grandes. Sin embargo, existen advertencias para usar `BigInt`; por ejemplo, no puedes mezclar y hacer coincidir los valores `BigInt` y {{JSxRef("Number")}} en la misma operación, y no puedes usar el objeto {{JSxRef("Math")}} con valores `BigInt`.

Consulta también {{JSxRef("Data_structures", "estructuras y tipos de datos JavaScript")}} para conocer el contexto con otros tipos primitivos en JavaScript.

Puedes utilizar cuatro tipos de literales numéricos: decimal, binario, octal y hexadecimal.

### Números decimales

```js
1234567890;
42;

// Precaución al usar ceros a la izquierda:

0888; // 888 procesado como decimal
0777; // procesado como octal en modo no estricto (511 en decimal)
```

Ten en cuenta que los decimales literales pueden comenzar con un cero (`0`) seguido de otro dígito decimal, pero si cada dígito después del `0` inicial es menor que 8, el número se procesa como un número octal.

### Números binarios

La sintaxis de números binarios utiliza un cero inicial seguido de una letra "B" latina en minúscula o mayúscula (`0b` o `0B`). Si los dígitos después del `0b` no son 0 o 1, el siguiente {{JSxRef("Objetos_globales/SyntaxError", "SyntaxError")}} se lanza un: "Faltan dígitos binarios después de 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

### Números octales

La sintaxis de números octales utiliza un cero a la izquierda. Si los dígitos después del `0` están fuera del rango de 0 a 7, el número se interpretará como un número decimal.

```js
var n = 0755; // 493
var m = 0644; // 420
```

El modo estricto en ECMAScript 5 prohíbe la sintaxis octal. La notación octal no es parte de ECMAScript 5, pero la admiten todos los navegadores al poner como prefijo un cero al número: `0644 == 420` y `"\045" === "%"`. En ECMAScript 2015, los números octales son compatibles si tienen el prefijo `0o`, por ejemplo:

```js
var a = 0o10; // ES2015: 8
```

### Números hexadecimales

La sintaxis de números hexadecimales utiliza un cero inicial seguido de una letra "X" latina en minúscula o mayúscula (`0x` o `0X`). Si los dígitos después de `0x` están fuera del rango (0123456789ABCDEF), el siguiente {{JSxRef("Objetos_globales/SyntaxError", "SyntaxError")}} se lanza: "El identificador comienza inmediatamente después del literal numérico".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

### Exponenciación

```js
1e3; // 1000
2e6; // 2000000
0.1e2; // 10
```

## El objeto `Number`

El objeto integrado {{JSxRef("Number")}} tiene propiedades para constantes numéricas, como valor máximo, `NaN` (no un número) e `infinity`. No puedes cambiar los valores de estas propiedades y las debes usar de la siguiente manera:

```js
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;
```

Siempre haces referencia a una propiedad del objeto `Number` predefinido como se muestra arriba, y no como una propiedad de un objeto `Number` que creas tú mismo.

La siguiente tabla resume las propiedades del objeto `Number`.

| Propiedad                              | Descripción                                                                                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Number.MAX_VALUE")}}         | El número representable más grande (`±1.7976931348623157e+308`)                                                                           |
| {{JSxRef("Number.MIN_VALUE")}}         | El número representable más pequeño (`±5e-324`)                                                                                           |
| {{JSxRef("Number.NaN")}}               | Valor especial `not a number` ("no es un número")                                                                                         |
| {{JSxRef("Number.NEGATIVE_INFINITY")}} | Valor infinito negativo especial; devuelto por desbordamiento                                                                             |
| {{JSxRef("Number.POSITIVE_INFINITY")}} | Valor infinito positivo especial; devuelto por desbordamiento                                                                             |
| {{JSxRef("Number.EPSILON")}}           | Diferencia entre `1` y el valor más pequeño mayor que `1` que se puede representar como un {{JSxRef("Number")}} (`2.220446049250313e-16`) |
| {{JSxRef("Number.MIN_SAFE_INTEGER")}}  | Número entero seguro mínimo en JavaScript (−253 + 1 o `−9007199254740991`)                                                                |
| {{JSxRef("Number.MAX_SAFE_INTEGER")}}  | Máximo número entero seguro en JavaScript (+253 - 1 o `+9007199254740991`)                                                                |

| Método                               | Descripción                                                                                                                                                         |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{JSxRef("Number.parseFloat()")}}    | Analiza un argumento de cadena y devuelve un número de punto flotante. Igual que la función {{JSxRef("parseFloat", "parseFloat()")}} global.                        |
| {{JSxRef("Number.parseInt()")}}      | Analiza un argumento de cadena y devuelve un número entero de la base o raíz especificada. Igual que la función {{JSxRef("parseInt", "parseInt()")}} global.        |
| {{JSxRef("Number.isFinite()")}}      | Determina si el valor pasado es un número finito.                                                                                                                   |
| {{JSxRef("Number.isInteger()")}}     | Determina si el valor pasado es un número entero.                                                                                                                   |
| {{JSxRef("Number.isNaN()")}}         | Determina si el valor pasado es {{JSxRef("Objetos_globales/NaN", "NaN")}}. Versión más robusta del {{JSxRef("Objetos_globales/isNaN", "isNaN()")}} global original. |
| {{JSxRef("Number.isSafeInteger()")}} | Determina si el valor proporcionado es un número que es un _entero seguro_.                                                                                         |

El prototipo `Number` proporciona métodos para recuperar información de objetos `Number` en varios formatos. La siguiente tabla resume los métodos de `Number.prototype`.

| Método                                                | Descripción                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{JSxRef("Number.toExponential", "toExponential()")}} | Devuelve una cadena que representa el número en notación exponencial.                                  |
| {{JSxRef("Number.toFixed", "toFixed()")}}             | Devuelve una cadena que representa el número en notación de punto fijo.                                |
| {{JSxRef("Number.toPrecision", "toPrecision()")}}     | Devuelve una cadena que representa el número con una precisión especificada en notación de punto fijo. |

## El objeto `Math`

El objeto integrado {{JSxRef("Math")}} tiene propiedades y métodos para constantes y funciones matemáticas. Por ejemplo, la propiedad `PI` del objeto `Math` tiene el valor de `pi` (3.141...), que usarías en una aplicación como:

```js
Math.PI;
```

De manera similar, las funciones matemáticas estándar son métodos de `Math`. Estas incluyen funciones trigonométricas, logarítmicas, exponenciales y otras. Por ejemplo, si deseas utilizar la función trigonométrica «seno», debes escribir

```js
Math.sin(1.56);
```

Ten en cuenta que todos los métodos trigonométricos de `Math` toman argumentos en radianes.

La siguiente tabla resume los métodos del objeto `Math`.

| Método                                                                                                                                                                                                             | Descripción                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{JSxRef("Math.abs", "abs()")}}                                                                                                                                                                                    | Valor absoluto                                                                                                                                         |
| {{JSxRef("Math.sin", "sin()")}}, {{JSxRef("Math.cos", "cos()")}}, {{JSxRef("Math.tan", "tan()")}}                                                                                                                  | Funciones trigonométricas estándar; con el argumento en radianes.                                                                                      |
| {{JSxRef("Math.asin", "asin()")}}, {{JSxRef("Math.acos", "acos()")}}, {{JSxRef("Math.atan", "atan()")}}, {{JSxRef("Math.atan2", "atan2()")}}                                                                       | Funciones trigonométricas inversas; devuelven valores en radianes.                                                                                     |
| {{JSxRef("Math.sinh", "sinh()")}}, {{JSxRef("Math.cosh", "cosh()")}}, {{JSxRef("Math.tanh", "tanh()")}}                                                                                                            | Funciones hiperbólicas; argumento en ángulo hiperbólico.                                                                                               |
| {{JSxRef("Math.asinh", "asinh()")}}, {{JSxRef("Math.acosh", "acosh()")}}, {{JSxRef("Math.atanh", "atanh()")}}                                                                                                      | Funciones hiperbólicas inversas; devuelven valores en ángulo hiperbólico.                                                                              |
| {{JSxRef("Math.pow", "pow()")}}, {{JSxRef("Math.exp", "exp()")}}, {{JSxRef("Math.expm1", "expm1()")}}, {{JSxRef("Math.log10", "log10()")}}, {{JSxRef("Math.log1p", "log1p()")}}, {{JSxRef("Math.log2", "log2()")}} | Funciones exponenciales y logarítmicas.                                                                                                                |
| {{JSxRef("Math.floor", "floor()")}}, {{JSxRef("Math.ceil", "ceil()")}}                                                                                                                                             | Devuelve el entero más grande/más pequeño menor/mayor o igual que un argumento.                                                                        |
| {{JSxRef("Math.min", "min()")}}, {{JSxRef("Math.max", "max()")}}                                                                                                                                                   | Devuelven el valor mínimo o máximo (respectivamente) de una lista de números separados por comas como argumentos.                                      |
| {{JSxRef("Math.random", "random()")}}                                                                                                                                                                              | Devuelve un número aleatorio entre 0 y 1.                                                                                                              |
| {{JSxRef("Math.round", "round()")}}, {{JSxRef("Math.fround", "fround()")}}, {{JSxRef("Math.trunc", "trunc()")}},                                                                                                   | Funciones de redondeo y truncamiento.                                                                                                                  |
| {{JSxRef("Math.sqrt", "sqrt()")}}, {{JSxRef("Math.cbrt", "cbrt()")}}, {{JSxRef("Math.hypot", "hypot()")}}                                                                                                          | Raíz cuadrada, raíz cúbica, raíz cuadrada de la suma de argumentos cuadrados.                                                                          |
| {{JSxRef("Math.sign", "sign()")}}                                                                                                                                                                                  | El signo de un número, que indica si el número es positivo, negativo o cero.                                                                           |
| {{JSxRef("Math.clz32", "clz32()")}}, {{JSxRef("Math.imul", "imul()")}}                                                                                                                                             | Número de bits cero iniciales en la representación binaria de 32 bits. El resultado de la multiplicación de 32 bits similar a C de los dos argumentos. |

A diferencia de muchos otros objetos, nunca creas un objeto `Math` propio. Siempre usas el objeto `Math` incorporado.

## El objeto `Date`

JavaScript no tiene un tipo de dato para fechas. Sin embargo, puedes utilizar el objeto {{JSxRef("Date")}} y sus métodos para trabajar con fechas y horas en tus aplicaciones. El objeto `Date` tiene una gran cantidad de métodos para establecer, obtener y manipular fechas. Pero no tiene propiedades.

JavaScript maneja las fechas de manera similar a Java. Los dos lenguajes tienen muchos de los mismos métodos de fecha, y ambos lenguajes almacenan fechas como el número de milisegundos desde el 1 de enero de 1970, 00:00:00, con una marca de tiempo Unix que es el número de segundos desde el 1 de enero de 1970, 00: 00:00.

El rango del objeto `Date` es de -100,000,000 de días a 100,000,000 de días en relación con el 1 de enero de 1970 UTC.

Para crear un objeto `Date`:

```js
var dateObjectName = new Date([parameters]);
```

donde `dateObjectName` es el nombre del objeto `Date` que se está creando; puede ser un objeto nuevo o una propiedad de un objeto existente.

Llamar a `Date` sin la palabra clave `new` devuelve una cadena que representa la fecha y hora actuales.

Los parámetros de la sintaxis anterior pueden ser cualquiera de los siguientes:

- Nada: crea la fecha y hora de hoy. Por ejemplo, `today = new Date();`.
- Una cadena que representa una fecha en la siguiente forma: "Mes día, año horas:minutos:segundos." Por ejemplo, `var Xmas95 = new Date("December 25, 1995 13:30:00")`. Si omites horas, minutos o segundos, el valor se establecerá en cero.
- Un conjunto de valores enteros para año, mes y día. Por ejemplo, `var Xmas95 = new Date(1995, 11, 25)`.
- Un conjunto de valores enteros para año, mes, día, hora, minuto y segundos. Por ejemplo, `var Xmas95 = new Date(1995, 11, 25, 9, 30, 0)`.

### Métodos del objeto `Date`

Los métodos del objeto `Date` para manejar fechas y horas se incluyen en estas categorías generales:

- métodos establecedores ("`set`"), para configurar valores de fecha y hora en objetos `Date`.
- Métodos captadores ("`get`"), para obtener valores de fecha y hora de objetos `Date`.
- métodos conversores ("`to`"), para devolver valores de cadena de objetos `Date`.
- métodos `parse` y `UTC`, para analizar cadenas de `Date`.

Con los métodos "`get`" y "`set`" puedes obtener y establecer segundos, minutos, horas, día del mes, día de la semana, meses y años por separado. Existe un método `getDay` que devuelve el día de la semana, pero no existe el método `setDay` correspondiente, porque el día de la semana se establece automáticamente. Estos métodos utilizan números enteros para representar estos valores de la siguiente manera:

- Segundos y minutos: 0 a 59
- Horas: 0 a 23
- Día: 0 (Domingo) a 6 (Sábado)
- Fecha: 1 al 31 (día del mes)
- Meses: 0 (Enero) a 11 (Diciembre)
- Año: años desde 1900

Por ejemplo, supongamos que defines la siguiente fecha:

```js
var Xmas95 = new Date("December 25, 1995");
```

Entonces, `Xmas95.getMonth()` devuelve 11 y `Xmas95.getFullYear()` devuelve 1995.

Los métodos `getTime` y `setTime` son útiles para comparar fechas. El método `getTime` devuelve el número de milisegundos desde el 1 de enero de 1970, 00:00:00 para un objeto `Date`.

Por ejemplo, el siguiente código muestra el número de días que quedan en el año actual:

```js
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Establece día y mes
endYear.setFullYear(today.getFullYear()); // Establece año a este año
var msPerDay = 24 * 60 * 60 * 1000; // Número de milisegundos por día
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); // devuelve los días que quedan en el año
```

Este ejemplo crea un objeto `Date` llamado `today` que contiene la fecha de hoy. Luego crea un objeto `Date` llamado `endYear` y establece el año en el año actual. Luego, usando la cantidad de milisegundos por día, calcula la cantidad de días entre `today` y `endYear`, usando `getTime` y redondeando a un número entero de días.

El método `parse` es útil para asignar valores de cadenas de fecha a objetos `Date` existentes. Por ejemplo, el siguiente código usa `parse` y `setTime` para asignar un valor de fecha al objeto `IPOdate`:

```js
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
```

### Ejemplo

En el siguiente ejemplo, la función `JSClock()` devuelve la hora en el formato de un reloj digital.

```js
function JSClock() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  var temp = "" + (hour > 12 ? hour - 12 : hour);
  if (hour == 0) temp = "12";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
```

La función `JSClock` primero crea un nuevo objeto `Date` llamado `time`; dado que no se dan argumentos, la hora se crea con la fecha y hora actuales. Luego, las llamadas a los métodos `getHours`, `getMinutes` y `getSeconds` asignan el valor de la hora, minuto y segundo actuales a `hour`, `minute` y `second`.

Las siguientes cuatro declaraciones crean un valor de cadena basado en el tiempo. La primera declaración crea una variable `temp`, asignándole un valor mediante una expresión condicional; si `hour` es mayor que 12, (`hour - 12`), de lo contrario, simplemente hora, a menos que la hora sea 0, en cuyo caso se convierte en 12.

La siguiente declaración agrega un valor de `minute` a `temp`. Si el valor de `minute` es menor que 10, la expresión condicional agrega una cadena con un cero precedente; de lo contrario, agrega una cadena con dos puntos de demarcación. Luego, una declaración agrega un valor de segundos a `temp` de la misma manera.

Finalmente, una expresión condicional agrega "P.M." a `temp` si `hour` es 12 o mayor; de lo contrario, agrega "A.M." a `temp`.

{{PreviousNext("Web/JavaScript/Guide/Expressions_and_Operators", "Web/JavaScript/Guide/Text_formatting")}}
