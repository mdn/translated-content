---
title: Boolean() constructor
slug: Web/JavaScript/Reference/Global_Objects/Boolean/Boolean
---

{{JSRef}}

El constructor **`Boolean()`** se usa para crear objetos {{jsxref("Boolean")}}.

{{InteractiveExample("JavaScript Demo: Boolean Constructor", "shorter")}}

```js interactive-example
const flag = new Boolean();

console.log(flag);
// Expected output: false
```

## Sintaxis

```
new Boolean([value])
```

### Parámetros

- `value` {{optional_inline}}
  - : El valor inicial del objeto `Boolean`.

## Ejemplos

### Creación de objetos `Boolean` con un valor inicial de `false`

```js
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean("");
var bfalse = new Boolean(false);
```

### Creación de objetos `Boolean` con un valor inicial de `true`

```js
var btrue = new Boolean(true);
var btrueString = new Boolean("true");
var bfalseString = new Boolean("false");
var bSuLin = new Boolean("Su Lin");
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [Boolean](/es/docs/Glossary/Boolean)
