---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef("Global_Objects", "Object")}}

## Resumen

El método **`Object.getOwnPropertyNames()`** devuelve un array con todas las propiedades (numerables o no) encontradas en un objeto dado.

## Sintaxis

```
Object.getOwnPropertyNames(obj)
```

### Parámetros

- obj
  - : El objeto cuyas propiedades directas, numerables _y no-numerables_, serán devueltas.

## Descripción

`Object.getOwnPropertyNames` devuelve un array cuyos elementos son _strings_ correspondientes a cada una de las propiedades encontradas directamente en `obj`. El orden de las propiedades numerables en el array coincide con el expuesto para [for...in loop](/es/docs/Web/JavaScript/Reference/Statements/for...in) (o para {{jsxref("Object.keys")}}) con respecto a las propiedades del object. El orden de las propiedades no-numerables del array, y de éstas respecto a las numerables, no está definido.

## Ejemplos

```js
var arr = ["a", "b", "c"];
print(Object.getOwnPropertyNames(arr).sort()); // imprime "0,1,2,length"

// Objeto similar a Array
var obj = { 0: "a", 1: "b", 2: "c" };
print(Object.getOwnPropertyNames(obj).sort()); // imprime "0,1,2"

// Imprime nombres de variables y valores usando Array.forEach
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  print(val + " -> " + obj[val]);
});
// imprime
// 0 -> a
// 1 -> b
// 2 -> c

// propiedad no-numerable
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
      enumerable: false,
    },
  },
);
my_obj.foo = 1;

print(Object.getOwnPropertyNames(my_obj).sort()); // imprime "foo, getFoo"
```

Si se quiere solo las propiedades numerables, ver {{jsxref("Object.keys")}} o usar un [for...in loop](/es/docs/Web/JavaScript/Reference/Statements/for...in) (aunque esto devolvería propiedades numerables no directas del objeto pertenecientes a la cadena de _prototype_ a la que pertenezca, a menos que finalmente se filtre con hasOwnProperty()).

Items de la cadena _prototype_ no se listan:

```js
function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
  this.prop = 5;
  this.method = function () {};
}
ChildClass.prototype = new ParentClass();
ChildClass.prototype.prototypeMethod = function () {};

alert(
  Object.getOwnPropertyNames(
    new ChildClass(), // ["prop", "method"]
  ),
);
```

### Get Non-Enumerable Only

Aquí se usa la función Array.prototype.filter para quitar las _keys_ numerables (obtenidas con Object.keys) de una lista con todas las _keys_ (obtenida con Object.getOwnPropertynames) dejando solo las no-numerables.

```js
var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function (key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    //no encontrada en las keys de enum_only, por lo que se trata de una key numerable, se devuelve true para mantenerla en filter
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Enumerability and ownership of properties](/es/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty")}}
- {{jsxref("Object.prototype.propertyIsEnumerable")}}
- {{jsxref("Object.create")}}
- {{jsxref("Object.keys")}}
- {{jsxref("Array.forEach()")}}
