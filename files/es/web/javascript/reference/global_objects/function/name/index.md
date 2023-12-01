---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

La propiedad **`function.name`** retorna el nombre de la función o retorna `"anonymous"` por funciones creadas anónimamente.

{{js_property_attributes(0,0,1)}}Nótese que en implementaciones no estándar previas a ES2015 el atributo `configurable` también era `false`.

## Ejemplos

### Nombre de una declaración de función

La propiedad `name` retorna el nombre de una declaración de función.

```js
function doSomething() {}

console.log(doSomething.name); // imprime en pantalla "doSomething"
```

### Nombre de constructor de función

Las funciones creadas con la sintaxis `new Function(...)` o simplemente `Function(...)` tienen como propiedad `name` una cadena vacía. En los ejemplos a continuación se crean funciones anónimas, tales que su `name` retorna una cadena vacía:

```js
var f = function () {};
var object = {
  someMethod: function () {},
};

console.log(f.name == ""); // true
console.log(object.someMethod.name == ""); // también true
```

### Nombres de función inferidos

Los navegadores que implementan funciones ES2015 pueden inferir el nombre de una función anónima de su posición sintáctica. Por ejemplo:

```js
var f = function () {};
console.log(f.name); // "f"
```

Se puede definir una función con un nombre en un {{jsxref("Operators/Function", "function expression", "", 1)}}:

```js
var object = {
  someMethod: function object_someMethod() {},
};
console.log(object.someMethod.name); // imprime "object_someMethod"

try {
  object_someMethod;
} catch (e) {
  console.log(e);
}
// ReferenceError: object_someMethod is not defined
```

No se puede cambiar el nombre de una función, esta propiedad es de solo lectura:

```js
var object = {
  // anonymous
  someMethod: function () {},
};

object.someMethod.name = "someMethod";
console.log(object.someMethod.name); // cadena vacía, someMethod es anónimo
```

Sin embargo, se puede usar {{jsxref("Object.defineProperty()")}} para cambiarlo.

### Nombres de métodos

```js
var o = {
  foo() {},
};
o.foo.name; // "foo";
```

### Nombres de funciones atadas (creadas con .bind())

{{jsxref("Function.bind()")}} produce una función cuyo nombre es igual a "bound " seguido del nombre de la función original.

```js
function foo() {}
foo.bind({}).name; // "bound foo"
```

### Nombres de funciones getters y setters

Cuando se usan [`get`](/es/docs/Web/JavaScript/Reference/Functions/get) y `set,`"get" y "set" aparecerán en el nombre de la función.

```js
var o = {
  get foo() {},
  set foo(x) {},
};

var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
descriptor.get.name; // "get foo"
descriptor.set.name; // "set foo";
```

## Ejemplos

Se puede usar `obj.constructor.name` para saber cuál es la "clase" de un objeto:

```js
function a() {}

var b = new a();

console.log(b.constructor.name); // imprime "a"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
