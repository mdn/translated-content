---
title: Object.assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
---

{{JSRef}}

El método **`Object.assign()`** copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

{{EmbedInteractiveExample("pages/js/object-assign.html")}}

## Sintaxis

```
Object.assign(objetivo, ...fuentes)
```

### Parámetros

- `objetivo`
  - : El objeto destino.
- `fuentes`
  - : Los objetos origen.

### Valor devuelto

El objeto destino.

## Descripción

Las propiedades en el objeto destino serán sobrescritas por las propiedades en las fuentes si tienen la misma clave. Propiedades posteriores de las fuentes podrán sobrescribir las anteriores.

El método `Object.assign()` copia sólo las propiedades _enumerables_ y _propias_ del objeto origen a un objeto destino. Usa `[[Get]]` en la origen y `[[Set]]` en el destino, por lo que invocará los métodos de acceso y establecimiento (_getters_ y _setters_). Por consiguiente _asignará_ propiedades frente a sólo copiar o definir propiedades nuevas. Esto puede hacer que sea inadecuado para fusionar propiedades nuevas en un prototipo si los objetos fuente contienen métodos de acceso (_getters_). Para copiar definiciones de propiedades en prototipos, incluyendo su enumerabilidad, se deben usar {{jsxref("Object.getOwnPropertyDescriptor()")}} y {{jsxref("Object.defineProperty()")}}.

Tanto las propiedades {{jsxref("String")}} como {{jsxref("Symbol")}} son copiadas.

En caso de un error, por ejemplo si una propiedad es de solo lectura, se lanza un {{jsxref("TypeError")}}, y el objeto destino se mantendrá sin cambios.

Note que `Object.assign()` no lanza excepciones al encontrar en las fuentes propiedades {{jsxref("null")}} o {{jsxref("undefined")}}.

## Ejemplos

### Clonando un objeto

```js
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

### Advertencia para clonado profundo

Para un clonado profundo, necesitamos usar otra alternativa ya que `Object.assign()` copia valores de propiedades. Si el valor en la fuente es una referencia a un objeto, solo se copia la referencia en sí, como valor de la propiedad.

```js
function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj1.a = 1;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

  obj2.a = 2;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

  // Deep Clone
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}

test();
```

### Fusionando objetos

```js
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

### Fusionando objetos con las mismas propiedades

```js
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Las propiedades también son sobreescritas por otros objetos que aparecen posteriormente en la lista de parámetros y que tienen propiedades con el mismo nombre.

### Copiando propiedades de tipo símbolo

```js
var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
```

### Las propiedades heredadas y las no enumerables no pueden ser copiadas

```js
var obj = Object.create(
  { foo: 1 },
  {
    // foo es una propiedad heredada.
    bar: {
      value: 2, // bar es una propiedad no enumerable.
    },
    baz: {
      value: 3,
      enumerable: true, // baz es una propiedad propia enumerable.
    },
  },
);

var copy = Object.assign({}, obj);
console.log(copy); // { baz: 3 }
```

### Los tipos primitivos serán encapsulados en objetos

```js
var v1 = "abc";
var v2 = true;
var v3 = 10;
var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Los tipos primitivos son encapsulados en objetos y se ignoran las propiedades con valor null o undefined.
// Nótese que sólo los wrappers de cadenas tienen propiedades enumerables:
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### Las excepciones interrumpen la tarea de copiado

```js
var target = Object.defineProperty({}, "foo", {
  value: 1,
  writeable: false,
}); // target.foo es una propiedad de sólo lectura

Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// TypeError: "foo" es de sólo lectura
// La excepción se lanza cuando se intenta asignar un valor a target.foo

console.log(target.bar); // 2, la primera fuente fue copiada.
console.log(target.foo2); // 3, la primera propiedad del segundo objeto fuente se copió correctamente.
console.log(target.foo); // 1, se lanza la excepción.
console.log(target.foo3); // undefined, el método assign ha finalizado, no se copiará foo3.
console.log(target.baz); // undefined, tampoco se copiará el tercer objecto fuente.
```

### Copiando métodos de acceso

```js
var obj = {
  foo: 1,
  get bar() {
    return 2;
  },
};

var copy = Object.assign({}, obj);
console.log(copy);
// { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.

// This is an assign function that copies full descriptors
function completeAssign(target, ...sources) {
  sources.forEach((source) => {
    let descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});
    // by default, Object.assign copies enumerable Symbols too
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      let descriptor = Object.getOwnPropertyDescriptor(source, sym);
      if (descriptor.enumerable) {
        descriptors[sym] = descriptor;
      }
    });
    Object.defineProperties(target, descriptors);
  });
  return target;
}

var copy = completeAssign({}, obj);
console.log(copy);
// { foo:1, get bar() { return 2 } }
```

## Polyfill

Este {{Glossary("Polyfill","polyfill")}} no soporta propiedades símbolo, ya que ES5 no tiene símbolos.

```js
if (typeof Object.assign != "function") {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      "use strict";
      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError("Cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
  });
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.defineProperties()")}}
- [Enumeración y propietarios de propiedades](/es/docs/Web/JavaScript/enumeracion_y_propietario_de_propiedades)
- [Spread en literales tipo Objeto](/es/docs/Web/JavaScript/Referencia/Operadores/Sintaxis_Spread#Spread_en_literales_tipo_Objeto)
