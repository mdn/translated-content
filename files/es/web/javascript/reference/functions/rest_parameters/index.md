---
title: Parámetros Rest
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

La sintaxis de los **parámetros rest** nos permiten representar un número indefinido de argumentos como un array.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

La fuente interactiva de este ejemplo es almacenado en un repositorio de GitHub. Si a ti te gustaría contribuir al proyecto de ejemplos interactivos, por favor clona este repositorio <https://github.com/mdn/interactive-examples> y envíanos un pull-request.

## Sintaxis

```js
function(a, b, ...theArgs) {
  // ...
}
```

## Descripción

El último parámetro de una función se puede prefijar con `...`, lo que hará que todos los argumentos restantes (suministrados por el usuario) se coloquen dentro de un array de javascript "estándar".

Sólo el último parámetro puede ser un "parámetro rest".

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

### Diferencia entre los parámetros rest y el objeto `arguments`

Hay tres principales diferencias entre los parámetros rest y el objeto [`arguments`](/es/docs/Web/JavaScript/Reference/Functions/arguments):

- los parámetros rest son sólo aquellos a los que no se les ha asignado un nombre, mientras que el objeto `arguments` contiene todos los argumentos que se le han pasado a la función;
- el objeto `arguments` no es un array real, mientras que los parámetros rest son instancias de [`Array`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) , lo que significa que lo los métodos como [`sort`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`map`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`forEach`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) o [`pop`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) pueden aplicarse directamente;
- el objeto `arguments` tiene una funcionalidad adicional específica para sí mismo (como la propiedad `callee`).

### De argumentos a array

Los parámetros rest han sido agregados para reducir el código repetitivo que se usaba en los parámetros.

```js
// Antes de los parámetros rest, "arguments" se podía convertir en un array usando:

function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments);
  // -- o  --
  let normalArray = [].slice.call(arguments);
  // -- o  --
  let normalArray = Array.from(arguments);

  let first = normalArray.shift(); // OK, nos da el primer argumento
  let first = arguments.shift(); // ERROR (arguments no es un array)
}

// Ahora, puedes acceder fácilmente a un array usando un parametro rest.

function f(...args) {
  let normalArray = args;
  let first = normalArray.shift(); // OK, gives the first argument
}
```

### Desestructuración de los parametros rest

Los parámetros rest pueden ser desestructurados, eso significa que sus datos pueden ser desempaquetados dentro de distintas variables. Ver [Destructuring assignment](/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1); // NaN (b y c son indefinidos)
f(1, 2, 3); // 6
f(1, 2, 3, 4); // 6 (el cuarto parámetro no está desestructurado)
```

## Ejemplos

### Usando parámetros rest

En este ejemplo, el primer argumento es mapeado con 'a' y el segundo con 'b', entonces, esos argumentos nombrados, son usados normalmente

De todas formas, el tercer argumento, `manyMoreArgs`, será un array que contendrá tantos argumentos como el usuario incluya (3er, 4to, 5to ...).

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

Debajo... incluso si hay solo un valor, el ultimo argumento seguirá siendo colocado dentro de un array.

```js
// usando la misma definición de función del ejemplo anterior
myFun("one", "two", "three");

// a, one
// b, two
// manyMoreArgs, [three]
```

Debajo, el tercer argumento no esta provisto, pero `manyMoreArgs` continúa siendo un array (aunque uno vacío).

```js
//usando la misma definición de función del ejemplo anterior

myFun("one", "two");

// a, one
// b, two
// manyMoreArgs, []
```

### Argument length

Puesto que `theArgs` es un array, su tamaño (un conteo de sus elementos) es dado por la propiedad `length` :

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

### Ordinary parameter and rest parameters

En el siguiente ejemplo, se usa un parámetro rest para agrupar dentro de un array a todos los argumentos despues del primero. Luego cada uno es multiplicado por el primero y el arreglo es retornado:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

let arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

El siguiente ejemplo muestra que se puede usar los métodos de `Array` en los parámetros rest , pero no en el objeto `arguments`:

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // muestra 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // esto nunca va a ocurrir
}

// lanza un TypeError: arguments.sort is not a function
console.log(sortArguments(5, 3, 7, 1));
```

Para poder usar los métodos de `Array` en el objeto `arguments`, se debe convertir a un `Array` primero.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Spread Operator](/es/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Arguments object](/es/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Functions](/es/docs/Web/JavaScript/Reference/Functions)
- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
- [Destructuring assignment](/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
