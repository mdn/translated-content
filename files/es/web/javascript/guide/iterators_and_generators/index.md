---
title: Iteradores y generadores
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}

Procesar cada uno de los elementos en una colección es una operación muy común. JavaScript proporciona diversas formas de iterar sobre una colección, desde simples bucles {{jsxref("Sentencias/for","for")}} hasta métodos como {{jsxref("Objetos_globales/Array/map","map()")}} y {{jsxref("Objetos_globales/Array/filter","filter()")}}. Los iteradores y los generadores traen el concepto de iteración al centro del lenguaje y proporcionan un mecanismo para personalizar el comportamiento de los bucles {{jsxref("Sentencias/for...of","for...of")}}.

Para más información, véase:

- {{jsxref("Iteration_protocols", "Protocolos de iteración")}}
- {{jsxref("Sentencias/for...of","for...of")}}
- {{jsxref("Sentencias/function*","function*")}} y {{jsxref("Objetos_globales/Generador","Generador")}}
- {{jsxref("Operadores/yield","yield")}} y {{jsxref("Operadores/yield*","yield*")}}

## Iteradores

En JavaScript, un **iterador** es un objeto que permite recorrer una colección y devolver un valor al terminar.

Específicamente, un iterador es un objeto que implementa el [protocolo de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol) a través del método `next()`, el cual devuelve un objeto con dos propiedades:

- `value`
  - : El siguiente valor en la secuencia de iteración.
- `done`
  - : Es `true` si el último valor en la secuencia ya ha sido consumido. Si `value` está presente junto con `done`, es el valor de retorno del iterador.

Un iterador se considera ya terminado/finalizado cuando la invocación de `next()` regresa un objeto donde la propiedad `done` es `verdadero`.

Una vez creado, un objeto iterador puede utilizarse explícitamente llamando repetidamente al método `next()`.

```js
function crearIterador(arreglo) {
  var siguienteIndice = 0;

  return {
    next: function () {
      return siguienteIndice < arreglo.length
        ? { value: arreglo[siguienteIndice++], done: false }
        : { done: true };
    },
  };
}
```

Una vez inicializado, se puede invocar al método `next()` para acceder a las parejas llave-valor del objeto en cuestión:

```js
var it = crearIterador(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

## Generadores

Aunque los iteradores personalizados son una herramienta útil, su creación require una programación meticulosa ya que necesitan mantener su estado interno explícitamente. Los **{{jsxref("Objetos_globales/Generador","generadores","","true")}}** son una alternativa poderosa: permiten definir un algoritmo iterativo al escribir una sola función que puede mantener su propio estado.

Una función generadora (constructor GeneratorFunction) es un tipo especial de función que sirve como una fábrica de iteradores. Cuando se ejecuta, regresa un nuevo objeto Generador. Una función se convierte en una Función Generadora si utiliza la sintáxis {{jsxref("Sentencias/function*","function*")}}.

```js
function* hacedorIds() {
  var indice = 0;
  while (true) {
    yield indice++;
  }
}

var gen = hacedorIds();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Iterables

Un objeto es **iterable** si define cómo se itera. Un ejemplo son los valores que se iteran en un bucle {{jsxref("Sentencias/for...of", "for...of")}}. Algunos tipos integrados de datos, como {{jsxref("Array")}} o {{jsxref("Map")}}, tienen una forma de iteración ya definida, mientras que otras no (como {{jsxref("Object")}}).

Con el fin de ser **iterable**, un objeto debe implementar el método **@@iterator**. Esto quiere decir que dicho objeto (o alguno en su [cadena de prototipos](/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos)) debe tener una propiedad definida usando la llave {{jsxref("Symbol.iterator")}}. Esta función debería regresar un nuevo iterador en cada invocación, pero no es obligatorio.

### Iterables definidos por el usuario

Podemos hacer nuestros propios objetos iterables de este modo:

```js
var miIterable = {};
miIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for (let valor of miIterable) {
  console.log(valor);
}
// 1
// 2
// 3

// ó

[...miIterable]; // [1, 2, 3]
```

### Iterables integrados

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Objetos_globales/TypedArray")}}, {{jsxref("Map")}} y {{jsxref("Set")}} son iterables ya integrados, porque todos sus objetos prototipo tienen un método definido con la llave {{jsxref("Symbol.iterator")}}.

### Sintaxis que esperan objetos iterables

Algunas sentencias y expresiones esperan objetos iterables, por ejemplo los bucles {{jsxref("Sentencias/for...of","for-of")}}, {{jsxref("Operadores/Spread_operator","el operador de propagación")}}, {{jsxref("Operadores/yield*","yield*")}}, y {{jsxref("Operadores/Destructuring_assignment","la asignación por desestructuración","","true")}}.

```js
for (let valor of ["a", "b", "c"]) {
  console.log(valor);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

## Generadores avanzados

Los generadores calculan los valores devueltos bajo demanda, lo que les permite representar eficientemente secuencias que son costosas de calcular, o incluso secuencias infinitas como se explicó anteriormente.

El método {{jsxref("Objetos_globales/Generador/next","next()")}} también acepta un valor que puede ser utilizado para modificar el estado interno del generador. El valor recibido por `next()` es utilizado como si fuera el resultado de la iteración anterior (último valor entregado por `yield`) el cual detuvo al generador.

A continuación se muestra un generador de Fibonacci usando `next(x)` para reiniciar la secuencia:

```js
function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5
console.log(secuencia.next().value); // 8
console.log(secuencia.next().value); // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
```

Es posible forzar a un generador a lanzar una excepción cuando se invoca al método {{jsxref("Objetos_globales/Generador/throw","throw()")}} y se pasa el valor de excepción a lanzar. Esta excepción será lanzada desde el contexto actual suspendido del generador, como si en vez del estado suspendido actualmente de `yield` se tuviera una sentencia `throw valor`.

Si la excepción no es atrapada dentro del generador, se propagará a la invocación de `throw()`, y las siguientes llamadas a `next()` tendrán a la propiedad `done` en `verdadero`.

Los generadores tienen un método {{jsxref("Objetos_globales/Generador/return","return(valor)")}} que regresa el valor enviado y finalizan al generador.

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}
