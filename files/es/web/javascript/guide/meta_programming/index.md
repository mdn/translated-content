---
title: Metaprogramación
slug: Web/JavaScript/Guide/Meta_programming
tags:
  - ECMAScript 2015
  - Guía
  - JavaScript
  - Proxy
  - Reflejar
  - l10n:priority
translation_of: Web/JavaScript/Guide/Meta_programming
---
{{jsSidebar("Guía de JavaScript")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_Generators", "Web/JavaScript/Guide/Modules")}}

A partir de ECMAScript 2015, JavaScript gana soporte para los objetos {{jsxref("Proxy")}} y {{jsxref("Reflect")}} lo cual te permite interceptar y definir un comportamiento personalizado para las operaciones fundamentales del lenguaje (por ejemplo, búsqueda de propiedades, asignación, enumeración, invocación de funciones, etc.). Con la ayuda de estos dos objetos, puedes programar en el metanivel de JavaScript.

## Proxies

Introducidos en ECMAScript 6, los objetos {{jsxref("Proxy")}} te permiten interceptar ciertas operaciones e implementar comportamientos personalizados.

Por ejemplo, obtener una propiedad sobre un objeto:

```js
let handler = {
  get: function(target, name) {
    return name in target? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1
console.log(p.a, p.b) // 1, 42
```

El objeto `Proxy` define un _`target`_ (un objeto vacío aquí) y un objeto _`handler`_, en el que se implementa un `get` _trap_. Aquí, un objeto que es proxy no devolverá `undefined` cuando obtenga propiedades indefinidas, sino que devolverá el número `42`.

Hay ejemplos adicionales disponibles en la página de referencia {{jsxref("Proxy")}}.

### Terminología

Los siguientes términos se utilizan cuando se habla de la funcionalidad de los proxies.

- {{jsxref("Global_Objects/Proxy/handler","handler","","true")}}
  - : Objeto marcador de posición que contiene trampas.
- traps
  - : Los métodos que proporcionan acceso a la propiedad. (Esto es análogo al concepto de _trampas_ en los sistemas operativos).
- target
  - : Objeto que virtualiza el proxy. A menudo se utiliza como interfaz de administración de almacenamiento para el proxy. Las invariantes (semántica que permanece sin cambios) con respecto a la no extensibilidad del objeto o las propiedades no configurables se verifican con el `target`.
- invariants
  - : La semántica que permanece sin cambios al implementar operaciones personalizadas se denominan _invariants_. Si violas las invariantes de un controlador, se lanzará un {{jsxref("TypeError")}}.

## Controladores y trampas

La siguiente tabla resume las trampas disponibles para los objetos `Proxy`. Ve las [páginas de referencia](/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) para explicaciones detalladas y ejemplos.

«Tabla»

## `Proxy` revocable

El método {{jsxref ("Proxy.revocable()")}} se usa para crear un objeto `Proxy` revocable. Esto significa que el proxy se puede revocar mediante la función `revoke` y apagar el proxy.

Posteriormente, cualquier operación en el proxy conduce a un {{jsxref("TypeError")}}.

```js
let revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]'
  }
})
let proxy = revocable.proxy
console.log(proxy.foo) // "[[foo]]"

revocable.revoke()

console.log(proxy.foo)   // Lanza TypeError
proxy.foo = 1            // TypeError nuevamente
delete proxy.foo         // todavía TypeError
typeof proxy             // "object", typeof no activa ninguna trampa
```

## Reflexión

{{jsxref("Reflect")}} es un objeto integrado que proporciona métodos para operaciones JavaScript interceptables. Los métodos son los mismos que los de {{jsxref ("Global_Objects/Proxy/handler", "proxy handlers", "", "true")}}.

`Reflect` no es un objeto función.

`Reflect` ayuda con el reenvío de las operaciones predeterminadas del controlador al `target`.

Con {{jsxref("Reflect.has()")}} por ejemplo, obtienes el operador [`in`](/es/docs/Web/JavaScript/Reference/Operators/in) como función:

```js
Reflect.has(Object, 'assign') // true
```

### Una mejor función `apply`

En ES5, normalmente usas el método {{jsxref("Function.prototype.apply()")}} para llamar a una función con un valor `this` y `arguments` proporcionado como un arreglo (o un [objeto similar a un arreglo](/es/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75])
```

Con {{jsxref("Reflect.apply")}} esto se vuelve menos detallado y más fácil de entender:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hola"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Comprobando si la definición de la propiedad ha sido exitosa

Con {{jsxref("Object.defineProperty")}}, que devuelve un objeto si tiene éxito, o arroja un {{jsxref("TypeError")}} de lo contrario, usaría un bloque {{jsxref("Statements/try...catch", "try...catch")}} para detectar cualquier error que haya ocurrido al definir una propiedad. Debido a que {{jsxref("Reflect.defineProperty")}} devuelve un estado de éxito booleano, aquí puedes usar un bloque {{jsxref("Statements/if...else", "if...else")}}:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // éxito
} else {
  // fracaso
}
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
