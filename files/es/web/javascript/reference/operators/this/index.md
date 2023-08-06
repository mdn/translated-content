---
title: this
slug: Web/JavaScript/Reference/Operators/this
---

{{jsSidebar("Operators")}}

## Introducción

La palabra clave **`this`** de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el [modo estricto](/es/docs/Web/JavaScript/Referencia/Funciones/Modo_estricto) y el modo no estricto.

En general, el valor de `this` está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método {{jsxref("Function.bind()", "bind()")}} para [establecer el valor de la función `this` independientemente de como es llamada](#Funciones_enlazadas), y ES2015 introdujo las [funciones flecha](/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) que no proporcionan su propio "binding" de `this` (se mantiene el valor de `this` del contexto léxico que envuelve a la función)

{{EmbedInteractiveExample("pages/js/expressions-this.html")}}

## Sintaxis

```
this
```

### Valor

El objeto contexto de JavaScript en el cual se está ejecutando el código actual.

## Contexto global

En el contexto de ejecución global (fuera de cualquier función), **`this`** se refiere al objeto global, ya sea en modo estricto o no.

```js
console.log(this.document === document); // true

// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

> **Nota:** Puedes obtener el objeto global usando la propieda global `globalThis`, no importa el contexto donde se ejecute esta propiedad, siempre hará referencia al objeto global.

## Contexto de la función

Dentro de una función, el valor de this depende de cómo la función es llamada.

### Llamada simple

```js
function f1() {
  return this;
}

f1() === window; // objeto global
```

En este caso, el valor de **this** no está establecido por la llamada. Dado que el código no está en modo estricto, el valor de this debe ser siempre un objeto por lo que por defecto es el objeto global.

```js
function f2() {
  "use strict"; // consultar modo estricto
  return this;
}

f2() === undefined;
```

En modo estricto, el valor de **this** se mantiene en lo que está establecida al entrar en el contexto de ejecución. Si no está definido, permanece undefined. También se puede ajustar a cualquier valor, tales como **null** o **42** o "**Yo no soy this**".

> **Nota:** En el segundo ejemplo, **`this`** debería ser {{jsxref("undefined")}}, porque `f2` fue llamado sin proporcionar ninguna base (ej. `window.f2()`). Esta característica no fue implementada en algunos navegadores cuando se comenzó a dar soporte al [modo estricto](/es/docs/Web/JavaScript/Referencia/Funciones/Modo_estricto). Como resultado, retorna incorrectamente el objeto window.

Como un método de un objeto

Cuando una función es llamada como un método de un objeto, el **`this`** cambia por el metodo del objeto llamado.

En el siguiente ejemplo, cuando **`o.f()`** es invocado, dentro de la función **`this`** es ligado al objeto **`o`**.

```js
var o = {
  prop: 37,
  f: function () {
    return this.prop;
  },
};

console.log(o.f()); // logs 37
```

Note que el comportamiento no es del todo afectado por cómo o dónde la función fue definida. En el ejemplo anterior, nosotros definimos la función en línea como el elemento `f` durante la definición de `o`. Sin embargo, podriamos haber definido con la misma facilidad la primera función y luego adjuntarlo a `o.f`. Hacerlo da como resultado el mismo comportamiento.

```js
var o = { prop: 37 };

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37
```

Esto demuestra que sólo importa que la función fue invocada del elemento `f` de `o`.

Asimismo, el enlace `this` sólo se ve afectado por la referencia del miembro más inmediata. En el siguiente ejemplo, cuando invocamos a la función, lo llamamos como metodo `g` del objeto `o.b`. Esta vez durante la ejecución, `this` dentro de la función se referirá a `o.b`. El hecho de que el objeto es en sí mismo un elemento de `o` no tiene ninguna consecuencia, la referencia más inmediata es todo lo que importa.

```js
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // logs 42
```

#### ... en la cadena de prototipo

El mismo concepto es válido para los métodos definidos en alguna parte de la cadena de prototipo del objeto. Si el método esta sobre una cadena de prototipo del objeto, `this` se referirá al objeto donde está el método de donde fue llamado. Como si ese método estuviera dentro del objeto.

```js
var o = {
  f: function () {
    return this.a + this.b;
  },
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

En este ejemplo, el objeto asignado a la variable `p` no tiene su propia propiedad `f`, esto lo hereda de su prototipo. Pero no importa que la búsqueda de `f` eventualmente encuentre un elemento con ese nombre en `o`; la búsqueda comenzó como una referencia a `p.f`, asi `this` dentro de la funcion toma el valor del objeto referido como `p`. Es decir, desde que `f` es llamado como método de `p`, su `this` refiere a `p`. Esto es una interesante característica de la herencia de prototipo de JavaScript.

#### ... o como un getter o setter

Nuevamente, el mismo concepto es válido cuando una función es invocada de un getter o un setter. Una función usado como getter o setter tiene su enlace `this` al objeto desde el cual la propiedad esta siendo establecida u obtenida.

```js
function modulus() {
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase() {
    return Math.atan2(this.im, this.re);
  },
};

Object.defineProperty(o, "modulus", {
  get: modulus,
  enumerable: true,
  configurable: true,
});

console.log(o.phase, o.modulus); // logs -0.78 1.4142
```

### Como un constructor

Cuando una función es usada como un constructor (con la palabra clave {{jsxref("Operadores/new", "new")}}), su `this` es enlazado al nuevo objeto en construcción, a menos que la ejecución de los resultados del constructor en el motor JavaScript encuentren una instrucción de retorno donde el valor de retorno sea un objeto.

```js
/*
 * Los constructores trabajan algo asi:
 *
 * function MyConstructor(){
 *   // El cuerpo del código de la función actual va aquí.  Crear las propiedades en |this| como
 *   // se desee mediante la asignación a los mismos.  E.g.,
 *   this.fum = "nom";
 *   // etcetera...
 *
 *   // Si la función tiene una sentencia de retorno este retorna un objeto,
 *   // este objeto será el resultado de la expresión |new|.  Por otro lado, el
 *   // resultado de la expresión es el objeto actualmente enlazado a |this|
 *   // (i.e., el caso más común suele verse).
 * }
 */

function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // logs 37

function C2() {
  this.a = 37;
  return { a: 38 };
}

o = new C2();
console.log(o.a); // logs 38
```

En el último ejemplo (`C2`), debido a que un objeto fue devuelto durante la construcción, el nuevo objeto que fue enlazado a `this` simplemente se descarta.( Esto esencialmente hace de la declaración "`this.a = 37;`" codigo muerto. No esta exactamente muerto,porque es ejecutado pero se puede eliminar sin efectos externos.)

### `call` y `apply`

Cuando una función usa la plabra clave `this` en su cuerpo, su valor puede ser enlazado a un objeto particular durante la ejecución del método {{jsxref("Function.call()", "call()")}} or {{jsxref("Function.apply()", "apply()")}} que todas las funciones hereden de `Function.prototype`.

```js
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = { a: 1, b: 3 };

// El primer parámetro es el objeto a usar como 'this', parámetros posteriores se pasan como argumentos
// en la llamada a la función
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

//El primer parámetro es el objeto a usar como 'this''this', la segunda es una matriz cuyos elementos
//  se utilizan como argumentos en la llamada a la función
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
```

### Funciones enlazadas

ECMAScript 5 introduce {{jsxref("Function.prototype.bind()")}}. Llamando a `f.bind(someObject)` crea una nueva función con el mismo cuerpo y alcance de `f`, pero donde `this` se produce en la función original, en la nueva función esto esta permanentemente ligado al primer argumento de `bind`, independientemente de cómo la función está siendo utilizada.

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var o = { a: 37, f: f, g: g };
console.log(o.f(), o.g()); // 37, azerty
```

### Como un controlador de eventos DOM

Cuando una función es usada como un controlador de eventos, su `this` es cambiado desde el elemento del evento disparado (algunos navegadores no siguen esta convención para los listeners agregados dinámicamente con otros métodos `addEventListener`).

```js
// Cuando se llama como un listener, convierte en azul el elemento
// relacionado
function bluify(e) {
  console.log(this === e.currentTarget); // Siempre true
  console.log(this === e.target); // true cuando currentTarget y target son el mismo objeto
  this.style.backgroundColor = "#A5D9F3";
}

// Consigue una lista de cada elemento en un documento
var elements = document.getElementsByTagName("*");

// Añade bluify como un click listener asi cuando se hace click sobre el elemento,
// este cambia a azul
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```
