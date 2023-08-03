---
title: Herencia y la cadena de prototipos
slug: Web/JavaScript/Inheritance_and_the_prototype_chain
---

{{jsSidebar("Advanced")}}

JavaScript provoca cierta confusión en desarrolladores con experiencia en lenguajes basados en clases (como Java o C++), por ser dinámico y no proporcionar una implementación de clases en sí mismo (la palabra clave `class` se introdujo en ES2015, pero sólo para endulzar la sintaxis, ya que JavaScript sigue estando basado en prototipos).

En lo que a herencia se refiere, JavaScript sólo tiene una estructura: objetos. Cada objeto tiene una propiedad privada (referida como su [[Prototype]]) que mantiene un enlace a otro objeto llamado su **prototipo**. Ese objeto prototipo tiene su propio prototipo, y así sucesivamente hasta que se alcanza un objeto cuyo prototipo es `null`. Por definición, `null` no tiene prototipo, y actúa como el enlace final de esta **cadena de prototipos**.

Casi todos los objetos en JavaScript son instancias de {{jsxref("Object")}} que se sitúa a la cabeza de la cadena de prototipos.

A pesar de que a menudo esto se considera como una de las principales debilidades de JavaScript, el modelo de herencia de prototipos es de hecho más potente que el modelo clásico. Por ejemplo, es bastante simple construir un modelo clásico a partir de un modelo de prototipos.

## Herencia con la cadena de prototipos

### Heredando propiedades

Los objetos en JavaScript son "contenedores" dinámicos de propiedades (referidas como sus **propiedades particulares**). Los objetos en JavaScript poseen un enlace a un objeto prototipo. Cuando intentamos acceder a una propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

> **Nota:** Siguiendo el estándar ECMAScript, la notación `algunObjeto.[[Prototype]]` se usa para designar el prototipo de `algunObjeto.` A partir de ECMAScript 2015, se accede al `[[Prototype]]` utilizando los accesores {{jsxref("Object.getPrototypeOf()")}} y {{jsxref("Object.setPrototypeOf()")}}. Esto es equivalente a la propiedad JavaScript `__proto__` que no es estándar pero es el de-facto implementado por los navegadores.
>
> No debe confundirse con la propiedad de las funciones `func.prototype`, que en cambio especifican el `[[Prototype]]` a asignar a todas las instancias de los objetos creados por la función dada cuando se utiliza como un constructor. La propiedad **`Object.prototype`** representa el prototipo del objeto {{jsxref("Object")}}.

Esto es lo que ocurre cuando intentamos acceder a una propiedad:

```js
// Supongamos que tenemos un objeto o, con propiedades a y b:
// {a: 1, b: 2}
// o.[[Prototype]] tiene propiedades b y c:
// {b: 3, c: 4}
// Finalmente, o.[[Prototype]].[[Prototype]] es null.
// Este es el final de la cadena de prototipos, ya que null,
// por definición, no tiene [[Prototype]].
// Por tanto, la cadena completa de prototipos se vería como:
// {a:1, b:2} ---> {b:3, c:4} ---> null

console.log(o.a); // 1
// ¿Hay una propiedad 'a' en o? Sí, y su valor es 1.

console.log(o.b); // 2
// ¿Hay una propiedad 'b' en o? Sí, y su valor es 2.
// El prototipo también tiene una propiedad 'b', pero no se ha visitado.
// Esto se llama "solapamiento de propiedades"

console.log(o.c); // 4
// ¿Hay una propiedad 'c' en o? No, comprobamos su prototipo.
// ¿Hay una propiedad 'c' en o.[[Prototype]]? Sí, y su valor es 4.

console.log(o.d); // undefined
// ¿Hay una propiedad 'd' en o? No, comprobamos su prototipo.
//  ¿Hay una propiedad 'd' en o.[[Prototype]]? No, comprobamos su prototipo.
// o.[[Prototype]].[[Prototype]] es null, paramos de buscar.
// No se encontró la propiedad, se devuelve undefined
```

Dar valor a una propiedad de un objeto crea una propiedad. La única excepción a las reglas de funcionamiento de obtener y dar valores ocurre cuando hay una propiedad heredada con un [getter o un setter](/es/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters).

### Heredando "métodos"

JavaScript no tiene "métodos" en la forma que los lenguajes basados en clases los define. En JavaScript, cualquier función puede añadirse a un objeto como una propiedad. Una función heredada se comporta como cualquier otra propiedad, viéndose afectada por el solapamiento de propiedades como se muestra anteriormente (siendo, en este caso, una especie de _redefinición de métodos_).

Cuando una función heredada se ejecuta, el valor de [`this`](/es/docs/Web/JavaScript/Reference/Operators/this) apunta al objeto que hereda, no al prototipo en el que la función es una propiedad.

```js
var o = {
  a: 2,
  m: function (b) {
    return this.a + 1;
  },
};

console.log(o.m()); // 3
// Cuando en este caso se llama a o.m, 'this' se refiere a o

var p = Object.create(o);
// p es un objeto que hereda de o

p.a = 12; // crea una propiedad 'a' en p
console.log(p.m()); // 13
// cuando se llama a p.m, 'this' se refiere a p.
// De esta manera, cuando p hereda la función m de o,
// 'this.a' significa p.a, la propiedad 'a' de p
```

## Usando prototipos en JavaScript

Veamos lo que sucede detrás de escena detalladamente.

En JavaScript, como se mencionó anteriormente, las funciones pueden tener propiedades. Todas las funciones tienen una propiedad especial llamada `prototype`. Por favor ten en cuenta que el siguiente código es autónomo (es seguro asumir que no hay otro JavaScript en la página web mas que el siguiente). Para la mejor experiencia de aprendizaje, es altamente recomendable que abras una consola (la cual, en Chrome y Firefox, se puede abrir presionando Ctrl+Shift+I), navegando hasta la pestaña "console", copiando y pegando el siguiente código JavaScript, y ejecutándolo presionando la tecla Enter/Return.

```js
function hacerAlgo() {}
console.log(hacerAlgo.prototype);
// No importa cómo declares la función, una
// función en JavaScript siempre tendrá una
// propiedad prototype predeterminada.
var hacerAlgo = function () {};
console.log(hacerAlgo.prototype);
```

Como acabamos de ver, `hacerAlgo()` tiene una propiedad `prototype` predeterminada, como lo demuestra la consola. Después de ejecutar este código, la consola debería haber mostrado un parecido a esto.

```js
{
    constructor: ƒ hacerAlgo(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

Podemos añadir propiedades al prototipo de `hacerAlgo()`, como se muestra a continuación.

```js
function hacerAlgo() {}
hacerAlgo.prototype.foo = "bar";
console.log(hacerAlgo.prototype);
```

El resultado:

```
{
    foo: "bar",
    constructor: ƒ hacerAlgo(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

Ahora podemos usar el operador `new` para crear una instancia de `hacerAlgo()` basado en este prototipo. Para usar el operador `new`, llama la función normalmente pero añadiendo el prefijo `new`. Llamar a la función con el operador `new` devuelve un objeto que es una instancia de la función. Entonces las propiedades pueden ser añadidas a este objeto.

Intenta el siguiente código:

```js
function hacerAlgo() {}
hacerAlgo.prototype.foo = "bar"; // añadir una propiedad al prototipo
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor"; // añadir una propiedad al objeto
console.log(hacerUnaInstancia);
```

El resultado es similar a lo siguiente:

```js
{
    prop: "un valor",
    __proto__: {
        foo: "bar",
        constructor: ƒ hacerAlgo(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

Como acabamos de ver, el `__proto__` de `hacerUnaInstancia` es `hacerAlgo.prototype`. Pero, ¿qué hace esto? Cuando accedes a la propiedad de `hacerUnaInstancia`, el navegador primero revisa si `hacerUnaInstancia` tiene esa propiedad.

Si `hacerUnaInstancia` no tiene la propiedad, entonces el navegador busca por la propiedad en el `__proto__` de `hacerUnaInstancia` (también conocido como `hacerAlgo.prototype`). Si el `__proto__` de `hacerUnaInstancia` tiene la propiedad buscada, entonces la propiedad en el `__proto__` de `hacerUnaInstancia` es usada.

De otra manera, si el `__proto__` de `hacerUnaInstancia` no tiene la propiedad, entonces el `__proto__` de `__proto__` de `hacerUnaInstancia` es revisado para la propiedad. Por defecto, el `__proto__` de la propieda `prototype` de cualquier función es `window.Object.prototype`. Entonces, el `__proto__` de el `__proto__` de `hacerUnaInstancia` (conocido como el `__proto__` de `hacerAlgo.prototype` (conocido como `Object.prototype`)) es entonces revisado por la propiedad que se está buscando.

Si la propiedad no es encontrada en el `__proto__` de el `__proto__` de `hacerUnaInstancia`, entonces el `__proto__` de el `__proto__` de el `__proto__` de `hacerUnaInstancia` es revisado. Sin embargo, hay un problema: el `__proto__` de el `__proto__` de el `__proto__` de el `__proto__` de `hacerUnaInstancia` no existe. Entonces y sólo entonces, despues de que toda la cadena de prototipos de `__proto__`'s es revisada, y no haya mas `__proto__`s el navegador afirma que la propiedad no existe y concluye que el valor de la propiedad es `undefined`.

Vamos a intentar introduciendo más código en la consola:

```js
function hacerAlgo() {}
hacerAlgo.prototype.foo = "bar";
var hacerUnaInstancia = new hacerAlgo();
hacerUnaInstancia.prop = "un valor";
console.log("hacerUnaInstancia.prop:      " + hacerUnaInstancia.prop);
console.log("hacerUnaInstancia.foo:       " + hacerUnaInstancia.foo);
console.log("hacerAlgo.prop:           " + hacerAlgo.prop);
console.log("hacerAlgo.foo:            " + hacerAlgo.foo);
console.log("hacerAlgo.prototype.prop: " + hacerAlgo.prototype.prop);
console.log("hacerAlgo.prototype.foo:  " + hacerAlgo.prototype.foo);
```

El resultado es el siguiente:

```js
hacerUnaInstancia.prop:      un valor
hacerUnaInstancia.foo:       bar
hacerAlgo.prop:              undefined
hacerAlgo.foo:               undefined
hacerAlgo.prototype.prop:    undefined
hacerAlgo.prototype.foo:     bar
```

## Maneras diferentes de crear objetos y la cadena de prototipos resultante

### Objetos creados mediante estructuras sintácticas

```js
var o = { a: 1 };

// El objeto recién creado o tiene Object.prototype como su [[Prototype]]
// o no tiene ninguna propiedad llamada 'hasOwnProperty'
// hasOwnProperty es una propiedad propia de Object.prototype.
// Entonces o hereda hasOwnProperty de Object.prototype
// Object.prototype es null como su prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays hereda de Array.prototype
// (que tiene métodos como indexOf, forEach, etc.)
// La cadena de prototipados sería:
// a ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Las funciones heredan de Function.prototype
// (que tiene métodos como call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

### Con un constructor

Un "constructor" en JavaScript es "solo" una función que pasa a ser llamada con el [operador new](/es/docs/Web/JavaScript/Reference/Operators/new).

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function (v) {
    this.vertices.push(v);
  },
};

var g = new Graph();
// g es un objeto con las propiedades 'vértices' y 'edges'.
// g.[[Prototype]] es el valor de Graph.prototype cuando new Graph() es ejecutado.
```

### Con `Object.create`

ECMAScript 5 Introdujo un nuevo método: {{jsxref("Object.create()")}}. Llamando este método creas un nuevo objeto. El prototype de este objeto es el primer argumento de la función:

```js
var a = { a: 1 };
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (heredado)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, por que d no hereda de Object.prototype
```

### Con la palabra reservada `class`

ECMAScript 2015 introduce un nuevo set de palabras reservadas que implementan [clases](/es/docs/Web/JavaScript/Reference/Classes). Aunque estos constructores lucen más familiares para los desarrolladores de lenguajes basados en clases, aun así no son clases. JavaScript sigue estando basado en prototipos. Los nuevos keywords incluyen {{jsxref("Statements/class", "class")}}, {{jsxref("Classes/constructor", "constructor")}}, {{jsxref("Classes/static", "static")}}, {{jsxref("Classes/extends", "extends")}}, and {{jsxref("Operators/super", "super")}}.

```js
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

### Rendimiento

El tiempo de búsqueda para las propiedades que están en lo alto de la cadena de prototipo puede tener un impacto negativo en el rendimiento, y esto puede ser significativo en el código donde el rendimiento es crítico. Además, tratar de acceder a las propiedades inexistentes siempre atravesara la cadena de prototipos completamente.

También, cuando iteramos sobre las propiedades de un objeto, cada propiedad enumerable que se encuentra en la cadena de prototipo será enumerada.

Para comprobar si un objeto tiene una propiedad definida en sí mismo y no en alguna parte de su cadena de prototipo, Es necesario usar para esto el método [`hasOwnProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) que todos los objetos heredan de `Object.prototype`.

[`hasOwnProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) es la única cosa en JavaScript que se ocupa de las propiedades y no atraviesa la cadena de prototipos.

Nota: Esto **no** es suficiente para chequear si una propiedad esta [`undefined`](/es/docs/Web/JavaScript/Reference/Global_Objects/undefined). la propiedad podría existir, pero el valor justamente sucede que esta seteado como `undefined`.

### Malas practicas: Extensión de prototipos nativos

Una mala característica que a menudo se usa, es extender `Object.prototype` o uno de los otros pre-incorporados prototypes.

Esta técnica se llama _monkey patching_ y rompe la _encapsulación_. Si bien, es utilizado por librerías como _Prototype.js_, no hay una buena razón para saturar los tipos pre-incorporados con funcionalidades adicionales _no estándar_.

La **única** buena razón para extender los pre-incorporados prototipos es modificar las funcionalidades nuevas de los motores de JavaScript; por ejemplo:

`Array.forEach`, etc.

## Ejemplo

`B` heredará de `A`:

```js
function A(a) {
  this.varA = a;
}

// Cual es el propósito de incluir varA en el prototipo si A.prototype.varA siempre va a ser la sombra de
// this.varA, dada la definición de la función A arriba?
A.prototype = {
  varA: null, // No deberíamos atacar varA desde el prototipo como haciendo nada?
  // Tal vez intentando una optimización al asignar espacios ocultos en las clases?
  // https://developers.google.com/speed/articles/optimizing-javascript#Initializing instanciar variables
  // podría ser válido si varA no fuera inicializado únicamente por cada instancia.
  doSomething: function () {
    // ...
  },
};

function B(a, b) {
  A.call(this, a);
  this.varB = b;
}
B.prototype = Object.create(A.prototype, {
  varB: {
    value: null,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  doSomething: {
    value: function () {
      // override
      A.prototype.doSomething.apply(this, arguments); // call super
      // ...
    },
    enumerable: true,
    configurable: true,
    writable: true,
  },
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();
```

Las partes importantes son:

- Los tipos son definidos en `.prototype`
- Usar `Object.create()` para heredar

## `prototype` y `Object.getPrototypeOf`

JavaScript es un poco confuso para desarrolladores que vienen de lenguajes como Java o C++, ya que todo es dinámico, en todo momento de la ejecución, y no tiene clases en lo absoluto. Todo es solamente instancias (objetos). Incluso las "clases" que creamos, son solo funciones (objetos).

Probablemente notaste que nuestra `función A` tiene una propiedad especial llamada `prototype`. Esta propiedad especial funciona con el operador de JavaScript `new`. La referencia al prototipo objeto es copiada al interno `[[Prototype]]` propiedad de la instancia _new_. Por ejemplo, cuando creas una variable `var a1 = new A()`, JavaScript (después de haber creado el objeto en memoria y antes de correr function `A()` con `this` definido a él) setea `a1.[[Prototype]] = A.prototype`. Cuando a continuación accedes a las propiedades de la instancia, JavaScript primero chequea si existen en el objeto directamente, y si no, mira en el `[[Prototype]]`. Esto significa que todo lo que definas en el `prototipo` es efectivamente compartido a todas las instancias, e incluso después puedes cambiar partes del `prototipo` y que todos los cambios se hagan en todas las instancias.

Si, en el ejemplo de arriba, pones `var a1 = new A(); var a2 = new A();` entonces `a1.doSomething` se referiría a `Object.getPrototypeOf(a1).doSomething`, que seria lo mismo que `A.prototype.doSomething` que definiste, i.e. `Object.getPrototypeOf(a1).doSomething == Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething`.

resumiendo, `prototype` es para tipos, mientras que `Object.getPrototypeOf()` es lo mismo para instancias.

`[[Prototype]]` es visto como _recursivo_, i.e. `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething` etc., hasta que se encuentra o `Object.getPrototypeOf` retornará null.

Entonces, cuando llamas

```js
var o = new Foo();
```

JavaScript en realidad hace

```js
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

(o algo similar) y cuando después haces

```js
o.someProp;
```

chequea si `o` tiene una propiedad `someProp`. Si no, busca en `Object.getPrototypeOf(o).someProp` y si ahí no existe, busca en `Object.getPrototypeOf(Object.getPrototypeOf(o)).someProp` y así sucesivamente.

## En conclusión

Es **esencial** entender el modelo de prototipado por instancias antes de escribir código complejo que hace uso de esto. También, sé consciente del largo de la cadena de prototipado en tu código y romperlo si es necesario para evitar posibles problemas de rendimiento. Adicionalmente, el prototipo nativo **nunca** debería ser extendido a menos que esto sea por motivo de compatibilidad con nuevas versiones de JavaScript.
