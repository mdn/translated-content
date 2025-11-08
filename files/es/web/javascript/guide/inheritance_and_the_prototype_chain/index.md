---
title: Herencia y la cadena de prototipos
slug: Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
original_slug: Web/JavaScript/Inheritance_and_the_prototype_chain
l10n:
  sourceCommit: 39b6b6c400f4ea334fb347240aeb4cfea8cf38ce
---

{{jsSidebar("Advanced")}}

En programación, _herencia_ se refiere a transmitir características de un padre a un hijo para que un nuevo fragmento de código pueda reutilizarse y desarrollarse a partir de las características de uno existente. JavaScript implementa la herencia mediante el uso de [objetos](/es/docs/Web/JavaScript/Guide/Data_structures#objetos). Cada objeto tiene un enlace interno a otro objeto llamado _prototype_ (_prototipo_). Ese objeto prototipo tiene un prototipo propio, y así sucesivamente hasta llegar a un objeto con `null` como prototipo. Por definición, `null` no tiene prototipo y actúa como el eslabón final en esta **cadena de prototipos**. Es posible mutar cualquier miembro de la cadena de prototipos o incluso intercambiar el prototipo en tiempo de ejecución, por lo que conceptos como [static dispatching (despacho estático)](https://en.wikipedia.org/wiki/Static_dispatch) no existen en JavaScript.

JavaScript es un poco confuso para los desarrolladores con experiencia en lenguajes basados en clases (como Java o C++), ya que es [dinámico](/es/docs/Web/JavaScript/Guide/Data_structures#tipado_dinámico) y no tiene tipos estáticos. Si bien esta confusión a menudo se considera una de las debilidades de JavaScript, el modelo de herencia prototípico en sí es, de hecho, más poderoso que el modelo clásico. Por ejemplo, es bastante trivial construir un modelo clásico sobre un modelo prototípico, que es como se implementan las [clases](/es/docs/Web/JavaScript/Reference/Classes).

Aunque las clases ahora se adoptan ampliamente y se han convertido en un nuevo paradigma en JavaScript, las clases no aportan un nuevo patrón de herencia. Si bien las clases abstraen la mayor parte del mecanismo prototípico, sigue siendo útil comprender cómo funcionan los prototipos internamente.

## Herencia con la cadena de prototipos

### Heredando propiedades

Los objetos en JavaScript son "contenedores" dinámicos de propiedades (referidas como sus **propiedades particulares**). Los objetos en JavaScript poseen un enlace a un objeto prototipo. Al intentar acceder a una propiedad de un objeto, la propiedad no sólo se buscará en el objeto sino en el prototipo del objeto, el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad con un nombre coincidente o el final de la cadena prototipo.

> [!NOTE]
> Siguiendo el estándar ECMAScript, la notación `algunObjeto.[[Prototype]]` se utiliza para designar el prototipo de `algunObjeto.` Se puede acceder y modificar la ranura interna `[[Prototype]]` con las funciones {{jsxref("Object.getPrototypeOf()")}} y {{jsxref("Object.setPrototypeOf()")}} respectivamente. Esto es equivalente al descriptor de acceso de JavaScript [`__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), que no es estándar pero está implementado de facto por muchos motores de JavaScript. Para evitar confusiones y al mismo tiempo ser conciso, en nuestra notación evitaremos usar `obj.__proto__` y usaremos `obj.[[Prototype]]` en su lugar. Esto corresponde a `Object.getPrototypeOf(obj)`.
>
> No debe confundirse con la propiedad de funciones `func.prototype`, que en cambio especifican el `[[Prototype]]` que se asigna a todas las _instancias_ de los objetos creados por la función dada cuando se usa como constructor. Discutiremos la propiedad `prototype` de las funciones constructoras en [una sección posterior](#constructores).

Hay varias formas de especificar el `[[Prototype]]` de un objeto, que se enumeran en [una sección posterior](#diferentes_formas_de_crear_y_mutar_cadenas_de_prototipos). Por ahora, usaremos la sintaxis [`__proto__`](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter) como ilustración. Vale la pena señalar que la sintaxis `{ __proto__: ... }` es diferente del descriptor de acceso `obj.__proto__`: el primero es estándar y no está obsoleto.

En un objeto literal como `{ a: 1, b: 2, __proto__: c }`, el valor `c` (que tiene que ser `null` u otro objeto) se convertirá en el `[[Prototype]]` de el objeto representado por el literal, mientras que las otras claves como `a` y `b` se convertirán en las _propias propiedades_ del objeto. Esta sintaxis se lee de forma muy natural, ya que `[[Prototype]]` es sólo una "propiedad interna" del objeto.

Esto es lo que ocurre cuando intentamos acceder a una propiedad:

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ establece el [[Prototype]]. Está especificado aquí
  // como otro objeto literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] tiene propiedades b y c.
// o.[[Prototype]].[[Prototype]] es Object.prototype (explicaremos
// qué significa eso más adelante).
// Finalmente, o.[[Prototype]].[[Prototype]].[[Prototype]] es nulo.
// Este es el final de la cadena del prototipo, como nulo,
// por definición, no tiene [[Prototipo]].
// Por lo tanto, la cadena prototipo completa queda así:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// ¿Hay una propiedad 'a' en o? Sí, y su valor es 1.

console.log(o.b); // 2
// ¿Hay una propiedad 'b' en o? Sí, y su valor es 2.
// El prototipo también tiene una propiedad 'b', pero no se ha visitado.
// Esto se llama "solapamiento/sombreado de propiedades"

console.log(o.c); // 4
// ¿Hay una propiedad 'c' en o? No, comprobamos su prototipo.
// ¿Hay una propiedad 'c' en o.[[Prototype]]? Sí, y su valor es 4.

console.log(o.d); // undefined (indefinido)
// ¿Hay una propiedad 'd' en o? No, comprobamos su prototipo.
//  ¿Hay una propiedad 'd' en o.[[Prototype]]? No, comprobamos su prototipo.
// o.[[Prototype]].[[Prototype]] es Objeto.Prototype y
// no existe la propiedad 'd' por defecto, verifique su prototipo.
// o.[[Prototype]].[[Prototype]].[[Prototype]] es null (nulo), paramos de buscar.
// No se encontró la propiedad, se devuelve undefined (indefinido).
```

Dar valor a una propiedad de un objeto crea una propiedad. La única excepción a las reglas de funcionamiento de obtener y dar valores ocurre cuando hay una propiedad heredada con un [getter o un setter](/es/docs/Web/JavaScript/Guide/Working_with_objects#definición_de_las_propiedades_de_un_tipo_de_objeto).

De manera similar, puede crear cadenas de prototipos más largas y se buscará una propiedad en todas ellas.

```js
const o = {
  a: 1,
  b: 2,
  // __proto__ establece el [[Prototype]]. Está especificado aquí
  // como otro objeto literal.
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5
```

### Heredando "métodos"

JavaScript no tiene "[métodos](/es/docs/Glossary/Method)" en la forma que los lenguajes basados en clases los define. En JavaScript, cualquier función puede añadirse a un objeto como una propiedad. Una función heredada se comporta como cualquier otra propiedad, incluído el solapamiento/sombreado de propiedades como se muestra anteriormente (siendo, en este caso, una especie de _redefinición de métodos_).

Cuando una función heredada se ejecuta, el valor de [`this`](/es/docs/Web/JavaScript/Reference/Operators/this) apunta al objeto heredado, no al prototipo en el que la función es una propiedad.

```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// Al llamar a parent.method en este caso, 'this' se refiere al padre (parent)

// hijo (child) es un objeto que hereda del padre (parent)
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// Cuando se llama a child.method, 'this' se refiere a child.
// Así child hereda del método padre (parent),
// La propiedad 'value' es buscada en child. Sin embargo, como child
// no posee una propiedad llamada 'value', la propiedad es
// encontrada en el [[Prototype]], que es parent.value.

child.value = 4; // asigna el valor 4 a la propiedad 'value' en child.
// Esto oculta la propiedad 'value' en el padre (parent).
// El objeto child ahora tiene el siguiente aspecto:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Dado que child ahora tiene la propiedad 'value', 'this.value' significa
// en su lugar child.value
```

## Constructores

El poder de los prototipos es que podemos reutilizar un conjunto de propiedades si deberían estar presentes en cada instancia, especialmente para los métodos. Supongamos que vamos a crear una serie de cajas (boxes), donde cada caja es un objeto que contiene un valor al que se puede acceder a través de una función `getValue`. Una implementación ingenua sería:

```js-nolint
const boxes = [
  { value: 1, getValue() { return this.value; } },
  { value: 2, getValue() { return this.value; } },
  { value: 3, getValue() { return this.value; } },
];
```

Esto es mediocre, porque cada instancia tiene su propia propiedad de función que hace lo mismo, lo cual es redundante e innecesario. En su lugar, podemos mover `getValue` al `[[Prototype]]` de todos las cajas (boxes):

```js
const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxes = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];
```

De esta manera, el método `getValue` de todas las cajas (boxes) se referirá a la misma función, lo que reducirá el uso de memoria. Sin embargo, vincular manualmente el `__proto__` para cada creación de objeto sigue siendo muy inconveniente. Aquí es cuando usaríamos una función _constructor_ _constructor_, que establece automáticamente el `[[Prototipo]]` para cada objeto fabricado. Los constructores son funciones llamadas con [`new`](/es/docs/Web/JavaScript/Reference/Operators/new).

```js
// Una función constructora
function Box(value) {
  this.value = value;
}

// Propiedades de todas las cajas (boxes) creadas a partir del constructor Box()
// tendrá
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];
```

Decimos que `new Box(1)` es una _instancia_ creada a partir de la función constructora `Box`. `Box.prototype` no es muy diferente del objeto `boxPrototype` que creamos anteriormente; es simplemente un objeto simple. Cada instancia creada a partir de una función constructora tendrá automáticamente la propiedad [`prototype`](/es/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) del constructor como su `[[Prototype]]` es decir, `Object.getPrototypeOf(new Box()) === Box.prototype`. `Constructor.prototype` por defecto tiene una propiedad: [`constructor`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), que hace referencia a la misma función constructora, es decir,, `Box.prototype.constructor === Box`. Esto permite acceder al constructor original desde cualquier instancia.

> [!NOTE]
> Si la función constructora devuelve un valor no primitivo, ese valor se convertirá en el resultado de la expresión `new`. En este caso, es posible que el `[[Prototype]]` no esté correctamente vinculado, pero esto no debería suceder mucho en la práctica.

La función constructora anterior se puede reescribir en [clases](/es/docs/Web/JavaScript/Reference/Classes) de la siguiente manera:

```js
class Box {
  constructor(value) {
    this.value = value;
  }

  // Los métodos se crean en Box.prototype
  getValue() {
    return this.value;
  }
}
```

Las clases son azucar tintáctico sobre funciones constructoras, lo que significa que aún puedes manipular `Box.prototype` para cambiar el comportamiento de todas las instancias. Sin embargo, debido a que las clases están diseñadas para ser una abstracción del mecanismo del prototipo subyacente, usaremos la sintaxis de la función constructora más liviana en este tutorial para demostrar completamente cómo funcionan los prototipos.

Debido a que `Box.prototype` hace referencia al mismo objeto que el `[[Prototype]]` de todas las instancias, podemos cambiar el comportamiento de todas las instancias mutando `Box.prototype`.

```js
function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// Mutar Box.prototype después de que ya se haya creado una instancia
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2
```

Un corolario es que _reasignar_ `Constructor.prototype` (`Constructor.prototype = ...`) es una mala idea por dos razones:

- El `[[Prototype]]` de las instancias creadas antes de la reasignación ahora hace referencia a un objeto diferente del `[[Prototype]]` de las instancias creadas después de la reasignación; mutar el `[[Prototype]]` ya no muta el otro.
- A menos que restablezcas manualmente la propiedad `constructor`, la función constructora ya no se puede rastrear desde `instance.constructor`, lo que puede romper las expectativas del usuario. Algunas operaciones integradas también leerán la propiedad "constructor" y, si no está configurada, es posible que no funcionen como se esperaba.

`Constructor.prototype` solo es útil al construir instancias. No tiene nada que ver con `Constructor.[[Prototype]]`, que es el prototipo _propio_ de la función constructora, que es `Function.prototype`, es decir, `Object.getPrototypeOf(Constructor) === Function.prototype`.

```js
// Literales de objetos (sin la clave `__proto__`) automáticamente
// tenen `Object.prototype` como su `[[Prototype]]`
const object = { a: 1 };
Object.getPrototypeOf(object) === Object.prototype; // verdadero

// Los literales de matriz tienen automáticamente `Array.prototype` como `[[Prototype]]`
const array = [1, 2, 3];
Object.getPrototypeOf(array) === Array.prototype; // verdadero

// Los literales RegExp automáticamente tienen `RegExp.prototype` como `[[Prototype]]`
const regexp = /abc/;
Object.getPrototypeOf(regexp) === RegExp.prototype; // verdadero
```

Podemos "desazúcarlos" hasta convertirlos en su forma constructora.

```js
const array = new Array(1, 2, 3);
const regexp = new RegExp("abc");
```

Por ejemplo, los "métodos de array" como [`map()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) son simplemente métodos definidos en `Array.prototype`, por lo que están disponibles automáticamente en todas las instancias de la matriz.

> [!WARNING]
> Hay un error que solía ser frecuente: extender `Object.prototype` o uno de los otros prototipos integrados. Un ejemplo de esta característica errónea es definir `Array.prototype.myMethod = function () {...}` y luego usar `myMethod` en todas las instancias de matriz.
>
> Esta característica errónea se llama _parche de mono_/_monkey patching_. Hacer parche de mono/monkey patching arriesga la compatibilidad futura, porque si el lenguaje agrega este método en el futuro pero con una firma diferente, su código se romperá. Ha provocado incidentes como el [SmooshGate](https://developer.chrome.com/blog/smooshgate), y puede ser una gran molestia para que el lenguaje avance ya que JavaScript intenta "no romper la web".
>
> La **única** buena razón para extender un prototipo integrado es respaldar las características de los motores JavaScript más nuevos, como `Array.prototype.forEach`.

Puede ser interesante observar que, por razones históricas, la propiedad "prototipo" de algunos constructores integrados son instancias en sí mismas. Por ejemplo, `Number.prototype` es un número 0, `Array.prototype` es una matriz vacía y `RegExp.prototype` es `/(?:)/`.

```js
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself
```

Sin embargo, este no es el caso de los constructores definidos por el usuario ni de los constructores modernos como `Map`.

```js
Map.prototype.get(1);
// Uncaught TypeError: get method called on incompatible Map.prototype
```

### Construyendo cadenas de herencia más largas

La propiedad `Constructor.prototype` se convertirá en el `[[Prototype]]` de las instancias del constructor, tal cual, incluido el `[[Prototype]]` propio de `Constructor.prototype`. De forma predeterminada, `Constructor.prototype` es un _objeto simple_/_plain object_, es decir, `Object.getPrototypeOf(Constructor.prototype) === Object.prototype`. La única excepción es el propio `Object.prototype`, cuyo `[[Prototype]]` es `null`, es decir, `Object.getPrototypeOf(Object.prototype) === null`. Por lo tanto, un constructor típico construirá la siguiente cadena prototipo:

```js
function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null
```

Para construir cadenas de prototipos más largas, podemos configurar el `[[Prototype]]` de `Constructor.prototype` a través de la función [`Object.setPrototypeOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

En términos de clase, esto es [`extends`](/es/docs/Web/JavaScript/Reference/Classes/extends) equivalente a usar thentax.

```js
class Base {}
class Derived extends Base {}

const obj = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
```

También puede ver código heredado usando {{jsxref("Object.create()")}} para construir la cadena de herencia. Sin embargo, debido a que esto reasigna la propiedad `prototype` y elimina la propiedad [`constructor`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), puede ser más propenso a errores, mientras que las mejoras de rendimiento es posible no sean evidentes si los constructores aún no han creado ninguna instancia.

```js example-bad
function Base() {}
function Derived() {}
// Reasigna `Derived.prototype` a un nuevo objeto
// con `Base.prototype` como `[[Prototype]]`
// NO HAGAS ESTO - Usa Object.setPrototypeOf para mutarlo en su lugar
Derived.prototype = Object.create(Base.prototype);
```

## Inspeccionar prototipos: una inmersión más profunda

Veamos con un poco más de detalle lo que sucede detrás de escena.

En JavaScript, como se mencionó anteriormente, las funciones pueden tener propiedades. Todas las funciones tienen una propiedad especial llamada `prototype`. Tenga en cuenta que el código siguiente es independiente (es seguro asumir que no hay ningún otro JavaScript en la página web que no sea el código siguiente). Para obtener la mejor experiencia de aprendizaje, se recomienda encarecidamente que abra una consola, navegue hasta la pestaña "consola", copie y pegue el siguiente código JavaScript y lo ejecute presionando la tecla Intro/Retorno. (La consola está incluida en las herramientas para desarrolladores de la mayoría de los navegadores web. Hay más información disponible para [Herramientas para desarrolladores de Firefox](https://firefox-source-docs.mozilla.org/devtools-user/index.html), [Chrome DevTools] (https://developer.chrome.com/docs/devtools/) y [Edge DevTools](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/).)

```js
function doSomething() {}
console.log(doSomething.prototype);
// No importa cómo declares la función; a
// la función en JavaScript siempre tendrá un valor predeterminado
// propiedad prototype — con una excepción: una función
// flecha no tiene una propiedad de prototipo predeterminada:
const doSomethingFromArrowFunction = () => {};
console.log(doSomethingFromArrowFunction.prototype);
```

Como se vio arriba, `doSomething()` tiene una propiedad `prototype` predeterminada, como lo demuestra la consola. Después de ejecutar este código, la consola debería haber mostrado un objeto similar a este.

```plain
{
  constructor: ƒ doSomething(),
  [[Prototype]]: {
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

> [!NOTE]
> La consola Chrome usa `[[Prototype]]` para indicar el prototipo del objeto, siguiendo los términos de la especificación; Firefox usa `<Prototype>`. Por coherencia usaremos `[[Prototype]]`.

Podemos agregar propiedades al prototipo de `doSomething()`, como se muestra a continuación.

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
console.log(doSomething.prototype);
```

Esto resulta en:

```plain
{
  foo: "bar",
  constructor: ƒ doSomething(),
  [[Prototype]]: {
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

Ahora podemos usar el operador `new` para crear una instancia de `doSomething()` basada en este prototipo. Para usar el nuevo operador, llame a la función normalmente, excepto que le preceda `new`. Llamar a una función con el operador `new` devuelve un objeto que es una instancia de la función. Luego se pueden agregar propiedades a este objeto.

Pruebe el siguiente código:

```js
function doSomething() {}
doSomething.prototype.foo = "bar"; // agrega una propiedad al prototipo
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value"; // agrega una propiedad al objeto
console.log(doSomeInstancing);
```

Esto da como resultado un resultado similar al siguiente:

```plain
{
  prop: "some value",
  [[Prototype]]: {
    foo: "bar",
    constructor: ƒ doSomething(),
    [[Prototype]]: {
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

Como se vio arriba, el `[[Prototype]]` de `doSomeInstancing` es `doSomething.prototype`. Pero, ¿qué hace esto? Cuando accede a una propiedad de `doSomeInstancing`, el tiempo de ejecución primero busca si `doSomeInstancing` tiene esa propiedad.

Si `doSomeInstancing` no tiene la propiedad, entonces el runtime busca la propiedad en `doSomeInstancing.[[Prototype]]` (también conocido como `doSomething.prototype`). Si `doSomeInstancing.[[Prototype]]` tiene la propiedad que se busca, entonces se usa esa propiedad en `doSomeInstancing.[[Prototype]]`.

De lo contrario, si `doSomeInstancing.[[Prototype]]` no tiene la propiedad, entonces `doSomeInstancing.[[Prototype]].[[Prototype]]` se verifica para la propiedad. De forma predeterminada, el `[[Prototype]]` de la propiedad `prototype` de cualquier función es `Object.prototype`. Entonces, `doSomeInstancing.[[Prototype]].[[Prototype]]` (también conocido como `doSomething.prototype.[[Prototype]]` (también conocido como `Object.prototype`)) es entonces recorrida buscando la propiedad que se está buscando.

Si la propiedad no se encuentra en `doSomeInstancing.[[Prototype]].[[Prototype]]`, entonces se revisa `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]`. Sin embargo, hay un problema: `doSomeInstancing.[[Prototype]].[[Prototype]].[[Prototype]]` no existe, porque `Object.prototype.[[Prototype]]` es `null`. Entonces, y sólo entonces, después de revisar toda la cadena de prototipos de "[[Prototype]]", el runtime afirma que la propiedad no existe y concluye que el valor de la propiedad es "indefinido".

Intentemos ingresar más código en la consola:

```js
function doSomething() {}
doSomething.prototype.foo = "bar";
const doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop);
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);
console.log("doSomething.prop:          ", doSomething.prop);
console.log("doSomething.foo:           ", doSomething.foo);
console.log("doSomething.prototype.prop:", doSomething.prototype.prop);
console.log("doSomething.prototype.foo: ", doSomething.prototype.foo);
```

Esto da como resultado lo siguiente:

```plain
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

## Diferentes formas de crear y mutar cadenas de prototipos

Hemos encontrado muchas formas de crear objetos y cambiar sus cadenas de prototipos. Resumiremos sistemáticamente las diferentes formas, comparando los pros y los contras de cada enfoque.

### Objetos creados con construcciones de sintaxis

```js
const o = { a: 1 };
// El objeto recién creado o tiene Object.prototype como su [[Prototype]]
// Object.prototype tiene null como prototipo.
// o ---> Objeto.prototype ---> null

const b = ["yo", "whadup", "?"];
// Arrays heredan de Array.prototype
// (que tiene métodos indexOf, forEach, etc.)
// La cadena prototipo se ve así:
// b ---> Array.prototipo ---> Objeto.prototype ---> null

function f() {
  return 2;
}
// Las funciones heredan de Function.prototype
// (que tiene métodos call, bind, etc.)
// f ---> Función.prototipo ---> Objeto.prototype ---> null

const p = { b: 2, __proto__: o };
// Es posible apuntar el [[Prototype]] del objeto recién creado a
// otro objeto mediante la propiedad literal __proto__. (No debe ser confundido
// con descriptores de acceso Object.prototype.__proto__)
// p ---> o ---> Objeto.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros y contras de usar la clave <code>__proto__</code> en <a href="/es/docs/Web/JavaScript/Reference/Operators/Object_initializer">inicializadores de objetos</a>
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Compatible con todos los motores modernos. Apuntando la clave <code>__proto__</code> para algo que no es un objeto sólo falla silenciosamente sin lanzar una excepción. Al contrario del setter {{jsxref("Object/proto", "Object.prototype.__proto__")}}, <code>__proto__</code> en los inicializadores de objetos literales está estandarizado
         y optimizado, e incluso puede tener más rendimiento que
         {{jsxref("Object.create")}}. Declarar propiedades propias adicionales en la creación del objeto es más ergonómico que {{jsxref("Object.create")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        No es compatible con IE10 y versiones anteriores. Probablemente se confunda con
         {{jsxref("Object/proto", "Object.prototype.__proto__")}} descriptores de acceso para
         gente que no se da cuenta de la diferencia.
      </td>
    </tr>
  </tbody>
</table>

### Con funciones constructoras

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g es un objeto con propiedades propias 'vértices' y 'aristas'.
// g.[[Prototype]] el el valor de Graph.prototype cuando new Graph() is ejecutado.
```

<table class="standard-table">
  <caption>
    Pros y contras de usar funciones constructoras
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
        Compatible con todos los motores, desde IE 5.5. También es muy rápido, muy estándar y muy optimizable para JIT.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        <ul>
          <li>In order to use this method, the function in question must be
          initialized. During this initialization, the constructor may store
          unique information that must be generated per-object. This unique
          information would only be generated once, potentially leading to
          problems.
          Para utilizar este método, la función en cuestión debe estar inicializada. Durante esta inicialización, el constructor debe almacenar información única que debe generarse por objeto. Esta unica información solo se generaría una vez, lo que podría conducir a problemas.</li>
          <li>La inicialización del constructor puede poner métodos no deseados en el objeto.</li>
        </ul>
        <p>En la práctica, ninguno de estos dos problemas suele ser un problema.</p>
      </td>
    </tr>
  </tbody>
</table>

### Con Object.create()

Llamar a {{jsxref("Object.create()")}} crea un nuevo objecto. El `[[Prototype]]` de este objeto es el primer argumento de la función::

```js
const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null (d es un objeto que tiene null directamente como prototipo)
console.log(d.hasOwnProperty);
// undefined, porque d no hereda de Object.prototype
```

<table class="standard-table">
  <caption>
    Pros y contras de {{jsxref("Object.create")}}
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
         Compatible con todos los motores modernos. Permite configurar directamente <code>[[Prototype]]</code> de un objeto en el momento de su creación, lo que permite al runtime optimizar aún más el objeto. También permite la creación de objetos sin un prototipo, usando <code>Object.create(null)</code>.
       </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Not supported in IE8 and below. However, as Microsoft has discontinued extended support for systems running IE8 and below, that should not be a concern for most applications. Additionally, the slow object initialization can be a performance black hole if using the second argument, because each object-descriptor property has its own separate descriptor object. When dealing with hundreds of thousands of object descriptors in the form of objects, that lag time might become a serious issue.
      </td>
      <td>
         No es compatible con IE8 y versiones inferiores. Sin embargo, como Microsoft ha descontinuado soporte extendido para sistemas que ejecutan IE8 e inferiores, eso no debería ser un preocupación para la mayoría de las aplicaciones. Además, la inicialización lenta del objeto puede ser un agujero negro en el rendimiento si se utiliza el segundo argumento, porque cada propiedad descriptora del objeto tiene su propia propiedad separada. Cuando se trata de cientos de miles de descriptores de objetos en forma de objetos, ese retraso podría convertirse en un problema grave.
         asunto.
       </td>
    </tr>
  </tbody>
</table>

### Con classes

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}

const filledRectangle = new FilledRectangle(5, 10, "blue");
// filledRectangle ---> FilledRectangle.prototype ---> Rectangle.prototype ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros y contras de las clases.
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
         Compatible con todos los motores modernos. Muy alta legibilidad y mantenibilidad. <a href="/es/docs/Web/JavaScript/Reference/Classes/Private_properties">Propiedades privadas</a> son una característica sin reemplazo trivial en la herencia prototípica.
       </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Classes, especially with private properties, are less optimized than
        traditional ones (although engine implementors are working to improve
        this). Not supported in older environments and transpilers are usually
        needed to use classes in production.
      </td>
      <td>
         Las clases, especialmente con propiedades privadas, están menos optimizadas que los tradicionales (aunque los implementadores del motor están trabajando para mejorar esto). No es compatible con entornos más antiguos y los transpiladores suelen ser necesario para utilizar clases en producción.
       </td>
    </tr>
  </tbody>
</table>

### Con Object.setPrototypeOf()

Si bien todos los métodos anteriores establecerán la cadena de prototipos en el momento de la creación del objeto, [`Object.setPrototypeOf()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) permite mutar el `[[Prototype]]` de la propiedad interna de un objeto existente.

```js
const obj = { a: 1 };
const anotherObj = { b: 2 };
Object.setPrototypeOf(obj, anotherObj);
// obj ---> anotherObj ---> Object.prototype ---> null
```

<table class="standard-table">
  <caption>
    Pros y contras de {{jsxref("Object.setPrototypeOf")}}
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
         Compatible con todos los motores modernos. Permite la manipulación dinámica de un prototipo del objeto e incluso puede forzar un prototipo en un prototipo sin prototipo creado con <code>Object.create(null)</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Ill-performing. Should be avoided if it's possible to set the prototype
        at object creation time. Many engines optimize the prototype and try to
        guess the location of the method in memory when calling an instance in
        advance; but setting the prototype dynamically disrupts all those
        optimizations. It might cause some engines to recompile your code for
        de-optimization, to make it work according to the specs. Not supported
        in IE8 and below.
      </td>
      <td>
         Mal desempeño. Debe evitarse si es posible configurar el prototipo en el momento de la creación del objeto. Muchos motores optimizan el prototipo e intentan
         adivinar la ubicación del método en la memoria al llamar a una instancia en avance; pero establecer el prototipo dinámicamente interrumpe todos esos optimizaciones. Podría hacer que algunos motores recopilen su código para desoptimización, para que funcione según las especificaciones. No soportado
         en IE8 y versiones inferiores.
       </td>
    </tr>
  </tbody>
</table>

### Con el \_\_proto\_\_ accessor

Todos los objetos heredan el setter [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), que se puede utilizar para configurar el `[[Prototype]]` de un objeto existente (si la clave `__proto__` no es anulada en el objeto).

> [!WARNING]
> `Object.prototype.__proto__` accessors son **no estandar** y están en desuso. En su lugar usted debería usar `Object.setPrototypeOf`.

```js
const obj = {};
// NO USE ESTO: solo por ejemplo.
obj.__proto__ = { barProp: "bar val" };
obj.__proto__.__proto__ = { fooProp: "foo val" };
console.log(obj.fooProp);
console.log(obj.barProp);
```

<table class="standard-table">
  <caption>
    Pros y contras de configurar la propiedad {{jsxref("Object/proto","__proto__")}}
  </caption>
  <tbody>
    <tr>
      <th scope="row">Pro(s)</th>
      <td>
         Compatible con todos los motores modernos. Configurar {{jsxref("Object/proto","__proto__")}} a algo que no es un objeto, sólo falla silenciosamente. No lanza una excepción.
       </td>
    </tr>
    <tr>
      <th scope="row">Con(s)</th>
      <td>
        Non-performant and deprecated. Many engines optimize the prototype and
        try to guess the location of the method in the memory when calling an
        instance in advance; but setting the prototype dynamically disrupts all
        those optimizations and can even force some engines to recompile for
        de-optimization of your code, to make it work according to the specs.
        Not supported in IE10 and below. The {{jsxref("Object/proto","__proto__")}}
        setter is normative optional, so it may not work across all platforms.
        You should almost always use {{jsxref("Object.setPrototypeOf")}}
        instead.
      </td>
      <td>
         Sin rendimiento y en desuso. Muchos motores optimizan el prototipo e intentan adivinar la ubicación del método en la memoria al llamar a un instancia por adelantado; pero establecer el prototipo dinámicamente interrumpe todo esas optimizaciones e incluso pueden obligar a algunos motores a recompilarse para desoptimización de su código, para que funcione de acuerdo con las especificaciones. No es compatible con IE10 y versiones anteriores. El setter {{jsxref("Object/proto","__proto__")}} es normativamente opcional, por lo que es posible que no funcione en todas las plataformas. En cambio casi siempre deberías usar {{jsxref("Object.setPrototypeOf")}}.
       </td>
    </tr>
  </tbody>
</table>

## Rendimiento

El tiempo de búsqueda de propiedades que es alto en la cadena del prototipo puede tener un impacto negativo en el rendimiento, y esto puede ser significativo en el código donde el rendimiento es crítico. Además, intentar acceder a propiedades inexistentes siempre recorrerá la cadena del prototipo completamente.

Además, al iterar sobre las propiedades de un objeto, se enumerarán **todas** las propiedades enumerables que se encuentran en la cadena del prototipo. Para verificar si un objeto tiene una propiedad definida _en sí mismo_ y no en algún lugar de su cadena de prototipo, es necesario usar los métodos[`hasOwnProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) o [`Object.hasOwn`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn). Todos los objetos, excepto aquellos con `null` como `[[Prototype]]`, heredan [`hasOwnProperty`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) de `Object.prototype` – a menos que haya sido sobre escrito más abajo en la cadena del prototipo. Para darle un ejemplo concreto, tomemos el código de ejemplo del gráfico anterior para ilustrarlo:

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g ---> Graph.prototype ---> Object.prototype ---> null

g.hasOwnProperty("vertices"); // verdadero
Object.hasOwn(g, "vertices"); // verdadero

g.hasOwnProperty("nope"); // falso
Object.hasOwn(g, "nope"); // falso

g.hasOwnProperty("addVertex"); // falso
Object.hasOwn(g, "addVertex"); // falso

Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // verdadero
```

Nota: **no** es suficiente verificar si una propiedad es [`undefinida`](/es/docs/Web/JavaScript/Reference/Global_Objects/undefined). Es muy posible que la propiedad exista, pero resulta que su valor está establecido en `undefined`.

## Conclusión

JavaScript puede resultar un poco confuso para los desarrolladores que vienen de Java o C++, ya que es todo dinámico, todo runtime y no tiene ningún tipo estático. Todo es un objeto (instancia) o una función (constructor), e incluso las funciones mismas son instancias del constructor "Función". Incluso las "clases" como construcciones de sintaxis son solo funciones constructoras en tiempo de ejecución.

Todas las funciones constructoras en JavaScript tienen una propiedad especial llamada `prototype`, que funciona con el operador `new`. La referencia al objeto prototipo se copia a la propiedad interna `[[Prototype]]` de la nueva instancia. Por ejemplo, cuando haces `const a1 = new A()`, JavaScript (después de crear el objeto en la memoria y antes de ejecutar la función `A()` con `this` definido) establece `a1.[[Prototype]] = A.Prototype`. Cuando accede a las propiedades de la instancia, JavaScript primero verifica si existen en ese objeto directamente y, si no, busca en `[[Prototype]]`. `[[Prototype]]` se mira _recursivamente_, es decir, `a1.doSomething`, `Object.getPrototypeOf(a1).doSomething`, `Object.getPrototypeOf(Object.getPrototypeOf(a1)).doSomething`, etc., hasta que se encontrado o `Object.getPrototypeOf` devuelve `null`. Esto significa que todas las propiedades definidas en "prototipo" son compartidas efectivamente por todas las instancias, e incluso más tarde puedes cambiar partes de "prototipo" y hacer que los cambios aparezcan en todas las instancias existentes.

Si, en el ejemplo anterior, haces `const a1 = new A(); const a2 = new A();`, entonces `a1.doSomething` en realidad se referiría a `Object.getPrototypeOf(a1).doSomething`, que es lo mismo que `A.prototype.doSomething` que definiste, es decir, `Object .getPrototypeOf(a1).doSomething === Object.getPrototypeOf(a2).doSomething === A.prototype.doSomething`.

Es esencial comprender el modelo de herencia prototípico antes de escribir código complejo que lo utilice. Además, tenga en cuenta la longitud de las cadenas de prototipos en su código y divídalas si es necesario para evitar posibles problemas de rendimiento. Además, los prototipos nativos **nunca** deben ampliarse a menos que sea por compatibilidad con funciones de JavaScript más nuevas.
