---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
---

{{JSRef}}

El método **`Object.freeze()`** _congela_ un objeto, es decir: impide que se le agreguen nuevas propiedades; impide que se puedan eliminar las propiedades ya existentes; impide que dichas propiedades, o su capacidad de enumeración, configuración, o escritura, puedan ser modificadas; impide también que se pueda modificar su prototipo. El método devuelve el objeto recibido.

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

El código de este ejemplo interactivo está almacenado en un repositorio de GitHub. Si quieres contribuir al proyecto de ejemplos interactivos, puedes clonar <https://github.com/mdn/interactive-examples> y enviarnos un _pull request_.

## Sintaxis

```
Object.freeze(obj)
```

### Parámetros

- `obj`
  - : El objeto a _congelar_.

### Valor devuelto

El mismo objeto

## Descripción

Nada puede ser agregado o removido de las propiedades establecidas de un objeto _congelado_. Cualquier intento de hacerlo fallará, ya sea de manera silenciosa o _arrojando una excepción_ {{jsxref("TypeError")}} (más comunmente, pero no exclusivamente, en {{jsxref("Strict_mode", "strict mode", "", 1)}}).

Los valores no pueden ser cambiados por propiedades de datos. Propiedades de acceso (_getters_ y _setters_) funcionan igual (y aún dan la ilusión de que estas cambiando el valor). Note que los valores que son objetos aún pueden ser modificados, a menos que esten _congelados_ tambien.

La función retorna el mismo objeto pasado en ella, no crea una copia _congelada_

## Ejemplos

### Congelando Objetos

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Nuevas propiedades pueden ser agregadas,
// propiedades existentes pueden cambiar o removerse
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

// Ambos, el objeto pasado como argumento tanto como el que se regresa
// serán congelados
// Es innecesario salvar el objeto que es regresado en orden de congelar
// el original.
var o = Object.freeze(obj);

assert(Object.isFrozen(obj) === true);

// Ahora cualquier cambio fallará
obj.foo = "quux"; // No hace nada de manera silenciosa
obj.quaxxor = "the friendly duck"; // No agrega una nueva propiedad, de manera silenciosa

// ...y en modo estrico tal intento arrojará TypeErrors
function fail() {
  "use strict";
  obj.foo = "sparky"; // arroja un TypeError
  delete obj.quaxxor; // arroja un TypeError
  obj.sparky = "arf"; // arroja un TypeError
}

fail();

// Los intentos utilizando Object.defineProperty tambien arrojarán una excepción...
Object.defineProperty(obj, "ohai", { value: 17 }); // arroja un TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // arroja un TypeError

// Es imposible cambiar un prototipo
// Estos ejemplos retornan un error TypeError
Object.setPrototype(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

El siguiente ejemplo muestra que los valores de objetos en un objeto congelado pueden ser mutados (la congelación es superficial).

```js
obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "aValue";

obj1.internal.a; // 'aValue'

// Para hacer obj completamente inmutable, congelamos cada objeto en obj.
// Para hacerlo, usamos esta función.
function deepFreeze(obj) {
  // Recuperamos el nombre de las propiedades en obj
  var propNames = Object.getOwnPropertyNames(obj);

  // Congelamos las propiedades antes de congelar a obj
  propNames.forEach(function (name) {
    var prop = obj[name];

    // Si la propiedad es un objeto, llamaremos a deepFreezze para que congele las propiedades de ese objeto
    if (typeof prop == "object" && prop !== null && !Object.isFrozen(prop))
      deepFreeze(prop);
  });

  // congelamos a obj
  return Object.freeze(obj);
}

obj2 = {
  internal: {},
};

deepFreeze(obj2);
obj2.internal.a = "anotherValue";
obj2.internal.a; // undefined
```

## Notas

En ES5, si el argumento pasado a este método no es un objeto (un primitivo), entonces causará un {{jsxref("TypeError")}}. En ES6, un argumento no-objeto será tratado como si fuera un objeto _congelado_ cualquiera, simplemente lo regresa.

```js
> Object.freeze(1)
TypeError: 1 is not an object // Código ES5

> Object.freeze(1)
1                             // Código ES6
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
