---
title: Object.isSealed()
slug: Web/JavaScript/Reference/Global_Objects/Object/isSealed
---

{{JSRef}}

El método **`Object.isSealed()`** si el objeto está sellado.

{{EmbedInteractiveExample("pages/js/object-issealed.html")}}

## Syntax

```
Object.isSealed(obj)
```

### Parámetros

- `obj`
  - : El objeto que debe ser verificado.

### Valor devuelto

Un {{jsxref("Boolean")}} indicando si el objeto dado está sellado.

## Descripción

Devuelve `true` si el objeto está sellado, de lo contrario devuelve `false`. Un objeto está sellado si no es {{jsxref("Object.isExtensible", "extensible", "", 1)}} y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

## Ejemplos

```js
// Los objetos no están sellados por defecto
var empty = {};
Object.isSealed(empty); // === false

// Si haces un objeto vacío no extendible,
// está vacíamente sellado
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// Lo mismo no es vedad sobre un objeto no vacío,
// a menos que sus propiedades son todas no configurables.
var hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// Pero hazlas todas no configurables
// y el objeto se vuelve sellado.
Object.defineProperty(hasProp, "fee", {
  configurable: false,
});
Object.isSealed(hasProp); // === true

// La manerá más facil de sellar un objeto, por supuesto,
// es Object.seal
var sealed = {};
Object.seal(sealed);
Object.isSealed(sealed); // === true

// Un objeto sellado es, por definición, no extendible.
Object.isExtensible(sealed); // === false

// Un objeto sellado puodría estar congelado,
// pero no tiene que ser.
Object.isFrozen(sealed); // === true
// (Todas las propiedades también no modificables)

var s2 = Object.seal({ p: 3 });
Object.isFrozen(s2); // === false
// ('p' todavía es modificable)

var s3 = Object.seal({
  get p() {
    return 0;
  },
});
Object.isFrozen(s3); // === true
// (solo la configurabilidad es importante para las propiedades de acceso)
```

## Notes

En ES5, si el argumento de este método no es un objeto (primitivo), entonces causará un {{jsxref("TypeError")}}. En ES2015, un argumento que no sea un objeto será tratado como si fuera un objeto sellado ordinario, simplemente devuelve `true`.

```js
Object.isSealed(1);
// TypeError: 1 no es un objeto (ES5 code)

Object.isSealed(1);
// true                          (ES2015 code)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Object.seal()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
