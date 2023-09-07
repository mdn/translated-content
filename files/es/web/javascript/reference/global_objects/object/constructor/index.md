---
title: Object.prototype.constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
---

{{JSRef("Objetos_globales", "Object")}}

## Resumen

Retorna una referencia a la función del {{jsxref("Object")}} que creó el objeto de la instancia. Note que el valor de esta propiedad es una referencia a la función misma, no a un string conteniendo el nombre de la función. El valor es sólo de lectura para valores primitivos tales como 1, true y 'test'.

## Descripción

Todos los objetos tienen una propiedad `constructor.` Los objetos creados sin explicitar el uso de una función (como son los objetos y las cadenas literales) tendrán una propiedad de `constructor` que apunta al tipo de constructor del Objeto Fundamento para ese objeto.

```js
var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

## Ejemplos

### Ejemplo: Mostrando el constructor de un objeto

El siguiente ejemplo crea un prototipo, `Tree`, y un objeto de este tipo, `theTree`. El ejemplo muestra entonces la propiedad `constructor` para el objeto `theTree`.

```js
function Tree(name) {
  this.name = name;
}

var theTree = new Tree("Redwood");
console.log("theTree.constructor is " + theTree.constructor);
```

Este ejemplo muestra la siguiente salida:

```js
theTree.constructor is function Tree (name) {
    this.name = name;
}
```

### Ejemplo: Cambiando el constructor de un objeto

El siguiente ejemplo demuestra como modificar el valor del constructor de objetos genéricos. Solo `true`, `1` y `"test"` no serán afectados ya que ellos tienen constructores nativos de solo lectura. Este ejemplo demuestra que no siempre es seguro confiar en la propiedad constructor de un objeto.

```js
function Type() {}

var types = [
  new Array(),
  [],
  new Boolean(),
  true, // no cambia
  new Date(),
  new Error(),
  new Function(),
  function () {},
  Math,
  new Number(),
  1, // no cambia
  new Object(),
  {},
  new RegExp(),
  /(?:)/,
  new String(),
  "test", // no cambia
];

for (var i = 0; i < types.length; i++) {
  types[i].constructor = Type;
  types[i] = [
    types[i].constructor,
    types[i] instanceof Type,
    types[i].toString(),
  ];
}

console.log(types.join("\n"));
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
