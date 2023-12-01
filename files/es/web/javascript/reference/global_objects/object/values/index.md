---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

{{JSRef}}

El método **`Object.values()`** devuelve un array con los valores correspondientes a las propiedades **enumerables** de un objeto. Las propiedades son devueltas en el mismo orden a como lo haría un bucle {{jsxref("Statements/for...in", "for...in")}} (la única diferencia es que un bucle `for-in` también enumera las propiedades en la cadena de prototipo de un objeto).

{{EmbedInteractiveExample("pages/js/object-values.html")}}

## Sintaxis

```
Object.values(obj)
```

### Parámetros

- `obj`
  - : Objeto cuyas propiedades enumerables serán devueltas.

### Valor devuelto

Un `array` con las propiedades enumerables del objeto pasado como parámetro.

## Descripción

El método `Object.values()` devuelve un array cuyos elementos son valores de propiedades enumarables que se encuentran en el objeto. El orden de las propiedades es el mismo que el dado cuando se recorre el objeto de forma manual.

## Ejemplos

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array como objeto
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array como objeto con una ordenación aleatoria de las claves
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo no es una propiedade enumerable, por lo que como se observa, no se devuelve
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.values(my_obj)); // ['bar']

// parámetros que no son Objetos se fuerzan a que se comporten como tal
console.log(Object.values("foo")); // ['f', 'o', 'o']
```

## Polyfill

Para dar soporte compatible con `Object.values()` a entornos antiguos que no la soportan de forma nativa, puedes encontrar un Polyfill en [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) o en los repositorios [es-shims/Object.values](https://github.com/es-shims/Object.values).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Enumeración y propietarios de propiedades](/es/docs/Web/JavaScript/enumeracion_y_propietario_de_propiedades)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
