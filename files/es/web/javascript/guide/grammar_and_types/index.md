---
title: Gramática y Tipos
slug: Web/JavaScript/Guide/Grammar_and_types
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}

Este capítulo analiza la gramática básica de JavaScript, la declaración de variables, los tipos de datos y literales.

## Conceptos básicos

JavaScript está influenciado sobre todo por la sintaxis de Java, C y C++, pero también ha sido influenciado por Awk, Perl y Python.

JavaScript distingue entre mayúsculas y minúsculas (es **case-sensitive**) y utiliza el conjunto de caracteres **Unicode**. Por ejemplo, la palabra «Früh» (que significa "temprano" en Alemán) se podría usar como el nombre de una variable.

```js
let Früh = "foobar";
```

Pero, la variable `früh` no es la misma que `Früh` porque JavaScript distingue entre mayúsculas y minúsculas.

En JavaScript, las instrucciones se denominan {{Glossary("Statement", "declaraciones")}} y están separadas por punto y coma (;).

No es necesario un punto y coma después de una declaración si está escrita en su propia línea. Pero si se deseas más de una declaración en una línea, entonces _debes_ separarlas con punto y coma.

> **Nota:** ECMAScript también tiene reglas para la inserción automática del punto y coma —{{JSxRef("Gramatica_lexica", "IAPC", "#Insercion_automatica_de_punto_y_coma")}}— (_ASI_ en inglés, por sus siglas «_Automatic Semicolon Insertion_») al final de las declaraciones. (Para obtener más información, consulta la referencia detallada sobre la {{JSxRef("Gramatica_lexica", "gramática léxica")}} de JavaScript).

Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.

El texto fuente del script JavaScript se escanea de izquierda a derecha y se convierte en una secuencia de elementos de entrada que son _fragmentos_, _caracteres de control_, _terminadores de línea_, _comentarios_ o {{Glossary("Espacio en blanco", "espacios en blanco")}}. (Los espacios, tabulaciones y caracteres de nueva línea se consideran espacios en blanco).

## Comentarios

La sintaxis de los **comentarios** es la misma que en C++ y en muchos otros lenguajes:

```js
// un comentario de una línea

/* este es un comentario
 * más largo, de varias líneas
 */

/* Sin embargo, no puedes /* anidar comentarios */ SyntaxError */
```

Los comentarios se comportan como espacios en blanco y se descartan durante la ejecución del script.

> **Nota:** También puedes ver un tercer tipo de sintaxis de comentario al comienzo de algunos archivos JavaScript, que se parece a esto: `#!/usr/bin/env node`.Esto se denomina sintaxis de **comentario hashbang** y es un comentario especial que se utiliza para especificar la ruta a un motor JavaScript en particular que debe ejecutar el script. Consulta {{JSxRef("Gramatica_lexica", "Comentarios Hashbang", "#Comentarios_hashbang")}} para obtener más detalles.

## Declaraciones

JavaScript tiene tres tipos de declaraciones de variables.

- {{JSxRef("Sentencias/var", "var")}}
  - : Declara una variable, opcionalmente la inicia a un valor.
- {{JSxRef("Sentencias/let", "let")}}
  - : Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
- {{JSxRef("Sentencias/const", "const")}}
  - : Declara un nombre de constante de solo lectura y ámbito de bloque.

### Variables

Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados {{Glossary("Identifier", "identificadores")}}, se ajustan a ciertas reglas.

Un identificador de JavaScript debe comenzar con una letra, un guión bajo (`_`) o un signo de dólar (`$`). Los siguientes caracteres también pueden ser dígitos (`0`-`9`).

Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "`A`" a "`Z`" (mayúsculas), así como "`a`" a "z" (minúsculas).

Puedes utilizar la mayoría de las letras ISO 8859-1 o Unicode como `å` y `ü` en los identificadores. (Para obtener más detalles, consulta [esta publicación del blog](https://mathiasbynens.be/notes/javascript-identifiers-es6)). También puedes usar {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}} como caracteres en identificadores.

Algunos ejemplos de nombres legales son `Number_hits`, `temp99`, `$credit` y `_name`.

### Declaración de variables

Puedes declarar una variable de dos formas:

- Con la palabra clave {{JSxRef("Sentencias/var", "var")}}. Por ejemplo, `var x = 42`. Esta sintaxis se puede utilizar para declarar variables **locales** y **globales**, dependiendo del _contexto de ejecución_.
- Con la palabra clave {{JSxRef("Sentencias/const", "const")}} o {{JSxRef("Sentencias/let", "let")}}. Por ejemplo, `let y = 13`. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque. (Ve el [Ámbito de variables](#ambito_de_variables) abajo.)

También puedes simplemente asignar un valor a una variable. Por ejemplo, `x = 42`. Este formulario crea una variable {{JSxRef("Sentencias/var", "global no declarada", "#Descripción")}}. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.

### Evaluar variables

Una variable declarada usando la instrucción `var` o `let` sin un valor asignado especificado tiene el valor de {{JSxRef("undefined")}}.

Un intento de acceder a una variable no declarada da como resultado el disparo de una excepción {{JSxRef("ReferenceError")}}:

```js
var a;
console.log("El valor de a es " + a); // El valor de a es undefined

console.log("El valor de b es " + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

console.log("El valor de c es " + c); // Error de referencia no detectado: c no está definida

let x;
console.log("El valor de x es " + x); // El valor de x es undefined

console.log("El valor de y es " + y); // Error de referencia no detectada: y no está definida
let y;
```

Puedes usar `undefined` para determinar si una variable tiene un valor. En el siguiente código, a la variable `input` no se le asigna un valor y la declaración {{JSxRef("Sentencias/if...else", "if")}} evalúa a `true`.

```js
var input;
if (input === undefined) {
  doThis();
} else {
  doThat();
}
```

El valor `undefined` se comporta como `false` cuando se usa en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función `myFunction` porque el elemento `myArray` es `undefined`:

```js
var myArray = [];
if (!myArray[0]) myFunction();
```

El valor `undefined` se convierte en `NaN` cuando se usa en contexto numérico.

```js
var a;
a + 2; // Evalúa a NaN
```

Cuando evalúas una variable {{JSxRef("null")}}, el valor nulo se comporta como `0` en contextos numéricos y como `false` en contextos booleanos. Por ejemplo:

```js
var n = null;
console.log(n * 32); // Registrará 0 en la consola
```

### Ámbito de variables

Cuando declaras una variable fuera de cualquier función, se denomina variable _global_, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable _local_, porque solo está disponible dentro de esa función.

JavaScript anterior a ECMAScript 2015 no tiene el ámbito de la {{JSxRef("Guide/Control_de_flujo_y_manejo_de_errores", "declaración de bloque", "#Block_statement", "Checar")}}. Más bien, una variable declarada dentro de un bloque es local a la _función (o ámbito global)_ en el que reside el bloque.

Por ejemplo, el siguiente código registrará `5`, porque el ámbito de `x` es el contexto global (o el contexto de la función si el código es parte de una función). El ámbito de `x` no se limita al bloque de instrucciones `if` inmediato.

```js
if (true) {
  var x = 5;
}
console.log(x); // x es 5
```

Este comportamiento cambia cuando se usa la declaración `let` (introducida en ECMAScript 2015).

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y no está definida
```

### Elevación de variables (`hoisting`)

Otra cosa inusual acerca de las variables en JavaScript es que puedes hacer referencia a una variable declarada más tarde, sin obtener una excepción.

Este concepto se conoce como **elevación.** Las variables en JavaScript son, en cierto sentido, "elevadas" (o "izadas") a la parte superior de la función o declaración. Sin embargo, las variables que se elevan devuelven un valor de `undefined`. Entonces, incluso si la declaras e inicias después de usarla o hacer referencia a esta variable, todavía devuelve `undefined`.

```js
/**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor de undefined
var myVar = "my value";

(function () {
  console.log(myVar); // undefined
  var myVar = "valor local";
})();
```

Los ejemplos anteriores se interpretarán de la misma manera que:

```js
/**
 * Ejemplo 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Ejemplo 2
 */
var myVar = "my value";

(function () {
  var myVar;
  console.log(myVar); // undefined
  myVar = "valor local";
})();
```

Debido a la elevación, todas las declaraciones `var` en una función se deben colocar lo más cerca posible de la parte superior de la función. Esta buena práctica aumenta la claridad del código.

En ECMAScript 2015, `let` y `const` **se elevan pero no se inician**. Hacer referencia a la variable en el bloque antes de la declaración de la variable da como resultado un {{JSxRef("ReferenceError")}}, porque la variable está en una "zona muerta temporal" desde el inicio del bloque hasta que se procesa la declaración.

```js
console.log(x); // ReferenceError
let x = 3;
```

### Elevación de función

En el caso de las funciones, solo se incluyen _declaraciones_ de función, pero _no_ las _expresiones_ de la función.

```js
/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

baz(); // TypeError: baz no es una función

var baz = function () {
  console.log("bar2");
};
```

### Variables globales

Las variables globales, de hecho, son propiedades del _objeto global_.

En las páginas web, el objeto global es {{domxref("window")}}, por lo que puedes establecer y acceder a variables globales utilizando la sintaxis `window.variable`.

En consecuencia, puedes acceder a las variables globales declaradas en una «ventana» o «marco» desde otra «ventana» o «marco» especificando el nombre de la `window` o el `frame`. Por ejemplo, si declaras una variable llamada `phoneNumber` en un documento, puedes hacer referencia a esta variable desde un `iframe` como `parent.phoneNumber`.

### Constantes

Puedes crear una constante de solo lectura con nombre con la palabra clave {{JSxRef("Sentencias/const", "const")}}.

La sintaxis de un identificador de constante es la misma que la de cualquier identificador de variable: debe comenzar con una letra, un subrayado o un signo de dólar (`$`) y puede contener caracteres alfabéticos, numéricos o de subrayado.

```js
const PI = 3.14;
```

Una constante no puede cambiar el valor a través de la asignación o volver a declararla mientras se ejecuta el script. Se debe iniciar a un valor.

Las reglas de ámbito para las constantes son las mismas que las de ámbito de bloque de las variables `let`. Si se omite la palabra clave `const`, se asume que el identificador representa una variable.

No puedes declarar una constante con el mismo nombre que una función o una variable en el mismo ámbito. Por ejemplo:

```js
// ESTO CAUSARÁ UN ERROR
function f() {}
const f = 5;

// ESTO TAMBIÉN CAUSARÁ UN ERROR
function f() {
  const g = 5;
  var g;

  // expresiones
}
```

Sin embargo, las propiedades de los objetos asignados a constantes no son protegidas, es por esto que la siguiente declaración se ejecuta sin problemas.

```js
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
```

Además, el contenido de los arreglos tampoco está protegido cuando es asignado a una constante, es por esto que la siguiente declaración se ejecuta sin problemas.

```js
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];
```

## Estructuras y tipos de datos

### Tipos de datos

El último estándar ECMAScript define ocho tipos de datos:

- Siete tipos de datos que son {{Glossary("Primitive", "primitivos")}}:

  1. {{Glossary("Boolean", "Booleano")}}. `true` y `false`.
  2. {{Glossary("null")}}. Una palabra clave especial que denota un valor nulo. (Dado que JavaScript distingue entre mayúsculas y minúsculas, `null` no es lo mismo que `Null`, `NULL` o cualquier otra variante).
  3. {{Glossary("undefined")}}. Una propiedad de alto nivel cuyo valor no está definido.
  4. {{Glossary("Number")}}. Un número entero o un número con coma flotante. Por ejemplo: `42` o `3.14159`.
  5. {{Glossary("BigInt")}}. Un número entero con precisión arbitraria. Por ejemplo: `9007199254740992n`.
  6. {{Glossary("String")}}. Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Hola"
  7. {{Glossary("Symbol")}} (nuevo en ECMAScript 2015). Un tipo de dato cuyas instancias son únicas e inmutables

- y {{Glossary("Object")}}

Aunque estos tipos de datos son una cantidad relativamente pequeña, permiten realizar funciones útiles con tus aplicaciones. Los otros elementos fundamentales en el lenguaje son los {{JSxRef("Object", "Objetos", "", 1)}} y las {{JSxRef("Function", "funciones", "", 1)}}. Puedes pensar en objetos como contenedores con nombre para los valores, y las funciones como procedimientos que puedes programar en tu aplicación.

### Conversión de tipos de datos

JavaScript es un lenguaje _tipado dinámicamente_. Esto significa que no tienes que especificar el tipo de dato de una variable cuando la declaras. También significa que los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script.

Así, por ejemplo, puedes definir una variable de la siguiente manera:

```js
var answer = 42;
```

Y luego, puedes asignarle una cadena a esa misma variable, por ejemplo:

```js
answer = "Gracias por todo el pescado...";
```

Debido a que JavaScript se tipifica dinámicamente, esta asignación no genera un mensaje de error.

### Números y el operador '+'

En expresiones que involucran valores numéricos y de cadena con el operador `+`, JavaScript convierte los valores numéricos en cadenas. Por ejemplo, considera las siguientes declaraciones:

```js
x = "La respuesta es " + 42; // "La respuesta es 42"
y = 42 + " es la respuesta"; // "42 es la respuesta"
```

Con todos los demás operadores, JavaScript _no_ convierte valores numéricos en cadenas. Por ejemplo:

```js
"37" - 7; // 30
"37" + 7; // "377"
```

### Convertir texto a números

En el caso que un valor representando un número está en memoria como texto, hay métodos para la conversión.

- {{JSxRef("parseInt", "parseInt()")}}
- {{JSxRef("parseFloat", "parseFloat()")}}

`parseInt` solo devuelve números enteros, por lo que su uso se reduce para decimales.

> **Nota:** Además, una práctica recomendada para `parseInt` es incluir siempre el parámetro _radix_. El parámetro `radix` se utiliza para especificar qué sistema numérico se utilizará.

```js
parseInt("101", 2); // 5
```

Un método alternativo para recuperar un número de una cadena es con el operador `+` (más unario):

```js-nolint
"1.1" + "1.1"; // '1.11.1'
(+"1.1") + (+"1.1"); // 2.2
// Nota: los paréntesis se agregan para mayor claridad, no son necesarios.
```

## Literales

Los _literales_ representan valores en JavaScript. Estos son valores fijos, no variables, que _literalmente_ proporcionas en tu script. Esta sección describe los siguientes tipos de literales:

- [Arreglos literales](#arreglos_literales)
- [Booleanos literales](#booleanos_literales)
- [Literales de coma flotante](#literales_de_coma_flotante)
- [Literales numéricos](#literales_numericos)
- [Objetos literales](#objetos_literales)
- [RegExp literales](#regexp_literales)
- [Cadenas literales](#cadenas_literales)

### Arreglos literales

Un arreglo literal es una lista de cero o más expresiones, cada una de las cuales representa un elemento del arreglo, encerrada entre corchetes (`[]`). Cuando creas un arreglo utilizando un arreglo literal, se inicia con los valores especificados como sus elementos, y su `length` se establece en el número de argumentos especificado.

El siguiente ejemplo crea el arreglo `coffees` con tres elementos y `length` de tres:

```js
let coffees = ["French Roast", "Colombian", "Kona"];
```

> **Nota:** Un arreglo literal es un tipo de _iniciador de objeto_. Consulta {{JSxRef("Guide/Trabajando_con_objectos", "Uso de iniciadores de objetos", "#Uso_de_iniciadores_de_objeto")}}.

Si creas un arreglo utilizando un literal en un script de nivel superior, JavaScript interpreta el arreglo cada vez que evalúa la expresión que contiene el arreglo literal. Además, cada vez que llamas a una función se crea un literal usado en ella.

> **Nota:** Los arreglos literales también son objetos `Array`. Consulta {{JSxRef("Array")}} y {{JSxRef("Guide/colecciones_indexadas", "Colecciones indexadas")}} para obtener detalles sobre los objetos `Array`.

#### Comas adicionales en arreglos literales

No tienes que especificar todos los elementos en un arreglo literal. Si colocas dos comas en una fila, el arreglo completa el valor `undefined` para los elementos no especificados. El siguiente ejemplo crea el arreglo `fish`:

```js
let fish = ["Lion", , "Angel"];
```

Este arreglo tiene dos elementos con valores y un elemento vacío:

- `fish[0]` es "Lion"
- `fish[1]` es `undefined`
- `fish[2]` es "Angel"

Si incluyes una coma al final de la lista de los elementos, la coma es ignorada.

En el siguiente ejemplo, el `length` del arreglo es tres. No hay `myList[3]`. Todas las demás comas de la lista indican un nuevo elemento.

> **Nota:** Las comas finales pueden crear errores en versiones anteriores del navegador y se recomienda eliminarlas.

```js-nolint
let myList = ["home", , "school", ];
```

En el siguiente ejemplo, el `length` del arreglo es cuatro, y faltan `myList[0]` y `myList[2]`.

```js
let myList = [, "home", , "school"];
```

En el siguiente ejemplo, el `length` del arreglo es cuatro, y faltan `myList[1]` y `myList[3]`. **Solo se ignora la última coma.**

```js
let myList = ["home", , "school", ,];
```

Entender el comportamiento de las comas adicionales es importante para comprender JavaScript como lenguaje.

Sin embargo, al escribir tu propio código, debes declarar explícitamente los elementos que faltan como `undefined`. Hacerlo así aumenta la claridad y la facilidad de mantenimiento de tu código.

### Booleanos literales

El tipo booleano tiene dos valores literales: `true` y `false`.

> **Nota:** No confundas los valores booleanos primitivos `true` y `false` con los valores `true` y `false` del objeto {{JSxRef("Boolean")}}.El objeto `Boolean` es un contenedor alrededor del tipo de dato primitivo `Boolean`. Consulta {{JSxRef("Boolean")}} para obtener más información.

### Literales numéricos

Los tipos {{JSxRef("Number")}} y {{JSxRef("BigInt")}} se pueden escribir en decimal (base 10), hexadecimal (base 16), octal (base 8) y binario (base 2).

- Un literal numérico _decimal_ es una secuencia de dígitos sin un `0` (cero) inicial.
- Un `0` (cero) inicial en un literal numérico, o un `0o` inicial (o `0O`) indica que está en _octal_. Los números octales pueden incluir solo los dígitos `0`-`7`.
- Un `0x` inicial (o `0X`) indica un tipo numérico _hexadecimal_. Los números hexadecimales pueden incluir los dígitos (`0`-`9`) y las letras `a`-`f` y `A`-`F`. (Si un caracter está en mayúscula o minúscula no cambia su valor. Por lo tanto: `0xa` = `0xA` = `10` y `0xf` = `0xF` = `15`).
- Un `0b` inicial (o `0B`) indica un literal numérico _binario_. Los números binarios solo pueden incluir los dígitos `0` y `1`.

Aquí tienes algunos ejemplos de literales numéricos:

```
0, 117, -345, 123456789123456789n             (decimal, base 10)
015, 0001, -0o77, 0o777777777777n             (octal, base 8)
0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" o base 16)
0b11, 0b0011, -0b11, 0b11101001010101010101n  (binario, base 2)
```

Para obtener más información, consulta {{JSxRef("Gramatica_lexica", "Literales numéricos en la referencia gramatical léxica", "#Literales_numericos")}}.

### Literales de coma flotante

Un literal de coma flotante puede tener las siguientes partes:

- Un entero decimal que puede tener un signo (precedido por "`+`" o "`-`"),
- Un punto decimal ("`.`"),
- Una fracción (otro número decimal),
- Un exponente.

La parte del exponente es una "`e`" o "`E`" seguida de un número entero, que puede tener signo (precedido por "`+`" o "`-`"). Un literal de coma flotante debe tener al menos un dígito y un punto decimal o "`e`" (o "`E`").

Específicamente, la sintaxis es:

```
[(+|-)][dígitos].[dígitos][(E|e)[(+|-)]dígitos]
```

Por ejemplo:

```
3.1415926
-.123456789
-3.1E+12
.1e-23
```

### Objetos literales

Un objeto literal es una lista de cero o más pares de nombres de propiedad y valores asociados de un objeto, entre llaves (`{}`).

> **Advertencia:** **¡No uses un objeto literal al comienzo de una declaración!** Esto dará lugar a un error (o no se comportará como esperabas), porque la `{` se interpretará como el comienzo de un bloque.

El siguiente es un ejemplo de un objeto literal. El primer elemento del objeto `car` define una propiedad, `myCar`, y le asigna una nueva cadena, "`Saturn`"; al segundo elemento, la propiedad `getCar`, se le asigna inmediatamente el resultado de invocar a la función `(carTypes("Honda"));` el tercer elemento, la propiedad `special`, utiliza una variable (`sales`) existente.

```js
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

Además, puedes utilizar un literal numérico o de cadena para el nombre de una propiedad o anidar un objeto dentro de otro. El siguiente ejemplo usa estas opciones.

```js
var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

Los nombres de propiedad de los objetos pueden ser cualquier cadena, incluida la cadena vacía. Si el nombre de la propiedad no fuera un {{Glossary("Identifier", "identificador")}} o un número JavaScript válido, debe ir entre comillas.

No se puede acceder a los nombres de propiedad que no sean identificadores válidos como un punto (`.`), propiedad, pero _se pueden_ acceder y configurar con la notación tipo arreglo ("`[]`").

```js
var unusualPropertyNames = {
  '': 'Una cadena vacía',
  '!': '¡Bang!'
}
console.log(inusualPropertyNames.'');   // SyntaxError: Cadena inesperada
console.log(inusualPropertyNames['']);  // Una cadena vacía
console.log(unusualPropertyNames.!);    // SyntaxError: símbolo inesperado !
console.log(unusualPropertyNames['!']); // ¡Bang!
```

#### Objetos literales mejorados

En ES2015, los objeto literales se amplían para admitir la configuración del prototipo en la construcción, la abreviatura para asignaciones `foo: foo`, la definición de métodos, la realización de llamadas a `super` y el cálculo de nombres de propiedades con expresiones.

Juntos, estos también acercan los objetos literales y las declaraciones de clase, y permiten que el diseño basado en objetos se beneficie de algunas de las mismas conveniencias.

```js
var obj = {
  // __proto__
  __proto__: theProtoObj,
  // Abreviatura de "handler: handler"
  handler,
  // Métodos
  toString() {
    // Llamadas a super
    return "d " + super.toString();
  },
  // Nombres de propiedad calculados (dinámicos)
  ["prop_" + (() => 42)()]: 42,
};
```

### Expresiones regulares («RegExp») literales

Un expresión regular literal (que se define en detalle {{JSxRef("Guide/Regular_Expressions", "más adelante")}}) es un patrón incluido entre barras. El siguiente es un ejemplo de una expresión regular literal.

```js
var re = /ab+c/;
```

### Cadenas literales

Una cadena literal consta de cero o más caracteres encerrados entre comillas dobles (`"`) o simples (`'`). Una cadena debe estar delimitada por comillas del mismo tipo (es decir, ambas comillas simples o, ambas comillas dobles).

Los siguientes son ejemplos de cadenas literales:

```js-nolint
'foo';
"bar";
'1234';
"una linea \n otra linea";
"John's cat";
```

Puedes llamar a cualquiera de los métodos del objeto {{JSxRef("String")}} en un valor de cadena literal. JavaScript automáticamente convierte la cadena literal en un objeto `String` temporal, llama al método y luego descarta el objeto `String` temporal. También puedes usar la propiedad `String.length` con una cadena literal:

```js
// Imprimirá el número de símbolos en la cadena, incluidos los espacios en blanco.
console.log("John's cat".length); // En este caso, 10.
```

En ES2015, también están disponibles las _plantillas literales_. Las plantillas literales están encerradas por la comilla invertida (`` ` ``) ([Acento_grave](https://es.wikipedia.org/wiki/Acento_grave)) en lugar de comillas simples o dobles.

Las cadenas de las plantillas literales proporcionan azúcar sintáctica para construir cadenas. (Esto es similar a las funciones de interpolación de cadenas en Perl, Python y más).

Opcionalmente, puedes agregar una etiqueta para permitirte personalizar la construcción de la cadena, evitando ataques de inyección o construyendo estructuras de datos de nivel superior a partir del contenido de la cadena.

```js
// Creación de cadenas literales básicas
`en JavaScript '\n' es un avance de línea.`;

// Cadenas multilínea
`En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`;

// Interpolación de cadenas
var name = "Bob",
  time = "hoy";
`Hola ${name}, ¿cómo estás ${time}?`;

// Construye un prefijo de petición HTTP utilizado para interpretar los reemplazos y la construcción
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

Debes usar cadenas literales a menos que específicamente necesites usar un objeto `String`. Consulta {{JSxRef("String")}} para obtener detalles sobre los objetos `String`.

#### Uso de caracteres especiales en cadenas

Adicionalmente a los caracteres normales, también puedes incluir caracteres especiales en las cadenas, como muestra el siguiente ejemplo:

```js
"una linea \n otra linea";
```

La siguiente tabla enumera los caracteres especiales que se pueden usar en una cadena JavaScript.

| Caracter    | Significado                                                                                                                                                                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `\0`        | Byte nulo                                                                                                                                                                                                                                                |
| `\b`        | Retroceso                                                                                                                                                                                                                                                |
| `\f`        | Avance de Página                                                                                                                                                                                                                                         |
| `\n`        | Nueva Línea                                                                                                                                                                                                                                              |
| `\r`        | Retorno de carro                                                                                                                                                                                                                                         |
| `\t`        | Tabulación                                                                                                                                                                                                                                               |
| `\v`        | Tabulación vertical                                                                                                                                                                                                                                      |
| `\'`        | Apóstrofo o comilla simple                                                                                                                                                                                                                               |
| `\"`        | Comilla doble                                                                                                                                                                                                                                            |
| `\\`        | Caracter de barra invertida                                                                                                                                                                                                                              |
| `\XXX`      | El caracter con la codificación Latin-1 especificada por hasta tres dígitos octales _XXX_ entre `0` y `377`. Por ejemplo, `\251` es la secuencia octal del símbolo de copyright.                                                                         |
|             |                                                                                                                                                                                                                                                          |
| `\xXX`      | El caracter con la codificación Latin-1 especificada por los dos dígitos hexadecimales _XX_ entre `00` y `FF`. Por ejemplo, `\xA9` es la secuencia hexadecimal del símbolo de copyright.                                                                 |
|             |                                                                                                                                                                                                                                                          |
| `\uXXXX`    | El caracter Unicode especificado por los cuatro dígitos hexadecimales _XXXX_. Por ejemplo, `\u00A9` es la secuencia Unicode para el símbolo de copyright. Consulta {{JSxRef("Gramatica_lexica", "Secuencias de escape Unicode", "#Cadenas_literales")}}. |
| `\u{XXXXX}` | El punto de código escape Unicode. Por ejemplo, `\u{2F804}` es el mismo que el escape Unicode simple `\uD87E\uDC04`.                                                                                                                                     |

#### Escapar caracteres

Para caracteres no enumerados en la tabla, la precedencia de la barra inversa es ignorada, pero su uso esta desaconsejado y se debe evitar.

Puedes insertar comillas dobles dentro de una cadena anteponiendo un caracter de barra inversa. Esto se conoce como _escapar_ las comillas. Por ejemplo:

```js-nolint
var quote = "Él leyó \"La cremación de Sam McGee\" de R.W. Service.";
console.log(quote);
```

El resultado de esto sería:

```
El leyó "La cremación de Sam McGee" de R.W. Service.
```

Para incluir una barra invertida literal dentro de una cadena, debes escapar el caracter de barra invertida. Por ejemplo, para asignar la ruta del archivo `c:\temp` a una cadena, usa lo siguiente:

```js
var home = "c:\\temp";
```

También puedes escapar los saltos de línea precediéndolos con una barra invertida. La barra invertida y el salto de línea se eliminan del valor de la cadena.

```js
var str =
  "esta cadena \
se divide \
en múltiples \
líneas.";
console.log(str); // esta cadena se divide en múltiples líneas.
```

Aunque JavaScript no tiene sintaxis "«heredoc»" se puede acercar insertando una barra inversa y un salto de linea al final de cada linea:

```js
var poem =
  "Las rosas son rojas,\n\
Las violetas son azules.\n\
El azúcar es dulce,\n\
y foo también.";
```

ECMAScript 2015 introduce un nuevo tipo de literal, a saber, {{JSxRef("template_strings", "plantillas literales")}}. Esto permite muchas nuevas funciones, ¡incluidas cadenas multilínea!

```js
var poem = `Las rosas son rojas,
Las violetas son azules.
El azúcar es dulce,
y foo también.`;
```

## Mas información

Este capítulo se enfoca en la sintaxis básica para los tipos y las declaraciones. Para aprender mas acerca de las construcciones en el lenguaje JavaScript, ve también los siguientes capítulos en esta guía:

- {{JSxRef("Guide/Control_de_flujo_y_manejo_de_errores", "Control de flujo y manejo de errores")}}
- {{JSxRef("Guide/Bucles_e_iteracion", "Bucles e iteración")}}
- {{JSxRef("Guide/Funciones", "Funciones")}}
- {{JSxRef("Guide/Expressions_and_Operators", "Expresiones y operadores")}}

En el próximo capítulo, veremos las construcciones de control de flujo y el manejo de errores.

{{PreviousNext("Web/JavaScript/Guide/Introduction", "Web/JavaScript/Guide/Control_flow_and_error_handling")}}
