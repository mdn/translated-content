---
title: setter
slug: Web/JavaScript/Reference/Functions/set
---

{{jsSidebar("Funciones")}}

La sintaxis **`set`** asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.

## Sintaxis

```
{set prop(val) { . . . }}
{set [expression](val) { . . . }}
```

### Parámetros

- _`prop`_

  - : El nombre de la propiedad a asociar con la función dada.

- _`val`_
  - : Un alias para la variable que contiene el valor a asignar a la propiedad.
- _`expression`_
  - : A partir de ECMAScript 2015, se puede también usar expresiones para nombres de propiedades computados para asociar a la función dada.

## Descripción

En JavaScript, un setter puede ser usado para ejecutar una función donde sea que una propiedad se intente cambiar. Los setters son regularmente usados en conjunto con getters para crear un tipo de pseudo-propiedad. No es posible tener simultáneamente un setter en una propiedad que ya tiene un valor.

Tenga en cuenta lo siguiente al trabajar con setters:

- Puede tener un identificador ya sea number o string;
- Debe tener exactamente un parámentro (ver [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) para más información);
- No debe aparecer en un objeto de notación literal con otro `set` o con otra entrada de datos con la misma propiedad.
  ( `{ set x(v) { }, set x(v) { } }` y `{ x: ..., set x(v) { } }` están prohibidos )

## Ejemplos

### Definiendo un setter en el inicializador de nuevos objetos

En el siguiente ejemplo definimos una pseudo-propiedad `actual` al objeto `lenguaje`. Cuando se le asigne un valor a `actual`, actualiza `log` con ese valor:

```js
var lenguaje = {
  set actual(mensaje) {
    this.log.push(mensaje);
  },
  log: [],
};
lenguaje.actual = "ES";
console.log(lenguaje.log); // ['ES']

lenguaje.actual = "FR";
console.log(lenguaje.log); // ['ES', 'FR']
```

Note que `actual` no está definido y cualquier intento de accederlo devolverá `undefined`.

### Eliminando un setter con el operador `delete`

Si desea eliminar el setter, puede simplemente aplicar [`delete`](/es/docs/Web/JavaScript/Referencia/Operadores/delete) en él:

```js
delete lenguaje.actual;
```

### Definiendo un setter en un objecto existente usando `defineProperty`

Para añadir un setter a un objeto _existente_, use {{jsxref("Object.defineProperty()")}}

```js
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set: function (x) {
    this.a = x / 2;
  },
});

o.b = 10; // Ejecuta el setter, el cual asigna 10 / 2 (5) a la propiedad 'a'
console.log(o.a); // 5
```

### Usando un nombre de propiedad computado

> **Nota:** Propiedades computadas son 'experimental technology'_,_ parte de la propuesta para ECMAScript 6, y no está soportado en todos los navegadores. Dará error de sintaxis en entornos no soportados.

```js
const expr = "foo";

var obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"
obj.foo = "baz"; // ejecuta el setter
console.log(obj.baz); // "baz"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [getter](/es/docs/Web/JavaScript/Reference/Functions/get)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Definiendo Getters y Setters](/es/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters) en la Guía JavaScript
