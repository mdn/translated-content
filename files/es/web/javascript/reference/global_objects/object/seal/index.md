---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
---

{{JSRef}}

El método **`Object.seal()`** sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables. Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto en cuanto dichas propiedades sean de escritura.

## Sintaxis

```
Object.seal(obj)
```

### Parámetros

- `obj`
  - : El objeto que ha de ser sellado.

## Descripción

Por defecto, los objetos son {{jsxref("Object.isExtensible()", "extensibles", "", 1)}} (pueden añadirse nuevas propiedades a los mismos). Sellar un objeto previene que nuevas propiedades puedan ser añadidas y marca todas las propiedades existentes como no-configurables. Esto tiene el efecto de hacer fijo e inmutable el juego de propiedades del objeto. Al hacer todas las propiedades no-configurables previene también que se puedan convertir propiedades de datos en propiedades de acceso y viceversa, pero no evita que los valores de las propiedades de datos puedan ser modificados. Intentar eliminar o añadir propiedades a un objeto sellado, o convertir una propiedad de datos en una propiedad de acceso fallará, bien silenciadamente o bien produciendo un {{jsxref("TypeError")}} (más frecuentemente, aunque no exclusivamente, con código en {{jsxref("Strict_mode", "modo estricto", "", 1)}}).

La cadena de prototiado permanece inalterada. No obstante, la propiedad [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} es también sellada.

Retorna una referencia al Objeto pasado.

## Ejemplos

```js
var obj = {
  prop: function () {},
  foo: "bar",
};

// Pueden añadirse nuevas propiedades, propiedades existentes pueden cambiarse o eliminarse.
obj.foo = "baz";
obj.lumpy = "woof";
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// Sigue permitido modificar valores de propiedades en un objeto sellado.
obj.foo = "quux";

// Pero no puedes convertir propiedades de datos en propiedades de acceso, ni viveversa
Object.defineProperty(obj, "foo", {
  get: function () {
    return "g";
  },
}); // produce un TypeError

// Ahora, cualquier cambio que no sea modificar valores de propiedades fallará
obj.quaxxor = "the friendly duck"; // silenciosamente, no añadirá la propiedad
delete obj.foo; // silenciosamente, no eliminará la propiedad

// ...y en modo estricto esos intentos producirán TypeErrors.
function fail() {
  "use strict";
  delete obj.foo; // genera un TypeError
  obj.sparky = "arf"; // genera un TypeError
}
fail();

// Intentar añadir propiedades mediante Object.defineProperty también fallará.
Object.defineProperty(obj, "ohai", { value: 17 }); // genera un TypeError
Object.defineProperty(obj, "foo", { value: "eit" }); // cambia el valor exisitente
```

## Notas

En ES5, si el argumento de este método no es un objeto (una primitiva), se generará un {{jsxref("TypeError")}}. En ES6, un argumento no-objeto será tratado como si se sellase un objeto ordinario, símplemente retornándolo.

```js
Object.seal(1);
// TypeError: 1 no es un objeto (código ES5)

Object.seal(1);
// 1                             (código ES6)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
