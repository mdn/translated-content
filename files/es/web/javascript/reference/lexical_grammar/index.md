---
title: Gramática léxica
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("Más")}}

Esta página describe la gramática léxica de JavaScript. El texto fuente de los scripts de ECMAScript se escanea de izquierda a derecha y se convierte en una secuencia de elementos de entrada que son segmentos, caracteres de control, terminadores de línea, comentarios o {{Glossary("Espacio en blanco")}}. ECMAScript también define ciertas palabras clave y literales y tiene reglas para la inserción automática del punto y coma en las declaraciones finales.

## Caracteres de control

Los caracteres de control no tienen representación visual, pero se utilizan para controlar la interpretación del texto.

| Punto de código | Nombre                  | Abreviatura | Descripción                                                                                                                                                                                                               |
| --------------- | ----------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `U+200C`        | Separador de ancho cero | `<ZWNJ>`    | Colocado entre caracteres para evitar que se conecten a ligaduras en ciertos idiomas ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                                                  |
| `U+200D`        | Conector de ancho cero  | `<ZWJ>`     | Colocado entre caracteres que normalmente no estarían conectados para hacer que los caracteres se rendericen usando su forma conectada en ciertos idiomas ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| `U+FEFF`        | Marca de orden de bytes | `<BOM>`     | Se usa al comienzo del script para marcarlo como Unicode y el orden de bytes del texto ([Wikipedia](https://en.wikipedia.org/wiki/Marca_de_orden_de_bytes)).                                                              |

## Espacio en blanco

Los caracteres de {{Glossary("Espacio_en_blanco")}} mejoran la legibilidad del texto fuente y separan los fragmentos entre sí. Estos caracteres suelen ser innecesarios para la funcionalidad del código. Las [herramientas de minificación](https://en.wikipedia.org/wiki/Minification_%28programming%29) se utilizan a menudo para eliminar espacios en blanco con el fin de reducir la cantidad de datos que se deben transferir.

| Punto de código | Nombre                              | Abreviatura | Descripción                                                                                               | Secuencia de escape |
| --------------- | ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- | ------------------- |
| U+0009          | Caracter de tabulación              | `<HT>`      | Tabulación horizontal                                                                                     | \t                  |
| U+000B          | Tabulación de línea                 | `<VT>`      | Tabulación vertical                                                                                       | \v                  |
| U+000C          | Avance de Página                    | `<FF>`      | Carácter de control de salto de página ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f                  |
| U+0020          | Espacio                             | `<SP>`      | Espacio normal                                                                                            |                     |
| U+00A0          | Espacio irrompible                  | `<NBSP>`    | Espacio normal, pero ningún punto en el que una línea se pueda romper                                     |                     |
| Otros           | Otros caracteres de espacio Unicode | `<USP>`     | [Espacios Unicode en Wikipedia](<https://es.wikipedia.org/wiki/Espacio_(puntuaci%C3%B3n)>)                |                     |

## Terminadores de línea

Además de los caracteres de {{Glossary("Espacio_en_blanco", "espacio en blanco")}}, los caracteres de terminación de línea se utilizan para mejorar la legibilidad del texto fuente. Sin embargo, en algunos casos, los terminadores de línea pueden influir en la ejecución del código JavaScript, ya que hay algunos lugares donde están prohibidos. Los terminadores de línea también afectan el proceso de la [inserción automática de punto y coma](#Inserción_automática_de_punto_y_coma). Los terminadores de línea se corresponden con la clase **\s** en [expresiones regulares](/es/docs/Web/JavaScript/Guide/Regular_Expressions).

Solo los siguientes puntos de código Unicode se tratan como terminadores de línea en ECMAScript, otros caracteres de salto de línea se tratan como espacios en blanco (por ejemplo, `Next Line`, `NEL`, `U+0085` se consideran como espacios en blanco).

| Punto de código | Nombre                | Abreviatura | Descripción                                                       | Secuencia de escape |
| --------------- | --------------------- | ----------- | ----------------------------------------------------------------- | ------------------- |
| U+000A          | Alimentación de linea | `<LF>`      | Caracter de nueva línea en sistemas UNIX.                         | \n                  |
| U+000D          | Retorno de carro      | `<CR>`      | Caracter de nueva línea en Commodore y los primeros sistemas Mac. | \r                  |
| U+2028          | Separador de línea    | `<LS>`      | [Wikipedia](https://es.wikipedia.org/wiki/Nueva_l%C3%ADnea)       |                     |
| U+2029          | Separador de párrafos | `<PS>`      | [Wikipedia](https://es.wikipedia.org/wiki/Nueva_l%C3%ADnea)       |                     |

## Comentarios

Los comentarios se utilizan para agregar consejos, notas, sugerencias o advertencias al código JavaScript. Esto puede facilitar su lectura y comprensión. También se pueden utilizar para deshabilitar el código y evitar que se ejecute; esta puede ser una valiosa herramienta de depuración.

JavaScript tiene dos formas antiguas de agregar comentarios al código.

La primera forma son las dobles barras inclinadas `//` comentario**;** esta convierte en comentario todo el texto que le sigue en la misma línea. Por ejemplo:

```js
function comment() {
  // Este es un comentario JavaScript de una línea
  console.log("¡Hola mundo!");
}
comment();
```

La segunda forma es el estilo `/* */`, que es mucho más flexible.

Por ejemplo, lo puedes usar en una sola línea:

```js
function comment() {
  /* Este es un comentario JavaScript de una línea */
  console.log("¡Hola mundo!");
}
comment();
```

También puedes hacer comentarios de varias líneas, como este:

```js
function comment() {
  /* Este comentario abarca varias líneas. Aviso
     No necesitamos cerrar el comentario hasta que terminemos. */
  console.log("¡Hola mundo!");
}
comment();
```

También lo puedes usar en medio de una línea, si lo deseas, aunque esto puede hacer que tu código sea más difícil de leer, por lo que se debe usar con precaución:

```js
function comment(x) {
  console.log("¡Hola" + x /* inserta el valor de x */ + " !");
}
comment("mundo");
```

Además, lo puedes usar para deshabilitar el código y evitar que se ejecute, envolviendo el código en un comentario, como este:

```js
function comment() {
  /* console.log('¡Hola mundo!'); */
}
comment();
```

En este caso, la llamada a `console.log()` nunca se emite, debido a que está dentro de un comentario. De esta forma se puede desactivar cualquier número de líneas de código.

## Comentarios `hashbang`

Una sintaxis de tercer comentario especializado, el **comentario `hashbang`**, está en proceso de estandarización en ECMAScript (consulta la [Propuesta de gramática `Hashbang`](https://github.com/tc39/proposal-hashbang)).

Un comentario `hashbang` se comporta exactamente como un comentario de una sola línea (`//`). En cambio, comienza con `#!` y **solo son válidos al comienzo absoluto de un script o módulo**. También ten en cuenta que no se permiten espacios en blanco de ningún tipo antes del `#!`. El comentario consta de todos los caracteres después de `#!` hasta el final de la primera línea; sólo se permite uno de esos comentarios.

El comentario `hashbang` especifica la ruta a un intérprete de JavaScript específico que deseas utilizar para ejecutar el script. Aquí tienes un sencillo ejemplo:

```js
#!/usr/bin/env node

console.log("Hola mundo");
```

> **Nota:** Los comentarios `hashbang` en JavaScript imitan a los [`shebangs` en Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) utilizados para ejecutar archivos con el intérprete apropiado.

> **Advertencia:** Aunque [BOM](https://https://es.wikipedia.org/wiki/Marca_de_orden_de_bytes) antes de que el comentario `hashbang` funcione en un navegador, no se recomienda utilizar BOM en un script con `hashbang`. BOM no funcionará cuando intentes ejecutar el script en Unix/Linux. Por lo tanto, usa UTF-8 sin BOM si deseas ejecutar scripts directamente desde el intérprete.

¡Solo debes usar el estilo de comentario `#!` para especificar un intérprete de JavaScript. En todos los demás casos, utiliza un comentario `//` (o un comentario multilínea).

## Palabras clave

### Palabras clave reservadas a partir de ECMAScript 2015

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/default", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- {{jsxref("Statements/class", "extends")}}
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}
- {{jsxref("Operators/yield", "yield")}}

### Futuras palabras clave reservadas

Las siguientes están reservadas como palabras clave futuras por la especificación ECMAScript. No tienen ninguna funcionalidad especial en la actualidad, pero es posible que lo hagan en el futuro, por lo que no se pueden utilizar como identificadores.

Estas siempre están reservadas:

- `enum`

Las siguientes solo están reservadas cuando se encuentran en código de modo estricto:

- `implements`
- `interface`
- {{jsxref("Statements/let", "let")}}
- `package`
- `private`
- `protected`
- `public`
- `static`
- {{jsxref("Operators/yield", "yield")}}

Las siguientes solo están reservadas cuando se encuentran en código de módulo:

- `await`

#### Futuras palabras clave reservadas en estándares más antiguos

Las siguientes están reservadas como palabras clave futuras según las especificaciones de ECMAScript anteriores (ECMAScript 1 a 3).

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

Además, los literales `null`, `true` y `false` no se pueden utilizar como identificadores en ECMAScript.

### Uso de palabras reservadas

Las palabras reservadas en realidad solo se aplican a los _identificadores_ (frente a los _nombres de identificadores_). Como se describe en [es5.github.com/#A.1](http://es5.github.com/#A.1), todos estos son _IdentifierNames_ que no excluyen _Palabras reservadas_.

```js
a.import
a['import']
a = { import: 'test' }.
```

Por otro lado, lo siguiente es ilegal porque es un _Identificador_, que es un _IdentifierName_ sin palabras reservadas. Los identificadores se utilizan para _FunctionDeclaration_, _FunctionExpression_, _VariableDeclaration_ y así sucesivamente. Los _IdentifierNames_ se utilizan para _MemberExpression_, _CallExpression_ y así sucesivamente.

```js
function import() {} // Ilegal.
```

### Identificadores con significado especial

Algunos identificadores tienen un significado especial en algunos contextos sin ser palabras clave de ningún tipo. Estos incluyen:

- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}

## Literales

### `null` literal

Consulta también {{jsxref("null")}} para obtener más información.

```js
null;
```

### Booleanos literales

Consulta también {{jsxref("Boolean", "Booleano")}} para obtener más información.

```js
true;
false;
```

### Literales numéricos

Los tipos {{jsxref("Number")}} y {{jsxref("BigInt")}} usan literales numéricos.

#### Decimal

```js
1234567890;
42;

// Precaución al usar con un cero a la izquierda:
0888; // 888 procesado como decimal
0777; // procesado como octal, 511 en decimal
```

Ten en cuenta que los decimales literales pueden comenzar con un cero (`0`) seguido de otro dígito decimal, pero si todos los dígitos después del `0` inicial son menores que 8, el número se interpreta como un número octal. Esto no arrojará JavaScript, consulta [error 957513](https://bugzilla.mozilla.org/show_bug.cgi?id=957513). Consulta también la página sobre {{jsxref("parseInt", "parseInt()")}}

##### Exponencial

El literal exponencial decimal se especifica mediante el siguiente formato: `beN`; donde `b` es un número base (entero o flotante), seguido del caracter `e` (que sirve como separador o _indicador de exponente_) y `N`, que es un número _exponente_ o _potencia_: un entero con signo (según las especificaciones ECMA-262 de 2019):

```js
0e-5; // => 0
0e5; // => 0
5e1; // => 50
175e-2; // => 1.75
1e3; // => 1000
1e-3; // => 0.001
```

#### Binario

La sintaxis de números binarios utiliza un cero inicial seguido de una letra "B" latina en minúscula o mayúscula (`0b` o `0B`). Debido a que esta sintaxis es nueva en ECMAScript 2015, consulta la tabla de compatibilidad del navegador a continuación. Si los dígitos después de `0b` no son 0 o 1, se muestra el siguiente {{jsxref("SyntaxError")}}: "Faltan dígitos binarios después de 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### Octal

La sintaxis de números octales utiliza un cero inicial seguido de una letra "O" latina en minúscula o mayúscula (`0o` o `0O`). Debido a que esta sintaxis es nueva en ECMAScript 2015, consulta la tabla de compatibilidad del navegador a continuación. Si los dígitos después del `0o` están fuera del rango (01234567), se lanza el siguiente {{jsxref("SyntaxError")}}: "Dígitos octales faltantes después del 0o".

```js
var n = 0o755; // 493
var m = 0o644; // 420

// También es posible con solo un cero inicial (ve la nota sobre los decimales arriba)
0755;
0644;
```

#### Hexadecimal

La sintaxis de números hexadecimales utiliza un cero inicial seguido de una letra "X" latina en minúscula o mayúscula (`0x` o `0X`). Si los dígitos después de 0x están fuera del rango (0123456789ABCDEF), se lanza el siguiente {{jsxref("SyntaxError")}}: "El identificador comienza inmediatamente después del literal numérico".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### BigInt literal

El tipo {{jsxref("BigInt")}} es una primitiva numérica en JavaScript que puede representar números enteros con precisión arbitraria. Los BigInt literales se crean agregando `n` al final de un número entero.

```js
123456789123456789n; // 123456789123456789
0o777777777777n; // 68719476735
0x123456789abcdefn; // 81985529216486895
0b11101001010101010101n; // 955733
```

Ten en cuenta que los números octales heredados con solo un cero a la izquierda no funcionarán para `BigInt`:

```js example-bad
// 0755n
// SyntaxError: sintaxis de BigInt no válida
```

Para números `BigInt` octales, siempre utiliza cero seguido de la letra "o" (mayúscula o minúscula):

```js example-good
0o755n;
```

Para obtener más información sobre `BigInt`, consulta también [estructuras de datos JavaScript](/es/docs/Web/JavaScript/Data_structures#BigInt_type).

#### Separadores numéricos

Para mejorar la legibilidad de literales numéricos, se pueden usar guiones bajos (`_`, `U+005F`) como separadores:

```js
// separadores en números decimales
1_000_000_000_000;
1_050.95;

// separadores en números binarios
0b1010_0001_1000_0101;

// separadores en números octales
0o2_2_5_6;

// separadores en números hexadecimales
0xa0_b0_c0;

// separadores en BigInts
1_000_000_000_000_000_000_000n;
```

Ten en cuenta estas limitaciones:

```js example-bad
 // No se permite más de un guión bajo en una fila
100__000; // SyntaxError

// No permitido al final de literales numéricos
100_; // SyntaxError

// No se puede usar después de 0
0_1; // SyntaxError
```

### Objetos literales

Consulta también {{jsxref("Object")}} e [Iniciador de objeto](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer) para obtener más información.

```js
var o = { a: "foo", b: "bar", c: 42 };

// notación abreviada. Nueva en ES2015
var a = "foo",
  b = "bar",
  c = 42;
var o = { a, b, c };

// en vez de
var o = { a: a, b: b, c: c };
```

### Arreglos literales

Consulta también {{jsxref("Array")}} para obtener más información.

```js
[1954, 1974, 1990, 2014];
```

### Cadenas literales

Una cadena literal es cero o más puntos de código Unicode entre comillas simples o dobles. Los puntos de código Unicode también se pueden representar mediante una secuencia de escape. Literalmente todos los puntos de código pueden aparecer en una cadena literal, excepto estos puntos de código de cierre de cita:

- U+005C \ (backslash),
- U+000D \<CR>,
- y U+000A \<LF>.

Antes de la [propuesta para hacer que todo el texto JSON sea ECMA-262 válido](https://github.com/tc39/proposal-json-superset), U+2028 \<LS> y U+2029 \<PS>, tampoco se permitió que aparecieran sin escape en las cadenas literales.

Cualquier punto de código puede aparecer en forma de secuencia de escape. Las cadenas literales se evalúan como valores de cadena de ECMAScript. Al generar estos valores de cadena, los puntos de código Unicode están codificados en UTF-16.

```js-nolint
'foo';
"bar";
```

#### Secuencias de escape hexadecimales

Las secuencias de escape hexadecimales constan de `\x` seguido de exactamente dos dígitos hexadecimales que representan una unidad de código o un punto de código en el rango de 0x0000 a 0x00FF.

```js
"\xA9"; // "©"
```

#### Secuencias de escape Unicode

Una secuencia de escape Unicode consta exactamente de cuatro dígitos hexadecimales después de `\u`. Representa una unidad de código en la codificación UTF-16. Para los puntos de código U+0000 a U+FFFF, la unidad de código es igual al punto de código. Los puntos de código U+10000 a U+10FFFF requieren dos secuencias de escape que representan las dos unidades de código (un par sustituto) utilizadas para codificar el carácter; el par sustituto es distinto del punto de código.

Consulta también {{jsxref("String.fromCharCode()")}} y {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Puntos de escape de código Unicode

Un punto de código de escape Unicode consta de `\u{`, seguido de un punto de código en base hexadecimal, seguido de `}`. El valor de los dígitos hexadecimales debe estar en el rango 0 y 0x10FFFF inclusive. Los puntos de código en el rango U+10000 a U+10FFFF no necesitan representarse como un par sustituto. Se agregaron puntos de código de escape a JavaScript en ECMAScript 2015 (ES6).

Consulta también {{jsxref("String.fromCodePoint()")}} y {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILIDAD IDEOGRÁFICA-2F804 (U+2F804)

// el mismo caracter representado como un par suplente
"\uD87E\uDC04";
```

### Expresión regular literal

Consulta también {{jsxref("RegExp")}} para obtener más información.

```js
/ab+c/g

// Una expresión regular literal "vacía"
// El grupo de no captura vacío es necesario
// para evitar la ambigüedad con comentarios de una sola línea.
/(?:)/
```

### Plantillas literales

Consulta también [cadenas de plantilla](/es/docs/Web/JavaScript/Reference/template_strings) para obtener más información.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Inserción automática de punto y coma

Algunas [declaraciones JavaScript](/es/docs/Web/JavaScript/Reference/Statements) se deben terminar con punto y coma y, por lo tanto, se ven afectadas por la inserción automática del punto y coma (IAPC):

- Declaración vacía
- `let`, `const`, declaración de variable
- `import`, `export`, declaración de módulo
- Declaración de expresión
- `debugger`
- `continue`, `break`, `throw`
- `return`

La especificación ECMAScript menciona [tres reglas de inserción de punto y coma](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion).

1\. Se inserta un punto y coma antes, cuando se encuentra un [terminador de línea](#Line_terminators) o "}" que no está permitido por la gramática.

```js
{ 1 2 } 3

// La IAPC lo transforma en

{ 1 2 ;} 3;
```

2\. Se inserta un punto y coma al final, cuando se detecta el final del flujo de entrada de símbolos y el analizador no puede procesar el único flujo de entrada como un programa completo.

Aquí `++` no se trata como un [operador sufijo](/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) que se aplica a la variable `b`, porque se produce un terminador de línea entre `b` y `++`.

```js
a = b;
++c;

// IAPC lo transforma en

a = b;
++c;
```

3\. Se inserta un punto y coma al final, cuando una declaración con producción restringida en la gramática va seguida de un terminador de línea. Estas declaraciones con reglas "no LineTerminator aquí" son:

- PostfixExpressions (`++` y `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js
return;
a + b;

// La IAPC lo transforma en

return;
a + b;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Jeff Walden: números binarios y octales](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens: caracteres de secuencias de escape JavaScript](http://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean", "Booleanos")}}
- {{jsxref("Number", "Números")}}
- {{jsxref("RegExp")}}
- {{jsxref("String", "Cadenas de texto (Strings)")}}
