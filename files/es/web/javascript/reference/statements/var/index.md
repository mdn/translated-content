---
title: var
slug: Web/JavaScript/Reference/Statements/var
---

{{jsSidebar("Statements")}}

## Resumen

La sentencia **`var`** declara una variable, opcionalmente inicializándola con un valor.

## Sintaxis

```
var nombreDeVariable1 [= valor1] [, nombreDeVariable2 [= valor2] ... [, nombreDeVariableN [=valorN]]];
```

- `nombreDeVariableN`

  - : Representa el nombre que el programador da a la variable. Puede ser cualquier identificador legal.

- `valorN`
  - : Valor inicial de la variable. Puede ser cualquier expresión legal. El valor predeterminado es _undefined_ (en español, _indefinida_).

## Descripción

Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada **`var`** es su _contexto de ejecución_ en curso*,* que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.

Asignar un valor a una variable no declarada implica crearla como variable global (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. Las diferencias entre una variable declarada y otra sin declarar son:

1\. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. Las variables no declaradas siempre son globales.

```js
function x() {
  y = 1; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict')
  var z = 2;
}

x();

console.log(y); // Imprime "1"
console.log(z); // Lanza un error de tipo "ReferenceError": z no está definida afuera de x
```

2\. Las variables declaradas son creadas antes de ejecutar cualquier otro código. Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.

```js
console.log(a); // Lanza un error de tipo "ReferenceError".
console.log("trabajando..."); // Nunca se ejecuta.
```

```js
var a;
console.log(a); // Imprime "undefined" o "" dependiendo del navegador.
console.log("trabajando..."); // Imprime "trabajando...".
```

3\. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse).

```js
var a = 1;
b = 2;

delete this.a; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict'), de lo contrario falla silenciosamente.
delete this.b;

console.log(a, b); // Lanza un error de tipo "ReferenceError".
// La propiedad 'b' se eliminó y ya no existe.
```

Debido a esas tres diferencias, fallar al declarar variables muy probablemente llevará a resultados inesperados. Por tanto **se recomienda siempre declarar las variables, sin importar si están en una función o un ámbito global**. Y en el modo estricto ([strict mode](/es/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode)) de ECMAScript 5, asignar valor a una variable sin declarar lanzará un error.

### Elevación de variables

Como la declaración de variables (y todas las declaraciones en general) se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es equivalente a declararla al inicio del mismo. Esto también significa que una variable puede parecer usarse antes de ser declarada. Este comportamiento es llamado _hoisting_ (del inglés "elevación"), ya que la declaración de una variable parecer haber sido movida a la cima de la función o código global.

```js
bla = 2;
var bla;
// ...

// Es entendido implicitamente como:

var bla;
bla = 2;
```

Por esa razón, se recomienda siempre declarar variables al inicio de su ámbito (la cima del código global y la cima del código de función) para que sea claro cuáles variables pertenecen al ámbito de función (local) y cuáles son resueltas en la cadena de ámbito.

Es importante señalar que **la elevación afectará la declaración** de variables, pero **no su inicialización**. El valor será asignado precisamente cuando la sentencia de asignación sea alcanzada:

```js
function haz_algo() {
  console.log(bar); // undefined (valor indefinido)
  var bar = 111;
  console.log(bar); // 111
}

// Se entiende implícitamente como:
function haz_algo() {
  var bar;
  console.log(bar); // undefined (valor indefinido)
  bar = 111;
  console.log(bar); // 111
}
```

## Ejemplos

### Declarando e inicializando dos variables

```js
var a = 0,
  b = 0;
```

### Asignando dos variables con un solo valor de cadena

```js
var a = "A";
var b = a;

// Equivalente a:

var a,
  b = (a = "A");
```

Sé consciente del orden:

```js
var x = y,
  y = "A";
console.log(x + y); // Imprimirá "undefinedA"
```

Aquí, '`x`' & '`y`' son declaradas antes de ejecutarse cualquier código, y la asignación ocurre después. Al momento de evaluar "`x = y`", '`y`' existe así que ningún error "`ReferenceError`" es lanzado y su valor es '`undefined`', de modo que '`x`' también tiene asignada el valor '`undefined`'. Después, a 'y' se le asigna el valor 'A'. Consecuentemente, luego de la primera línea, '`x`' es exactamente igual a `'undefined`' & '`y`' es igual a `'A'`, de ahí el resultado.

### Initialización de muchas variables

```js
var x = 0;

function f() {
  var x = (y = 1); // 'x' es declarada localmente, ¡'y' no lo es!
}
f();

console.log(x, y); // Lanza un error de tipo "ReferenceError" en modo estricto ('y' no está definida). De lo contrario se imprimiría "0, 1".
// En modo no-estricto:
// 'x' es la variable global como se esperaría
// 'y' sin embargo, se sale de la función
```

### Globales implícitas y ámbito externo a una función

Las variables que parecen ser globales implícitas pueden ser referencias a variables en un ámbito externo a la función:

```js
var x = 0; // 'x' es declarada globalmente, luego se le asigna el valor 0.

console.log(typeof z); // Imprime "undefined", pues 'z' aún no existe.

function a() {
  // Cuando 'a()' es invocada,
  var y = 2; // 'y' es declarada localmente en la function 'a()', después se le asigna el valor 2.

  console.log(x, y); // Imprime "0, 2".

  function b() {
    // Cuando 'b()' es invocada,
    x = 3; // Asigna el valor 3 a la global 'x' ya existente, no crea una nueva variable global.
    y = 4; // Asigna 4 a la externa existente 'y', no crea una nueva variable global.
    z = 5; // Crea una nueva variable global 'z' y le asigna un valor de 5.
  } // (Lanza un error de tipo "ReferenceError" en modo estricto.)

  b(); // Invocar 'b()' crea 'z' como variable global.
  console.log(x, y, z); // Imprime "3, 4, 5".
}

a(); // Invocar 'a()' también llama a 'b()'.
console.log(x, z); // Imprime "3, 5", porque 'z' ya es una global.
console.log(typeof y); // Imprime 'undefined' porque 'y' es local en la función 'a()'
```
