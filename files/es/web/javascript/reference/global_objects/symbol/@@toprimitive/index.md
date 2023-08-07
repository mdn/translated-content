---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
l10n:
  sourceCommit: cf607d68522cd35ee7670782d3ee3a361eaef2e4
---

{{JSRef}}

El método **`[@@toPrimitive]()`** convierte un objeto Symbol en un valor primitivo.

## Sintaxis

```js
Symbol()[Symbol.toPrimitive](hint);
```

### Valor de retorno

El valor primitivo del objeto {{jsxref("Symbol")}} especificado.

## Descripción

El método `[@@toPrimitive]()` de {{jsxref("Symbol")}} devuelve el valor primitivo de un objeto Symbol como un tipo de datos Symbol. El argumento `hint` no se utiliza.

JavaScript llama al método `[@@toPrimitive]()` para convertir un objeto en un valor primitivo. Rara vez es necesario invocar el método `[@@toPrimitive]()`; JavaScript lo invoca automáticamente cuando encuentra un objeto del que se espera un valor primitivo.

## Ejemplos

### Uso de @@toPrimitive

```js
const sym = Symbol("ejemplo");
sym === sym[Symbol.toPrimitive](); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Symbol.toPrimitive")}}
